import { InventoryUnitStatus } from './Enums';
import { LineItem } from './LineItem';

export type InventoryUnit = {
  readonly id: string;
  readonly status: InventoryUnitStatus;
  readonly cancelEligibleThrough: Date;
  readonly returnEligibleThrough: Date;
  readonly exchangeEligibleThrough: Date;
  readonly isCancellable: boolean;
  readonly isReturnable: boolean;
  readonly isExchangeable: boolean;
  readonly cancelReason: string;
  readonly returnReason: string;
  readonly exchangeReason: string;
  readonly brandReturnPolicyURL: string;
  readonly isNoQuestionsAskedReturnAvailable: boolean;
  readonly returnText: string;
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

export type InventoryUnitCancelRequest = {
  readonly cancelReason: string;
};

export type InventoryUnitReturnRequest = {
  readonly returnReason: string;
};

export type InventoryUnitExchangeRequest = {
  readonly exchangeReason: string;
};
