export enum DraftOrderStatus {
  COMPLETED,
  INVOICE_SENT,
  OPEN,
}

export enum InventoryUnitStatus {
  CREATED,
  PACKED,
  OUT_FOR_PICKUP,
  IN_TRANSIT,
  OUT_FOR_DELIVERY,
  DELIVERED,
  CANCELLATION_REQUESTED,
  CANCELLED,
  RETURN_REQUESTED,
  RETURN_APPROVED,
  OUT_FOR_REVERSE_PICKUP,
  REVERSE_PICKED_UP,
  REVERSE_IN_TRANSIT,
  RETURN_RECEIVED,
  EXCHANGE_REQUESTED,
  EXCHANGE_APPROVED,
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

export enum PaymentMethod {
  PREPAID,
  COD,
}

export enum CountryCode {
  IN,
}
