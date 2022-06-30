import { CurrencyCode } from './Cart';

export type Money = {
  readonly amount: string;
  readonly currencyCode: CurrencyCode;
};

export type MoneyBag = {
  readonly presentmentMoney: Money;
  readonly shopMoney: Money;
};

export type Refund = {
  readonly createdAt: Date;
  readonly id: string;
  readonly note: string;
  readonly totalRefundedSet: MoneyBag;
  readonly updatedAt: Date;
};
