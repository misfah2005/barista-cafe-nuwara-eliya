const menuItems = [
  { name: 'Espresso', description: 'Deep, rich, and smooth with a velvety crema.', price: 'LKR 500', category: 'Coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Cappuccino', description: 'Silky milk, bold espresso, and a cocoa finish.', price: 'LKR 680', category: 'Coffee', image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Café Latte', description: 'A mellow espresso base finished with creamy foam.', price: 'LKR 720', category: 'Coffee', image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Americano', description: 'A bold black coffee with gentle warmth.', price: 'LKR 580', category: 'Coffee', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Mocha', description: 'Chocolate indulgence paired with smooth espresso.', price: 'LKR 760', category: 'Coffee', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Black Tea', description: 'Classic steeped tea for a comforting reset.', price: 'LKR 420', category: 'Tea', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Green Tea', description: 'Light, fresh, and naturally soothing.', price: 'LKR 450', category: 'Tea', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Milk Tea', description: 'Creamy tea with a lingering sweet finish.', price: 'LKR 480', category: 'Tea', image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Special Tea', description: 'A signature house blend with aromatic notes.', price: 'LKR 620', category: 'Tea', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Iced Coffee', description: 'Chilled, smooth, and refreshing any time of day.', price: 'LKR 690', category: 'Cold Beverages', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Iced Latte', description: 'Cool comfort with a creamy espresso finish.', price: 'LKR 760', category: 'Cold Beverages', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Milkshake', description: 'Rich, blended, and indulgent with seasonal toppings.', price: 'LKR 780', category: 'Cold Beverages', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Fresh Juice', description: 'Garden-fresh fruit blends with natural sweetness.', price: 'LKR 640', category: 'Cold Beverages', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Club Sandwich', description: 'Crisp and layered with savory fillings.', price: 'LKR 980', category: 'Food', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Signature Burger', description: 'Grilled patty, melted cheddar, and fresh toppings.', price: 'LKR 1,240', category: 'Food', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Creamy Pasta', description: 'Comforting pasta served with a rich house sauce.', price: 'LKR 1,180', category: 'Food', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Breakfast Platter', description: 'A warm, satisfying start to the day.', price: 'LKR 1,060', category: 'Food', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Classic Cake', description: 'Soft sponge, sweet cream, and delicate texture.', price: 'LKR 640', category: 'Desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Brownie', description: 'Dense, chocolatey, and perfectly indulgent.', price: 'LKR 540', category: 'Desserts', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Cheesecake', description: 'Creamy, smooth, and delightfully rich.', price: 'LKR 720', category: 'Desserts', image: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&w=900&q=80', available: true },
  { name: 'Pastry Basket', description: 'A mix of flaky favorites with a café touch.', price: 'LKR 650', category: 'Desserts', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80', available: true }
];

const galleryItems = [
  { title: 'Café Corner', category: 'Café', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Fresh Brew', category: 'Coffee', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Breakfast Table', category: 'Food', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Dessert Moment', category: 'Desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80' },
  { title: 'Interior Styling', category: 'Interior', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Exterior View', category: 'Exterior', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Hill Country Calm', category: 'Nuwara Eliya atmosphere', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Golden Hour Coffee', category: 'Coffee', image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80' }
];

const serviceCards = [
  { title: 'Dine-in', icon: '☕', text: 'Relaxed seating and a welcoming atmosphere for slow mornings and evenings.' },
  { title: 'Takeaway', icon: '🛍️', text: 'Grab a fresh brew or favorite pastry made just the way you like it.' },
  { title: 'Coffee', icon: '☕', text: 'Crafted espresso, mellow lattes, and barista-made blends from dawn to dusk.' },
  { title: 'Breakfast', icon: '🥐', text: 'Light, nourishing dishes to spark the day in the cool highland air.' },
  { title: 'Lunch', icon: '🍽️', text: 'Fresh plates, indulgent bites, and satisfying choices for every appetite.' },
  { title: 'Desserts', icon: '🍰', text: 'Sweet finishes with cakes, brownies, and pastries to share.' },
  { title: 'Beverages', icon: '🥤', text: 'From tea to cold blends, we serve refreshment with every mood.' },
  { title: 'Table reservations', icon: '📅', text: 'Reserve a cozy table for family catch-ups, dates, and special moments.' },
  { title: 'Customer service', icon: '🤝', text: 'Friendly, attentive support that keeps every visit memorable.' }
];

const reviews = [
  { name: 'Anika', text: 'Beautiful coffee, warm service, and a view that feels like a holiday. Definitely worth a visit.' },
  { name: 'Ravi', text: 'The breakfast and espresso are excellent. The place has a calm, premium vibe.' },
  { name: 'Nethmi', text: 'Perfect for catching up with friends. The desserts and tea menu were a pleasant surprise.' },
  { name: 'Kasun', text: 'One of the best coffee experiences in Nuwara Eliya. Cozy atmosphere and quick service.' }
];

const app = document.querySelector('#app');

function createMarkup() {
  return `
    <header class="site-header">
      <div class="container nav-wrap">
        <a href="#home" class="brand" aria-label="Barista Café home">
          <span class="brand-mark">B</span>
          <span>
            <strong>Barista</strong>
            <small>Café</small>
          </span>
        </a>
        <button class="nav-toggle" aria-label="Open navigation menu">☰</button>
        <nav class="main-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a href="#booking">Booking</a>
          <a href="#auth">Login</a>
          <a href="#dashboard">Dashboard</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="home" class="hero">
        <div class="hero-overlay"></div>
        <div class="container hero-grid">
          <div class="hero-copy reveal">
            <p class="eyebrow">Freshly brewed in the hills</p>
            <h1>Warm coffee. Better moments.</h1>
            <p class="hero-text">
              A refined café experience in Nuwara Eliya, serving handcrafted coffee, comforting food, and slow-living energy against a cool mountain backdrop.
            </p>
            <div class="hero-actions">
              <a href="#menu" class="btn btn-primary">View Menu</a>
              <a href="#booking" class="btn btn-secondary">Book a Table</a>
            </div>
            <div class="hero-meta">
              <div><strong>4.9/5</strong><span>Guest rating</span></div>
              <div><strong>12+</strong><span>Signature drinks</span></div>
              <div><strong>7am–10pm</strong><span>Open daily</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="welcome section">
        <div class="container intro-grid">
          <div class="section-heading reveal">
            <p class="eyebrow accent">Welcome</p>
            <h2>Designed for slow mornings and memorable evenings.</h2>
          </div>
          <div class="intro-copy reveal">
            <p>
              At Barista Café, we blend the calm of Nuwara Eliya with an elevated café culture. Each visit brings together exceptional coffee, quality ingredients, and a setting that encourages people to pause, connect, and enjoy the moment.
            </p>
          </div>
        </div>
      </section>

      <section class="popular section alt-bg">
        <div class="container">
          <div class="section-heading center reveal">
            <p class="eyebrow accent">Popular picks</p>
            <h2>Favorites guests come back for</h2>
          </div>
          <div class="popular-grid" id="popular-grid"></div>
        </div>
      </section>

      <section id="about" class="about section">
        <div class="container about-grid">
          <div class="about-image reveal">
            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80" alt="Barista making coffee indoors" />
          </div>
          <div class="about-copy reveal">
            <p class="eyebrow accent">About us</p>
            <h2>Crafting coffee, meals, and experiences with heart.</h2>
            <p>
              Barista Café brings together the charm of Nuwara Eliya and the passion of a modern coffee house. We focus on warm hospitality, carefully prepared food, and a welcoming atmosphere that feels both elevated and easygoing.
            </p>
            <div class="feature-list">
              <div>
                <strong>Coffee experience</strong>
                <span>Thoughtfully prepared brews made for every mood.</span>
              </div>
              <div>
                <strong>Food experience</strong>
                <span>Comforting dishes and signature flavors with a fresh, homemade touch.</span>
              </div>
              <div>
                <strong>Customer experience</strong>
                <span>Service that feels personal, attentive, and genuinely welcoming.</span>
              </div>
            </div>
            <div class="mission-box">
              <h3>Our mission</h3>
              <p>To create a memorable café destination where great taste, genuine hospitality, and the beauty of the highlands meet.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="services section alt-bg">
        <div class="container">
          <div class="section-heading center reveal">
            <p class="eyebrow accent">Services</p>
            <h2>Everything your café moment needs</h2>
          </div>
          <div class="service-grid" id="service-grid"></div>
        </div>
      </section>

      <section id="menu" class="menu section">
        <div class="container">
          <div class="section-heading center reveal">
            <p class="eyebrow accent">Menu</p>
            <h2>Signature favorites and house classics</h2>
          </div>
          <div class="menu-toolbar reveal">
            <div class="filter-row" id="filter-row"></div>
            <label class="search-box">
              <span>Search</span>
              <input type="search" id="menu-search" placeholder="Search menu items" />
            </label>
          </div>
          <div class="menu-grid" id="menu-grid"></div>
        </div>
      </section>

      <section id="gallery" class="gallery section alt-bg">
        <div class="container">
          <div class="section-heading center reveal">
            <p class="eyebrow accent">Gallery</p>
            <h2>A glimpse of our atmosphere</h2>
          </div>
          <div class="gallery-toolbar reveal">
            <div class="filter-row" id="gallery-filter-row"></div>
          </div>
          <div class="gallery-grid" id="gallery-grid"></div>
        </div>
      </section>

      <section class="experience section">
        <div class="container experience-grid">
          <div class="experience-copy reveal">
            <p class="eyebrow accent">Why choose us</p>
            <h2>Thoughtful service in a setting made to linger.</h2>
            <ul class="check-list">
              <li>Handcrafted beverages prepared with care.</li>
              <li>Fresh ingredients and flavor-focused café dishes.</li>
              <li>Warm, attentive service from the first sip to the last.</li>
              <li>An elegant hill-country atmosphere built for connection.</li>
            </ul>
          </div>
          <div class="experience-cards reveal">
            <div class="mini-card">
              <strong>Premium ingredients</strong>
              <span>Freshly sourced, carefully selected, and consistently delicious.</span>
            </div>
            <div class="mini-card accent-card">
              <strong>Design-forward space</strong>
              <span>A relaxed and stylish environment for every kind of visit.</span>
            </div>
          </div>
        </div>
      </section>

      <section class="reviews section alt-bg">
        <div class="container">
          <div class="section-heading center reveal">
            <p class="eyebrow accent">Reviews</p>
            <h2>Guests keep coming back</h2>
          </div>
          <div class="review-grid" id="review-grid"></div>
        </div>
      </section>

      <section id="contact" class="contact section">
        <div class="container contact-grid">
          <div class="contact-panel reveal">
            <p class="eyebrow accent">Visit us</p>
            <h2>Find your favorite café spot in Nuwara Eliya.</h2>
            <div class="contact-item"><span>📍</span><div><strong>Location</strong><p>Highland Road, Nuwara Eliya, Sri Lanka</p></div></div>
            <div class="contact-item"><span>📞</span><div><strong>Phone</strong><p>+94 52 234 5678</p></div></div>
            <div class="contact-item"><span>✉️</span><div><strong>Email</strong><p>hello@baristacafe.lk</p></div></div>
          </div>
          <div class="cta-panel reveal">
            <p class="eyebrow accent">Quick booking</p>
            <h3>Reserve your table for a morning coffee or evening catch-up.</h3>
            <a href="#booking" class="btn btn-primary">Book a Table</a>
          </div>
        </div>
      </section>

      <section id="booking" class="booking section">
        <div class="container booking-wrap">
          <div class="section-heading reveal">
            <p class="eyebrow accent">Table booking</p>
            <h2>Reserve your ideal seat</h2>
          </div>
          <form id="booking-form" class="booking-form reveal" novalidate>
            <div class="form-grid">
              <label>
                <span>Customer name</span>
                <input type="text" name="name" placeholder="Your full name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="+94 77 123 4567" required />
              </label>
              <label>
                <span>Date</span>
                <input type="date" name="date" required />
              </label>
              <label>
                <span>Time</span>
                <input type="time" name="time" min="07:00" max="21:00" required />
              </label>
              <label>
                <span>Guests</span>
                <select name="guests" required>
                  <option value="">Select guests</option>
                  <option>2</option>
                  <option>4</option>
                  <option>6</option>
                  <option>8</option>
                  <option>10+</option>
                </select>
              </label>
            </div>
            <label>
              <span>Special request</span>
              <textarea name="request" rows="4" placeholder="Optional notes for seating, occasion, or preferences"></textarea>
            </label>
            <div class="booking-actions">
              <button type="submit" class="btn btn-primary">Confirm Booking</button>
              <p id="booking-status" class="form-status" aria-live="polite"></p>
            </div>
          </form>
        </div>
      </section>

      <section id="auth" class="auth section alt-bg">
        <div class="container auth-shell reveal">
          <div class="auth-card tabs-wrap">
            <div class="tab-buttons">
              <button class="tab-button active" data-tab="login">Login</button>
              <button class="tab-button" data-tab="register">Register</button>
            </div>
            <div class="tab-panel active" id="login-panel">
              <form class="auth-form" id="login-form">
                <label>
                  <span>Email</span>
                  <input type="email" name="loginEmail" placeholder="your@email.com" required />
                </label>
                <label>
                  <span>Password</span>
                  <input type="password" name="loginPassword" placeholder="Enter your password" required />
                </label>
                <button type="submit" class="btn btn-primary">Login</button>
              </form>
            </div>
            <div class="tab-panel" id="register-panel">
              <form class="auth-form" id="register-form">
                <div class="form-grid compact-grid">
                  <label>
                    <span>Full name</span>
                    <input type="text" name="fullName" placeholder="Your full name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" name="registerEmail" placeholder="you@example.com" required />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input type="tel" name="phone" placeholder="+94 77 123 4567" required />
                  </label>
                  <label>
                    <span>Password</span>
                    <input type="password" name="registerPassword" placeholder="Create password" required />
                  </label>
                </div>
                <label>
                  <span>Confirm password</span>
                  <input type="password" name="confirmPassword" placeholder="Repeat password" required />
                </label>
                <button type="submit" class="btn btn-primary">Create Account</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" class="dashboard section">
        <div class="container dashboard-grid">
          <div class="dashboard-panel reveal">
            <p class="eyebrow accent">User dashboard</p>
            <h2>Welcome back, Maya</h2>
            <div class="stat-grid">
              <div class="stat-card">
                <span>Bookings</span>
                <strong>08</strong>
              </div>
              <div class="stat-card">
                <span>Reward points</span>
                <strong>240</strong>
              </div>
              <div class="stat-card">
                <span>Favorites</span>
                <strong>12</strong>
              </div>
            </div>
            <div class="list-block">
              <h3>Upcoming visits</h3>
              <ul>
                <li><span>Sat, 7:30 PM</span><strong>Table for 2</strong></li>
                <li><span>Mon, 9:00 AM</span><strong>Breakfast reservation</strong></li>
              </ul>
            </div>
          </div>

          <div class="dashboard-panel reveal admin-panel">
            <p class="eyebrow accent">Admin dashboard</p>
            <h2>Operations overview</h2>
            <div class="stat-grid">
              <div class="stat-card">
                <span>Today</span>
                <strong>34</strong>
              </div>
              <div class="stat-card">
                <span>Orders</span>
                <strong>76</strong>
              </div>
              <div class="stat-card">
                <span>Revenue</span>
                <strong>LKR 48k</strong>
              </div>
            </div>
            <div class="list-block">
              <h3>Recent bookings</h3>
              <ul>
                <li><span>08:00 AM</span><strong>2 guests — window seat</strong></li>
                <li><span>09:15 AM</span><strong>4 guests — brunch table</strong></li>
                <li><span>07:30 PM</span><strong>6 guests — birthday setup</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <div>
          <a href="#home" class="brand footer-brand">
            <span class="brand-mark">B</span>
            <span><strong>Barista</strong><small>Café</small></span>
          </a>
        </div>
        <div class="footer-links">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© 2026 Barista Café. Crafted for memorable moments.</p>
      </div>
    </footer>

    <div class="lightbox" id="lightbox" aria-hidden="true">
      <button class="lightbox-close" aria-label="Close image view">×</button>
      <img src="" alt="Expanded gallery item" />
    </div>
  `;
}

function renderPopular() {
  const popular = menuItems.slice(0, 4);
  const container = document.querySelector('#popular-grid');
  container.innerHTML = popular.map(item => `
    <article class="product-card reveal">
      <div class="product-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="product-body">
        <header>
          <h3>${item.name}</h3>
          <span>${item.price}</span>
        </header>
        <p>${item.description}</p>
      </div>
    </article>
  `).join('');
}

function renderServices() {
  const grid = document.querySelector('#service-grid');
  grid.innerHTML = serviceCards.map(service => `
    <article class="service-card reveal">
      <div class="service-icon">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.text}</p>
    </article>
  `).join('');
}

function renderReviews() {
  const container = document.querySelector('#review-grid');
  container.innerHTML = reviews.map(review => `
    <article class="review-card reveal">
      <div class="stars">★★★★★</div>
      <p>“${review.text}”</p>
      <strong>${review.name}</strong>
    </article>
  `).join('');
}

function renderFilters() {
  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  const filterRow = document.querySelector('#filter-row');
  filterRow.innerHTML = categories.map((category, index) => `
    <button class="filter-chip ${index === 0 ? 'active' : ''}" data-menu-filter="${category}">${category}</button>
  `).join('');

  const galleryCategories = ['All', ...new Set(galleryItems.map(item => item.category))];
  const galleryFilterRow = document.querySelector('#gallery-filter-row');
  galleryFilterRow.innerHTML = galleryCategories.map((category, index) => `
    <button class="filter-chip ${index === 0 ? 'active' : ''}" data-gallery-filter="${category}">${category}</button>
  `).join('');
}

function renderMenu(searchTerm = '', filter = 'All') {
  const menuGrid = document.querySelector('#menu-grid');
  const filtered = menuItems.filter(item => {
    const matchesFilter = filter === 'All' || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  menuGrid.innerHTML = filtered.map(item => `
    <article class="menu-card reveal">
      <div class="menu-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <span class="badge ${item.available ? 'available' : 'unavailable'}">${item.available ? 'Available' : 'Sold out'}</span>
      </div>
      <div class="menu-body">
        <header>
          <h3>${item.name}</h3>
          <span>${item.price}</span>
        </header>
        <p>${item.description}</p>
      </div>
    </article>
  `).join('');
}

function renderGallery(filter = 'All') {
  const galleryGrid = document.querySelector('#gallery-grid');
  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter);

  galleryGrid.innerHTML = filtered.map((item, index) => `
    <button class="gallery-item reveal" data-index="${index}" aria-label="Open ${item.title} image">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <span>${item.title}</span>
    </button>
  `).join('');

  galleryGrid.querySelectorAll('.gallery-item').forEach(button => {
    button.addEventListener('click', () => {
      const idx = Number(button.dataset.index);
      const item = filtered[idx];
      const lightbox = document.querySelector('#lightbox');
      const img = lightbox.querySelector('img');
      img.src = item.image;
      img.alt = item.title;
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });
}

function setupInteractions() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });

  document.addEventListener('click', (event) => {
    const lightbox = document.querySelector('#lightbox');
    if (event.target === lightbox) {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });

  document.querySelector('.lightbox-close').addEventListener('click', () => {
    const lightbox = document.querySelector('#lightbox');
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
  });

  document.querySelector('#menu-search').addEventListener('input', (event) => {
    const filter = document.querySelector('.filter-chip.active[data-menu-filter]')?.dataset.menuFilter || 'All';
    renderMenu(event.target.value, filter);
  });

  document.body.addEventListener('click', (event) => {
    const menuChip = event.target.closest('[data-menu-filter]');
    if (menuChip) {
      document.querySelectorAll('[data-menu-filter]').forEach(btn => btn.classList.remove('active'));
      menuChip.classList.add('active');
      const filter = menuChip.dataset.menuFilter;
      renderMenu(document.querySelector('#menu-search').value, filter);
    }

    const galleryChip = event.target.closest('[data-gallery-filter]');
    if (galleryChip) {
      document.querySelectorAll('[data-gallery-filter]').forEach(btn => btn.classList.remove('active'));
      galleryChip.classList.add('active');
      renderGallery(galleryChip.dataset.galleryFilter);
    }

    const tabButton = event.target.closest('.tab-button');
    if (tabButton) {
      const tab = tabButton.dataset.tab;
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.toggle('active', btn === tabButton));
      document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.toggle('active', panel.id === `${tab}-panel`));
    }
  });

  document.querySelector('#booking-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = document.querySelector('#booking-status');
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const phone = (data.get('phone') || '').toString().trim();
    const date = data.get('date');
    const time = data.get('time');
    const guests = data.get('guests');

    const now = new Date();
    const bookingDate = date ? new Date(`${date}T00:00:00`) : null;

    if (!name || !email || !phone || !date || !time || !guests) {
      status.textContent = 'Please complete all required booking details.';
      status.style.color = '#c76d4a';
      return;
    }

    if (bookingDate && bookingDate < new Date(now.toDateString())) {
      status.textContent = 'Please choose a future date for your reservation.';
      status.style.color = '#c76d4a';
      return;
    }

    if (time < '07:00' || time > '21:00') {
      status.textContent = 'Reservations are available between 7:00 AM and 9:00 PM.';
      status.style.color = '#c76d4a';
      return;
    }

    status.textContent = `Thank you, ${name}! Your reservation for ${guests} guests on ${date} at ${time} has been received.`;
    status.style.color = '#98d6a6';
    form.reset();
  });

  document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.currentTarget.querySelector('[name="loginEmail"]').value.trim();
    if (!email) return;
    alert(`Welcome back! You are logged in as ${email}.`);
    event.currentTarget.reset();
  });

  document.querySelector('#register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const password = form.querySelector('[name="registerPassword"]').value;
    const confirm = form.querySelector('[name="confirmPassword"]').value;
    if (password !== confirm) {
      alert('Passwords do not match. Please try again.');
      return;
    }
    alert('Your account has been created successfully.');
    form.reset();
  });

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    header.classList.toggle('scrolled', window.scrollY > 10);
  });
}

function init() {
  app.innerHTML = createMarkup();
  renderPopular();
  renderServices();
  renderFilters();
  renderMenu();
  renderGallery();
  renderReviews();
  setupInteractions();
}

init();
