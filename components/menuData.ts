import type { Language } from "./LanguageContext";

const imageFiles = [
  "", ""
];

function normalizeName(name: string): string {
  return name.replace(/[^a-zA-Z0-9\s\u0600-\u06FF]/g, '').replace(/\s+/g, '_').toLowerCase();
}

function getImagePath(nameEn: string, nameAr: string): string {
  const normalizedNameEn = normalizeName(nameEn);
  const normalizedNameAr = normalizeName(nameAr);

  for (const file of imageFiles) {
    const fileNameWithoutExtension = file.split('.').slice(0, -1).join('.');
    const normalizedFile = normalizeName(fileNameWithoutExtension);

    if (normalizedFile === normalizedNameEn) {
      return `/images/${file}`;
    }
    if (normalizedFile === normalizedNameAr) {
      return `/images/${file}`;
    }

    // Attempt to match parts of the name (English or Arabic) with parts of the file name
    if (normalizedNameEn.split('_').some(part => part.length > 2 && normalizedFile.includes(part))) {
        return `/images/${file}`;
    }
    if (normalizedNameAr.split('_').some(part => part.length > 2 && normalizedFile.includes(part))) {
        return `/images/${file}`;
    }
  }
  return "/talinda.png"; // Default image if no match is found
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: { src: string; alt: string };
}

export interface MenuCategory {
  id: number;
  name: string;
  items: MenuItem[];
}

const img = (alt: string, nameEn: string, nameAr: string) => ({ src: getImagePath(nameEn, nameAr), alt });

function item(id: number, nameEn: string, nameAr: string, price: string, descEn = "", descAr = ""): { en: MenuItem; ar: MenuItem } {
  return {
    en: { id, name: nameEn, description: descEn, price, image: img(nameEn, nameEn, nameAr) },
    ar: { id, name: nameAr, description: descAr, price, image: img(nameAr, nameEn, nameAr) },
  };
}

// Build items: item(globalId, nameEn, nameAr, price, descEn?, descAr?)
let id = 0;
const nextId = () => ++id;

const mainCourses = [
  item(nextId(), "Mix Grill", "ميكس جريل", "450 LE", "2 Kebabs, 2 Kofta, 2  Shish ", "كباب 2 - كفتة 2 - 2 شيش"),
  item(nextId(), "Mini Mix Grill", "ميني ميكس جريل ", "350 LE", "3 Kebabs, 3 Kofta ", "باب 3 - كفتة 3"),
  item(nextId(), "mix grill special", "ميكس جريل خصص", "500 LE", " 1/4 roasted chicken , 2 Kofta , 2 Shish , kabida ", "ربع فرخة مشوية - 2 كفتة - 2 كباب - كبدة "),
  item(nextId(), "grilled chichen ", "فرخة مشوية", "300 LE", "1/2 chichen ", "نص فرخة مشوية"),
  item(nextId(), "grilled kofta ", "كفتة مشوية", "270 LE", " 4 Kofta ", "4 كفتة"),
  item(nextId(), "chichen panee ", "فراخ بنية", "270 LE", "Panee piece 2 ", "قطعة بانية 2"),
];



















const hotDrinks = [
  item(nextId(), "Tea", "شاي", "25 LE"),
  item(nextId(), "Green Tea", "شاي اخضر", "30 LE"),
  item(nextId(), "Herbal Tea", "اعشاب", "30 LE", "Mint, Anise, Hibiscus", "نعناع - ينسون - كركدية"),
  item(nextId(), "Herbal Cocktail", "كوكتيل اعشاب", "40 LE"),
  item(nextId(), "Hot Cider", "هوت سيدر", "45 LE"),
  item(nextId(), "Hot Chocolate", "هوت شوكليت", "70 LE"),
  item(nextId(), "Salep", "سحلب", "45 LE"),
  item(nextId(), "Salep with Nuts", "سحلب مكسرات", "65 LE"),
  item(nextId(), "Salep with Fruits", "سحلب فواكة", "65 LE"),
  item(nextId(), "Nescafé", "نسكافية", "60 LE"),
];

