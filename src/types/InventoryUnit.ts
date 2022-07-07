import { InventoryUnitStatus } from './Enums';

export type InventoryUnit = {
  readonly id: string;
  readonly status: InventoryUnitStatus;
  readonly returnEligibleThrough: Date;
  readonly exchangeEligibleThrough: Date;
  readonly isCancellable: boolean;
  readonly isReturnable: boolean;
  readonly isExchangeable: boolean;
};
