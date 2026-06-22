export interface Product {
  id: number;
  title: string;
  category: 'electronics' | 'motors' | 'fashion' | 'collectibles';
  price: number;
  type: 'buy' | 'bid';
  image: string;
  shipping: string;
  bids?: number;
}

export type ActiveCategory = 'all' | 'about' | 'electronics' | 'motors' | 'fashion' | 'collectibles';