import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class EskizService {
  private url = 'https://notify.eskiz.uz/api';
  private token;
  private email = process.env.ESKIZ_EMAIL;
  private secret = process.env.ESKIZ_SECRET;

  constructor() {
    this.auth();
  }

  async auth() {
    try {
      const { data: response } = await axios.post(`${this.url}/auth/login`, {
        email: this.email,
        password: this.secret,
      });
      const token = response?.data?.token;
      return token;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async sendSMS(message: string, phone: string) {
    try {
      const { data: response } = await axios.post(
        `${this.url}/message/sms/send`,
        {
          mobile_phone: phone,
          message: 'Bu Eskiz dan test',
          from: '4546',
        },
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        },
      );

      console.log(response);

      return response;
    } catch (error) {
      await this.auth();
      await this.sendSMS(message, phone);
      throw new BadRequestException(error.message);
    }
  }
}
