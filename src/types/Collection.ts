import { Base } from './Base';
import { Image } from './Image';

export type Collection = Base & {
  readonly id: string;
  readonly description: string;
  readonly handle: string;
  readonly image: Image;
  readonly productsCount: number;
};
