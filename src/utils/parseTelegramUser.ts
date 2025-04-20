export function parseTelegramUserFromUrl() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const username = urlParams.get("user");
  
      if (!username) return null;
  
      return { username };
    } catch (err) {
      console.error("❌ Ошибка парсинга user из URL:", err);
      return null;
    }
  }