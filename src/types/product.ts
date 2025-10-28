export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
  specifications?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
