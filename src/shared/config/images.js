// ============================================================
// ВСЕ КАРТИНКИ ПРОЕКТА — меняются ТОЛЬКО ЗДЕСЬ
// ============================================================
//
// Сейчас используется picsum.photos — реальные фото (Unsplash),
// работают всегда, ничего не блокируется, стабильные через ?random=N
//
// КАК ЗАМЕНИТЬ НА СВОИ:
//   1. Скачай из Figma → положи в public/images/
//   2. Открой этот файл → замени строку:
//        prod1: img(10),
//      на:
//        prod1: '/images/products/sweatshirt.png',
//   3. Всё. Весь проект обновится.
//
// КАК ПОМЕНЯТЬ РАНДОМНУЮ КАРТИНКУ:
//   Меняешь число в img(N) → другая картинка.
//   img(1) и img(2) — разные фото. img(1) всегда одно и то же.
// ============================================================

const img = (seed, w = 400, h = 500) =>
  `https://picsum.photos/seed/euphoria-${seed}/${w}/${h}`;

export const IMAGES = {
  // Логотип
  logo: "/favicon.svg",

  // HERO слайды
  heroSummer: img(101, 600, 700),
  heroSpring: img(102, 600, 700),
  heroCozy: img(103, 600, 700),

  // Промо баннеры
  promoCozy: img(201, 300, 300),
  promoBreezy: img(202, 300, 300),

  // Категории Мужчины
  catMenShirts: img(301, 300, 300),
  catMenPrinted: img(302, 300, 300),
  catMenPlain: img(303, 300, 300),
  catMenPolo: img(304, 300, 300),
  catMenHoodies: img(305, 300, 300),
  catMenJeans: img(306, 300, 300),
  catMenActive: img(307, 300, 300),
  catMenBoxers: img(308, 300, 300),

  // Категории Женщины
  catWomenHoodies: img(401, 300, 300),
  catWomenCoats: img(402, 300, 300),
  catWomenTees: img(403, 300, 300),
  catWomenDresses: img(404, 300, 300),

  // Новинки
  naJoggers: img(351, 300, 300),
  naSleeve: img(352, 300, 300),
  naActive: img(353, 300, 300),
  naUrban: img(354, 300, 300),

  // Товары (16 шт)
  prod1: img(501),
  prod2: img(502),
  prod3: img(503),
  prod4: img(504),
  prod5: img(505),
  prod6: img(506),
  prod7: img(507),
  prod8: img(508),
  prod9: img(509),
  prod10: img(510),
  prod11: img(511),
  prod12: img(512),
  prod13: img(513),
  prod14: img(514),
  prod15: img(515),
  prod16: img(516),

  // Big Saving
  bsHawaiian: img(601, 400, 400),
  bsPrinted: img(602, 400, 400),
  bsCargo: img(603, 400, 400),
  bsUrban: img(604, 400, 400),
  bsOversized: img(605, 400, 400),

  // Отзывы
  avatarFloyd: img(701, 100, 100),
  avatarRonald: img(702, 100, 100),
  avatarSavannah: img(703, 100, 100),

  // Brand banner
  brandBg: img(801, 800, 600),
  brandRight: img(802, 800, 600),

  // Auth фоны
  loginBg: img(901, 900, 1200),
  signupBg: img(902, 900, 1200),
  resetBg: img(903, 900, 1200),
  checkBg: img(904, 900, 1200),
  verifyBg: img(905, 900, 1200),
  newPwdBg: img(906, 900, 1200),

  // 404
  notFound: img(1001, 200, 240),
};
