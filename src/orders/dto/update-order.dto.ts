import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from './create-order.dto';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UpdateOrderDto {
  @ApiProperty({ example: OrderStatus.ACTIVATED})
  @IsString()
  @IsNotEmpty()
  status: OrderStatus.ACTIVATED;

  @ApiProperty({ example: ['master-uuid', 'master-uuid'] })
  @IsArray()
  @IsString({ each: true })
  masters: string[];
}
