export type Product = {
    id: number;
    createdAt: { id: number; name: string };
    updatedAt: { id: number; name: string };
    title: string;
    content: string | null;
    price: number;
    imgUrl: string;
};