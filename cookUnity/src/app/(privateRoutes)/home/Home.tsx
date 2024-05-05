'use client';
import React, { type FC, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavBar } from '@/app/(privateRoutes)/home/components/NavBar/NavBar';
import { SubNavBar } from '@/app/(privateRoutes)/home/components/SubNavBar/SubNavBar';
import { ProductCard } from '@/app/(privateRoutes)/home/components/ProductCard/ProductCard';
import { CookUnityButton } from '@/app/(privateRoutes)/home/components/CookUnityButton/CookUnityButton';
import { useAppContext } from '@/context/AppContext/AppContext';
import { Product } from '@/services/types/Product.ts';
import { Date } from '@/services/types/Date.ts';
import {
  configPage,
  defaultConfig,
} from '@/app/(privateRoutes)/home/homeConfig.ts';

interface HomeProps {
  products: Product[];
  cookUnityDates: Date[];
}
export const Home: FC<HomeProps> = ({
  products: initProduct,
  cookUnityDates,
}) => {
  const { activeTab, products, setProducts } = useAppContext();

  useEffect(() => {
    setProducts(initProduct);
  }, []);

  const pageConfigSelected =
    configPage.find((item) => item.tab === activeTab) || defaultConfig;

  return (
    <>
      <NavBar
        muiButtonChild={
          <CookUnityButton
            onClick={pageConfigSelected.onClick}
            startIcon={<ShoppingCartIcon />}
            label={pageConfigSelected.buttonLabel}
            dataTestId={pageConfigSelected.dataTestId?.header}
          />
        }
        cookUnityDates={cookUnityDates}
      />

      <SubNavBar
        title={pageConfigSelected.subNavBarTitle}
        button={
          <CookUnityButton
            onClick={pageConfigSelected.onClick}
            startIcon={<ShoppingCartIcon />}
            label={pageConfigSelected.buttonLabel}
            dataTestId={pageConfigSelected.dataTestId?.subheader}
            orderNumber={products?.length || defaultConfig.orderNumber}
          />
        }
      />
      {products?.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          price={product.price}
          description={product.content || ''}
          imgUrl={product.imgUrl}
        />
      ))}
    </>
  );
};
