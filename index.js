const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7991261995:AAGm6kv9v3q9EHsOLa2K87cs3R6NgS7iLuw";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;

  if (text == "/start") {
    bot.sendMessage(
      chatId,
      `
👋 Assalomu alaykum, ${firstName}!

📚 100x o‘quv markazining rasmiy botiga xush kelibsiz!

Bu bot orqali siz:
• Kurslarimiz haqida batafsil ma’lumot olasiz  
• Kurslarga onlayn ro‘yxatdan o‘tishingiz mumkin  
• Jadval va to‘lovlar haqida ma’lumot olasiz  

Quyidagi menyudan kerakli bo‘limni tanlang 👇
      `,
      {
        reply_markup: {
          keyboard: [
            [{ text: "📚 Kurslar" }, { text: "✍️ Ro‘yxatdan o‘tish" }],
            [{ text: "ℹ️ Markaz haqida" }, { text: "💬 Fikr bildirish" }],
            [{ text: "❓ Yordam" }],
          ],
          resize_keyboard: true,
        },
      }
    );
  }

  else if (text == "📚 Kurslar") {
    bot.sendMessage(
      chatId,
      `
🎓 Bizning o‘quv markazimizda quyidagi kurslar mavjud:

1️⃣ Ingliz tili  
2️⃣ Rus tili  
3️⃣ Matematika  
4️⃣ Dasturlash (Python, Web)  
5️⃣ Grafik dizayn  

👇 Quyidagi kurslardan birini tanlang:
      `,
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "🇬🇧 Ingliz tili", callback_data: "course_english" }],
            [{ text: "🇷🇺 Rus tili", callback_data: "course_russian" }],
            [{ text: "🧮 Matematika", callback_data: "course_math" }],
            [{ text: "💻 Dasturlash", callback_data: "course_programming" }],
            [{ text: "🎨 Grafik dizayn", callback_data: "course_design" }],
          ],
        },
      }
    );
  }

else if (text === "✍️ Ro‘yxatdan o‘tish") {
  bot.sendMessage(
    chatId,
    `
✍️ Ro‘yxatdan o‘tish uchun quyidagi ma’lumotlarni yuboring:

• Ismingiz  
• Yosh  
• Qaysi kursga yozilmoqchisiz?  
• Telefon raqamingiz (+998 ***) 

    `
  );
}
 else if (text == "ℹ️ Markaz haqida") {
    bot.sendMessage(
      chatId,
      `
ℹ️ *100x o‘quv markazi haqida:*

📍 Manzil: Xorazm viloyati, Xiva shahri  
⏰ Ish vaqti: 09:00 – 20:00  
📞 Telefon: +998 20 003 15 45  

Biz zamonaviy o‘qitish tizimi bilan 4+ yillik tajribaga ega IT va Til markazimiz!
      `,
      { parse_mode: "Markdown" }
    );
  }

  else if (text == "💬 Fikr bildirish") {
    bot.sendMessage(
      chatId,
      "💬 Fikringizni yozib yuboring — biz uchun juda muhim!"
    );
  }

  else if (text == "❓ Yordam") {
    bot.sendMessage(
      chatId,
      `
❓ *Yordam bo‘limi*

Agar bot ishlamayotgan bo‘lsa yoki muammo bo‘lsa:

👉 Admin: @username
      `,
      { parse_mode: "Markdown" }
    );
  }

  else if (text == "/location") {
    const latitude = 41.3870256;
    const longitude = 60.3626525;

    bot.sendMessage(chatId, "📍 Bizning o‘quv markaz joylashuvi:");
    bot.sendLocation(chatId, latitude, longitude);
  }

  else {
    bot.sendMessage(
      chatId,
      `
⚠️ Kechirasiz, men sizning xabaringizni tushunmadim.

Kerakli bo‘limni tanlash uchun:
/start
      `
    );
  }
});

bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === "course_english") {
    bot.sendMessage(
      chatId,
      `
🇬🇧 *Ingliz tili kursi*

• Boshlang‘ich, Elementary, Pre-Intermediate, Intermediate darajalar  
• Haftasiga 3 marotaba dars  
• 1 oy – 280 000 so'm  
• Sertifikat beriladi  

Ro‘yxatdan o‘tish uchun: ✍️ Ro‘yxatdan o‘tish
      `,
      { parse_mode: "Markdown" }
    );
  }

  else if (data === "course_russian") {
    bot.sendMessage(
      chatId,
      `
🇷🇺 *Rus tili kursi*

• Grammatikadan tortib erkin suhbatgacha  
• Haftasiga 3 marotaba dars  
• 1 oy – 260 000 so'm  

Ro‘yxatdan o‘tish uchun: ✍️ Ro‘yxatdan o‘tish
      `,
      { parse_mode: "Markdown" }
    );
  }

  else if (data === "course_math") {
    bot.sendMessage(
      chatId,
      `
🧮 *Matematika kursi*

• Maktab o‘quvchilari uchun kuchli tizim  
• Olimpiada tayyorlov mavjud  
• 1 oy – 300 000 so'm  

Ro‘yxatdan o‘tish uchun: ✍️ Ro‘yxatdan o‘tish
      `,
      { parse_mode: "Markdown" }
    );
  }

  else if (data === "course_programming") {
    bot.sendMessage(
      chatId,
      `
💻 *Dasturlash kurslari*

• Python, Web (HTML, CSS, JS)  
• 0 dan IT mutaxassislikka yo‘naltiramiz  
• Amaliy loyihalar bilan o‘qitiladi  
• 1 oy – 350 000 so'm  

Ro‘yxatdan o‘tish uchun: ✍️ Ro‘yxatdan o‘tish
      `,
      { parse_mode: "Markdown" }
    );
  }

  else if (data === "course_design") {
    bot.sendMessage(
      chatId,
      `
🎨 *Grafik dizayn kursi*

• Photoshop, Illustrator, Figma  
• Amaliy portfolio yig‘ish  
• 1 oy – 330 000 so'm  

Ro‘yxatdan o‘tish uchun: ✍️ Ro‘yxatdan o‘tish
      `,
      { parse_mode: "Markdown" }
    );
  }

  bot.answerCallbackQuery(query.id);
});


console.log("Bot ishga tushdi...");
