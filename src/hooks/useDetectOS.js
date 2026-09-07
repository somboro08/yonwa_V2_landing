import { useState, useEffect } from 'react';
import { APP_LINKS } from '../config';

export function useDetectOS() {
  const [os, setOs] = useState('unknown'); // 'android', 'ios', 'unknown'

  useEffect(() => {
    const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      setOs('android');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setOs('ios');
    } else {
      // Pour les PC, on peut proposer Android par défaut ou laisser "unknown"
      setOs('unknown'); 
    }
  }, []);

  const getDownloadLink = () => {
    if (os === 'ios') return APP_LINKS.TESTFLIGHT_IOS;
    return APP_LINKS.ANDROID_APK; // Android par défaut pour PC et Android
  };

  const getDownloadLabel = () => {
    if (os === 'ios') return "Installer (TestFlight)";
    if (os === 'android') return "Télécharger l'app (APK)";
    return "Télécharger l'app";
  };

  return { os, getDownloadLink, getDownloadLabel };
}
