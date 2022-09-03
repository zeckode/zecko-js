import { Money, MoneyBag } from './Money';
import { TaxLine } from './TaxLine';

export type ShippingLine = {
  readonly code: string;
  readonly custom: string;
  readonly deliveryCategory: string;
  readonly discountedPriceSet: MoneyBag;
  readonly id: string;
  readonly originalPriceSet: MoneyBag;
  readonly phone: string;
  readonly shippingRateHandle: string;
  readonly source: string;
  readonly taxLines: readonly TaxLine[];
  readonly title: string;
};

export type AvailableShippingRate = {
  readonly handle: string;
  readonly price: Money;
  readonly title: string;
};

export type ShippingLineInput = {
  readonly price: string;
  readonly shippingRateHandle: string;
  readonly title: string;
};
