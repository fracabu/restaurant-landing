export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'antipasti' | 'primi' | 'secondi' | 'dolci';
  image?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
}