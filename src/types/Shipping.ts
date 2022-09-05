import { Money } from './Money';

export type ShippingLine = {
  readonly code: string;
  readonly shippingRateHandle: string;
  readonly title: string;
};

export type AvailableShippingRate = {
  readonly handle: string;
  readonly price: Money;
  readonly title: string;
};
