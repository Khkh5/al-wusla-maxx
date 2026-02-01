import { useState, useRef } from 'react';
import { audioTracks } from '../data/islamicContent';
import './AudioPlayer.css';

const AudioPlayer = ({ language = 'ar' }) => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [filter, setFilter] = useState('all');
    const audioRef = useRef(null);

    const filteredTracks = filter === 'all'
        ? audioTracks
        : audioTracks.filter(t => t.type === filter);

    const playTrack = (track) => {
        if (currentTrack?.id === track.id && isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            setCurrentTrack(track);
            if (audioRef.current) {
                audioRef.current.src = track.file;
                audioRef.current.play().catch(e => console.error('Play error:', e));
                setIsPlaying(true);
            }
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration || 0);
        }
    };

    const handleSeek = (e) => {
        const time = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const formatTime = (time) => {
        if (!time || isNaN(time)) return '0:00';
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="audio-player-container">
            <h2>🎧 {language === 'ar' ? 'المكتبة الصوتية' : 'Audio Library'}</h2>

            {/* Filter Tabs */}
            <div className="audio-filter-tabs">
                <button
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => setFilter('all')}
                >
                    {language === 'ar' ? 'الكل' : 'All'}
                </button>
                <button
                    className={filter === 'quran' ? 'active' : ''}
                    onClick={() => setFilter('quran')}
                >
                    {language === 'ar' ? 'قرآن' : 'Quran'}
                </button>
                <button
                    className={filter === 'ibtihaal' ? 'active' : ''}
                    onClick={() => setFilter('ibtihaal')}
                >
                    {language === 'ar' ? 'ابتهالات' : 'Ibtihaalaat'}
                </button>
            </div>

            {/* Track List */}
            <div className="track-list">
                {filteredTracks.map((track) => (
                    <div
                        key={track.id}
                        className={`track-item ${currentTrack?.id === track.id ? 'active' : ''}`}
                        onClick={() => playTrack(track)}
                    >
                        <div className="track-play-btn">
                            {currentTrack?.id === track.id && isPlaying ? '⏸️' : '▶️'}
                        </div>
                        <div className="track-info">
                            <div className="track-title">{track.title}</div>
                            <div className="track-artist">{track.artist}</div>
                        </div>
                        <div className={`track-type ${track.type}`}>
                            {track.type === 'quran' ? '📖' : '🤲'}
                        </div>
                    </div>
                ))}
            </div>

            {/* Now Playing Bar */}
            {currentTrack && (
                <div className="now-playing-bar">
                    <div className="now-playing-info">
                        <span className="np-title">{currentTrack.title}</span>
                        <span className="np-artist">{currentTrack.artist}</span>
                    </div>
                    <div className="np-controls">
                        <span className="np-time">{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleSeek}
                            className="np-progress"
                        />
                        <span className="np-time">{formatTime(duration)}</span>
                    </div>
                </div>
            )}

            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
            />
        </div>
    );
};

export default AudioPlayer;
