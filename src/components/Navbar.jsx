import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, ShoppingBag, X } from "lucide-react";
import DarkMode from "./DarkMode";

const links = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#Shop" },
  { label: "Our story", href: "#about" },
  { label: "Contact", href: "#contactus" },
];

const Navbar = ({ handleOrderPopup, cartCount = 0 }) => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return true;
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch {
      // Theme preference is optional; the storefront still works without storage.
    }
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="wadhaya-header">
      <div className="wadhaya-topline">
        <span>CRAFTED IN THE SPIRIT OF ARABIAN LUXURY</span>
        <span className="wadhaya-topline-ar" lang="ar" dir="rtl">عبقٌ يروي حكاية</span>
      </div>
      <nav className="wadhaya-nav" aria-label="Main navigation">
        <a href="#home" className="wadhaya-wordmark" aria-label="Wadhaya home" onClick={closeMenu}>
          <span className="wadhaya-wordmark-ar" lang="ar">وَضَايَا</span>
          <span className="wadhaya-wordmark-en">WADHAYA</span>
        </a>

        <div className={`wadhaya-nav-links ${menuOpen ? "is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <button className="wadhaya-mobile-order" onClick={() => { closeMenu(); handleOrderPopup(); }}>
            Shop now <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="wadhaya-nav-actions">
          <div className="wadhaya-theme-control" aria-label="Theme preference">
            <DarkMode darkMode={darkMode} toggleDarkMode={() => setDarkMode((value) => !value)} />
          </div>
          <button className="wadhaya-bag-button" onClick={handleOrderPopup} aria-label="Open order panel">
            <ShoppingBag size={19} strokeWidth={1.6} />
            <span>Order</span>
            {cartCount > 0 && <span className="wadhaya-cart-count" aria-label={`${cartCount} items in bag`}>{cartCount}</span>}
          </button>
          <button className="wadhaya-menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
