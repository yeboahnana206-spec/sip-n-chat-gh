import brownSugar from "@/assets/drinks/brown-sugar.jpg";
import caramel from "@/assets/drinks/caramel.jpg";
import chocolate from "@/assets/drinks/chocolate.jpg";
import oreoCrumble from "@/assets/drinks/oreo-crumble.jpg";
import vanillaSilk from "@/assets/drinks/vanilla-silk.jpg";
import matcha from "@/assets/drinks/matcha.jpg";
import jasmine from "@/assets/drinks/jasmine.jpg";
import classic from "@/assets/drinks/classic.jpg";
import espresso from "@/assets/drinks/espresso.jpg";
import cocoOreo from "@/assets/drinks/coco-oreo.jpg";
import vanillaOreo from "@/assets/drinks/vanilla-oreo.jpg";
import taro from "@/assets/drinks/taro.jpg";
import taroVanilla from "@/assets/drinks/taro-vanilla.jpg";
import taroOreo from "@/assets/drinks/taro-oreo.jpg";
import taroCoconut from "@/assets/drinks/taro-coconut.jpg";
import taroStrawberry from "@/assets/drinks/taro-strawberry.jpg";
import chocoCheese from "@/assets/drinks/choco-cheese.jpg";
import iceTaroCheese from "@/assets/drinks/ice-taro-cheese.jpg";
import brownSugarCheese from "@/assets/drinks/brown-sugar-cheese.jpg";
import iceBlackOreoCheese from "@/assets/drinks/ice-black-oreo-cheese.jpg";

export type Drink = {
  id: string;
  name: string;
  large: number;
  medium: number;
  image: string;
  bestSeller?: boolean;
};

export type MenuCategory = {
  id: string;
  emoji: string;
  title: string;
  tagline: string;
  drinks: Drink[];
};

export const MENU: MenuCategory[] = [
  {
    id: "milk-tea",
    emoji: "🧋",
    title: "Signature Milk Tea Boba",
    tagline: "Our house classics — creamy, chewy, unforgettable.",
    drinks: [
      { id: "brown-sugar", name: "Brown Sugar Milk Tea Boba", large: 55, medium: 45, image: brownSugar, bestSeller: true },
      { id: "caramel", name: "Caramel Milk Tea Boba", large: 55, medium: 45, image: caramel },
      { id: "chocolate", name: "Chocolate Milk Tea Boba", large: 55, medium: 45, image: chocolate },
      { id: "oreo-crumble", name: "Oreo Crumble Milk Tea Boba", large: 58, medium: 48, image: oreoCrumble, bestSeller: true },
      { id: "vanilla-silk", name: "Vanilla Silk Milk Tea Boba", large: 55, medium: 45, image: vanillaSilk },
      { id: "matcha", name: "Matcha Milk Tea Boba", large: 55, medium: 45, image: matcha },
      { id: "jasmine", name: "Jasmine Milk Tea Boba", large: 55, medium: 45, image: jasmine },
      { id: "classic", name: "Classic Milk Tea Boba", large: 55, medium: 45, image: classic },
      { id: "espresso", name: "Espresso Milk Tea Boba", large: 55, medium: 45, image: espresso },
      { id: "coco-oreo", name: "Coco Oreo Milk Tea Boba", large: 58, medium: 48, image: cocoOreo },
      { id: "vanilla-oreo", name: "Vanilla Oreo Milk Tea Boba", large: 58, medium: 48, image: vanillaOreo },
    ],
  },
  {
    id: "taro",
    emoji: "💜",
    title: "Taro Delight Boba",
    tagline: "Purple, dreamy, dangerously smooth.",
    drinks: [
      { id: "taro", name: "Taro Milk Tea Boba", large: 55, medium: 45, image: taro, bestSeller: true },
      { id: "taro-vanilla", name: "Taro Vanilla Milk Tea Boba", large: 58, medium: 48, image: taroVanilla },
      { id: "taro-oreo", name: "Taro Oreo Milk Tea Boba", large: 58, medium: 48, image: taroOreo },
      { id: "taro-coconut", name: "Taro Coconut Milk Tea Boba", large: 58, medium: 48, image: taroCoconut },
      { id: "taro-strawberry", name: "Taro Strawberry Milk Tea Boba", large: 58, medium: 48, image: taroStrawberry },
    ],
  },
  {
    id: "cheese",
    emoji: "🧀",
    title: "Cheese Series Boba",
    tagline: "Salty-sweet cheese foam on top of everything you love.",
    drinks: [
      { id: "choco-cheese", name: "Choco Cheese Latte Boba", large: 65, medium: 55, image: chocoCheese },
      { id: "ice-taro-cheese", name: "Ice Taro Cheese Boba", large: 65, medium: 55, image: iceTaroCheese },
      { id: "brown-sugar-cheese", name: "Brown Sugar Cheese Boba", large: 65, medium: 55, image: brownSugarCheese, bestSeller: true },
      { id: "ice-black-oreo-cheese", name: "Ice Black Oreo Cheese Boba", large: 65, medium: 55, image: iceBlackOreoCheese },
    ],
  },
];

export const TOPPINGS: { name: string; price: number; emoji: string }[] = [
  { name: "Boba Pearls (Tapioca)", price: 5, emoji: "⚫" },
  { name: "Popping Boba", price: 6, emoji: "🫧" },
  { name: "Grass Jelly", price: 5, emoji: "🟢" },
  { name: "Coconut Jelly", price: 5, emoji: "🥥" },
  { name: "Pudding", price: 6, emoji: "🍮" },
  { name: "Red Bean", price: 5, emoji: "🫘" },
  { name: "Aloe Vera", price: 5, emoji: "🌿" },
  { name: "Cheese Foam", price: 8, emoji: "🧀" },
  { name: "Oreo Crumbs", price: 6, emoji: "🍪" },
];

export const REVIEWS = [
  { name: "Ama", stars: 5, text: "Ngl the brown sugar boba here hits different 🙌 been coming back every week" },
  { name: "Kwabena", stars: 5, text: "First time trying taro milk tea and I'm obsessed. Super friendly staff too" },
  { name: "Efua", stars: 5, text: "Ordering through WhatsApp was so easy, drink was ready by the time I got there" },
  { name: "Yaw", stars: 4, text: "The cheese foam ones are unreal, don't sleep on those" },
  { name: "Naa", stars: 5, text: "My go-to spot on Spintex now, quality never drops" },
  { name: "Kojo", stars: 5, text: "Matcha milk tea + extra pearls = happiness in a cup 💚" },
  { name: "Adwoa", stars: 5, text: "Cute lil personalized cup made my whole day fr" },
];

export const WHATSAPP_PRIMARY = "233548787608";
export const WHATSAPP_DISPLAY_PRIMARY = "054 878 7608";
export const WHATSAPP_DISPLAY_SECONDARY = "050 632 4680";

export function buildOrderUrl(drink: string, size?: "Large" | "Medium", price?: number) {
  const sizeStr = size ? `${size} ` : "";
  const priceStr = price ? ` (₵${price})` : "";
  const msg = `Hi bobaman! I'd like to order a ${sizeStr}${drink}${priceStr}. Any toppings I can add: ______`;
  return `https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(msg)}`;
}

export function buildGenericOrderUrl() {
  const msg = `Hi bobaman! I'd love to place an order 🧋 Can you share what's available today?`;
  return `https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(msg)}`;
}
