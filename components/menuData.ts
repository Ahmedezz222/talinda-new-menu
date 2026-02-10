import type { Language } from "./LanguageContext";

const imageFiles = [
  "1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG", "adds.jpg", "appetizers.jpg", "Breakfast.jpeg", "C.JPG", "COCKTIL.jpg", "COFFEE.jpg", "FRAPPE.jpg", "FRESH JUICE.jpg", "HOT_DRINKS.jpg", "kids_meals.jpg", "main_courses.jpg", "MILK CHECK.jpg", "SHISHA.jpg", "sides_food.jpg", "SMOOTHIE.jpg", "SOFT DRINKS.jpg", "SWEET.jpg", "tajines.jpg", "trays.jpg", "tti.jpg", "url.jpg", "أسكالوب بانية.jpg", "ارز.jpg", "اسبريسو.jpg", "اعشاب.jpg", "البيتزا.jpg", "السندوتشات.jpg", "الشوربة.jpg", "الفريدو.jpg", "ام علي.jpg", "ايس شوكلت.jpg", "ايس لاتيه.jpg", "ايسكريم.jpg", "بامية.jpg", "برتقال.jpg", "برجر سادة.jpg", "بريل.jpg", "بطيخ.jpg", "بلو كرواسو.jpg", "بولونيز.jpg", "بوم فريت.jpg", "بيبسي .jpg", "بيتزا بسطرمة.jpg", "بيتزا تونة.jpg", "بيتزا جمبري.jpg", "بيتزا خضروات.jpg", "بيتزا سجق.jpg", "بيتزا سوبرسوبريم.jpg", "بيتزا فراخ.jpg", "بيتزا لحمة.jpg", "بيتزا مارجريتا.jpg", "بيتزا مكس جبن.jpg", "تشيز كيك.jpg", "جوافة.jpg", "حلو مشكل.jpg", "خضار مشكل.jpg", "ريد بول.jpg", "سحلب فواكة.jpg", "سحلب مكسرات.jpg", "سحلب.jpg", "سلطة بابا غنوج.jpg", "سلطة خضرا.jpg", "سلطة طحينة.jpg", "سلطة.jpg", "سمبوسة جبنة.jpg", "سمبوسة لحمة.jpg", "سموزي اناناس.jpg", "سموزي برتقا.jpg", "سموزي توت ازرق.jpg", "سموزي فراولة.jpg", "سموزي كيوي.jpg", "سموزي ليمون نعناع.jpg", "سموزي مانجا باشون.jpg", "سموزي مانجا.jpg", "سموزي ميكستوت.jpg", "سي فوود.jpg", "شاورما لحم او فراخ.jpg", "شاي اخضر.jpg", "شاي.jpg", "شوربة اليوم.jpg", "شوربة خضار.jpg", "شوربة سي فود.jpg", "شوربة عدس.jpg", "شوربة كريمة فراخ.jpg", "شوربة كريمة.jpg", "شوربة لسان عصفور.jpg", "شويبس.jpg", "شيش طاووق.jpg", "شيشة .jpg", "صن شاين.jpg", "صوص.jpg", "طبق فواكة كبير.jpg", "طرشي بلدي.jpg", "فالت وايت.jpg", "فاهيتا لحم او فراخ.jpg", "فرابية شوكوالتة.png", "فرابية فانيليا.jpg", "فرابية كراميل.jpg", "فرابية لوتس.jpg", "فراخ بانية (1).jpg", "فراخ بانية ك.jpg", "فراخ بانية.jpg", "فراخ مشوي.jpg", "فراولة.jpg", "فروت سالط.jpg", "فواكة.jpg", "فيروز.jpg", "قهوة بندق.jpg", "قهوة تركي.jpg", "قهوة فرنساوي.jpg", "كابتشينو.jpg", "كبده اسكندراني.jpg", "كريم كراميل.jpg", "كفتة مشوية ك.jpg", "كفتة مشوية.jpg", "كنافة لوتس بيساتشيو.jpg", "كنافة مانجا نوتيا.jpg", "كورتادو.jpg", "كوكتيل اعشاب.jpg", "كولو سلو.jpg", "كيوي.jpg", "لاتية.jpg", "لبن.jpg", "لمون نعناع.jpg", "لي طبي.jpg", "مانجا.jpg", "مسقعة .jpg", "مشروب-رمضاني.jpg", "معسل.jpg", "مقبالت مشكل.jpg", "مكرونات.jpg", "مكرونة فرن.jpg", "ملوخية.jpg", "ممبار.jpg", "موخيتو اناناس.jpg", "موخيتو باشون.jpg", "موخيتو.jpg", "موكا.jpg", "مولتن كيك.jpg", "مياة صغيرة.jpg", "ميكاتو.jpg", "ميكس جريل.jpg", "ميلك شيك اسنكيرس.jpg", "ميلك شيك اوريو.jpg", "ميلك شيك شوكولاتة.jpg", "ميلك شيك فانيليا.jpg", "ميلك شيك فراولة.jpg", "ميلك شيك كيت كات.jpg", "ميلك شيك لوتس.jpg", "ميلك شيك مارس.jpeg", "ميلك شيك مانجا.jpg", "ميني ميكس.jpg", "نجرسكو .jpg", "نسكافية.jpg", "هوت دوج.jpg", "هوت سيدر.jpg", "هوت شوكليت.jpg", "ورق عنب.jpg"
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
  item(nextId(), "Mix Grill", "ميكس جريل", "320 LE", "2 Kebabs, 2 Kofta, 2 Grilled Shish Tawook, Rice, Sautéed Vegetables", "كباب 2 - كفتة 2 - 2 شيش طاووق مشوي ارز - خضار سوتيه"),
  item(nextId(), "Grilled Chicken", "فراخ مشوي", "250 LE", "Half grilled chicken, sautéed vegetables, rice", "نص فرخة مشوية - خضار سوتية - ارز"),
  item(nextId(), "Chicken Pane", "فراخ بانية", "250 LE", "2 Pane pieces, red sauce pasta", "قطعة بانية 2 - مكرونة ريد صوص"),
  item(nextId(), "Pane Escalope", "أسكالوب بانية", "288 LE", "2 Escalope pieces, red sauce pasta", "2 قطعة اسكالوب - مكرونة ريد صوص"),
  item(nextId(), "Mini Mix", "ميني ميكس", "275 LE", "3 Kofta, 2 Grilled Shish Tawook, Rice, Sautéed Vegetables", "3 كفتة - 2 شيش طاووق مشوي - ارز خضار سوتيه"),
];

