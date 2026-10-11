import React, { useState } from 'react';
import { X, Settings, Volume2, VolumeX, Camera, Sliders, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export const SettingsModal = ({ isOpen, onClose, isMuted, onToggleMute }) => {
  if (!isOpen) return null;

  const [sensitivity, setSensitivity] = useState(8);
  const [graphics, setGraphics] = useState('ultra');
  const [bloom, setBloom] = useState(true);

  return (
    <div className="rs-modal-overlay" onClick={onClose}>
      <div className="rs-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="rs-modal-header">
          <div className="rs-modal-title-box">
            <Settings size={20} className="rs-modal-title-icon" />
            <h3 className="rs-modal-title">SYSTEM SETTINGS</h3>
          </div>
          <button
            className="rs-modal-close"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div className="rs-modal-body">
          {/* Audio Section */}
          <div className="rs-setting-group">
            <div className="rs-group-title">
              <Volume2 size={16} /> AUDIO & CYBER SFX
            </div>
            <div className="rs-setting-item">
              <span>Synthesizer Sound Effects</span>
              <button
                className={`rs-toggle-btn ${!isMuted ? 'active' : ''}`}
                onClick={onToggleMute}
              >
                {!isMuted ? (
                  <>
                    <Volume2 size={15} /> ENABLED
                  </>
                ) : (
                  <>
                    <VolumeX size={15} /> MUTED
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Vision Tracking Section */}
          <div className="rs-setting-group">
            <div className="rs-group-title">
              <Camera size={16} /> WEBCAM & VISION AI
            </div>
            <div className="rs-setting-item">
              <span>Webcam Resolution</span>
              <select className="rs-select-box" defaultValue="1080p">
                <option value="720p">720p HD (High Performance)</option>
                <option value="1080p">1080p Full HD (Recommended)</option>
                <option value="4k">4K Ultra (Studio)</option>
              </select>
            </div>
            <div className="rs-setting-item">
              <span>Hand Tracking Sensitivity: {sensitivity}/10</span>
              <input
                type="range"
                min="1"
                max="10"
                value={sensitivity}
                onChange={(e) => setSensitivity(Number(e.target.value))}
                className="rs-slider"
              />
            </div>
          </div>

          {/* Visuals Section */}
          <div className="rs-setting-group">
            <div className="rs-group-title">
              <Sparkles size={16} /> HOLOGRAPHIC GRAPHICS
            </div>
            <div className="rs-setting-item">
              <span>Visual Preset</span>
              <div className="rs-btn-pills">
                {['low', 'high', 'ultra'].map((lvl) => (
                  <button
                    key={lvl}
                    className={`rs-pill ${graphics === lvl ? 'selected' : ''}`}
                    onClick={() => {
                      sound.playClick();
                      setGraphics(lvl);
                    }}
                  >
                    {lvl.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className="rs-setting-item">
              <span>Neon Bloom & Energy Glow</span>
              <input
                type="checkbox"
                checked={bloom}
                onChange={(e) => setBloom(e.target.checked)}
                className="rs-checkbox"
              />
            </div>
          </div>
        </div>

        <div className="rs-modal-footer">
          <button
            className="rs-btn-confirm"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
          >
            SAVE PREFERENCES
          </button>
        </div>
      </div>
    </div>
  );
};
