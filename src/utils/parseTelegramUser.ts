export function parseTelegramUserFromUrl() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userParam = urlParams.get("user");
  
      if (!userParam) return null;
  
      // 👇 Просто возвращаем username, без JSON.parse
      return { username: userParam };
    } catch (err) {
      console.error("❌ Ошибка парсинга user из URL:", err);
      return null;
    }
  }