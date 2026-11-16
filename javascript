
// =====================================
// SPORTS ZONE - MAIN JAVASCRIPT
// =====================================

// Product database (sample Indian market prices)

const products = [
  {
    id: 1, name: "SG Cricket Bat", brand: "SG",
    category: "Cricket", price: 2499, oldPrice: 2999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500"
  },
  {
    id: 2, name: "Cricket Ball", brand: "SG",
    category: "Cricket", price: 450, oldPrice: 550,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1593766827228-8737b4179a07?w=500"
  },
  {
    id: 3, name: "Football", brand: "Nivia",
    category: "Football", price: 899, oldPrice: 1199,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500"
  },
  {
    id: 4, name: "Football Shoes", brand: "Nike",
    category: "Football", price: 3499, oldPrice: 3999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500"
  },
  {
    id: 5, name: "Basketball", brand: "Cosco",
    category: "Basketball", price: 1299, oldPrice: 1599,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500"
  },
  {
    id: 6, name: "Basketball Shoes", brand: "Nike",
    category: "Basketball", price: 4999, oldPrice: 5499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    id: 7, name: "Badminton Racket", brand: "Yonex",
    category: "Badminton", price: 1799, oldPrice: 2199,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500"
  },
  {
    id: 8, name: "Shuttlecock Pack", brand: "Yonex",
    category: "Badminton", price: 499, oldPrice: 599,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1613918431703-aa2c1b8a2e9c?w=500"
  },
  {
    id: 9, name: "Tennis Racket", brand: "Wilson",
    category: "Tennis", price: 2999, oldPrice: 3499,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=500"
  },
  {
    id: 10, name: "Tennis Balls", brand: "Wilson",
    category: "Tennis", price: 399, oldPrice: 499,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=500"
  },
  {
    id: 11, name: "Volleyball", brand: "Cosco",
    category: "Volleyball", price: 999, oldPrice: 1299,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500"
  },
  {
    id: 12, name: "Boxing Gloves", brand: "Everlast",
    category: "Boxing", price: 1499, oldPrice: 1899,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=500"
  },
  {
    id: 13, name: "Gym Dumbbells", brand: "Decathlon",
    category: "Fitness", price: 1199, oldPrice: 1499,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500"
  },
  {
    id: 14, name: "Yoga Mat", brand: "Decathlon",
    category: "Yoga", price: 699, oldPrice: 899,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c5?w=500"
  },
  {
    id: 15, name: "Swimming Goggles", brand: "Speedo",
    category: "Swimming", price: 799, oldPrice: 999,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500"
  },
  {
    id: 16, name: "Table Tennis Bat", brand: "Stag",
    category: "Table Tennis", price: 899, oldPrice: 1099,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1611251135345-18c56206b863?w=500"
  },
  {
    id: 17, name: "Hockey Stick", brand: "Adidas",
    category: "Hockey", price: 1899, oldPrice: 2299,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500"
  },
  {
    id: 18, name: "Cycling Helmet", brand: "Decathlon",
    category: "Cycling", price: 1299, oldPrice: 1599,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=500"
  },
  {
    id: 19, name: "Running Shoes", brand: "Adidas",
    category: "Running", price: 2999, oldPrice: 3499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    id: 20, name: "Golf Club", brand: "Callaway",
    category: "Golf", price: 4999, oldPrice: 5999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500"
  },
  {
    id: 21, name: "Baseball Bat", brand: "Easton",
    category: "Baseball", price: 1999, oldPrice: 2499,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1508344928928-7165b0f5c0c4?w=500"
  },
  {
    id: 22, name: "Skating Helmet", brand: "Decathlon",
    category: "Skating", price: 999, oldPrice: 1299,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500"
  },
  {
    id: 23, name: "Chess Board", brand: "StonKraft",
    category: "Chess", price: 599, oldPrice: 799,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=500"
  },
  {
    id: 24, name: "Carrom Board", brand: "Synco",
    category: "Carrom", price: 1499, oldPrice: 1799,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1606503153255-59d8b8b8214b?w=500"
  }
];

// =====================================
// STORAGE AND GLOBAL VARIABLES
// =====================================

let currentUser = JSON.parse(localStorage.getItem("sportsUser")) || null;

let cart = JSON.parse(localStorage.getItem("sportsCart")) || [];

let users = JSON.parse(localStorage.getItem("sportsUsers")) || [];

