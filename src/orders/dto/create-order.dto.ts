import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { OrderItemDto } from './create-orderItem.dto';
import { Type } from 'class-transformer';
import { Decimal } from '@prisma/client/runtime/library';

export enum OrderStatus {
  PENDING,
  DELIVERED,
  CANCELLED,
  REJECTED,
  ACTIVATED,
}

export enum PaymentType {
  CASH = 'CASH',
  CARD = 'CARD',
}

export class CreateOrderDto {
  @ApiProperty({ example: 'Toshkent, Chilonzor' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: '41.3111' })
  @IsString()
  @IsNotEmpty()
  latitude: string;

  @ApiProperty({ example: '69.2797' })
  @IsString()
  @IsNotEmpty()
  longitude: string;

  @ApiProperty({ example: 150000 })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  totalPrice: Decimal;

  @IsNotEmpty()
  @ApiProperty({ example: PaymentType.CASH })
  paymentType: PaymentType;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsOptional()
  withDelivery: boolean;

  @IsOptional()
  status: OrderStatus.PENDING;

  @ApiPropertyOptional({ type: [OrderItemDto] })
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => OrderItemDto)
  OrderItems: OrderItemDto[];
}
