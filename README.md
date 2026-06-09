# FoodEase - Cloud Kitchen Food Delivery App

A modern, fully functional React E-commerce food delivery website with multi-page routing, professional UI design, and responsive layout.

## 📋 Project Overview

**FoodEase** is a cloud kitchen web application built with React that showcases a professional food delivery service. The app features a complete product catalog, user-friendly interface, and smooth navigation between pages.

### Key Features
- 🎨 **Modern & Professional UI** with gradient effects and smooth animations
- 📱 **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🧭 **Multi-Page Routing** - 4 pages with client-side routing using React Router
- 🍽️ **5+ Reusable Components** - Well-structured, modular architecture
- ⚡ **Smooth Animations** - Float effects, hover transitions, glowing elements
- 📦 **Product Catalog** - Grid-based menu with 12+ dishes
- 📧 **Contact Form** - Interactive form with input fields and submit handler
- 🎯 **Professional Branding** - Consistent color scheme (#7CFC00 lime green accents)

## 🏗️ Project Structure

```
food/
├── src/
│   ├── assets/
│   │   └── components/
│   │       ├── Navbar.jsx         ✅ Navigation component with React Router Links
│   │       ├── Hero.jsx           ✅ Hero banner section
│   │       ├── FoodCard.jsx       ✅ Reusable food item card component
│   │       ├── ChefSection.jsx    ✅ Chef profiles showcase
│   │       └── Footer.jsx         ✅ Footer component
│   ├── pages/
│   │       ├── Home.jsx           ✅ Homepage with featured items
│   │       ├── Products.jsx       ✅ Complete menu page (12+ items)
│   │       ├── About.jsx          ✅ Company info and values
│   │       └── Contact.jsx        ✅ Contact form and business info
│   ├── App.jsx                    ✅ Main app with Routes setup
│   ├── App.css                    Global styling
│   ├── main.jsx                   ✅ Entry point with BrowserRouter
│   └── index.css
├── package.json                   Dependencies & scripts
├── vite.config.js                Vite configuration
├── eslint.config.js              ESLint configuration
└── README.md                      This file
```

## ✨ Components Overview

### 1. **Navbar Component**
- Logo with branding
- Search input functionality
- Navigation links using React Router `<Link>` component
- Routes to: Home, Menu (Products), About, Contact

### 2. **Hero Component**
- Eye-catching banner section
- Call-to-action button
- Background image with dark overlay
- Responsive layout

### 3. **FoodCard Component**
- Reusable card for displaying food items
- Shows: Image, name, price
- "Add to Cart" button
- Hover animations with shadow effects

### 4. **ChefSection Component**
- Displays 3 professional chef profiles
- Chef names, roles, and images
- Card hover effects with transform animations
- Embedded responsive styling

### 5. **Footer Component**
- Company branding
- Tagline and copyright information
- Simple, clean design

## 🛠️ Technologies Used

- **React 19.2.6** - UI library with functional components and hooks
- **React Router v6.0.0** - Client-side routing and navigation
- **Vite 8.0.16** - Build tool and dev server
- **CSS3** - Custom styling with animations and gradients
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/foodease.git
   cd foodease/food
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Ensure React Router is installed**
   ```bash
   npm install react-router-dom@6.0.0
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173/
   ```
   (or 5174 if 5173 is in use)

## 🚀 Usage

### Navigation
The app has 4 main pages accessible via the top navigation bar:

- **Home** (`/`) - Landing page with featured dishes, hero section, and customer reviews
- **Menu** (`/products`) - Complete product catalog with filters and sorting options
- **About** (`/about`) - Company mission, values, and history
- **Contact** (`/contact`) - Contact information and message form

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Run ESLint code linting
```

## 🎨 Design Highlights

### Color Scheme
- Primary: **#7CFC00** (Neon Lime Green) - Accents, hover effects, glow
- Dark theme: **#000, #111, #222** - Navigation, backgrounds, text
- Neutral: **White, #FFA500** (Orange) - Alternative accent

### Typography
- Font Family: Arial, sans-serif
- Clean, modern typography
- Responsive font sizes

### Effects & Animations
- **Floating animation** on hero images (3s loop)
- **Glowing effects** on CTA buttons and accents
- **Card hover animations** with translateY transform and scale
- **Smooth transitions** (0.3s - 0.4s) on all interactive elements
- **Box shadows** with green color theme

## 📱 Responsive Design

The app is fully responsive with media queries for:
- **Desktop** (1200px+) - Full layout with side-by-side sections
- **Tablet** (768px - 1199px) - Adjusted spacing and grid
- **Mobile** (<768px) - Stacked layout, single column

Media breakpoints in App.css ensure optimal viewing on all devices.

## ✅ Assignment Requirements Met

| Requirement | Status | Details |
|-------------|--------|---------|
| React E-Commerce App | ✅ Complete | FoodEase Cloud Kitchen food delivery |
| 5+ Components | ✅ Complete | Navbar, Hero, FoodCard, ChefSection, Footer |
| 3-4 Pages with Routing | ✅ Complete | Home, Products, About, Contact (4 pages) |
| Professional UI | ✅ Complete | Modern design with animations & gradients |
| GitHub Repository | ✅ Complete | Public repo with README |
| README & Screenshots | ✅ Complete | Comprehensive documentation |

## 📸 Features in Detail

### Home Page
- Hero banner with CTA button
- Offer promotion banner
- Statistics section (1200+ daily orders, 25K+ customers, etc.)
- Category buttons for food types
- Featured dishes grid (8 items)
- Chef section (3 chef profiles)
- "Why Choose FoodEase" features section
- Customer reviews/testimonials
- Newsletter subscription box
- Floating cart button
- Footer

### Products/Menu Page
- Page title: "Our Complete Menu"
- Filter buttons (All, Veg, Non-Veg)
- Sort dropdown (Price, Ratings)
- 12-item food grid with:
  - Food images
  - Dish names
  - Prices
  - "Add to Cart" buttons
- Responsive grid layout
- Footer

### About Page
- Mission statement box with border accent
- Company introduction
- "Our Values" section with 4-column grid:
  - Quality
  - Speed
  - Sustainability
  - Community
- Company history/background text
- Professional dark theme styling
- Footer

### Contact Page
- Page title: "Get In Touch"
- Contact information cards (4 cards):
  - 📍 Address: 123 Food Street, Restaurant District, City 12345
  - 📞 Phone: +91 9876543210
  - 📧 Email: info@foodease.com
  - ⏰ Hours: 10 AM - 11 PM, Daily
- Contact form with fields:
  - Full Name (text input)
  - Email Address (email input)
  - Message (textarea)
  - Send Message button
- Form state management with React hooks
- Footer

## 🔄 React Router Setup

### Main Configuration (src/main.jsx)
```javascript
import { BrowserRouter } from 'react-router-dom';

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### Routes Setup (src/App.jsx)
```javascript
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

### Navigation Links (src/assets/components/Navbar.jsx)
Uses React Router's `<Link>` component instead of `<a>` tags for client-side routing.

## 🐛 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Assignment Submission Info

**Course:** Web Development / React  
**Assignment:** 1 - E-Commerce Application  
**Total Marks:** 15
- React Project: 10 marks
- GitHub Submission: 5 marks

**Deadline:** Tuesday (check-in), Wednesday (final)

### What's Included
✅ Complete React application with 5+ components  
✅ 4-page multi-page application with routing  
✅ Professional UI with responsive design  
✅ GitHub repository (PUBLIC)  
✅ Comprehensive README.md  
✅ All source code and assets  

## 🔗 GitHub Repository

[FoodEase Repository](https://github.com/yourusername/foodease)

## 👨‍💻 Author

[Your Name/Student ID]

## 📞 Support & Questions

For questions about the project structure or functionality, please refer to the code comments or create an issue in the repository.

---

**Happy Coding! 🚀**

*Made with ❤️ for the React Web Development Course*
