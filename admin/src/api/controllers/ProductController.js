import { api } from '../index';
import { generateFormData } from '~/utils/generateFormData';

export class ProductController {
  static addProduct = (payload) => {
    const { images, ...other } = payload;

    const formData = generateFormData(other);
    images.forEach((image) => formData.append('images', image, image.name));

    return api.post('/admin/product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
}