const breakfast = [
  item(nextId(), "Breakfast Oriental", "إفطار شرقي", "140 LE", "Foul, 2 Taameya, Omelette, Cheese with tomato, Potatoes, Salad, Small water, Mint tea", "فول - ٢ طعمية - بيض أومليت - جبنة بالطماطم - بطاطس سلطة - مياة صغيرة - شاي بالنعناع"),
  item(nextId(), "Fellahi Breakfast", "إفطار فلاحي", "180 LE", "Feteer Meshaltet, Black honey, White honey, Tahini, Aged cheese, Small water, Hot drink", "فطير مشلتت - عسل اسود - عسل ابيض - طحينة - جبنة قديمة - مياة صغيرة - مشروب ساخن"),
  item(nextId(), "Continental Breakfast", "إفطار كونتيننتال", "300 LE", "Croissant, Butter, Jam, Cream cheese, Hot drink, Juice, Small water", "كرواسون - زبدة - مربي - جبنة كريمي - مشروب ساخن - عصير - مياة صغيرة"),
];

const pasta = [
  item(nextId(), "Negeresco Small", "نجرسكو صغير", "85 LE"),
  item(nextId(), "Negeresco Large", "نجرسكو كبير", "85 LE"),
  item(nextId(), "Bolognese", "بولونيز", "75 LE"),
  item(nextId(), "Alfredo", "الفريدو", "120 LE"),
  item(nextId(), "Seafood Pasta", "سي فوود", "130 LE"),
  item(nextId(), "Chicken Pane (Pasta)", "فراخ بانية", "160 LE", "Pane piece, Fries, Baked pasta, Drink, Small water", "قطعة بانية - بطاطس - مكرونة فرن - مشروب - مياة صغيرة"),
  item(nextId(), "Grilled Kofta (Pasta)", "كفتة مشوية", "160 LE", "3 Kofta pieces, Fries, Baked pasta, Small water", "قطع كفتة 3 - بطاطس - مكرونة فرن - مياة صغيرة"),
];

const pizza = [
  item(nextId(), "Margherita Pizza", "بيتزا مارجريتا", "170 LE"),
  item(nextId(), "Chicken Pizza", "بيتزا فراخ", "195 LE"),
  item(nextId(), "Vegetables Pizza", "بيتزا خضروات", "160 LE"),
  item(nextId(), "Super Supreme Pizza", "بيتزا سوبرسوبريم", "225 LE"),
  item(nextId(), "Tuna Pizza", "بيتزا تونة", "195 LE"),
  item(nextId(), "Pastrami Pizza", "بيتزا بسطرمة", "200 LE"),
  item(nextId(), "Sausage Pizza", "بيتزا سجق", "210 LE"),
  item(nextId(), "Beef Pizza", "بيتزا لحمة", "220 LE"),
  item(nextId(), "Mix Cheese Pizza", "بيتزا مكس جبن", "225 LE"),
  item(nextId(), "Shrimp Pizza", "بيتزا جمبري", "250 LE"),
];

const sandwiches = [
  item(nextId(), "Shish Tawook", "شيش طاووق", "125 LE"),
  item(nextId(), "Chicken Pane Sandwich", "فراخ بانية", "120 LE"),
  item(nextId(), "Grilled Kofta Sandwich", "كفتة مشوية", "120 LE"),
  item(nextId(), "Shawarma Beef or Chicken", "شاورما لحم او فراخ", "130 LE"),
  item(nextId(), "Fajita Beef or Chicken", "فاهيتا لحم او فراخ", "135 LE"),
  item(nextId(), "Plain Burger", "برجر سادة", "95 LE"),
  item(nextId(), "Burger with Cheese or Egg", "برجر جبنة او بيض", "115 LE"),
  item(nextId(), "Mix Burger", "برجر مكس", "125 LE"),
  item(nextId(), "Alexandrian Liver", "كبده اسكندراني", "110 LE"),
  item(nextId(), "Hot Dog", "هوت دوج", "110 LE"),
];

