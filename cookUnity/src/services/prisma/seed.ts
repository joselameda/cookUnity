const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const products = [
  {
    date: 'Monday, August 23',
    value: 'confirm',
    products: [
      {
        title: 'Product 1',
        price: 100,
        description: 'Description for Product 1',
        imageUrl:
          'https://cookunity-media.imgix.net/media/catalog/product/cache/x1200/l/a/large-chicken_schnitzel_-_ratel.jpeg',
      },
      {
        title: 'Product 2',
        price: 150,
        description: 'Description for Product 2',
        imageUrl:
          'https://cookunity-media.imgix.net/media/catalog/product/cache/x1200/l/a/large-chicken_schnitzel_-_ratel.jpeg',
      },
    ],
  },
  {
    date: 'Tuesday, August 24',
    value: 'reschedule',
    products: [
      {
        title: 'Product 3',
        price: 170,
        description: 'Description for Product 3',
        imageUrl:
          'https://cookunity-media.imgix.net/media/catalog/product/cache/x1200/l/a/large-chicken_schnitzel_-_ratel.jpeg',
      },
    ],
  },
];
async function seedProducts(): Promise<void> {
  try {
    for (const date of products) {
      const dateCreated = await prisma.date.create({
        data: {
          name: date.date,
          value: date.value,
        },
      });
      for (const product of date.products) {
        await prisma.product.create({
          data: {
            title: product.title,
            price: product.price,
            content: product.description,
            imgUrl: product.imageUrl,
            dates: {
              create: {
                dateId: dateCreated.id,
              },
            },
          },
        });
      }
    }
    console.log('Seeds correctly created.');
  } catch (error) {
    console.error('Error creating products:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
