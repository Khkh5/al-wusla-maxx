import { systemOpponents } from '../data/systemCompetitionData';
import './SystemOpponentSelector.css';

const SystemOpponentSelector = ({ onSelect, onClose, lang }) => {
    return (
        <div className="system-selector-overlay" onClick={onClose}>
            <div className="system-selector-modal" onClick={e => e.stopPropagation()}>
                <div className="selector-header">
                    <h2>{lang === 'ar' ? 'اختر خصمك' : 'Choose Your Opponent'}</h2>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <div className="opponents-grid">
                    {systemOpponents.map(opponent => (
                        <div
                            key={opponent.id}
                            className={`opponent-card ${opponent.difficulty}`}
                            onClick={() => onSelect(opponent)}
                        >
                            <div className="opponent-avatar">{opponent.avatar}</div>
                            <div className="opponent-info">
                                <h3>{lang === 'ar' ? opponent.name.ar : opponent.name.en}</h3>
                                <span className="opponent-title">
                                    {lang === 'ar' ? opponent.title.ar : opponent.title.en}
                                </span>
                                <p className="opponent-bio">
                                    {lang === 'ar' ? opponent.bio.ar : opponent.bio.en}
                                </p>
                            </div>
                            <div className="opponent-stats">
                                <span className="difficulty-badge">{opponent.difficulty}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SystemOpponentSelector;
