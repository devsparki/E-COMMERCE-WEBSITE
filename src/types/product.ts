export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: 'new' | 'sale';
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}
