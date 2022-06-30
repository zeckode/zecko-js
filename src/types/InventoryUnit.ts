import { InventoryUnitStatus } from "./Enums";

export type InventoryUnit = {
  readonly id: string;
  readonly status: InventoryUnitStatus;
}