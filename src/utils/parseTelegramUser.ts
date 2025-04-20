export function parseTelegramUserFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const userJson = params.get("user");
    if (userJson) {
      try {
        return JSON.parse(decodeURIComponent(userJson));
      } catch (e) {
        console.error("Ошибка парсинга user из URL:", e);
      }
    }
    return null;
  }