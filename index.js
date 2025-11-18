const TelegramBot = require("node-telegram-bot-api");
const { config } = require("dotenv");
config();

const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

let usersData = [
  { chatId: 6953156991, firstName: "𝘙𝘌𝘓𝘓𝘐𝘟𝘚", admin: true },
  { chatId: 7196631754, firstName: "komi1ova_1104", admin: true },
  { chatId: 7665738687, firstName: "Ilyosbek", admin: true },
  { chatId: 7484667390, firstName: "_Makhliyo🎀", admin: true },
  { chatId: 7863501182, firstName: "Bilolbek", admin: true },
  { chatId: 7355171161, firstName: "Baxtiyorov Jahongir", admin: true },
  { chatId: 7853143555, firstName: "ㅤㅤㅤㅤㅤㅤ", admin: true },
  { chatId: 5952289464, firstName: "Farruxbekㅤ", admin: true },
  { chatId: 8468366787, firstName: "shkhnz_o7", admin: true },
  { chatId: 875072364, firstName: "Abbosbek", admin: true },
];

bot.on("message", (msg) => {
  // console.log(msg);
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;

  //   bot.sendMessage(chatId, text);

  if (text == "/start" || text == "Boshlash 🔥") {
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
  } else if (text == "📚 Kurslar" || text == "⬅️ Orqaga") {
    bot.sendMessage(
      chatId,
      `
    🎓 Bizning o‘quv markazimizda quyidagi kurslar mavjud:

1️⃣ Ingliz tili  
2️⃣ Rus tili  
3️⃣ Matematika  
4️⃣ Dasturlash (Python, Web)  
5️⃣ Grafik dizayn  

👇 Quyidagi kurslardan birini tanlang va batafsil ma’lumot oling:

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
  } else if (text == "ℹ️ Markaz haqida") {
    const latitude = 41.3781989;
    const longitude = 60.3694056;

    bot.sendMessage(chatId, "📍 Bizning o‘quv markaz joylashuvi:");
    bot.sendLocation(chatId, latitude, longitude);
  } else if (text == "✍️ Ro‘yxatdan o‘tish") {
    const userExists = usersData.some((user) => user.chatId === chatId);
    console.log("exists: ", userExists);
    if (!userExists) {
      usersData = [
        ...usersData,
        { chatId: chatId, firstName: firstName, admin: false },
      ];
    }

    console.log(usersData);
    bot.sendMessage(chatId, `Tabriklaymiz, siz ro'yhatdan o'tdingiz! ✅`);

    usersData.forEach((user) => {
      console.log(`user: ${user.firstName}`);
      if (user.admin == true) {
        bot.sendMessage(
          user.chatId,
          `Yangi xabar ✅\n-User: ${firstName}\n-chatId:${chatId}\n**********`
        );
      }
    });
  } else {
    bot.sendMessage(
      chatId,
      `
    ⚠️ Kechirasiz, men sizning xabaringizni tushunmadim.

Iltimos, quyidagi tugmani bosing 👇
/start
    `
    );
  }
});

bot.on("callback_query", (query) => {
  console.log(query);
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data == "course_english") {
    bot.sendMessage(
      chatId,
      `
    🇬🇧 Ingliz tili kursi haqida:

📆 Davomiyligi: 3 oy  
⏰ Darslar: Haftasiga 3 marta (1,5 soatdan)  
👨‍🏫 O‘qituvchi: Tajribali filologlar  
💰 Narxi: 350 000 so‘m / oy

✍️ Agar sizni bu kurs qiziqtirsa, “Ro‘yxatdan o‘tish” tugmasini bosing.

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
  } else if (data == "course_russian") {
    bot.sendMessage(chatId, `Russian`);
  }

  // bot.sendMessage(chatId, data);
});

console.log("Bot ishga tushdi...");