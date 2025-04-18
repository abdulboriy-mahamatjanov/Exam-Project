import { BadRequestException, Injectable } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  async uploadImage(file: Express.Multer.File): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: 'image' }, (error, result) => {
          if (error) return reject(error);
          if (!result)
            return reject(new Error('Cloudinary response is undefined'));
          resolve(result);
        })
        .end(file.buffer);
    });
  }

  async checkImage(publicId: string) {
    try {
      const result = await cloudinary.api.resource(publicId);
      return result;
    } catch (error) {
      if (error.http_code === 404) return false;
    }
  }

  getPublicId(url: string): string {
    const imageName = url.split('/');
    const filename = imageName[imageName.length - 1];
    return filename.split('.')[0];
  }

  async deleteImage(publicId: string) {
    try {
      const exitImage = await this.checkImage(publicId);
      if (exitImage) {
        await cloudinary.uploader.destroy(exitImage);
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
