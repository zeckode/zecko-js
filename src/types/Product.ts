import { Image } from './Image';

export type ProductNode = {
  readonly description: string;
  readonly descriptionHtml: string;
  readonly featuredImage: Image;
  readonly handle: string;
  readonly hasOnlyDefaultVariant: string;
  readonly hasOutOfStockVariants: string;
  readonly id: string;
  readonly images: ImagesWrapper;
  readonly options: readonly Option[];
  readonly priceRangeV2: PriceRange;
  readonly productType: string;
  readonly status: string;
  readonly tags: string[];
  readonly title: string;
  readonly totalInventory: number;
  readonly totalVariants: number;
  readonly variants: Variants;
  readonly vendor: string;
};

export type ImagesWrapper = {
  readonly edges: Image[];
  readonly pageInfo: PageInfo;
};

export type Option = {
  readonly id: string;
  readonly name: string;
  readonly position: number;
  readonly values: string[];
};

export type PriceRange = {
  readonly maxVariantPrice: VarientPrice;
  readonly minVariantPrice: VarientPrice;
};

export type VarientPrice = {
  readonly amount: number;
  readonly currencyCode: string;
};

export type Variants = {
  readonly edges: readonly VariantEdges[];
  readonly pageInfo: PageInfo;
};

export type VariantEdges = {
  readonly node: readonly VariantNodes[];
  readonly sku: string;
  readonly taxable: string;
  readonly title: string;
};

export type VariantNodes = {
  readonly availableForSale: boolean;
  readonly compareAtPrice: number;
  readonly displayName: string;
  readonly id: string;
  readonly inventoryQuantity: number;
  readonly position: number;
  readonly price: string;
  readonly selectedOptions: Option;
};

export type PageInfo = {
  readonly endCursor: string;
  readonly hasNextPage: boolean;
  readonly haspreviousPage: boolean;
  readonly startCursor: string;
};

export type ProductsWrapper = {
  readonly edges: readonly ProductNode[];
  readonly pageInfo: PageInfo;
};

export type ProductsData = {
  readonly data: ProductsWrapper;
};

export type ProductWrapper = {
  readonly product: ProductNode;
};

export type ProductData = {
  readonly data: ProductWrapper;
};
