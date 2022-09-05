import { CountryCode } from './Enums';

export type Address = {
  readonly address1: string;
  readonly address2: string;
  readonly city: string;
  readonly country: string;
  readonly countryCode: CountryCode;
  readonly firstName: string;
  readonly formatted: readonly string[];
  readonly formattedArea: string;
  readonly lastName: string;
  readonly name: string;
  readonly phone: string;
  readonly province: string;
  readonly zip: string;
};

export type AddressInput = {
  readonly address1: string;
  readonly address2?: string;
  readonly city: string;
  readonly country?: string;
  readonly countryCode?: CountryCode;
  readonly firstName: string;
  readonly lastName?: string;
  readonly phone: string;
  readonly province: string;
  readonly zip: string;
};
