import { Image } from './Image';
import { PageInfo } from './PageInfo';
import { Product } from './Product';
import { SelectedOption } from './SelectedOption';

export type Variant = {
  readonly availableForSale: boolean;
  readonly compareAtPrice: number;
  readonly discount: number;
  readonly displayName: string;
  readonly id: string;
  readonly image: Image;
  readonly inventoryQuantity: number;
  readonly position: number;
  readonly price: string;
  readonly product: Product;
  readonly selectedOptions: SelectedOption;
  readonly sku: string;
  readonly taxCode: string;
  readonly taxable: string;
  readonly title: string;
};

export type VariantEdge = {
  readonly cursor: string;
  readonly node: Variant;
};

export type VariantEdges = {
  readonly edges: readonly VariantEdge[];
  readonly pageInfo: PageInfo;
};
