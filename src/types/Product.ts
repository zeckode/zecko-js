import { Image } from './Image';
import { PageInfo } from './PageInfo';

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
  readonly productType: string;
  readonly status: string;
  readonly tags: readonly string[];
  readonly title: string;
  readonly totalInventory: number;
  readonly totalVariants: number;
  readonly variants: VariantEdges;
  readonly vendor: string;
};

export type ImageEdges = {
  readonly edges: readonly Image[];
  readonly pageInfo: PageInfo;
};

export type ProductOption = {
  readonly id: string;
  readonly name: string;
  readonly position: number;
  readonly values: readonly string[];
};

export type PriceRange = {
  readonly maxVariantPrice: Money;
  readonly minVariantPrice: Money;
};

export type Money = {
  readonly amount: number;
  readonly currencyCode: string;
};

export type VariantEdges = {
  readonly edges: readonly VariantEdge[];
  readonly pageInfo: PageInfo;
};

export type VariantEdge = {
  readonly node: readonly Variant[];
  readonly sku: string;
  readonly taxCode: string;
  readonly taxable: string;
  readonly title: string;
};

export type Variant = {
  readonly availableForSale: boolean;
  readonly compareAtPrice: number;
  readonly displayName: string;
  readonly id: string;
  readonly inventoryQuantity: number;
  readonly position: number;
  readonly price: string;
  readonly selectedOptions: ProductOption;
};

export type ProductsWrapper = {
  readonly edges: readonly Product[];
  readonly pageInfo: PageInfo;
};

export type ProductsData = {
  readonly data: ProductsWrapper;
};

export type ProductWrapper = {
  readonly product: Product;
};

export type ProductData = {
  readonly data: ProductWrapper;
};
