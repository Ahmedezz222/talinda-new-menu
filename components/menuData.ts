import type { Language } from "./LanguageContext";

const imageFiles = [
  "Alfredo.png",
  "Baba Ghanoush.png",
  "Bamia With Meat.png",
  "Bolognese.png",
  "Chicken Cordon Bleu.png",
  "Chicken Panne.png",
  "Chicken White Sauce.png",
  "Coleslaw Salad.png",
  "Cream Of Chicken Soup.png",
  "Cream Of Mushroom Soup.png",
  "Escalope Panne.png",
  "Fatah Moza.png",
  "Family Mix.png",
  "Green Salad.png",
  "Grilled Chicken.png",
  "Hamam Mahshi.png",
  "Kabab And Kofta.png",
  "Lama Mix.png",
  "Lentil Soup.png",
  "Mixed Rice.png",
  "Mombar.png",
  "Moussaka.png",
  "Moussaka With Meat.png",
  "Mix Grill Special.png",
  "Mix Grill.png",
  "Mix Of Friends.png",
  "Mix Of Lovers.png",
  "Mix Ramadan.png",
  "Mix The Mix.png",
  "Mushroom Picata.jpg",
  "Nigresco.png",
  "Orzo Soup.png",
  "Oven Pasta.png",
  "Sambosk Cheese.png",
  "Sambosk Meat.png",
  "Sayadieh Rice.png",
  "Tahina.png",
  "Tomea.png",
  "Turli With Meat.png",
  "Vegetable Soup.png",
  "Warq Enab.png",
  "White Rice.png",
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

    // Only match when item name contains the full file name (avoids "Mix Grill" matching "Mix Grill Special.png")
    if (normalizedNameEn.length >= normalizedFile.length && normalizedNameEn.includes(normalizedFile)) {
      return `/images/${file}`;
    }
    if (normalizedNameAr.length >= normalizedFile.length && normalizedNameAr.includes(normalizedFile)) {
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
  const trimmed = price.trim();
  const displayPrice = trimmed ? (trimmed.includes("LE") ? trimmed : `${trimmed} LE`) : "";
  return {
    en: { id, name: nameEn, description: descEn, price: displayPrice, image: img(nameEn, nameEn, nameAr) },
    ar: { id, name: nameAr, description: descAr, price: displayPrice, image: img(nameAr, nameEn, nameAr) },
  };
}

// Build items: item(globalId, nameEn, nameAr, price, descEn?, descAr?)
let id = 0;
const nextId = () => ++id;

function toCategory(id: number, nameEn: string, nameAr: string, items: { en: MenuItem; ar: MenuItem }[]): { en: MenuCategory; ar: MenuCategory } {
  return {
    en: { id, name: nameEn, items: items.map((i) => i.en) },
    ar: { id, name: nameAr, items: items.map((i) => i.ar) },
  };
}

const categoriesEn: MenuCategory[] = [];
const categoriesAr: MenuCategory[] = [];

const allCategories = [
  // Main Course
  toCategory(nextId(), "Main Course", "وجبة أساسية", [
    item(
      nextId(),
      "Mix Grill Special",
      "میکس جريل أسبشيال",
      "700",
      "Quarter boneless chicken - 2 Kofta - 2 Kabab - Veal chop. All main dishes are served with rice - potatoes - sautéed vegetables - Ramadan drink of your choice - small water",
      "فراخ بدون عظم - 2 كفتة - 2 كباب - كشمير صويا. تقدم جميع الاطباق الرئيسية مع أرز - بطاطس - خضار سوتية - مشروب رمضاني من أختيارك - مياة صغيرة",
    ),
    item(
      nextId(),
      "Mix Grill",
      "میکس جریل",
      "450",
      "2 Kofta - 2 Kabab - 2 Shish Tawook. All main dishes are served with rice - potatoes - sautéed vegetables - Ramadan drink of your choice - small water",
      "2 كفتة - 2 كباب - 2 فراخ مشوية. تقدم جميع الاطباق الرئيسية مع أرز - بطاطس - خضار سوتية - مشروب رمضاني من أختيارك - مياة صغيرة",
    ),
    item(
      nextId(),
      "Fatah Moza",
      "موزة بالفتة",
      "575",
      "Moza piece - Fatah. All main dishes are served with rice - potatoes - sautéed vegetables - Ramadan drink of your choice - small water",
      "قطعة موزة - فتة. تقدم جميع الاطباق الرئيسية مع أرز - بطاطس - خضار سوتية - مشروب رمضاني من أختيارك - مياة صغيرة",
    ),
    item(
      nextId(),
      "Escalope Panne",
      "أسكالوب بانية",
      "400",
      "2 pieces Escalope. All main dishes are served with rice - potatoes - sautéed vegetables - Ramadan drink of your choice - small water",
      "2 قطعة أسكالوب. تقدم جميع الاطباق الرئيسية مع أرز - بطاطس - خضار سوتية - مشروب رمضاني من أختيارك - مياة صغيرة",
    ),
    item(
      nextId(),
      "Mushroom Picata",
      "بيكاتا بالمشروم",
      "425",
      "2 pieces Picata. All main dishes are served with rice - potatoes - sautéed vegetables - Ramadan drink of your choice - small water",
      "2 قطعة بيكاتا. تقدم جميع الاطباق الرئيسية مع أرز - بطاطس - خضار سوتية - مشروب رمضاني من أختيارك - مياة صغيرة",
    ),
    item(
      nextId(),
      "Chicken Cordon Bleu",
      "تشکن کوردن بلو",
      "400",
      "Chicken Cordon Bleu. All main dishes are served with rice - potatoes - sautéed vegetables - Ramadan drink of your choice - small water",
      "فراخ كوردون بلو. تقدم جميع الاطباق الرئيسية مع أرز - بطاطس - خضار سوتية - مشروب رمضاني من أختيارك - مياة صغيرة",
    ),
    item(
      nextId(),
      "Chicken White Sauce",
      "تشكن وايت صوص",
      "400",
      "Chicken White Sauce. All main dishes are served with rice - potatoes - sautéed vegetables - Ramadan drink of your choice - small water",
      "فراخ وايت صوص. تقدم جميع الاطباق الرئيسية مع أرز - بطاطس - خضار سوتية - مشروب رمضاني من أختيارك - مياة صغيرة",
    ),
    item(
      nextId(),
      "Chicken Panne",
      "فراخ بانية",
      "300",
      "2 Kofta - 2 Panne. All main dishes are served with rice - potatoes - sautéed vegetables - Ramadan drink of your choice - small water",
      "2 كفتة - 2 فراخ بانية. تقدم جميع الاطباق الرئيسية مع أرز - بطاطس - خضار سوتية - مشروب رمضاني من أختيارك - مياة صغيرة",
    ),
    item(
      nextId(),
      "Hamam Mahshi",
      "حمام محشي",
      "350",
      "1 Stuffed Pigeon with Rice. All main dishes are served with rice - potatoes - sautéed vegetables - Ramadan drink of your choice - small water",
      "1 عصفور محشي بالأرز. تقدم جميع الاطباق الرئيسية مع أرز - بطاطس - خضار سوتية - مشروب رمضاني من أختيارك - مياة صغيرة",
    ),
    item(
      nextId(),
      "Grilled Chicken",
      "فراخ مشوية",
      "300",
      "Half Grilled Chicken. All main dishes are served with rice - potatoes - sautéed vegetables - Ramadan drink of your choice - small water",
      "فراخ مشوية نصفية. تقدم جميع الاطباق الرئيسية مع أرز - بطاطس - خضار سوتية - مشروب رمضاني من أختيارك - مياة صغيرة",
    ),
    item(
      nextId(),
      "Kabab And Kofta",
      "كباب وكفتة",
      "400",
      "Kabab And Kofta. All main dishes are served with rice - potatoes - sautéed vegetables - Ramadan drink of your choice - small water",
      "كباب وكفتة. تقدم جميع الاطباق الرئيسية مع أرز - بطاطس - خضار سوتية - مشروب رمضاني من أختيارك - مياة صغيرة",
    ),
  ]),

  // Family Mixes
  toCategory(nextId(), "GRILLED MEATS", "صواني المشويات", [
    item(nextId(), "Mix Of Lovers", "مكس الحبايب", "2250", "Grilled Chicken - 1/2kg Tarb - 1kg Kofta - 1/2kg Mombar - Rice", "فراخ مشوية - 1/2 كيلو طرب - 1 كيلو كفتة - 1/2 كيلو ممبار - أرز"),
    item(nextId(), "Mix The Mix", "مكس المكس", "2000", "1kg Kofta - 1/2kg Tarb - 1.5 Shish Chicken - Rice", "1 كيلو كفتة - 1/2 كيلو طرب - 1.5 فراخ مشوية - أرز"),
    item(nextId(), "Mix Of Friends", "مكس الاصدقاء", "1900", "Shish Chicken - 1kg Kofta - 1/2kg Tarb - 1/2kg Mombar - Rice", "فراخ مشوية - 1 كيلو كفتة - 1/2 كيلو طرب - 1/2 كيلو ممبار - أرز"),
    item(nextId(), "Mix Ramadan", "مکس رمضان", "2500","Shish Chicken - 1kg Kofta - 1/2kg Tarb -2 Pieces of Pigeon - 1/2kg Mombar - Rice"," ( فرخة شيش - ½ كيلو طرب مشوي - 1//2 كيلو ممبار - عدد 2 فرد حمام - ½ كيلو كفتة مشوية - أرز )"),
    item(nextId(), "Family Mix", "مكس العيلة", "3500", "Shish Chicken - 4 Stuffed Pigeons - 1/2kg Kofta - 1/2kg Tarb - 1kg Sausage - 1/2kg Mombar - Rice", "فراخ مشوية - 4 عصفور محشي - 1/2 كيلو كفتة - 1/2 كيلو طرب - 1 كيلو ساساج - 1/2 كيلو ممبار - أرز"),
    item(nextId(), "Lama Mix", "مكس اللمة", "1600", "Grilled Chicken - 1/2kg Kofta - 1/2kg Tarb - 1kg Mombar - Rice (Price not listed)", "فراخ مشوية - 1/2 كيلو كفتة - 1/2 كيلو طرب - 1 كيلو ممبار - أرز (السعر غير مدرج)"),
  ]),

  // Appetizers
  toCategory(nextId(), "Appetizers", "مقبلات", [
    item(nextId(), "Mombar", "ممبار", "80", "5 pieces"),
    item(nextId(), "Warq Enab", "ورق عنب", "60", "10 pieces"),
    item(nextId(), "Sambosk Meat", "سمبوسك لحم", "70", "4 pieces"),
    item(nextId(), "Sambosk Cheese", "سمبوسك جبنة", "60", "4 pieces"),
  ]),

  // Pasta
  toCategory(nextId(), "Pasta", "مكرونة", [
    item(nextId(), "Oven Pasta", "مكرونة فرن", "90"),
    item(nextId(), "Nigresco", "نجرسكو", "120"),
    item(nextId(), "Bolognese", "بولونيز", "150"),
    item(nextId(), "Alfredo", "الفريدو", "170"),
  ]),

  // Rice
  toCategory(nextId(), "Rice", "أرز", [
    item(nextId(), "White Rice", "أرز ابيض", "50"),
    item(nextId(), "Mixed Rice", "أرز خلطة", "70"),
    item(nextId(), "Sayadieh Rice", "أرز صيادية", "55"),
  ]),

  // Salad
  toCategory(nextId(), "Salad", "سلطات", [
    item(nextId(), "Tahina", "طحينة", "40"),
    item(nextId(), "Tomea", "تومية", "40"),
    item(nextId(), "Baba Ghanoush", "بابا غنوج", "45"),
    item(nextId(), "Green Salad", "سلطة خضراء", "35"),
    item(nextId(), "Coleslaw Salad", "سلطة كلو سلو", "50"),
    item(nextId(), "Torshi", "طرشي", "35"),
  ]),

  // Tagine
  toCategory(nextId(), "Tagine", "طواجن", [
    item(nextId(), "Bamia With Meat", "طاجن بامية باللحمة", "250"),
    item(nextId(), "Moussaka With Meat", "طاجن مسقعة باللحم المفروم", "175"),
    item(nextId(), "Moussaka", "طاجن مسقعة سادة", "100",),
    item(nextId(), "Turli With Meat", "طاجن تورلي باللحم", "250"),
  ]),

  // Soup
  toCategory(nextId(), "Soup", "شوربة", [
    item(nextId(), "Vegetable Soup", "شوربة خضار", "50"),
    item(nextId(), "Orzo Soup", "شوربة لسان عصفور", "50"),
    item(nextId(), "Cream Of Chicken Soup", "شوربة كريمة بالفراخ", "120"),
    item(nextId(), "Lentil Soup", "شوربة عدس", "50"),
    item(nextId(), "Cream Of Mushroom Soup", "شوربة كريمة بالمشروم والفراخ", "150", "With Chicken"),
  ]),

  // Soft Drink
  toCategory(nextId(), "Soft Drink", "مشروبات غازية", [
    item(nextId(), "Water S", "مياة صغيرة", "15"),
    item(nextId(), "Water L", "مياة كبيرة", "20"),
    item(nextId(), "Pepsi", "بيبسي", "50"),
    item(nextId(), "7 Up", "سیفن اب", "50"),
    item(nextId(), "Fayrouz", "فیروز", "55"),
    item(nextId(), "Birell", "بريل", "55"),
    item(nextId(), "Redbull", "ريدبول", "105"),
  ]),

  // Hot Drinks
  toCategory(nextId(), "Hot Drinks", "مشروبات ساخنة", [
    item(nextId(), "Tea", "شاي", "45"),
    item(nextId(), "Green Tea", "شاي اخضر", "45"),
    item(nextId(), "Herbs", "اعشاب", "45"),
    item(nextId(), "Hot Chocolate", "هوت شوكلت", "120"),
    item(nextId(), "Hot Cider", "هوت سیدر", "80"),
    item(nextId(), "Sahlab", "سحلب", "90"),
    item(nextId(), "Cocktail Herbs", "کوکتیل اعشاب", "90", "Lemon - Mint - Apple - Ginger - Cinnamon - Honey - Orange", "ليمون - نعناع - تفاح - زنجبيل - قرفة - عسل - برتقال"),
  ]),

  // Hot Coffee
  toCategory(nextId(), "Hot Coffee", "قهوة ساخنة", [
    item(nextId(), "Turkish Coffee Single", "قهوة تركي سنجل", "50"),
    item(nextId(), "Turkish Coffee Double", "قهوة تركي دبل", "75"),
    item(nextId(), "French Coffee", "قهوة فرنساوي", "85"),
    item(nextId(), "Hazelnut Coffee", "قهوة بندق", "90"),
    item(nextId(), "Espresso Single", "أسبريسو سينجل", "65"),
    item(nextId(), "Espresso Double", "أسبريسو دبل", "85"),
    item(nextId(), "Macchiato Single", "ميكاتو سينجل", "65"),
    item(nextId(), "Macchiato Double", "ميكاتو دبل", "85"),
    item(nextId(), "Cortado", "کورتادو", "100"),
    item(nextId(), "Flat White", "فلات وایت", "105"),
    item(nextId(), "Cappuccino Medium", "كابتشينو وسط", "100"),
    item(nextId(), "Cappuccino Large", "كابتشينو كبير", "120"),
    item(nextId(), "Latte", "لاتية", "110"),
    item(nextId(), "Latte Mocha", "لاتية موكا", "120"),
    item(nextId(), "Latte White Mocha", "لاتية وايت موكا", "130"),
    item(nextId(), "Spanish Latte", "سبانش لاتية", "130"),
  ]),

  // Ice Coffee
  toCategory(nextId(), "Ice Coffee", "قهوة مثلجة", [
    item(nextId(), "Ice Latte", "أيس لاتية", "50"),
    item(nextId(), "Ice Mocha", "أيس موكا", "75"),
    item(nextId(), "Ice White Mocha", "أيس وايت موكا", "85"),
    item(nextId(), "Ice Spanish Latte", "أيس سبانش لاتية", "90"),
    item(nextId(), "Ice Pistachio Latte", "أيس بيستاشيو لاتية", "65"),
    item(nextId(), "Frappe Classic", "فرابية كلاسيك", "65"),
    item(nextId(), "Mocha Frappe", "موكا فرابية", "85"),
    item(nextId(), "White Mocha Frappe", "وايت موكا فرابية", "65"),
    item(nextId(), "Spanish Latte Frappe", "سبانش لاتية فرابية", "85"),
    item(nextId(), "Pistachio Frappe", "بيستاشيو فرابية", "105"),
  ]),

  // Mojito
  toCategory(nextId(), "Mojito", "موخيتو", [
    item(nextId(), "Mojito Classic", "موخيتو كلاسيك", "70"),
    item(nextId(), "Mojito Peach", "موخيتو خوخ", "90"),
    item(nextId(), "Mojito Pineapple", "موخيتو اناناس", "90"),
    item(nextId(), "Mojito Passion", "موخيتو باشون", "90"),
    item(nextId(), "Mojito Blueberry", "موخيتو بلوبيري", "90"),
    item(nextId(), "Mojito Strawberry", "موخيتو فراولة", "90"),
    item(nextId(), "Mojito Redbull", "موخيتو ريدبول", "120"),
  ]),

  // Lemonte
  toCategory(nextId(), "Lemonte", "ليمونيت", [
    item(nextId(), "Pink Lemonte", "بينك ليمونيت", "90"),
    item(nextId(), "Strawberry Lemonte", "فراولة ليمونيت", "90"),
    item(nextId(), "Passion Lemonte", "باشون لیمونیت", "105"),
    item(nextId(), "Hawaii Lemonte", "هواي ليمونيت", "110"),
  ]),

  // Fresh Juice
  toCategory(nextId(), "Fresh Juice", "عصير طازج", [
    item(nextId(), "Mango", "مانجو", "90"),
    item(nextId(), "Guava", "جوافة", "90"),
    item(nextId(), "Strawberry", "فراولة", "90"),
    item(nextId(), "Orange", "برتقال", "80"),
    item(nextId(), "Banana With Milk", "موز بالحليب", "100"),
    item(nextId(), "Guava With Mint", "جوافة بالنعناع", "100"),
    item(nextId(), "Lemon Mint", "ليمون نعناع", "80"),
  ]),

  // Smoothies
  toCategory(nextId(), "Smoothies", "سموزي", [
    item(nextId(), "Smoothie Mango", "سموزي مانجو", "100"),
    item(nextId(), "Smoothie Guava", "سموزي جوافة", "100"),
    item(nextId(), "Smoothie Strawberry", "سموزي فراولة", "100"),
    item(nextId(), "Smoothie Blueberry", "سموزي بلوبيري", "90"),
    item(nextId(), "Smoothie Lemon Mint", "سموزي ليمون نعناع", "90"),
    item(nextId(), "Smoothie Mango Peach", "سموزي خوخ", "130"),
    item(nextId(), "Smoothie Mango Passion", "سموزي باشون", "135"),
    item(nextId(), "Smoothie Pinacolada", "سموزي بينا كولادا", "135"),
  ]),

  // Ice Tea
  toCategory(nextId(), "Ice Tea", "شاي مثلج", [
    item(nextId(), "Ice Tea Lemon", "ايس تي ليمون", "80"),
    item(nextId(), "Ice Tea Passion", "ايس تي باشون", "90"),
    item(nextId(), "Ice Tea Peach", "ايس تي خوخ", "90"),
  ]),

  // Milk Shake
  toCategory(nextId(), "Milk Shake", "ميلك شيك", [
    item(nextId(), "Milk Shake Vanilla", "ميلك شيك فانيليا", "100"),
    item(nextId(), "Milk Shake Chocolate", "ميلك شيك شوكولاتة", "100"),
    item(nextId(), "Milk Shake Strawberry", "ميلك شيك فراولة", "120"),
    item(nextId(), "Milk Shake Mango", "ميلك شيك مانجو", "130"),
    item(nextId(), "Milk Shake Passion", "ميلك شيك باشون", "130"),
    item(nextId(), "Milk Shake Peach", "ميلك شيك خوخ", "130"),
    item(nextId(), "Milk Shake Oreo", "ميلك شيك اوريو", "130"),
    item(nextId(), "Milk Shake Pistachio", "ميلك شيك بيستاشيو", "130"),
  ]),

  // Dessert
  toCategory(nextId(), "Dessert", "حلويات", [
    item(nextId(), "Molten Cake Ice Cream", "مولتن كيك بالايس كريم", "110"),
    item(nextId(), "Cheesecake", "تشيز كيك", "130"),
    item(nextId(), "Umm Ali", "أم علي", "90"),
    item(nextId(), "2 Scoop Ice Cream", "أيس كريم 2 بولة", "80"),
    item(nextId(), "Fruit Plate", "طبق فواكة", "150"),
    item(nextId(), "Fruit Salad", "فروت سلاط", "120"),
    item(nextId(), "Mango Nutella Kunafa", "کنافا نوتيلا مانجا", "160"),
    item(nextId(), "Helw Sharqi", "طبق حلو شرقي", "220"),
  ]),

  toCategory(nextId(), "shisha", "شيشة", [
    item(nextId(), "MASEL", "معسل", "35", ),
    item(nextId(), "SPICHEAL", "سبيشال", "135",),
    item(nextId(), "LAI", "لاي", "25",),
    ]),


  // Extra
  toCategory(nextId(), "Extra", "إضافات", [
    item(nextId(), "Ice Cream", "بولة أيس كريم", "35"),
    item(nextId(), "Nuts", "مكسرات", "50"),
    item(nextId(), "Topping", "توبينج", "35"),
    item(nextId(), "Fruits", "فواكهة", "40"),
  ]),
];

allCategories.forEach((c) => {
  categoriesEn.push(c.en);
  categoriesAr.push(c.ar);
});

export const menuData: Record<Language, MenuCategory[]> = {
  en: categoriesEn,
  ar: categoriesAr,
};
