/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavItem, DesignCard, Partner, ProductCard } from "./types";

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#" },
  { id: "product", label: "Product", href: "#product-section" },
  { id: "about", label: "About", href: "#about" },
  { id: "services", label: "Services", href: "#services" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const DESIGN_CARDS: DesignCard[] = [
  {
    id: "explore",
    indexText: "01",
    title: "Design to explore.",
    imageAlt: "Futuristic dark abstract wireframe",
    tagline: "Uncover new modern paradigms.",
    cardLogoText: "N",
  },
  {
    id: "deliver",
    indexText: "02",
    title: "Zero-to-one craft.",
    imageAlt: "Minimal glowing geometry layout",
    tagline: "Start with simple raw ideas.",
    cardLogoText: "Z",
  },
  {
    id: "sustain",
    indexText: "03",
    title: "Built to last.",
    imageAlt: "Stunning monochromatic grid structure",
    tagline: "Performance meets premium UI.",
    cardLogoText: "Λ",
  },
];

export const PARTNERS_LIST: Partner[] = [
  { id: "fluxora", name: "Fluxora", iconName: "Layers" },
  { id: "scribbble", name: "Scribbble", iconName: "PenTool" },
  { id: "roam", name: "Roam", iconName: "Globe" },
  { id: "kepler", name: "Kepler", iconName: "Compass" },
  { id: "trio", name: "Trio", iconName: "Triangle" },
  { id: "mercury", name: "Mercury", iconName: "Flame" },
  { id: "chrome", name: "Chrome", iconName: "Chrome" },
];

export const PRODUCT_CARDS: ProductCard[] = [
  {
    id: "strategy",
    tag: "Development",
    title: "Website Development",
    description: "Custom-designed websites built for speed, performance, and brand impact. We create modern digital experiences that help your business grow and stand out online.",
    imageUrl: "/src/assets/images/card_strategy_1779554717169.png",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_3E2DXo9TkRfQMuBN1waujBOC2eq/hf_20260525_121459_fe626e40-505b-48d4-ae6c-080525f0e49b.mp4",
    accentColor: "#ffa500",
    isDark: true,
  },
  {
    id: "growth",
    tag: "Interactive",
    title: "Digital Menu for Restaurants",
    description: "Interactive QR code menus designed to improve customer experience, simplify updates, and give your restaurant a premium digital touch.",
    imageUrl: "/src/assets/images/card_growth_1779554733115.png",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_3E2DXo9TkRfQMuBN1waujBOC2eq/hf_20260524_131529_7b531530-c499-4e53-b931-ee3fe904a60a.mp4",
    accentColor: "#ff4400",
    isDark: true,
  },
  {
    id: "creative",
    tag: "Creative",
    title: "QR Business Cards",
    description: "Elegant and creative business cards that instantly connect clients to your website, social media, contact info, or portfolio with one simple scan.",
    imageUrl: "/src/assets/images/card_creative_1779554749747.png",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_3E2DXo9TkRfQMuBN1waujBOC2eq/hf_20260525_124954_91e1904c-2722-4b54-aff4-0e2ec7dd6355.mp4",
    accentColor: "#ff2200",
    isDark: true,
  },
  {
    id: "powerful",
    tag: "Team",
    title: "Development Team",
    description: "Our passionate developers and designers combine strategy, technology, and creativity to build reliable digital solutions tailored to your business goals.",
    imageUrl: "/src/assets/images/powerful_team_1779715898070.png",
    accentColor: "#ff5500",
    isDark: true,
  },
];
