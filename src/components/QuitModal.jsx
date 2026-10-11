import React from 'react';
import { Power, AlertTriangle, X } from 'lucide-react';
import { sound } from '../utils/audio';

export const QuitModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="rs-modal-overlay" onClick={onClose}>
      <div className="rs-modal-container compact" onClick={(e) => e.stopPropagation()}>
        <div className="rs-modal-header danger">
          <div className="rs-modal-title-box">
            <Power size={20} className="rs-danger-icon" />
            <h3 className="rs-modal-title">EXIT ARENA?</h3>
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
          <div className="rs-danger-box">
            <AlertTriangle size={32} className="rs-danger-warn-icon" />
            <p>
              Are you sure you want to disconnect from <strong>Reality Shift: Gesture Arena</strong>? Your battle state and gesture telemetry will be saved.
            </p>
          </div>
        </div>

        <div className="rs-modal-footer">
          <button
            className="rs-btn-cancel"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
          >
            CANCEL
          </button>
          <button
            className="rs-btn-danger"
            onClick={() => {
              sound.playClick();
              onConfirm();
            }}
          >
            DISCONNECT
          </button>
        </div>
      </div>
    </div>
  );
};
