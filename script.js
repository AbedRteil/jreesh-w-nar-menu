/* =========================
   LANGUAGE
========================= */

let currentLanguage = "ar";


const translations = {

    ar: {

        shopName: "جريش و نار",

        heroSubtitle: "مناقيش على أصولها",

        openingText: "دوامنا يومياً ما عدا الاثنين",

        deliveryText: "خدمة توصيل متوفرة",

        whatsapp: "اطلب عبر واتساب",

        location: "موقعنا",

        phone: "📞 اتصل بنا:",

        menuTitle: "قائمة المناقيش",

        menuSubtitle: "اختار من تشكيلتنا",

        all: "الكل",

        socialTitle: "تابعونا على",

        footerSubtitle: "مناقيش على أصولها 🔥",

        noItems: "لا يوجد أصناف حالياً",

        currency: "ل.ل"

    },


    en: {

        shopName: "Jreesh W Nar",

        heroSubtitle: "High-quality Manakish",

        openingText: "Open daily except Monday",

        deliveryText: "Delivery available",

        whatsapp: "Order via WhatsApp",

        location: "Our Location",

        phone: "📞 Call us:",

        menuTitle: "Manakish Menu",

        menuSubtitle: "Choose from our selection",

        all: "All",

        socialTitle: "Follow us",

        footerSubtitle: "Authentic Manakish 🔥",

        noItems: "No items available",

        currency: "LBP"

    }

};


/* =========================
   CATEGORIES
========================= */

const categories = [

    {
        id: "classic",

        name: {
            ar: "كلاسيك",
            en: "Classic"
        }
    },


    {
        id: "chicken",

        name: {
            ar: "تشيكن 🍗",
            en: "Chicken 🍗"
        }
    },


    {
        id: "jreesh",

        name: {
            ar: "جريش و نار 🔥",
            en: "Jreesh W Nar 🔥"
        }
    }

];


/* =========================
   MENU DATA
========================= */

const menuItems = [

    /* =====================
       CLASSIC
    ====================== */

    {
        name: {
            ar: "جبنة",
            en: "Cheese"
        },

        price: 200000,

        category: "classic"
    },


    {
        name: {
            ar: "زعتر بلدي",
            en: "Lebanese Zaatar"
        },

        price: 80000,

        category: "classic"
    },


    {
        name: {
            ar: "كشك",
            en: "Kishk"
        },

        price: 100000,

        category: "classic"
    },


    {
        name: {
            ar: "كوكتيل (زعتر و جبنة)",
            en: "Zaatar & Cheese"
        },

        price: 130000,

        category: "classic"
    },


    {
        name: {
            ar: "بندورة و بصل",
            en: "Tomato & Onion"
        },

        price: 100000,

        category: "classic"
    },


    {
        name: {
            ar: "بندورة و بصل مع جبنة",
            en: "Tomato, Onion & Cheese"
        },

        price: 150000,

        category: "classic"
    },


    {
        name: {
            ar: "كشك مع جبنة",
            en: "Kishk & Cheese"
        },

        price: 150000,

        category: "classic"
    },


    {
        name: {
            ar: "سبانخ و جبنة",
            en: "Spinach & Cheese"
        },

        price: 180000,

        category: "classic"
    },


    {
        name: {
            ar: "زعتر مع خضار",
            en: "Zaatar & Vegetables"
        },

        price: 100000,

        category: "classic"
    },


    /* =====================
       CHICKEN
    ====================== */

    {
        name: {
            ar: "فاهيتا",
            en: "Chicken Fajita"
        },

        price: 350000,

        category: "chicken"
    },


    {
        name: {
            ar: "تشيكن ساب",
            en: "Chicken Sub"
        },

        price: 350000,

        category: "chicken"
    },


    {
        name: {
            ar: "سبايسي تشكن",
            en: "Spicy Chicken"
        },

        price: 350000,

        category: "chicken"
    },


    {
        name: {
            ar: "دجاج باربكيو",
            en: "BBQ Chicken"
        },

        price: 350000,

        category: "chicken"
    },


    {
        name: {
            ar: "دجاج مع صوص حبق",
            en: "Chicken with Basil Sauce"
        },

        price: 350000,

        category: "chicken"
    },


    /* =====================
       JREESH W NAR
    ====================== */

    {
        name: {
            ar: "حبش و جبنة",
            en: "Turkey & Cheese"
        },

        price: 300000,

        category: "jreesh"
    },


    {
        name: {
            ar: "مرتديلا و جبنة",
            en: "Mortadella & Cheese"
        },

        price: 300000,

        category: "jreesh"
    },


    {
        name: {
            ar: "حلوم مع صوص حبق",
            en: "Halloumi with Basil Sauce"
        },

        price: 250000,

        category: "jreesh"
    },


    {
        name: {
            ar: "سبيسيال جريش و نار",
            en: "Jreesh W Nar Special"
        },

        price: 250000,

        category: "jreesh"
    },


    {
        name: {
            ar: "بيبروني",
            en: "Pepperoni"
        },

        price: 300000,

        category: "jreesh"
    },


    {
        name: {
            ar: "جبنة حرة مع جوز",
            en: "Spicy Cheese with Walnuts"
        },

        price: 250000,

        category: "jreesh"
    },


    {
        name: {
            ar: "لبنة حرة مع جوز",
            en: "Spicy Labneh with Walnuts"
        },

        price: 200000,

        category: "jreesh"
    }

];


/* =========================
   DOM ELEMENTS
========================= */

const categoryBar =
    document.getElementById("category-bar");


const menuGrid =
    document.getElementById("menu-grid");