let orders = JSON.parse(localStorage.getItem("sportsOrders")) || [];

let activeCategory = "All";

// Save data

function saveData() {
  localStorage.setItem("sportsCart", JSON.stringify(cart));
  localStorage.setItem("sportsUsers", JSON.stringify(users));
  localStorage.setItem("sportsOrders", JSON.stringify(orders));
}

// Currency formatter

function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}

// =====================================
// PAGE NAVIGATION
// =====================================

const loginPage = document.getElementById("loginPage");
const registerPage = document.getElementById("registerPage");
const appPage = document.getElementById("appPage");

const cartPage = document.getElementById("cartPage");
const checkoutPage = document.getElementById("checkoutPage");
const ordersPage = document.getElementById("ordersPage");

const productsSection = document.querySelector(".products-section");
const categoriesSection = document.querySelector(".categories");
const searchSection = document.querySelector(".search-section");
const heroSection = document.querySelector(".hero");

function showMainPage() {
  loginPage.classList.add("hidden");
  registerPage.classList.add("hidden");
  appPage.classList.remove("hidden");

  showShoppingPage();
  updateProfile();
  renderProducts();
  updateCartCount();
}

function showShoppingPage() {
  cartPage.classList.add("hidden");
  checkoutPage.classList.add("hidden");
  ordersPage.classList.add("hidden");

  productsSection.classList.remove("hidden");
  categoriesSection.classList.remove("hidden");
  searchSection.classList.remove("hidden");
  heroSection.classList.remove("hidden");

  window.scrollTo(0, 0);
}

function showCartPage() {
  productsSection.classList.add("hidden");
  categoriesSection.classList.add("hidden");
  searchSection.classList.add("hidden");
  heroSection.classList.add("hidden");

  checkoutPage.classList.add("hidden");
  ordersPage.classList.add("hidden");
  cartPage.classList.remove("hidden");

  renderCart();
  window.scrollTo(0, 0);
}

// =====================================
// REGISTRATION
// =====================================

document.getElementById("showRegister").addEventListener("click", function(e) {
  e.preventDefault();
  loginPage.classList.add("hidden");
  registerPage.classList.remove("hidden");
});

document.getElementById("showLogin").addEventListener("click", function(e) {
  e.preventDefault();
  registerPage.classList.add("hidden");
  loginPage.classList.remove("hidden");
});

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim().toLowerCase();
  const password = document.getElementById("regPassword").value;

  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    document.getElementById("registerMessage").textContent =
      "This email is already registered!";
    return;
  }

  users.push({
    name: name,
    email: email,
    password: password
  });

  saveData();

  document.getElementById("registerMessage").textContent =
    "Registration successful! Please login.";

  document.getElementById("registerForm").reset();
});

// =====================================
// LOGIN
// =====================================

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    currentUser = {
      name: user.name,
      email: user.email
    };

    localStorage.setItem("sportsUser", JSON.stringify(currentUser));

    document.getElementById("loginMessage").textContent = "";
    document.getElementById("loginForm").reset();

    showMainPage();
  } else {
    document.getElementById("loginMessage").textContent =
      "Invalid email or password. Please register first.";
  }
});

// =====================================
// LOGOUT
// =====================================

document.getElementById("logoutButton").addEventListener("click", function() {
  if (confirm("Are you sure you want to logout?")) {
    currentUser = null;
    localStorage.removeItem("sportsUser");

    appPage.classList.add("hidden");
    loginPage.classList.remove("hidden");

    document.getElementById("profileDropdown").classList.add("hidden");
  }
});

// =====================================
// PROFILE
// =====================================

document.getElementById("profileButton").addEventListener("click", function() {
  document.getElementById("profileDropdown").classList.toggle("hidden");
});

function updateProfile() {
  if (!currentUser) return;

  document.getElementById("headerName").textContent = currentUser.name;
  document.getElementById("profileName").textContent =
    "Name: " + currentUser.name;

  document.getElementById("profileEmail").textContent =
    "Email: " + currentUser.email;
}

document.getElementById("editProfile").addEventListener("click", function() {
  if (!currentUser) return;

  const newName = prompt("Enter your new name:", currentUser.name);

  if (newName && newName.trim()) {
    currentUser.name = newName.trim();

    localStorage.setItem("sportsUser", JSON.stringify(currentUser));

    const user = users.find(u => u.email === currentUser.email);

    if (user) user.name = currentUser.name;

    saveData();
    updateProfile();
  }
});

