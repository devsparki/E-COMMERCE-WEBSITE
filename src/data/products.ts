import { Product } from '@/types/product';
import backpackImg from '@/assets/product-backpack.jpg';
import headphonesImg from '@/assets/product-headphones.jpg';
import tshirtImg from '@/assets/product-tshirt.jpg';
import mugsImg from '@/assets/product-mugs.jpg';
import smartwatchImg from '@/assets/product-smartwatch.jpg';
import sneakersImg from '@/assets/product-sneakers.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Minimal Leather Backpack',
    description: 'Premium full-grain leather backpack with laptop compartment',
    price: 189.99,
    originalPrice: 249.99,
    image: backpackImg,
    category: 'bags',
    badge: 'sale',
    rating: 4.8,
    reviews: 124,
  },
  {
    id: '2',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium audio with active noise cancellation',
    price: 299.99,
    image: headphonesImg,
    category: 'electronics',
    badge: 'new',
    rating: 4.9,
    reviews: 89,
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Sustainably sourced, ultra-soft cotton tee',
    price: 29.99,
    image: tshirtImg,
    category: 'clothing',
    rating: 4.6,
    reviews: 256,
  },
  {
    id: '4',
    name: 'Ceramic Coffee Mug Set',
    description: 'Handcrafted ceramic mugs, set of 4',
    price: 49.99,
    image: mugsImg,
    category: 'home',
    rating: 4.7,
    reviews: 78,
  },
  {
    id: '5',
    name: 'Smart Watch Series X',
    description: 'Fitness tracking with advanced health monitoring',
    price: 399.99,
    image: smartwatchImg,
    category: 'electronics',
    badge: 'new',
    rating: 4.8,
    reviews: 167,
  },
  {
    id: '6',
    name: 'Canvas Sneakers',
    description: 'Eco-friendly canvas sneakers with rubber sole',
    price: 79.99,
    originalPrice: 99.99,
    image: sneakersImg,
    category: 'footwear',
    badge: 'sale',
    rating: 4.5,
    reviews: 203,
  },
];
