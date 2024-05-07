'use client';
import { useContext, createContext } from 'react';
import { TAB_MENU } from '@/enums/TAB_MENU';
import { Product } from '@/services/types/Product.ts';

interface ContextProps {
  activeTab: string;
  setActiveTab: (newValue: TAB_MENU) => void;
  setProducts: (newProducts: Product[]) => void;
  products?: Product[];
}

export const AppContext = createContext<ContextProps>({
  activeTab: '',
  setActiveTab: () => {},
  products: [],
  setProducts: () => null,
});

export const useAppContext = () => useContext(AppContext);
