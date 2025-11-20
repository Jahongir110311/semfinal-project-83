export function mainKeyboard() {
  return {
    reply_markup: {
      keyboard: [
        [{ text: "📚 Kurslar" }],
        [{ text: "✍️ Ro‘yxatdan o‘tish" }],
        [{ text: "ℹ️ Markaz haqida" }],
      ],
      resize_keyboard: true,
    },
    parse_mode: "Markdown",
  };
}
