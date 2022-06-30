import { TaxLine } from './Cart';

export type ShippingLine = {
  readonly carrierIdentifier: string;
  readonly code: string;
  readonly deliveryCategory: string;
  readonly id: string;
  readonly phone: string;
  readonly shippingRateHandle: string;
  readonly source: string;
  readonly taxLines: readonly TaxLine[];
  readonly title: string;
};
