import { BaseResponse } from './BaseResponse';
import { Image } from './Image';

export type Collection = BaseResponse & {
  readonly id: string;
  readonly description: string;
  readonly handle: string;
  readonly image: Image;
  readonly productsCount: number;
};
