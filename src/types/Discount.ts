import { DiscountType } from "./Enums";

export type Discount = {
  readonly amount: number;
  readonly amountV2: number;
  readonly description: string;
  readonly title: string;
  readonly value: number;
  readonly valueType: DiscountType;
};