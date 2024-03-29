export enum DraftOrderStatus {
  COMPLETED,
  INVOICE_SENT,
  OPEN,
}

export enum InventoryUnitStatus {
  CREATED,
  CANCELLATION_REQUESTED,
  CANCELLED,
  CANCELLATION_REQUEST_CANCELLED,
  SHIPPED,
  OUT_FOR_DELIVERY,
  DELIVERED,
  FAILED_DELIVERY,
  RETURN_TO_ORIGIN,
  RETURN_REQUESTED,
  RETURN_APPROVED,
  RETURN_CANCELLED,
  OUT_FOR_PICKUP,
  PICKED_UP,
  FAILED_PICKUP,
  EXCHANGE_REQUESTED,
  EXCHANGE_CANCELLED,
  EXCHANGE_APPROVED,
  DELIVERED_TO_BRAND,
  REFUND_INITIATED,
}

export enum ProductStatus {
  ACTIVE,
  ARCHIVED,
  DRAFT,
}

export enum DiscountType {
  FIXED_AMOUNT,
  PERCENTAGE,
}

export enum CurrencyCode {
  INR,
}

export enum CountryCode {
  IN,
}

export enum DiscountCodeType {
  COUPON,
}

export enum PlatFormTitle {
  AMAZON,
  NYKAA,
}