const softDrinks = [
  item(nextId(), "Soda", "صودا", "35 LE", "Pepsi, Mirinda, 7Up", "بيبسي - ميرندا - سفن"),
  item(nextId(), "Fayrouz", "فيروز", "40 LE"),
  item(nextId(), "Bottle Water", "بريل", "40 LE"),
  item(nextId(), "Schweppes", "شويبس", "40 LE"),
  item(nextId(), "Red Bull", "ريد بول", "70 LE", "Coconut, Blueberry, Peach", "جوز هند - بلوبيري - خوخ"),
  item(nextId(), "Mojito", "موخيتو", "55 LE", "Sprite, Mint, Lemon", "سبرايت - نعناع - لمون"),
  item(nextId(), "Pineapple Mojito", "موخيتو اناناس", "60 LE"),
  item(nextId(), "Passion Mojito", "موخيتو باشون", "60 LE"),
  item(nextId(), "Sunshine", "صن شاين", "55 LE"),
  item(nextId(), "Blue Crush", "بلو كرواسو", "75 LE"),
  item(nextId(), "Small Water", "مياة صغيرة", "15 LE"),
  item(nextId(), "Large Water", "مياة كبيرة", "20 LE"),
];

const coffee = [
  item(nextId(), "Turkish Coffee", "قهوة تركي", "40 - 50 LE"),
  item(nextId(), "French Coffee", "قهوة فرنساوي", "55 LE"),
  item(nextId(), "Espresso", "اسبريسو", "50 - 65 LE"),
  item(nextId(), "Macchiato", "ميكاتو", "40 - 50 LE"),
  item(nextId(), "Cortado", "كورتادو", "70 LE", "Double espresso, Milk, Foam", "دبل اسبريسو - لبن - فوم"),
  item(nextId(), "Flat White", "فلات وايت", "65 LE"),
  item(nextId(), "Cappuccino", "كابتشينو", "55 LE"),
  item(nextId(), "Latte", "لاتية", "55 LE"),
  item(nextId(), "Mocha", "موكا", "65 LE"),
  item(nextId(), "Hazelnut Coffee", "قهوة بندق", "65 LE"),
];

const freshJuice = [
  item(nextId(), "Mango", "مانجا", "70 LE"),
  item(nextId(), "Strawberry", "فراولة", "60 LE"),
  item(nextId(), "Orange", "برتقال", "60 LE"),
  item(nextId(), "Guava", "جوافة", "60 LE"),
  item(nextId(), "Kiwi", "كيوي", "70 LE"),
  item(nextId(), "Watermelon", "بطيخ", "55 LE"),
  item(nextId(), "Lemon Mint", "لمون نعناع", "50 LE"),
  item(nextId(), "Cocktail Juice", "كوكتيل", "80 LE", "Mango, Guava, Strawberry", "مانجا - جوافة - فراولة"),
  item(nextId(), "Mango Passion", "مانجا باشون", "80 LE"),
  item(nextId(), "Guava Mint", "جوافة نعناع", "70 LE"),
  item(nextId(), "Orange Lemon", "برتقال بالليمون", "70 LE"),
  item(nextId(), "Mango Kiwi", "مانجا كيوي", "85 LE"),
  item(nextId(), "Mango Peach", "مانجا خوخ", "85 LE"),
  item(nextId(), "Pineapple with Milk", "اناناس باللبن", "85 LE"),
  item(nextId(), "Piña Colada", "بنا كولادا", "75 LE", "Coconut, Pineapple, Milk", "جوز هند - اناناس - لبن"),
  item(nextId(), "Banana with Milk", "موز باللبن", "65 LE"),
  item(nextId(), "Guava with Milk", "جوافة باللبن", "70 LE"),
  item(nextId(), "Mango Passion Peach", "مانجو باشون خوخ", "95 LE"),
];

const smoothie = [
  item(nextId(), "Mango Smoothie", "سموزي مانجا", "80 LE"),
  item(nextId(), "Strawberry Smoothie", "سموزي فراولة", "70 LE"),
  item(nextId(), "Orange Smoothie", "سموزي برتقال", "70 LE"),
  item(nextId(), "Blueberry Smoothie", "سموزي توت ازرق", "70 LE"),
  item(nextId(), "Mixed Berry Smoothie", "سموزي ميكس توت", "80 LE"),
  item(nextId(), "Lemon Mint Smoothie", "سموزي ليمون نعناع", "60 LE"),
  item(nextId(), "Kiwi Smoothie", "سموزي كيوي", "70 LE"),
  item(nextId(), "Pineapple Smoothie", "سموزي اناناس", "70 LE"),
  item(nextId(), "Mango Passion Smoothie", "سموزي مانجا باشون", "80 LE"),
  item(nextId(), "Talinda Smoothie", "تاليندا", "85 LE", "Pineapple, Coconut, Milk", "اناناس - جوز هند - لبن"),
];

