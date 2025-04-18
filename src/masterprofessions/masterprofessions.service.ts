import { Injectable } from '@nestjs/common';
import { CreateMasterprofessionDto } from './dto/create-masterprofession.dto';
import { UpdateMasterprofessionDto } from './dto/update-masterprofession.dto';

@Injectable()
export class MasterprofessionsService {
  create(createMasterprofessionDto: CreateMasterprofessionDto) {
    return 'This action adds a new masterprofession';
  }

  findAll() {
    return `This action returns all masterprofessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} masterprofession`;
  }

  update(id: number, updateMasterprofessionDto: UpdateMasterprofessionDto) {
    return `This action updates a #${id} masterprofession`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterprofession`;
  }
}
