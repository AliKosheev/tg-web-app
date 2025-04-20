export function parseTelegramUserFromUrl(): any {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userDataRaw = urlParams.get("tgWebAppData");
      if (!userDataRaw) return null;
  
      const userData = JSON.parse(decodeURIComponent(userDataRaw));
      return userData.user || null;
    } catch (e) {
      console.error("Ошибка при разборе пользователя из URL:", e);
      return null;
    }
  }
  