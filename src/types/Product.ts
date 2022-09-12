import { ProductStatus } from './Enums';
import { Image, ImageEdges } from './Image';
import { MetaFieldEdges } from './MetaField';
import { PageInfo } from './PageInfo';
import { Platform } from './Platfrom';
import { PriceRange } from './PriceRange';
import { VariantEdges } from './Variant';

export type ProductOption = {
  readonly id: string;
  readonly name: string;
  readonly position: number;
  readonly values: readonly string[];
};

export type Product = {
  readonly description: string;
  readonly featuredImage: Image;
  readonly handle: string;
  readonly hasOnlyDefaultVariant: string;
  readonly hasOutOfStockVariants: string;
  readonly id: string;
  readonly images: ImageEdges;
  readonly options: readonly ProductOption[];
  readonly priceRangeV2: PriceRange;
  readonly price: string;
  readonly compareAtPrice: string;
  readonly platforms: readonly Platform[];
  readonly productType: string;
  readonly status: ProductStatus;
  readonly tags: readonly string[];
  readonly title: string;
  readonly rating: string;
  readonly noOfRatings: string;
  readonly totalInventory: number;
  readonly totalVariants: number;
  readonly variants: VariantEdges;
  readonly vendor: string;
  readonly metafields: MetaFieldEdges;
};

export type ProductWrapper = {
  readonly product: Product;
};

export type ProductData = {
  readonly data: ProductWrapper;
};

export type ProductEdge = {
  readonly cursor: string;
  readonly node: Product;
};

export type ProductEdges = {
  readonly edges: ProductEdge;
  readonly pageInfo: PageInfo;
};

export type ProductEdgesWrapper = {
  readonly products: ProductEdges;
};

export type ProductsData = {
  readonly data: ProductEdgesWrapper;
};
