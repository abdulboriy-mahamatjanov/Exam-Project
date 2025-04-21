import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class EskizService {
  private token = process.env.ESKIZ_TOKEN;
  private url = process.env.BASE_URL;
  private email = process.env.ESKIZ_EMAIL;
  private password = process.env.ESKIZ_SECRET;

  constructor() {
    this.auth();
  }

  async auth() {
    try {
      const { data: response } = await axios.post(`${this.url}/auth/login`, {
        email: this.email,
        password: this.password,
      });

      this.token = response?.data?.token;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async sendSMS(message: string, phone: string) {
    try {
      if (!this.token) await this.auth();

      console.log(this.token);

      const {} = await axios.post(
        `https://notify.eskiz.uz/api/message/sms/send`,
        {
          mobile_phone: phone.replace('+', ''),
          message: 'Bu Eskiz dan test',
          from: '4546',
        },
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        },
      );
    } catch (error) {
      //   await this.auth();
      //   await this.sendSMS(message, phone);
      throw new BadRequestException(error.message);
    }
  }
}
