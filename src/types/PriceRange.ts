import { Money } from "./Money";

export type PriceRange = {
  readonly maxVariantPrice: Money;
  readonly minVariantPrice: Money;
};