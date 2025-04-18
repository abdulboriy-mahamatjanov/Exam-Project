import { PartialType } from '@nestjs/swagger';
import { CreateMasterprofessionDto } from './create-masterprofession.dto';

export class UpdateMasterprofessionDto extends PartialType(CreateMasterprofessionDto) {}
