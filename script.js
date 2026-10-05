/* =========================
   CATEGORIES
========================= */

const categories = [

    {
        id: "classic",
        name: "كلاسيك"
    },

    {
        id: "chicken",
        name: "تشيكن 🍗"
    },

    {
        id: "jreesh",
        name: "جريش و نار 🔥"
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
        name: "جبنة",
        price: 200000,
        category: "classic"
    },

    {
        name: "زعتر بلدي",
        price: 80000,
        category: "classic"
    },

    {
        name: "كشك",
        price: 100000,
        category: "classic"
    },

    {
        name: "كوكتيل (زعتر و جبنة)",
        price: 130000,
        category: "classic"
    },

    {
        name: "بندورة و بصل",
        price: 100000,
        category: "classic"
    },

    {
        name: "بندورة و بصل مع جبنة",
        price: 150000,
        category: "classic"
    },

    {
        name: "كشك مع جبنة",
        price: 150000,
        category: "classic"
    },

    {
        name: "سبانخ و جبنة",
        price: 180000,
        category: "classic"
    },

    {
        name: "زعتر مع خضار",
        price: 100000,
        category: "classic"
    },


    /* =====================
       CHICKEN
    ====================== */

    {
        name: "فاهيتا",
        price: 350000,
        category: "chicken"
    },

    {
        name: "تشيكن ساب",
        price: 350000,
        category: "chicken"
    },

    {
        name: "سبايسي تشكن",
        price: 350000,
        category: "chicken"
    },

    {
        name: "دجاج باربكيو",
        price: 350000,
        category: "chicken"
    },

    {
        name: "دجاج مع صوص حبق",
        price: 350000,
        category: "chicken"
    },


    /* =====================
       JREESH W NAR
    ====================== */

    {
        name: "حبش و جبنة",
        price: 300000,
        category: "jreesh"
    },

    {
        name: "مرتديلا و جبنة",
        price: 300000,
        category: "jreesh"
    },

    {
        name: "حلوم مع صوص حبق",
        price: 250000,
        category: "jreesh"
    },

    {
        name: "سبيسيال جريش و نار",
        price: 250000,
        category: "jreesh"
    },
    
    {
        name: " بيبروني",
        price: 300000,
        category: "jreesh"
    },

    {
        name: " جبنة حرة مع جوز",
        price: 250000,
        category: "jreesh"
    },

    {
        name: " لبنة حرة مع جوز",
        price: 200000,
        category: "jreesh"
    },



];


/* =========================
   DOM ELEMENTS
========================= */

const categoryBar =
    document.getElementById("category-bar");

const menuGrid =
    document.getElementById("menu-grid");


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


    const allButton =
        createCategoryButton(
            "all",
            "الكل",
            currentCategory === "all"
        );


    categoryBar.appendChild(allButton);


    categories.forEach(category => {

        const button =
            createCategoryButton(
                category.id,
                category.name,
                currentCategory === category.id
            );


        categoryBar.appendChild(button);

    });

}


/* =========================
   SET ACTIVE CATEGORY
========================= */

function setActiveCategory(categoryId) {

    currentCategory = categoryId;

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


    card.innerHTML = `

        <div class="item-info">

            <h3>
                ${item.name}
            </h3>

        </div>


        <div class="item-price">

            ${formatPrice(item.price)}

            <span>
                ل.ل
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


    if (filteredItems.length === 0) {

        menuGrid.innerHTML = `

            <div class="empty-state">

                لا يوجد أصناف حالياً

            </div>

        `;

    }

}


/* =========================
   INITIALIZE
========================= */

renderCategories();

renderMenu();