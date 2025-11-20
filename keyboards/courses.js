export function coursesInline() {
  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🇬🇧 Ingliz tili", callback_data: "course_english" }],
        [{ text: "🇷🇺 Rus tili", callback_data: "course_russian" }],
      ],
    },
  };
}
