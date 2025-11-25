import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";


config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;

  if (text === "/start" || text === "🔥 Boshlash") {
    return onStart(bot, chatId, firstName);
  }

  if (text === "📚 Kurslar") {
    return onCourses(bot, chatId);
  }

  if (text === "ℹ️ Markaz haqida") {
    bot.sendMessage(chatId, "📍 Bizning joylashuv:");
    return bot.sendLocation(chatId, 41.3781989, 60.3694056);
  }

  if (text === "✍️ Ro‘yxatdan o‘tish") {
    return onRegister(bot, chatId);
  }

  if (text === "⬅️ Orqaga") {
    return onStart(bot, chatId, firstName);
  }
});

bot.on("callback_query", (query) => onCallback(bot, query));

console.log("🚀 Bot ishga tushdi!");