// Configuration des liens de téléchargement de l'application Yonwa
const SUPABASE_BASE = "https://wqotcsmbisxsjbybhhdn.supabase.co/storage/v1/object/public/releases";

export const APP_LINKS = {
  // APK 64-bit : compatible avec tous les téléphones récents (Snapdragon 800+, Exynos, etc.)
  ANDROID_APK_ARM64: `${SUPABASE_BASE}/app-release-arm64.apk`,

  // APK 32-bit : compatible avec les téléphones plus anciens
  ANDROID_APK_ARM32: `${SUPABASE_BASE}/app-release-arm32.apk`,

  // Lien TestFlight pour iOS (à remplacer par votre lien TestFlight une fois créé)
  TESTFLIGHT_IOS: "#testflight",
};
