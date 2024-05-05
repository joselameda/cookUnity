import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ApiService {
  async getDates() {
    try {
      return await prisma.date.findMany();
    } catch (error) {
      throw error;
    }
  }

  async getProductByDateId(dateId: number) {
    try {
      return await prisma.product.findMany({
        where: {
          dates: {
            some: {
              dateId: dateId,
            },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getProductByDateValue(dateValue: string) {
    try {
      const date = await prisma.date.findFirst({
        where: {
          value: dateValue,
        },
      });
      return (
        date &&
        (await prisma.product.findMany({
          where: {
            dates: {
              some: {
                dateId: date.id,
              },
            },
          },
        }))
      );
    } catch (error) {
      throw error;
    }
  }
}

const ApiServiceInstance = new ApiService();
export { ApiServiceInstance as ApiService };