const languageToggle =
    document.getElementById("language-toggle");


/* =========================
   CURRENT CATEGORY
========================= */

let currentCategory = "all";


/* =========================
   FORMAT PRICE
========================= */

function formatPrice(price) {

    return new Intl.NumberFormat("en-US")
        .format(price);

}


/* =========================
   UPDATE STATIC TEXT
========================= */

function updateStaticText() {

    const t = translations[currentLanguage];


    /* HTML language + direction */

    document.documentElement.lang =
        currentLanguage === "ar"
            ? "ar"
            : "en";


    document.documentElement.dir =
        currentLanguage === "ar"
            ? "rtl"
            : "ltr";


    /* Page title */

    document.title =
        currentLanguage === "ar"
            ? "جريش و نار | مناقيش على أصولها"
            : "Jreesh W Nar | Authentic Manakish";


    /* Shop name */

    const shopName =
        document.getElementById("shop-name");

    if (shopName) {
        shopName.textContent = t.shopName;
    }


    /* Hero subtitle */

    const heroSubtitle =
        document.getElementById("hero-subtitle");

    if (heroSubtitle) {
        heroSubtitle.textContent =
            t.heroSubtitle;
    }


    /* Opening hours */

    const openingText =
        document.getElementById("opening-text");

    if (openingText) {
        openingText.textContent =
            t.openingText;
    }


    /* Delivery */

    const deliveryText =
        document.getElementById("delivery-text");

    if (deliveryText) {
        deliveryText.textContent =
            t.deliveryText;
    }


    /* WhatsApp */

    const whatsappText =
        document.getElementById("whatsapp-text");

    if (whatsappText) {
        whatsappText.textContent =
            t.whatsapp;
    }


    /* Location */

    const locationText =
        document.getElementById("location-text");

    if (locationText) {
        locationText.textContent =
            t.location;
    }


    /* Phone */

    const phoneText =
        document.getElementById("phone-text");

    if (phoneText) {
        phoneText.textContent =
            t.phone;
    }


    /* Menu title */

    const menuTitle =
        document.getElementById("menu-title");

    if (menuTitle) {
        menuTitle.textContent =
            t.menuTitle;
    }


    /* Menu subtitle */

    const menuSubtitle =
        document.getElementById("menu-subtitle");

    if (menuSubtitle) {
        menuSubtitle.textContent =
            t.menuSubtitle;
    }


    /* Social title */

    const socialTitle =
        document.getElementById("social-title");

    if (socialTitle) {
        socialTitle.textContent =
            t.socialTitle;
    }


    /* Footer subtitle */

    const footerSubtitle =
        document.getElementById("footer-subtitle");

    if (footerSubtitle) {
        footerSubtitle.textContent =
            t.footerSubtitle;
    }

}


/* =========================
   CREATE CATEGORY BUTTON
========================= */

function createCategoryButton(
    id,
    name,
    active = false
) {

    const button =
        document.createElement("button");


    button.classList.add("category-btn");


    if (active) {

        button.classList.add("active");

    }


    button.dataset.category = id;


    button.textContent = name;


    button.addEventListener(
        "click",
        () => {

            setActiveCategory(id);

        }
    );


    return button;

}


/* =========================
   RENDER CATEGORIES
========================= */

function renderCategories() {

    categoryBar.innerHTML = "";


    /* ALL BUTTON */

    const allButton =
        createCategoryButton(

            "all",

            translations[currentLanguage].all,

            currentCategory === "all"

        );


    categoryBar.appendChild(allButton);


    /* OTHER CATEGORIES */

    categories.forEach(category => {

        const button =
            createCategoryButton(

                category.id,

                category.name[currentLanguage],

                currentCategory === category.id

            );


        categoryBar.appendChild(button);

    });

}


/* =========================
   SET ACTIVE CATEGORY
========================= */

function setActiveCategory(categoryId) {

    currentCategory =
        categoryId;


    renderCategories();

    renderMenu();

}


/* =========================
   CREATE MENU CARD
========================= */

function createMenuItem(item) {

    const card =
        document.createElement("article");


    card.classList.add("menu-card");


    const itemName =
        item.name[currentLanguage];


    const currency =
        translations[currentLanguage].currency;


    card.innerHTML = `

        <div class="item-info">

            <h3>
                ${itemName}
            </h3>

        </div>


        <div class="item-price">

            ${formatPrice(item.price)}

            <span>
                ${currency}
            </span>

        </div>

    `;


    return card;

}


/* =========================
   RENDER MENU
========================= */

function renderMenu() {

    menuGrid.innerHTML = "";


    const filteredItems =

        currentCategory === "all"

            ? menuItems

            : menuItems.filter(
                item =>
                    item.category === currentCategory
            );


    filteredItems.forEach(item => {

        const card =
            createMenuItem(item);


        menuGrid.appendChild(card);

    });


    /* EMPTY STATE */

    if (filteredItems.length === 0) {

        menuGrid.innerHTML = `

            <div class="empty-state">

                ${translations[currentLanguage].noItems}

            </div>

        `;

    }

}


/* =========================
   CHANGE LANGUAGE
========================= */

function setLanguage(language) {

    currentLanguage =
        language;


    updateStaticText();

    renderCategories();

    renderMenu();

}


/* =========================
   LANGUAGE TOGGLE
========================= */

if (languageToggle) {

    languageToggle.addEventListener(
        "click",
        () => {

            if (currentLanguage === "ar") {

                setLanguage("en");

            } else {

                setLanguage("ar");

            }

        }
    );

}


/* =========================
   INITIALIZE
========================= */

updateStaticText();

renderCategories();

renderMenu();