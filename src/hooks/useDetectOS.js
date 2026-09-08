import { useState, useEffect } from 'react';
import { APP_LINKS } from '../config';

export function useDetectOS() {
  const [os, setOs] = useState('unknown');
  const [arch, setArch] = useState('arm64'); // On part sur arm64 par défaut

  useEffect(() => {
    const ua = window.navigator.userAgent || '';

    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      setOs('ios');
    } else if (/android/i.test(ua)) {
      setOs('android');
      // Détection de l'architecture via les hints du navigateur (API moderne)
      if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
        navigator.userAgentData.getHighEntropyValues(['architecture', 'bitness'])
          .then(hints => {
            // arm = 32-bit, aarch64 / arm64 = 64-bit
            if (hints.architecture === 'arm' && hints.bitness === '32') {
              setArch('arm32');
            } else {
              setArch('arm64');
            }
          })
          .catch(() => setArch('arm64')); // Par défaut arm64 si erreur
      }
    } else {
      setOs('desktop');
    }
  }, []);

  const getDownloadLink = () => {
    if (os === 'ios') return APP_LINKS.TESTFLIGHT_IOS;
    if (os === 'android' && arch === 'arm32') return APP_LINKS.ANDROID_APK_ARM32;
    return APP_LINKS.ANDROID_APK_ARM64; // Par défaut (arm64 ou desktop)
  };

  const getDownloadLabel = () => {
    if (os === 'ios') return "Installer (TestFlight)";
    if (os === 'android') return "Télécharger l'app (APK)";
    return "Télécharger l'app";
  };

  return { os, arch, getDownloadLink, getDownloadLabel };
}
