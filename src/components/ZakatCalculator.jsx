import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './ZakatCalculator.css';

const ZakatCalculator = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';

    const [assets, setAssets] = useState({
        cash: 0,
        gold: 0,
        silver: 0,
        stocks: 0,
        property: 0,
        business: 0,
        receivables: 0,
        crypto: 0
    });

    const [debts, setDebts] = useState(0);
    const [showResults, setShowResults] = useState(false);

    // Nisab values (approximate - should be updated with live prices)
    const nisabGold = 85; // grams of gold
    const goldPricePerGram = 2000; // EGP - should be API-driven
    const nisabValue = nisabGold * goldPricePerGram;

    const handleAssetChange = (field, value) => {
        setAssets(prev => ({
            ...prev,
            [field]: parseFloat(value) || 0
        }));
    };

    const calculateZakat = () => {
        const totalAssets = Object.values(assets).reduce((sum, val) => sum + val, 0);
        const netWealth = totalAssets - debts;

        if (netWealth >= nisabValue) {
            return (netWealth * 0.025).toFixed(2); // 2.5%
        }
        return 0;
    };

    const zakatAmount = calculateZakat();
    const totalAssets = Object.values(assets).reduce((sum, val) => sum + val, 0);
    const netWealth = totalAssets - debts;
    const aboveNisab = netWealth >= nisabValue;

    const assetFields = [
        { key: 'cash', labelAr: 'النقد والحسابات البنكية', labelEn: 'Cash & Bank Accounts', icon: '💰' },
        { key: 'gold', labelAr: 'قيمة الذهب', labelEn: 'Gold Value', icon: '🥇' },
        { key: 'silver', labelAr: 'قيمة الفضة', labelEn: 'Silver Value', icon: '🥈' },
        { key: 'stocks', labelAr: 'الأسهم والاستثمارات', labelEn: 'Stocks & Investments', icon: '📈' },
        { key: 'property', labelAr: 'العقارات للتجارة', labelEn: 'Property for Trade', icon: '🏠' },
        { key: 'business', labelAr: 'بضائع تجارية', labelEn: 'Business Goods', icon: '🏪' },
        { key: 'receivables', labelAr: 'ديون مستحقة لك', labelEn: 'Money Owed to You', icon: '📋' },
        { key: 'crypto', labelAr: 'العملات الرقمية', labelEn: 'Cryptocurrency', icon: '₿' },
    ];

    return (
        <div className="zakat-calculator">
            <div className="zakat-header">
                <h1>🧮 {language === 'ar' ? 'حاسبة الزكاة' : 'Zakat Calculator'}</h1>
                <p>{language === 'ar' ? 'طهر مالك وبارك فيه' : 'Purify and bless your wealth'}</p>
            </div>

            {/* Nisab Info */}
            <div className="nisab-info">
                <h3>📊 {language === 'ar' ? 'النصاب الحالي' : 'Current Nisab'}</h3>
                <p>
                    {language === 'ar'
                        ? `${nisabGold} جرام ذهب ≈ ${nisabValue.toLocaleString()} ج.م`
                        : `${nisabGold}g gold ≈ ${nisabValue.toLocaleString()} EGP`}
                </p>
                <small>
                    {language === 'ar'
                        ? '* يجب تحديث السعر حسب السوق'
                        : '* Price should be updated from market'}
                </small>
            </div>

            {/* Assets Section */}
            <div className="assets-section">
                <h3>💎 {language === 'ar' ? 'الأصول الزكوية' : 'Zakatable Assets'}</h3>
                <div className="assets-grid">
                    {assetFields.map(field => (
                        <div key={field.key} className="asset-input">
                            <label>
                                <span className="asset-icon">{field.icon}</span>
                                {language === 'ar' ? field.labelAr : field.labelEn}
                            </label>
                            <input
                                type="number"
                                value={assets[field.key] || ''}
                                onChange={(e) => handleAssetChange(field.key, e.target.value)}
                                placeholder="0"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Debts Section */}
            <div className="debts-section">
                <h3>📉 {language === 'ar' ? 'الديون المستحقة عليك' : 'Debts You Owe'}</h3>
                <input
                    type="number"
                    value={debts || ''}
                    onChange={(e) => setDebts(parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    className="debt-input"
                />
            </div>

            {/* Calculate Button */}
            <button className="btn-calculate" onClick={() => setShowResults(true)}>
                {language === 'ar' ? 'احسب الزكاة' : 'Calculate Zakat'}
            </button>

            {/* Results */}
            {showResults && (
                <div className="zakat-results">
                    <div className="result-row">
                        <span>{language === 'ar' ? 'إجمالي الأصول:' : 'Total Assets:'}</span>
                        <span>{totalAssets.toLocaleString()} {language === 'ar' ? 'ج.م' : 'EGP'}</span>
                    </div>
                    <div className="result-row">
                        <span>{language === 'ar' ? 'الديون:' : 'Debts:'}</span>
                        <span>- {debts.toLocaleString()} {language === 'ar' ? 'ج.م' : 'EGP'}</span>
                    </div>
                    <div className="result-row net-wealth">
                        <span>{language === 'ar' ? 'صافي الثروة:' : 'Net Wealth:'}</span>
                        <span>{netWealth.toLocaleString()} {language === 'ar' ? 'ج.م' : 'EGP'}</span>
                    </div>
                    <div className="result-row nisab-status">
                        <span>{language === 'ar' ? 'حالة النصاب:' : 'Nisab Status:'}</span>
                        <span className={aboveNisab ? 'above' : 'below'}>
                            {aboveNisab
                                ? (language === 'ar' ? '✅ فوق النصاب' : '✅ Above Nisab')
                                : (language === 'ar' ? '❌ تحت النصاب' : '❌ Below Nisab')}
                        </span>
                    </div>

                    {aboveNisab ? (
                        <div className="zakat-amount">
                            <h2>{language === 'ar' ? 'زكاتك المستحقة:' : 'Your Zakat Due:'}</h2>
                            <div className="amount-display">
                                {parseFloat(zakatAmount).toLocaleString()} {language === 'ar' ? 'ج.م' : 'EGP'}
                            </div>
                            <p className="amount-note">
                                2.5% × {netWealth.toLocaleString()}
                            </p>
                        </div>
                    ) : (
                        <div className="no-zakat">
                            <p>
                                {language === 'ar'
                                    ? 'لم تبلغ النصاب، لا زكاة واجبة عليك. لكن الصدقة باب الخير المفتوح دائماً!'
                                    : 'You haven\'t reached Nisab, no Zakat is due. But charity is always an open door to goodness!'}
                            </p>
                        </div>
                    )}

                    {/* Distribution Suggestions */}
                    {aboveNisab && (
                        <div className="distribution-section">
                            <h3>🎯 {language === 'ar' ? 'اقتراحات التوزيع' : 'Distribution Suggestions'}</h3>
                            <div className="distribution-grid">
                                <div className="dist-item">
                                    <span className="dist-icon">🏚️</span>
                                    <span>{language === 'ar' ? 'الفقراء والمساكين' : 'Poor & Needy'}</span>
                                </div>
                                <div className="dist-item">
                                    <span className="dist-icon">📚</span>
                                    <span>{language === 'ar' ? 'طلاب العلم' : 'Students'}</span>
                                </div>
                                <div className="dist-item">
                                    <span className="dist-icon">🏥</span>
                                    <span>{language === 'ar' ? 'المرضى' : 'Sick Patients'}</span>
                                </div>
                                <div className="dist-item">
                                    <span className="dist-icon">👨‍👩‍👧‍👦</span>
                                    <span>{language === 'ar' ? 'الأرامل والأيتام' : 'Widows & Orphans'}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Expert Note */}
            <div className="expert-note">
                <h4>💡 {language === 'ar' ? 'نصيحة الخبير' : 'Expert Tip'}</h4>
                <p>
                    {language === 'ar'
                        ? 'رمضان هو أفضل وقت لإخراج الزكاة لمضاعفة الأجر. لكن تذكر: الزكاة حق للفقير، ليست تفضلاً منك!'
                        : 'Ramadan is the best time to give Zakat for multiplied reward. But remember: Zakat is the right of the poor, not a favor from you!'}
                </p>
            </div>
        </div>
    );
};

export default ZakatCalculator;