const milkShake = [
  item(nextId(), "Mars Milk Shake", "ميلك شيك مارس", "80 LE"),
  item(nextId(), "Kit Kat Milk Shake", "ميلك شيك كيت كات", "90 LE"),
  item(nextId(), "Oreo Milk Shake", "ميلك شيك اوريو", "85 LE"),
  item(nextId(), "Lotus Milk Shake", "ميلك شيك لوتس", "95 LE"),
  item(nextId(), "Snickers Milk Shake", "ميلك شيك اسنكيرس", "95 LE"),
  item(nextId(), "Strawberry Milk Shake", "ميلك شيك فراولة", "85 LE"),
  item(nextId(), "Mango Milk Shake", "ميلك شيك مانجا", "90 LE"),
  item(nextId(), "Chocolate Milk Shake", "ميلك شيك شوكولاتة", "85 LE"),
  item(nextId(), "Vanilla Milk Shake", "ميلك شيك فانيليا", "85 LE"),
];

const frappe = [
  item(nextId(), "Vanilla Frappe", "فرابية فانيليا", "70 LE"),
  item(nextId(), "Chocolate Frappe", "فرابية شوكولاتة", "80 LE"),
  item(nextId(), "Lotus Frappe", "فرابية لوتس", "80 LE"),
  item(nextId(), "Caramel Frappe", "فرابية كراميل", "75 LE"),
  item(nextId(), "Iced Latte", "ايس لاتيه", "70 LE"),
  item(nextId(), "Iced Chocolate", "ايس شوكلت", "80 LE"),
  item(nextId(), "Ice Cream", "ايس كريم", "60 LE"),
];

const sweet = [
  item(nextId(), "Fruit Salad", "فروت سالط", "75 LE"),
  item(nextId(), "Large Fruit Plate", "طبق فواكة كبير", "100 LE"),
  item(nextId(), "Om Ali", "ام علي", "60 LE"),
  item(nextId(), "Cheesecake", "تشيز كيك", "70 LE"),
  item(nextId(), "Molten Cake", "مولتن كيك", "75 LE"),
  item(nextId(), "Crème Caramel", "كريم كراميل", "50 LE"),
  item(nextId(), "Sweet Mix", "حلو مشكل", "60 - 100 LE"),
  item(nextId(), "Knafa Mango Nutella", "كنافة مانجو نوتيلا", "60 LE"),
  item(nextId(), "Knafa Lotus Pistachio", "كنافة لوتس بيساتشيو", "60 LE"),
];

const adds = [
  item(nextId(), "Milk (Add)", "لبن", "20 LE"),
  item(nextId(), "Nuts (Add)", "مكسرات", "25 LE"),
  item(nextId(), "Sauce (Add)", "صوص", "15 LE"),
  item(nextId(), "Fruit (Add)", "فواكة", "20 LE"),
  item(nextId(), "Ice Cream (Add)", "ايس كريم", "25 LE"),
];

const shisha = [
  item(nextId(), "Molasses", "معسل", "35 LE"),
  item(nextId(), "Special Shisha", "شيشة اسبشيال", "135 LE"),
  item(nextId(), "Hot Tea", "لي طبي", "15 LE"),
  item(nextId(), "Iced Tea", "لي ايس", "25 LE"),
];

function toCategory(id: number, nameEn: string, nameAr: string, items: { en: MenuItem; ar: MenuItem }[]): { en: MenuCategory; ar: MenuCategory } {
  return {
    en: { id, name: nameEn, items: items.map((i) => i.en) },
    ar: { id, name: nameAr, items: items.map((i) => i.ar) },
  };
}

const categoriesEn: MenuCategory[] = [];
const categoriesAr: MenuCategory[] = [];

[
  toCategory(1, "Main Courses", "الأطباق الرئيسية", mainCourses),









  toCategory(11, "Hot Drinks", "مشروبات ساخنة", hotDrinks),
  toCategory(12, "Soft Drinks", "مشروبات غازية", softDrinks),
  toCategory(13, "Coffee", "قهوة", coffee),
  toCategory(14, "Fresh Juice", "عصائر طازجة", freshJuice),
  toCategory(15, "Smoothie", "سموزي", smoothie),
  toCategory(16, "Milk Shake", "ميلك شيك", milkShake),
  toCategory(17, "Frappe", "فرابيه", frappe),
  toCategory(18, "Sweet", "حلويات", sweet),
  toCategory(19, "Adds", "اضافات", adds),
  toCategory(20, "Shisha", "شيشة", shisha),
].forEach((c) => {
  categoriesEn.push(c.en);
  categoriesAr.push(c.ar);
});

export const menuData: Record<Language, MenuCategory[]> = {
  en: categoriesEn,
  ar: categoriesAr,
};
