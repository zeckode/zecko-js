import { InventoryUnitStatus } from './Enums';

export type InventoryUnit = {
  readonly id: string;
  readonly status: InventoryUnitStatus;
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
