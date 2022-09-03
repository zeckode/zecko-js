import { DiscountCodeType, DiscountType } from './Enums';
import { Money } from './Money';

export type Discount = {
  readonly amount: number;
  readonly amountV2: Money;
  readonly description: string;
  readonly title: string;
  readonly value: number;
  readonly valueType: DiscountType;
};

export type DiscountCodeInput = {
  readonly type: DiscountCodeType;
  readonly code: string;
};
