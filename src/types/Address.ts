import { CountryCode } from './Enums';

export type Address = {
  readonly address1: string;
  readonly address2: string;
  readonly city: string;
  readonly company: string;
  readonly country: string;
  readonly countryCode: CountryCode;
  readonly firstName: string;
  readonly id: string;
  readonly lastName: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly name: string;
  readonly phone: string;
  readonly province: string;
  readonly provinceCode: string;
  readonly zip: string;
};
