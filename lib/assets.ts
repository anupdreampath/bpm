// Stock template CDN assets — replace with your own when branding.
export const CDN = {
  heroVideo:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb%2F671697013cd04f7934cf8eac_product%20%281%29-transcode.mp4",
  heroVideoWebm:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb%2F671697013cd04f7934cf8eac_product%20%281%29-transcode.webm",
  heroImage:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea27c_hero.avif",
  heroImageAlt:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea26c_hero_img.avif",
  pitchInline:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea283_05.08.22_HEAVN_2495%201.avif",
  day1:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea277_05.08.22_HEAVN_0156.avif",
  day2:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea284_05.08.22_HEAVN_0414.avif",
  day3:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea23c_05.08.22_HEAVN_2595-transformed.webp",
  day4:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea240_05.08.22_HEAVN_2364-transformed.webp",
  day5:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea288_05.08.22_HEAVN_0712%201.avif",
  productIso:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea28d_05.08.22_HEAVN_0194.avif",
  productControls:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea28b_05.08.22_HEAVN_0535.avif",
  productRoom:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea28e_05.08.22_HEAVN_0880%201.avif",
  phoneCharge:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea280_Screenshot%202024-10-17%20at%2017.13.51%201.avif",
  testimonialBg:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea27b_thelen.avif",
  finalCtaBg:
    "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/671791792241fce77a3dd5f4_05.08.22_HEAVN_0170.avif",
};

// day cycle copy — placeholder brand strings to be replaced later.
export const DAY_SLIDES: Array<{
  time: string;
  mode: "light" | "warm" | "dark";
  title: string;
  body: string;
  image: string;
}> = [
  {
    time: "08:00",
    mode: "light",
    title: "Morning energy boost.",
    body: "A full-spectrum daylight wake-up call. Reactivate your body for a focused, wakeful start to the day.",
    image: CDN.day1,
  },
  {
    time: "10:00",
    mode: "light",
    title: "Full light. Full focus.",
    body: "Downward illumination gives wide-area, shadow-free coverage for effortless work with documents or on-screen.",
    image: CDN.day2,
  },
  {
    time: "13:00",
    mode: "light",
    title: "Balanced midday light.",
    body: "Cool, natural tones keep concentration sharp through the middle of the working day.",
    image: CDN.day3,
  },
  {
    time: "16:00",
    mode: "warm",
    title: "Sets the scene perfectly.",
    body: "The switchable frontal light acts like a soft box — a natural, flattering brightness for calls and conferences.",
    image: CDN.day4,
  },
  {
    time: "19:00",
    mode: "warm",
    title: "Outside dark. Inside warm.",
    body: "Indirect light creates an atmospheric ambience and removes the cave feeling of a typical desk lamp.",
    image: CDN.day5,
  },
  {
    time: "23:00",
    mode: "dark",
    title: "Healthy sleep. Ideal regeneration.",
    body: "The light becomes warmer, stimulating natural melatonin production for a healthier, deeper sleep.",
    image: CDN.day5,
  },
];
