/**
 * ─────────────────────────────────────────────────────────────────────────────
 * LUMEN — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 * Studio name, galleries, pricing, and copy all live here. Edit this file and
 * the whole portfolio re-themes.
 *
 * Фотографии для портфолио собраны из бесплатной коллекции Pixabay и хранятся
 * локально в public/images/weddings, чтобы сайт загружался стабильно и быстро.
 */

export const siteConfig = {
  name: "Свет",
  photographer: "Анна Орлова",
  tagline: "Фотостудия",
  title: "Свет — свадебная и портретная фотография",
  description:
    "Свадебная и портретная фотография в естественном свете. Спокойная съёмка и готовая галерея в течение десяти дней.",
  url: "https://photoproject.example.com",

  contact: {
    email: "hello@svet.example.com",
    phone: "+7 900 000 00 00",
    phoneHref: "+79000000000",
    city: "Москва",
    country: "Россия",
  },

  social: {
    instagram: "https://instagram.com/",
    pinterest: "https://pinterest.com/",
  },

  hero: {
    eyebrow: "Москва · Съёмки по всему миру",
    headline: "Свет, эмоции и настоящие моменты без лишних поз.",
    sub: "Снимаю свадьбы, портреты и истории брендов для людей, которым важны живые эмоции. Спокойная съёмка, внимательное направление и фотографии, к которым хочется возвращаться.",
    primaryCta: "Обсудить съёмку",
    secondaryCta: "Смотреть работы",
  },

  /**
   * Galleries. Each becomes a filterable collection on the homepage and opens
   * in the lightbox.
   *
   * `shots` задаёт количество кадров, а Frame.tsx подбирает фотографии из
   * локальной свадебной коллекции.
   *
   * `ratio` controls the grid: "portrait" | "landscape" | "square".
   */
  galleries: [
    {
      slug: "weddings",
      name: "Свадьбы",
      blurb: "Полный день, живые эмоции и спокойная документальная съёмка.",
      shots: 9,
      ratios: ["portrait", "landscape", "square", "landscape", "portrait", "portrait", "landscape", "square", "portrait"],
    },
    {
      slug: "portraits",
      name: "Портреты",
      blurb: "Индивидуальные, парные и семейные съёмки — чаще всего на прогулке.",
      shots: 6,
      ratios: ["portrait", "square", "portrait", "landscape", "portrait", "square"],
    },
    {
      slug: "editorial",
      name: "Для брендов",
      blurb: "Съёмки для брендов, журналов и личных проектов в студии или на локации.",
      shots: 6,
      ratios: ["landscape", "portrait", "landscape", "square", "landscape", "portrait"],
    },
  ],

  about: {
    heading: "Я сняла больше 140 свадеб и до сих пор плачу на большинстве",
    body: [
      "Я взяла камеру в 2013 году, чтобы снять свадьбу друга. С тех пор фотография стала моей главной работой и способом замечать важное.",
      "Мой подход простой: приехать заранее, почувствовать свет и быть рядом, когда это нужно. Самые ценные кадры обычно рождаются между постановочными фотографиями.",
    ],
    stats: [
      { value: "140+", label: "Свадеб" },
      { value: "10 дней", label: "До готовой галереи" },
      { value: "2013", label: "Снимаю с" },
    ],
  },

  /**
   * Packages. Prices are strings so you can write "from €2,400" or "on request".
   */
  packages: [
    {
      name: "Портретная съёмка",
      price: "Цена по запросу",
      duration: "90 минут",
      features: [
        "Одна локация в Москве или рядом",
        "40+ обработанных фотографий",
        "Онлайн-галерея на 12 месяцев",
        "Разрешение на печать включено",
      ],
      featured: false,
    },
    {
      name: "Свадьба — полный день",
      price: "Цена по запросу",
      duration: "10 часов",
      features: [
        "От сборов до первого танца",
        "600+ обработанных фотографий",
        "Онлайн-галерея для выбора кадров",
        "Предсвадебная съёмка включена",
        "Разрешение на печать включено",
      ],
      featured: true,
    },
    {
      name: "Для бренда / редакции",
      price: "Цена по запросу",
      duration: "Полдня или полный день",
      features: [
        "Студия или съёмка на локации",
        "Лицензия для коммерческого использования",
        "Помощь с постановкой и идеей",
        "Срочная обработка по запросу",
      ],
      featured: false,
    },
  ],

  /** The booking process, set out plainly. */
  process: [
    ["Проверяем дату", "Напишите дату съёмки, и я отвечу в течение одного дня."],
    ["Знакомимся", "Встречаемся за кофе или созваниваемся, чтобы обсудить ваши идеи."],
    ["Снимаем", "Я приезжаю заранее, нахожу лучший свет и помогаю чувствовать себя свободно."],
    ["Получаете галерею", "Готовые фотографии будут в закрытой онлайн-галерее в течение десяти дней."],
  ],

  faqs: [
    {
      q: "Вы выезжаете на съёмки?",
      a: "Да. Выезды по России и за рубеж обсуждаются отдельно, без скрытых наценок.",
    },
    {
      q: "Когда будут готовы фотографии?",
      a: "Полная галерея готова в течение десяти дней. Небольшой превью-отчёт отправляю раньше.",
    },
    {
      q: "Вы отдаёте исходники?",
      a: "Нет. Вы получаете все лучшие кадры в полной авторской обработке и разрешение на печать.",
    },
    {
      q: "Что будет, если вы заболеете?",
      a: "На такой случай есть проверенная команда фотографов, которые смогут подстраховать съёмку.",
    },
  ],

  /** Client proofing page copy (app/proofing/page.tsx). */
  proofing: {
    heading: "Галереи клиентов",
    body: "Введите код галереи, который я отправила вам. Галерея доступна в течение двенадцати месяцев.",
    placeholder: "например, orlova-2026",
  },

} as const;

export type SiteConfig = typeof siteConfig;

/** schema.org data — helps you show up for "<city> wedding photographer". */
export function photographerSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.city,
      addressCountry: siteConfig.contact.country,
    },
    founder: { "@type": "Person", name: siteConfig.photographer },
    makesOffer: siteConfig.packages.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: `${p.name} — ${p.duration}`,
    })),
  };
}

/** FAQ structured data — eligible for rich results. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
