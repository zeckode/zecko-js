import { InventoryUnitStatus } from './Enums';
import { LineItem } from './LineItem';

export type InventoryUnit = {
  readonly id: string;
  readonly status: InventoryUnitStatus;
  readonly returnEligibleThrough: Date;
  readonly exchangeEligibleThrough: Date;
  readonly isCancellable: boolean;
  readonly isReturnable: boolean;
  readonly isExchangeable: boolean;
  readonly orderId: string;
  readonly lineItem: LineItem;
};

export type InventoryUnitHistoryEntry = {
  readonly inventoryUnitId: number;
  readonly status: InventoryUnitStatus;
  readonly occurredAt: Date;
};

export type InventoryUnitHistoryWrapper = {
  readonly history: readonly InventoryUnitHistoryEntry[];
};

export type InventoryUnitHistory = {
  readonly data: InventoryUnitHistoryWrapper;
};

export type InventoryUnitDataWrapper = {
  readonly inventoryUnitResponse: InventoryUnit;
};

export type InventoryUnitData = {
  readonly data: InventoryUnitDataWrapper;
};
