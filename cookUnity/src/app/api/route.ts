import { ApiService } from '@/services/api.service';
import { Product } from '@/services/types/Product.ts';
import {getParam} from "@/util/util.ts";

export async function GET(request: any) {
  const apiUrl = request.headers.get('X-Url-Consume');

  const dateValue = getParam(apiUrl, 'dateValue');

  try {
    const products: Product[] | null = await ApiService.getProductByDateValue(
      dateValue || '',
    );
    if (products) {
      return new Response(JSON.stringify(products), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response('Products not found', { status: 404 });
    }
  } catch (e) {
    throw e;
  }
}