// =====================================
// CATEGORY DISPLAY
// =====================================

const categories = [
  "All", "Cricket", "Football", "Basketball",
  "Badminton", "Tennis", "Volleyball", "Boxing",
  "Fitness", "Yoga", "Swimming", "Table Tennis",
  "Hockey", "Cycling", "Running", "Golf",
  "Baseball", "Skating", "Chess", "Carrom"
];

function renderCategories() {
  const categoryList = document.getElementById("categoryList");

  categoryList.innerHTML = categories.map(category => `
    <button
      class="category-btn ${activeCategory === category ? "active" : ""}"
      data-category="${category}">
      ${category}
    </button>
  `).join("");
}

document.getElementById("categoryList").addEventListener("click", function(e) {
  const button = e.target.closest("[data-category]");

  if (!button) return;

  activeCategory = button.dataset.category;

  renderCategories();
  renderProducts();
});

// =====================================
// PRODUCT DISPLAY
// =====================================

function renderProducts() {
  const container = document.getElementById("productContainer");

  const searchValue = document.getElementById("searchInput")
    .value.toLowerCase().trim();

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchValue) ||
      product.brand.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue);

    return matchesCategory && matchesSearch;
  });

  document.getElementById("productResult").textContent =
    `${filteredProducts.length} Products Found`;

  if (filteredProducts.length === 0) {
    container.innerHTML = "<h3>No products found!</h3>";
    return;
  }

  container.innerHTML = filteredProducts.map(product => `
    <div class="product-card">

      <img
        src="${product.image}"
        alt="${product.name}"
        onerror="this.src='https://placehold.co/500x350?text=Sports+Product'">

      <div class="product-info">
        <h3>${product.name}</h3>
        <p>Brand: ${product.brand}</p>
        <p>Category: ${product.category}</p>
        <p>⭐ ${product.rating} / 5</p>

        <div class="price">
          ${formatPrice(product.price)}
          <span class="old-price">${formatPrice(product.oldPrice)}</span>
        </div>

        <button class="add-btn" data-add="${product.id}">
          🛒 Add to Cart
        </button>
      </div>

    </div>
  `).join("");
}

// Search functionality

document.getElementById("searchInput").addEventListener("input", function() {
  renderProducts();
});

// Add to cart

document.getElementById("productContainer").addEventListener("click", function(e) {
  const button = e.target.closest("[data-add]");

  if (!button) return;

  addToCart(Number(button.dataset.add));
});

function addToCart(id) {
  const product = products.find(p => p.id === id);

  if (!product) return;

  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveData();
  updateCartCount();

  alert(product.name + " added to your cart!");
}

// =====================================
// CART FUNCTIONALITY
// =====================================

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  document.getElementById("cartCount").textContent = count;
}

document.getElementById("cartButton").addEventListener("click", function() {
  document.getElementById("profileDropdown").classList.add("hidden");
  showCartPage();
});

