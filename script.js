// Простая "база данных" продуктов
const products = [
  {
    id: 1,
    title: "Smartphone Pixelia X2",
    category: "phone",
    description: "Compact 6.1\" OLED display, clean Android and long battery life.",
    price: 699,
    inStock: true
  },
  {
    id: 2,
    title: "NovaBook Air 14",
    category: "laptop",
    description: "Lightweight 14\" laptop, ideal for studies and remote work.",
    price: 1199,
    inStock: true
  },
  {
    id: 3,
    title: "Aurora Buds Pro",
    category: "accessory",
    description: "Wireless earbuds with active noise cancellation and wireless charging case.",
    price: 149,
    inStock: false
  },
  {
    id: 4,
    title: "Ultravision 27\" 4K Monitor",
    category: "accessory",
    description: "27\" 4K IPS monitor with thin bezels. Great for coding and content creation.",
    price: 389,
    inStock: true
  }
];

const productListEl = document.getElementById("product-list");
const cartItemsCountEl = document.getElementById("cart-items-count");
const cartTotalEl = document.getElementById("cart-total");
// ❌ Ошибка: в HTML id="cartCounter", а тут cart-count
const cartCountEl = document.getElementById("cart-count");

const cart = {
  items: [],
  total: 0
};

function renderProducts(list) {
  if (!productListEl) return;

  productListEl.innerHTML = "";

  list.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    // ❌ id должен быть уникальным, а здесь сильно не нужен
    card.id = "product-card";

    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = product.title;

    const category = document.createElement("div");
    category.className = "product-category";
    category.textContent = product.category.toUpperCase();

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;

    const price = document.createElement("div");
    price.className = "product-price";
    price.textContent = `$${product.price.toFixed(2)}`;

    const actions = document.createElement("div");
    actions.className = "product-actions";

    const stockBadge = document.createElement("span");
    stockBadge.className = "badge";
    stockBadge.textContent = product.inStock ? "In stock" : "Out of stock";

    const addButton = document.createElement("button");
    addButton.className = "btn btn-primary btn-sm";
    addButton.textContent = "Add to cart";

    // ❌ намеренная несогласованность:
    // для одного продукта забудем data-id -> клик по нему сломает addToCar
