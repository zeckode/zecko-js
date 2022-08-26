import { PaymentMethod } from './Enums';
import { Money, MoneyBag } from './Money';
import { TaxLine } from './TaxLine';

export type ShippingLine = {
  readonly carrierIdentifier: string;
  readonly code: string;
  readonly deliveryCategory: string;
  readonly id: string;
  readonly originalPriceSet: MoneyBag;
  readonly phone: string;
  readonly shippingRateHandle: string;
  readonly source: string;
  readonly taxLines: readonly TaxLine[];
  readonly title: string;
  readonly paymentMethod: PaymentMethod;
};

export type AvailableShippingRate = {
  readonly handle: string;
  readonly price: Money;
  readonly title: string;
  readonly paymentMethod: PaymentMethod;
};
