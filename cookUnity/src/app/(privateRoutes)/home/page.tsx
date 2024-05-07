import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Home } from '@/app/(privateRoutes)/home/Home';
import { ApiService } from '@/services/api.service.ts';
import { Product } from '@/services/types/Product.ts';
import { Date } from '@/services/types/Date.ts';
import { headers } from 'next/headers';
import { getParam } from '@/util/util.ts';

export const metadata: Metadata = {
  title: 'Home',
};
function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}

export default async function PrivateRoute() {
  const headersList = headers();
  const header_url = headersList.get('x-url') || '';
  const activeTab = getParam(header_url, 'tab');

  const cookUnityDates: Date[] = await ApiService.getDates();
  const products: Product[] | null = await ApiService.getProductByDateValue(
    activeTab || '',
  );

  return (
    <>
      <Suspense fallback={<BigSpinner />}>
        <Home products={products || []} cookUnityDates={cookUnityDates} />
      </Suspense>
    </>
  );
}
