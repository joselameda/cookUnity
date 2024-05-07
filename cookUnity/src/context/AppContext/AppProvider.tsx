'use client';

import React, { useState } from 'react';
import { AppContext } from './AppContext';
import { useQueryState } from 'next-usequerystate';
import { TAB_MENU } from '@/enums/TAB_MENU';
import { Product } from '@/services/types/Product.ts';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useQueryState('tab', {
    defaultValue: TAB_MENU.Confirm,
  });

  const [products, setProducts] = useState<Product[]>([]);

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        products,
        setProducts,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