function renderCart() {
  const cartItems = document.getElementById("cartItems");

  if (cart.length === 0) {
    cartItems.innerHTML = "<h3>Your cart is empty! Start shopping.</h3>";

    document.getElementById("cartSummary").classList.add("hidden");
    return;
  }

  document.getElementById("cartSummary").classList.remove("hidden");

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">

      <img src="${item.image}" alt="${item.name}"
        onerror="this.src='https://placehold.co/200x150?text=Product'">

      <div class="cart-details">
        <h3>${item.name}</h3>
        <p>Price: ${formatPrice(item.price)}</p>

        <div class="quantity-controls">
          <button data-minus="${item.id}">-</button>
          <strong>${item.quantity}</strong>
          <button data-plus="${item.id}">+</button>
        </div>
      </div>

      <div>
        <h3>${formatPrice(item.price * item.quantity)}</h3>
        <button class="remove-btn" data-remove="${item.id}">
          Remove
        </button>
      </div>

    </div>
  `).join("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  document.getElementById("subtotal").textContent = formatPrice(total);
  document.getElementById("total").textContent = formatPrice(total);
}

// Cart quantity and removal buttons

document.getElementById("cartItems").addEventListener("click", function(e) {

  const plus = e.target.closest("[data-plus]");
  const minus = e.target.closest("[data-minus]");
  const remove = e.target.closest("[data-remove]");

  if (plus) {
    const item = cart.find(i => i.id === Number(plus.dataset.plus));
    if (item) item.quantity++;
  }

  if (minus) {
    const item = cart.find(i => i.id === Number(minus.dataset.minus));

    if (item) {
      item.quantity--;

      if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== item.id);
      }
    }
  }

  if (remove) {
    const id = Number(remove.dataset.remove);
    cart = cart.filter(item => item.id !== id);
  }

  saveData();
  updateCartCount();
  renderCart();
});

// Clear entire cart

document.getElementById("clearCart").addEventListener("click", function() {

  if (cart.length === 0) {
    alert("Your cart is already empty!");
    return;
  }

  if (confirm("Are you sure you want to clear all cart products?")) {
    cart = [];

    saveData();
    updateCartCount();
    renderCart();

    alert("Your cart has been cleared!");
  }
});

// Continue shopping

document.getElementById("continueShopping").addEventListener("click", function() {
  showShoppingPage();
});

// =====================================
// CHECKOUT
// =====================================

document.getElementById("checkoutButton").addEventListener("click", function() {

  if (cart.length === 0) {
    alert("Please add products to your cart first!");
    return;
  }

  productsSection.classList.add("hidden");
  categoriesSection.classList.add("hidden");
  searchSection.classList.add("hidden");
  heroSection.classList.add("hidden");

  cartPage.classList.add("hidden");
  ordersPage.classList.add("hidden");
  checkoutPage.classList.remove("hidden");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  document.getElementById("checkoutTotal").textContent =
    formatPrice(total);

  document.getElementById("deliveryName").value = currentUser.name;

  window.scrollTo(0, 0);
});

// Back to cart

document.getElementById("backToCart").addEventListener("click", function() {
  checkoutPage.classList.add("hidden");
  showCartPage();
});

// Place order

document.getElementById("checkoutForm").addEventListener("submit", function(e) {
  e.preventDefault();

  if (cart.length === 0) return;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const order = {
    orderId: "SZ" + Date.now(),
    customer: document.getElementById("deliveryName").value,
    address: document.getElementById("deliveryAddress").value,
    phone: document.getElementById("deliveryPhone").value,
    payment: document.getElementById("paymentMethod").value,
    products: cart.map(item => ({ ...item })),
    total: total,
    date: new Date().toLocaleString(),
    status: "Order Placed"
  };

  orders.push(order);
  saveData();

  cart = [];
  saveData();
  updateCartCount();

  document.getElementById("checkoutForm").reset();

  alert("Order placed successfully! Your Order ID is " + order.orderId);

  showOrdersPage();
});

// =====================================
// ORDER HISTORY
// =====================================

function showOrdersPage() {
  productsSection.classList.add("hidden");
  categoriesSection.classList.add("hidden");
  searchSection.classList.add("hidden");
  heroSection.classList.add("hidden");

  cartPage.classList.add("hidden");
  checkoutPage.classList.add("hidden");
  ordersPage.classList.remove("hidden");

  renderOrders();
  window.scrollTo(0, 0);
}

function renderOrders() {
  const orderList = document.getElementById("orderList");

  if (orders.length === 0) {
    orderList.innerHTML = "<p>No orders found.</p>";
    return;
  }

  orderList.innerHTML = orders
    .slice()
    .reverse()
    .map(order => `
      <div class="order-card">
        <h3>Order ID: ${order.orderId}</h3>
        <p>Date: ${order.date}</p>
        <p>Customer: ${order.customer}</p>
        <p>Payment: ${order.payment}</p>
        <p>Products: ${order.products.map(p =>
          p.name + " × " + p.quantity
        ).join(", ")}</p>
        <h3>Total: ${formatPrice(order.total)}</h3>
        <p>Status: ${order.status}</p>
      </div>
    `).join("");
}

document.getElementById("backFromOrders").addEventListener("click", function() {
  showShoppingPage();
});

// =====================================
// INITIALIZE APPLICATION
// =====================================

renderCategories();

if (currentUser) {
  showMainPage();
} else {
  loginPage.classList.remove("hidden");
  registerPage.classList.add("hidden");
  appPage.classList.add("hidden");
}
document.getElementById("myOrdersButton").addEventListener("click", function() {
  document.getElementById("profileDropdown").classList.add("hidden");
  showOrdersPage();
});
