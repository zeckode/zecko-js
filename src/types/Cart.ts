import { Address } from './Address';
import { Customer } from './Customer';
import { Discount } from './Discount';
import { CurrencyCode, DraftOrderStatus, PaymentMethod } from './Enums';
import { LineItemEdges } from './LineItem';
import { Order } from './Order';
import { ShippingLine } from './ShippingLine';
import { TaxLine } from './TaxLine';
import { UserError } from './UserError';

export type Cart = {
  readonly appliedDiscount: Discount;
  readonly completedAt: Date;
  readonly createdAt: Date;
  readonly currencyCode: CurrencyCode;
  readonly customer: Customer;
  readonly email: string;
  readonly id: string;
  readonly lineItems: LineItemEdges;
  readonly order: Order;
  readonly shippingAddress: Address;
  readonly shippingLine: ShippingLine;
  readonly status: DraftOrderStatus;
  readonly subtotalPrice: string;
  readonly tags: readonly string[];
  readonly taxExempt: boolean;
  readonly taxLines: readonly TaxLine[];
  readonly taxesIncluded: boolean;
  readonly totalPrice: string;
  readonly totalShippingPrice: string;
  readonly totalTax: string;
  readonly updatedAt: Date;
};

export type CartWrapper = {
  readonly cart: Cart;
  readonly userErrors: readonly UserError[];
};

export type CartData = {
  readonly data: CartWrapper;
};

export type DraftOrderDeletedIdWrapper = {
  readonly deletedId: string;
  readonly userErrors: readonly UserError[];
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

export type CartCompleteRequest = {
  readonly paymentMethod: PaymentMethod;
  readonly discountCode: string;
  readonly shippingAddress: Address;
};
