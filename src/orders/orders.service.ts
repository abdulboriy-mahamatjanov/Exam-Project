import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request } from 'express';
import { OrderStatus, Prisma } from 'generated/prisma';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto, req: Request) {
    try {
      const { OrderItems, ...orderData } = createOrderDto;
      let userId = req['user'].id;

      const checkUser = await this.prisma.users.findUnique({
        where: { id: userId },
      });

      if (checkUser?.status == 'INACTIVE')
        throw new BadRequestException(
          'You are not allowed to order, Tool or Masters ❗',
        );

      const NewOrders = await this.prisma.orders.create({
        data: {
          status: OrderStatus.PENDING,
          address: orderData.address,
          latitude: orderData.latitude,
          longitude: orderData.longitude,
          totalPrice: orderData.totalPrice,
          paymentType: orderData.paymentType,
          withDelivery: orderData.withDelivery,
        },
        include: {
          OrderItems: true,
        },
      });

      if (OrderItems?.length) {
        for (const item of OrderItems) {
          const [checkProfession, checkLevel, checkTool] = await Promise.all([
            await this.prisma.professions.findUnique({
              where: { id: item.professionId },
            }),

            await this.prisma.levels.findUnique({
              where: { id: item.levelId },
            }),

            await this.prisma.tools.findUnique({ where: { id: item.toolId } }),
          ]);

          if (!checkProfession)
            throw new BadRequestException('Profession is not available yet ❗');

          if (!checkLevel)
            throw new BadRequestException('Level is not available yet ❗');

          if (!checkTool)
            throw new BadRequestException('Tool is not available yet ❗');
        }

        await this.prisma.orderItems.createMany({
          data: OrderItems.map((val) => ({
            orderId: NewOrders.id,
            professionId: val.professionId,
            toolId: val.toolId,
            levelId: val.levelId,
            timeUnit: val.timeUnit,
            workingTime: val.workingTime,
            price: new Prisma.Decimal(val.price),
            count: val.count,
          })),
        });
      }

      return NewOrders;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const Orders = await this.prisma.orders.findMany({
        include: {
          OrderItems: {
            select: {
              id: true,
              timeUnit: true,
              price: true,
              workingTime: true,
              count: true,
              profession: true,
              level: true,
              tool: {
                select: {
                  id: true,
                  code: true,
                  nameUz: true,
                  nameRu: true,
                  nameEn: true,
                  descriptionUz: true,
                  descriptionRu: true,
                  descriptionEn: true,
                  price: true,
                  quantity: true,
                  image: true,
                  isAvailable: true,
                  createdAt: true,
                  updatedAt: true,
                  brand: true,
                  capacity: true,
                  size: true,
                },
              },
            },
          },

          OrderMaters: {
            select: {
              id: true,
              master: {
                select: {
                  id: true,
                  fullName: true,
                  phone: true,
                  birthYear: true,
                  avatar: true,
                  passportImage: true,
                  about: true,
                  status: true,
                  MasterProfessions: {
                    select: {
                      id: true,
                      minWorkingHours: true,
                      priceDaily: true,
                      priceHourly: true,
                      experience: true,
                      level: true,
                      profession: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      return Orders;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Order = await this.prisma.orders.findUnique({
        where: { id },
        include: {
          OrderItems: {
            select: {
              id: true,
              timeUnit: true,
              price: true,
              workingTime: true,
              count: true,
              profession: true,
              level: true,
              tool: {
                select: {
                  id: true,
                  code: true,
                  nameUz: true,
                  nameRu: true,
                  nameEn: true,
                  descriptionUz: true,
                  descriptionRu: true,
                  descriptionEn: true,
                  price: true,
                  quantity: true,
                  image: true,
                  isAvailable: true,
                  createdAt: true,
                  updatedAt: true,
                  brand: true,
                  capacity: true,
                  size: true,
                },
              },
            },
          },

          OrderMaters: {
            select: {
              id: true,
              master: {
                select: {
                  id: true,
                  fullName: true,
                  phone: true,
                  birthYear: true,
                  avatar: true,
                  passportImage: true,
                  about: true,
                  status: true,
                  MasterProfessions: {
                    select: {
                      id: true,
                      minWorkingHours: true,
                      priceDaily: true,
                      priceHourly: true,
                      experience: true,
                      level: true,
                      profession: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      if (!Order) throw new NotFoundException('Order not found ❗');

      return Order;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      const { masters, ...orderData } = updateOrderDto;

      const Order = await this.prisma.orders.findFirst({ where: { id } });
      if (!Order) throw new NotFoundException('Order not found ❗');

      const updatedOrder = await this.prisma.orders.update({
        data: { ...orderData, status: 'ACTIVATED' },
        where: { id },
      });

      await this.prisma.orderMaters.deleteMany({ where: { orderId: id } });

      if (masters && masters.length > 0) {
        await this.prisma.orderMaters.createMany({
          data: masters.map((masterId: string) => ({
            orderId: id,
            masterId,
          })),
        });
      }

      return updatedOrder;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const Order = await this.prisma.orders.findFirst({ where: { id } });
      if (!Order) throw new NotFoundException('Order not found ❗');

      const deletedOrder = await this.prisma.orders.delete({ where: { id } });
      return deletedOrder;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
