import { coursesInline } from "../keyboards/courses.js";

export function onCourses(bot, chatId) {
  bot.sendMessage(chatId, "📚 Kurslardan birini tanlang:", coursesInline());
}
