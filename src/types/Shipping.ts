import { Money } from './Money';

export type ShippingLine = {
  readonly code: string;
  readonly title: string;
};

export type AvailableShippingRate = {
  readonly price: Money;
  readonly title: string;
};
