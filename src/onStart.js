import { mainKeyboard } from "../keyboards/main.js";

export function onStart(bot, chatId, firstName) {
  bot.sendMessage(
    chatId,
    `Assalomu alaykum, ${firstName}! 👋

🎉 *Welcom to Our Learning Center!*

Quyidagi bo‘limlardan birini tanlang:
    `,
    mainKeyboard()
  );
}
