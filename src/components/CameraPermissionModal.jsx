import React, { useState, useEffect, useRef } from 'react';
import {
  Camera,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Video,
  RefreshCw,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { ComputerVisionGestureEngine } from '../utils/gestureDetector';
import { sound } from '../utils/audio';

export const CameraPermissionModal = ({ isOpen, onAccessGranted, onClose }) => {
  const [streamStatus, setStreamStatus] = useState('prompt'); // 'prompt' | 'requesting' | 'granted' | 'denied'
  const [errorMessage, setErrorMessage] = useState('');
  const [detectedGesture, setDetectedGesture] = useState('Position hand in frame...');
  const [isSimulated, setIsSimulated] = useState(false);
  const [troubleshootOpen, setTroubleshootOpen] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const cvEngineRef = useRef(null);

  // Stop camera when modal unmounts
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const stopCamera = () => {
    if (cvEngineRef.current) {
      cvEngineRef.current.stop();
      cvEngineRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const startVisionEngine = (stream) => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play().catch(() => {});
        // Initialize Computer Vision
        if (canvasRef.current) {
          canvasRef.current.width = videoRef.current.videoWidth || 320;
          canvasRef.current.height = videoRef.current.videoHeight || 240;

          cvEngineRef.current = new ComputerVisionGestureEngine(
            videoRef.current,
            canvasRef.current,
            (res) => {
              if (res.gesture === 'palm') setDetectedGesture('🖐️ OPEN PALM (ENERGY SHIELD READY)');
              else if (res.gesture === 'fist') setDetectedGesture('✊ CLOSED FIST (HEAVY STRIKE READY)');
              else if (res.gesture === 'point') setDetectedGesture('☝️ POINTING (AIM BEAM READY)');
              else if (res.gesture === 'forward') setDetectedGesture('🥊 FORWARD PUSH (COMBO STRIKE READY)');
              else if (res.gesture === 'both_hands' || res.gesture === 'vsign') setDetectedGesture('🙌 BOTH HANDS (ULTIMATE READY)');
              else if (res.gesture === 'swipe') setDetectedGesture('👈👉 SWIPE (WARP DODGE READY)');
            }
          );
          cvEngineRef.current.start();
        }
      };
    }
  };

  const requestCameraAccess = async () => {
    sound.playClick();
    setStreamStatus('requesting');
    setErrorMessage('');
    setTroubleshootOpen(false);

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Your browser does not support WebRTC Camera API. Try Google Chrome.');
      }

      // Request User Media with standard fallbacks
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user'
        },
        audio: false
      });

      streamRef.current = stream;
      setStreamStatus('granted');
      setIsSimulated(false);
      sound.playModal();

      // Give React DOM a tick to ensure elements are active
      setTimeout(() => {
        startVisionEngine(stream);
      }, 100);
    } catch (err) {
      console.warn('Camera access failure:', err);
      let userMsg = 'Camera permission was dismissed or blocked by browser.';
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        userMsg = 'Permission denied. Please click the Camera icon in your Chrome URL address bar to Allow.';
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        userMsg = 'No webcam hardware detected on this device.';
      } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
        userMsg = 'Webcam is currently in use by another app (Zoom, Teams, or another tab).';
      }
      setErrorMessage(userMsg);
      setStreamStatus('denied');
      setTroubleshootOpen(true);
    }
  };

  const handleSimulatedMode = () => {
    sound.playClick();
    stopCamera();
    setIsSimulated(true);
    setStreamStatus('granted');
    setDetectedGesture('VIRTUAL SENSOR ACTIVE');
  };

  const handleProceed = () => {
    sound.playClick();
    sound.playPortalWarp();
    if (onAccessGranted) {
      onAccessGranted({
        stream: streamRef.current,
        isSimulated: isSimulated
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="camera-modal-backdrop">
      <div className="rs-camera-modal-card">
        {/* Glowing Top Frame */}
        <div className="rs-camera-modal-glow-line"></div>

        {/* Header */}
        <div className="rs-camera-modal-header">
          <div className="rs-camera-badge">
            <Camera size={20} className="rs-camera-icon-glow" />
            <span className="rs-camera-badge-tag">COMPUTER VISION GESTURE ENGINE</span>
          </div>
          <h2 className="rs-camera-modal-title">CALIBRATE GESTURE SENSOR</h2>
          <p className="rs-camera-modal-subtitle">
            Allow camera access so the optical computer vision engine can track your hand combat moves in real-time.
          </p>
        </div>

        {/* Live Camera Viewport (Always in DOM so stream attaches reliably) */}
        <div className="rs-camera-preview-container">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`rs-camera-live-feed ${streamStatus === 'granted' && !isSimulated ? 'visible' : 'hidden'}`}
          />
          <canvas
            ref={canvasRef}
            className={`rs-camera-hud-canvas ${streamStatus === 'granted' && !isSimulated ? 'visible' : 'hidden'}`}
          />

          {/* Placeholder when not active */}
          {streamStatus !== 'granted' && (
            <div className="rs-camera-placeholder-box">
              <div className="rs-camera-radar-pulse"></div>
              <Video size={48} className="rs-cam-ph-icon" />
              <span className="rs-cam-ph-text">Webcam Optical Sensor Standby</span>
              <span className="rs-cam-ph-sub">Click the button below to allow camera access</span>
            </div>
          )}

          {/* Simulated Mode Viewport */}
          {isSimulated && (
            <div className="rs-camera-simulated-box">
              <ShieldCheck size={48} className="rs-sim-icon" />
              <span className="rs-sim-title">VIRTUAL GESTURE SENSOR READY</span>
              <p className="rs-sim-sub">Computer vision emulated via on-screen triggers & hotkeys.</p>
            </div>
          )}

          {/* Live Gesture Detected HUD Pill */}
          {streamStatus === 'granted' && (
            <div className="rs-camera-hud-tracking-pill">
              <span className="tracking-dot"></span>
              <span>{detectedGesture}</span>
            </div>
          )}
        </div>

        {/* Troubleshooting Alert if Denied */}
        {streamStatus === 'denied' && (
          <div className="rs-camera-error-banner">
            <AlertTriangle size={18} className="text-amber-400 flex-shrink-0" />
            <div className="rs-camera-error-text-block">
              <strong>Camera Access Notice:</strong> {errorMessage}
            </div>
          </div>
        )}

        {/* Helpful Browser Prompt Guide */}
        {streamStatus === 'requesting' && (
          <div className="rs-camera-help-banner">
            <Sparkles size={16} className="text-cyan-400 animate-spin" />
            <span>Look at your browser's address bar and click <strong>"Allow"</strong> when prompted.</span>
          </div>
        )}

        {/* Actions Footer */}
        <div className="rs-camera-modal-footer">
          {streamStatus === 'granted' ? (
            <div className="rs-camera-granted-actions">
              <div className="rs-camera-status-pill">
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span>VISION ENGINE ONLINE</span>
              </div>
              <button className="rs-btn-camera-proceed" onClick={handleProceed}>
                PROCEED TO BATTLE CONDITIONS »
              </button>
            </div>
          ) : (
            <div className="rs-camera-request-actions">
              <button
                className="rs-btn-camera-activate"
                onClick={requestCameraAccess}
                disabled={streamStatus === 'requesting'}
              >
                {streamStatus === 'requesting' ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" />
                    <span>WAITING FOR CAMERA PERMISSION...</span>
                  </>
                ) : (
                  <>
                    <Camera size={18} />
                    <span>ENABLE LAPTOP CAMERA NOW</span>
                  </>
                )}
              </button>

              <button className="rs-btn-camera-simulate" onClick={handleSimulatedMode}>
                CONTINUE WITH VIRTUAL GESTURE EMULATOR
              </button>
            </div>
          )}

          {/* Troubleshoot helper toggle */}
          {troubleshootOpen && (
            <div className="rs-camera-troubleshoot-tips">
              <span className="tip-title">Quick Fix Tips:</span>
              <p>1. Check if another browser tab or app (Zoom/Teams) is using the webcam.</p>
              <p>2. In Chrome, click the Lock/Camera icon next to <code>localhost:3000</code> in the address bar and switch Camera to "Allow".</p>
              <p>3. If using an external webcam, ensure it is firmly connected.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
