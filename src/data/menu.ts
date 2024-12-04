import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Carpaccio di Manzo",
    description: "Sottili fette di manzo con rucola, parmigiano e tartufo nero",
    price: 18,
    category: "antipasti",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 2,
    name: "Ravioli al Tartufo",
    description: "Pasta fresca ripiena di ricotta e tartufo nero",
    price: 24,
    category: "primi",
    image: "https://images.unsplash.com/photo-1587740908075-9e245c453e89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 3,
    name: "Filetto di Manzo",
    description: "Filetto di manzo alla griglia con riduzione al Barolo",
    price: 32,
    category: "secondi",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e604?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 4,
    name: "Tiramisù",
    description: "Classico tiramisù fatto in casa",
    price: 12,
    category: "dolci",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];