import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContactDto: CreateContactDto) {
    try {
      const checkPhone = await this.prisma.contacts.findUnique({
        where: { phone: createContactDto.phone },
      });

      if (checkPhone)
        throw new BadRequestException(
          `This ${checkPhone.phone} phoneNumber already in use ❗`,
        );

      const NewContacts = await this.prisma.contacts.create({
        data: createContactDto,
      });

      return NewContacts;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(query: any) {
    try {
      const { page = 1, limit = 10, order = 'desc', search = '' } = query;
      const Contacts = await this.prisma.contacts.findMany({
        where: {
          OR: [
            {
              name: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              surName: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              phone: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              address: {
                contains: search,
                mode: 'insensitive',
              },
            },
          ],
        },

        skip: (page - 1) * limit,
        take: Number(limit),

        orderBy: {
          name: order,
        },
      });

      return Contacts;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Contact = await this.prisma.contacts.findFirst({ where: { id } });
      if (!Contact) throw new NotFoundException('Contact not found ❗');

      return Contact;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    try {
      const contact = await this.findOne(id);
      if (!contact) throw new NotFoundException('Contact not found ❗');

      const NewContacts = await this.prisma.contacts.update({
        data: updateContactDto,
        where: { id },
      });

      return NewContacts;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const contact = await this.findOne(id);
      if (!contact) throw new NotFoundException('Contact not found ❗');

      const deletedContact = await this.prisma.contacts.delete({
        where: { id },
      });
      
      return deletedContact;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