const trays = [
  item(nextId(), "Al Habayeb Tray", "صنية الحبايب", "1275 LE", "Chicken shish, Half grilled lamb, Half grilled kofta, Half mumbar, Rice", "فرخه شيش - نص ك طرب مشوي - نص ك كفتة مشوية - نص ك ممبار - ارز"),
  item(nextId(), "Mix Tray", "صنية المكس", "1250 LE", "1kg Grilled kofta, Half grilled lamb, Chicken & half shish, Rice", "ك كفتة مشوية - نص ك طرب مشوي - فرخة ونص شيش - ارز"),
  item(nextId(), "Al Sahab Tray", "صنية الصحاب", "1400 LE", "1kg Grilled kofta, Half grilled kebab, Chicken shish, Rice", "ك كفتة مشوية - نص ك كباب مشوي - فرخة شيش - ارز"),
  item(nextId(), "Family Tray", "صنية العيلة", "1900 LE", "Chicken shish, Half grilled lamb, Half mumbar, 2 Stuffed pigeon, 1.25kg Grilled kofta, Rice", "فرخة شيش - نص ك طرب مشوي - نص ك ممبار - عدد 2 فرد حمام محشي - كيلو وربع كفتة مشوية - ارز"),
  item(nextId(), "Savings Tray", "صنية التوفير", "1000 LE", "Chicken shish, Half grilled chicken, Half grilled kofta, Quarter grilled lamb, Rice", "فرخة شيش - نص ك فرخة مشوية - نص ك كفتة مشوية - ربع ك طرب مشوي - ارز"),
  item(nextId(), "Al Atawela Tray", "صنية العتاولة", "1950 LE", "2 Chicken shish, 4 Stuffed pigeon, Half grilled kofta, Half mumbar, Rice", "عدد 2 فرخة شيش - عدد 4 فرد حمام محشي - نص ك كفتة مشوية - نص ك ممبار - ارز"),
];

const soup = [
  item(nextId(), "Soup of the Day", "شوربة اليوم", "30 LE"),
  item(nextId(), "Seafood Soup", "شوربة سي فود", "120 LE"),
  item(nextId(), "Vegetable Soup", "شوربة خضار", "50 LE"),
  item(nextId(), "Lentil Soup", "شوربة عدس", "50 LE"),
  item(nextId(), "Lisan Asfour Soup", "شوربة لسان عصفور", "50 LE"),
  item(nextId(), "Cream Soup", "شوربة كريمة", "75 LE"),
  item(nextId(), "Chicken Cream Soup", "شوربة كريمة فراخ", "125 LE"),
];

const appetizers = [
  item(nextId(), "Stuffed Grape Leaves", "ورق عنب", "75 LE"),
  item(nextId(), "Mumbar", "مبار", "70 LE"),
  item(nextId(), "Cheese Sambousa", "سمبوسة جبنة", "65 LE"),
  item(nextId(), "Meat Sambousa", "سمبوسة لحمة", "75 LE"),
  item(nextId(), "Pommes Frites", "بوم فريت", "50 LE"),
  item(nextId(), "Appetizer Mix", "مقبالت مشكل", "90 LE"),
];

const salads = [
  item(nextId(), "Tahini Salad", "سلطة طحينة", "45 LE"),
  item(nextId(), "Baba Ghanoush", "سلطة بابا غنوج", "50 LE"),
  item(nextId(), "Green Salad", "سلطة خضرا", "35 LE"),
  item(nextId(), "Coleslaw", "كولو سلو", "55 LE"),
  item(nextId(), "Pickles", "طرشي بلدي", "35 LE"),
];

const sides = [
  item(nextId(), "Rice", "ارز", "30 LE"),
  item(nextId(), "Salad", "سلطة", "35 LE"),
  item(nextId(), "Soup of the Day (Side)", "شوربة اليوم", "30 LE"),
  item(nextId(), "Milk", "لبن", "20 LE"),
  item(nextId(), "Nuts", "مكسرات", "25 LE"),
  item(nextId(), "Sauce", "صوص", "15 LE"),
  item(nextId(), "Fruit", "فواكة", "20 LE"),
  item(nextId(), "Ice Cream (Side)", "ايس كريم", "25 LE"),
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
  toCategory(2, "Breakfast", "إفطار", breakfast),
  toCategory(3, "Pasta", "مكرونات", pasta),
  toCategory(4, "Pizza", "البيتزا", pizza),
  toCategory(5, "Sandwiches", "السندوتشات", sandwiches),
  toCategory(6, "Trays", "الصواني", trays),
  toCategory(7, "Soup", "الشوربة", soup),
  toCategory(8, "Appetizers", "مقبلات", appetizers),
  toCategory(9, "Salads", "سلطات", salads),
  toCategory(10, "Sides", "الإضافات", sides),
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
