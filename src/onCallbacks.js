export function onCallback(bot, query) {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === "course_english") {
    return bot.sendMessage(
      chatId,
      `
🇬🇧 *Ingliz tili kursi*

📆 Davomiylik: 3 oy  
⏰ Haftasiga: 3 marta  
👨‍🏫 O‘qituvchilar: Tajribali  
💰 Narxi: *350 000 so‘m / oy*

✍️ Ro‘yxatdan o‘tish uchun pastdagi tugmani bosing.
    `,
      {
        reply_markup: {
          keyboard: [
            [{ text: "✍️ Ro‘yxatdan o‘tish" }],
            [{ text: "⬅️ Orqaga" }],
          ],
          resize_keyboard: true,
        },
      }
    );
  }

  if (data === "course_russian") {
    bot.sendMessage(chatId, "🇷🇺 Rus tili kursi: ma’lumot tez orada.");
  }
}
