export function parseTelegramUserFromUrl() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const userRaw = urlParams.get("user");

    if (!userRaw) return null;

    // user — это JSON-строка, нужно распарсить
    return JSON.parse(decodeURIComponent(userRaw));
  } catch (err) {
    console.error("❌ Ошибка парсинга user из URL:", err);
    return null;
  }
}