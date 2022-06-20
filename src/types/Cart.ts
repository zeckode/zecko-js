import { Image } from './Image';
import { PageInfo } from './PageInfo';
import { Product, Variant } from './Product';

export enum DiscountType {
  FIXED_AMOUNT,
  FIXED_PERCENTAGE,
}

export type Discount = {
  readonly amount: number;
  readonly amountV2: number;
  readonly description: string;
  readonly title: string;
  readonly value: number;
  readonly valueType: DiscountType;
};

export enum CurrencyCode {
  INR,
}

export type TaxLine = {
  readonly rate: number;
  readonly ratePercentage: number;
  readonly title: string;
};

export type CartLineItem = {
  readonly appliedDiscount: Discount;
  readonly discountedTotal: string;
  readonly discountedUnitPirce: string;
  readonly id: string;
  readonly image: Image;
  readonly name: string;
  readonly originalTotal: string;
  readonly originalUnitPrice: string;
  readonly product: Product;
  readonly quantity: number;
  readonly sku: string;
  readonly taxLines: readonly TaxLine[];
  readonly texable: boolean;
  readonly title: string;
  readonly totalDiscount: string;
  readonly variant: Variant;
  readonly variantTitle: string;
  readonly vendor: string;
};

export type CartLineItemEdge = {
  readonly cursor: string;
  readonly node: CartLineItem;
};

export type CartLineItemEdges = {
  readonly edges: readonly CartLineItemEdge[];
  readonly PageInfo: PageInfo;
};

export type Cart = {
  readonly appliedDiscount: Discount;
  readonly completedAt: Date;
  readonly createdAt: Date;
  readonly currencyCode: CurrencyCode;
  readonly email: string;
  readonly id: string;
  readonly subtotalPrice: string;
  readonly taxLines: readonly TaxLine[];
  readonly taxesIncluded: boolean;
  readonly totalPrice: string;
  readonly totalShippingPrice: string;
  readonly totalTax: string;
  readonly updatedAt: Date;
  readonly lineItems: CartLineItemEdges;
};

export type UserErrors = {
  readonly message: string;
  readonly field: readonly string[];
};

export type CartWrapper = {
  readonly cart: Cart;
  readonly userErrors: readonly UserErrors[];
};

export type CartData = {
  readonly data: CartWrapper;
};

export type DraftOrderDeletedIdWrapper = {
  readonly deletedId: string;
  readonly userErrors: readonly UserErrors[];
};

export type DraftOrderDeletedIdWrapperWrapper = {
  readonly draftOrderDelete: DraftOrderDeletedIdWrapper;
};

export type DeleteCart = {
  readonly data: DraftOrderDeletedIdWrapperWrapper;
};

export type CartActionRequest = {
  readonly customerId: string;
  readonly variantId: string;
  readonly quantity: number;
};
