import { Discount } from './Discount';
import { Image } from './Image';
import { InventoryUnit } from './InventoryUnit';
import { PageInfo } from './PageInfo';
import { Product } from './Product';
import { TaxLine } from './TaxLine';
import { Variant } from './Variant';

export type LineItem = {
  readonly appliedDiscount: Discount;
  readonly discountedTotal: string;
  readonly discountedUnitPrice: string;
  readonly id: string;
  readonly image: Image;
  readonly name: string;
  readonly originalTotal: string;
  readonly originalUnitPrice: string;
  readonly product: Product;
  readonly quantity: number;
  readonly sku: string;
  readonly taxLines: readonly TaxLine[];
  readonly taxable: boolean;
  readonly title: string;
  readonly totalDiscount: string;
  readonly variant: Variant;
  readonly variantTitle: string;
  readonly vendor: string;
  readonly inventoryUnits: readonly InventoryUnit[];
};

export type LineItemEdge = {
  readonly cursor: string;
  readonly node: LineItem;
};

export type LineItemEdges = {
  readonly edges: readonly LineItemEdge[];
  readonly pageInfo: PageInfo;
};
