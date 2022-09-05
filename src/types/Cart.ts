import { Address, AddressInput } from './Address';
import { CustomerInput } from './Customer';
import { Discount, DiscountCodeInput } from './Discount';
import { CurrencyCode, DraftOrderStatus } from './Enums';
import { LineItemEdges } from './LineItem';
import { Order } from './Order';
import { PaymentInfoInput } from './Payment';
import { AvailableShippingRate, ShippingLine } from './Shipping';
import { TaxLine } from './TaxLine';
import { UserError } from './UserError';

export type Cart = {
  readonly appliedDiscount: Discount;
  readonly completedAt: Date;
  readonly createdAt: Date;
  readonly currencyCode: CurrencyCode;
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
  readonly availableShippingRate: readonly AvailableShippingRate[];
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

export type CartUpdateRequest =
  | {
      readonly customer: CustomerInput;
    }
  | {
      readonly shippingAddress: AddressInput;
    }
  | {
      readonly shippingLine: AvailableShippingRate;
    };

export type CartDiscountRequest = {
  readonly discounts: readonly DiscountCodeInput[];
};

export type CartCompleteRequest = {
  readonly payment: PaymentInfoInput;
};
