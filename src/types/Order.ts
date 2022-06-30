import { Address } from './Address';
import { CartLineItemEdges, TaxLine, UserErrors } from './Cart';
import { MoneyBag, Refund } from './Money';
import { PageInfo } from './PageInfo';
import { ShippingLine } from './ShippingLine';

export type Order = {
  readonly cancelReason: string;
  readonly cancelledAt: string;
  readonly cartDiscountAmountSet: MoneyBag;
  readonly closed: boolean;
  readonly closedAt: Date;
  readonly confirmed: boolean;
  readonly createdAt: Date;
  readonly currentCartDiscountAmountSet: MoneyBag;
  readonly currentSubtotalLineItemsQuantity: number;
  readonly currentSubtotalPriceSet: MoneyBag;
  readonly currentTaxLines: TaxLine;
  readonly currentTotalDiscountsSet: MoneyBag;
  readonly currentTotalPriceSet: MoneyBag;
  readonly currentTotalTaxSet: MoneyBag;
  readonly displayAddress: Address;
  readonly email: string;
  readonly fullyPaid: boolean;
  readonly id: string;
  readonly lineItems: CartLineItemEdges;
  readonly phone: string;
  readonly processedAt: Date;
  readonly refundable: boolean;
  readonly refunds: Refund;
  readonly shippingAddress: Address;
  readonly shippingLine: ShippingLine;
  readonly subtotalLineItemsQuantity: number;
  readonly subtotalPriceSet: MoneyBag;
  readonly tags: readonly string[];
  readonly taxLines: readonly TaxLine[];
  readonly taxesIncluded: boolean;
  readonly test: boolean;
  readonly totalDiscountsSet: MoneyBag;
  readonly totalOutstandingSet: MoneyBag;
  readonly totalPriceSet: MoneyBag;
  readonly totalReceivedSet: MoneyBag;
  readonly totalRefundedSet: MoneyBag;
  readonly totalRefundedShippingSet: MoneyBag;
  readonly totalShippingPriceSet: MoneyBag;
  readonly totalTaxSet: MoneyBag;
  readonly unpaid: boolean;
  readonly updatedAt: Date;
};

export type OrderWrapper = {
  readonly order: Order;
  readonly userErrors: UserErrors;
};

export type OrderData = {
  readonly data: OrderWrapper;
};

export type OrderEdge = {
  readonly cursor: string;
  readonly node: Order;
};

export type OrderEdges = {
  readonly edges: readonly OrderEdge[];
  readonly pageInfo: PageInfo;
};

export type OrderEdgesWrapper = {
  readonly orders: OrderEdges;
};

export type OrdersData = {
  readonly data: OrderEdgesWrapper;
};
