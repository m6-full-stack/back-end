export interface IAddress {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}


export interface IAddressUpdateRequest {
  street?: string;
  number?: string;
  complement?: string;
  cep?: string;
  city?: string;
  state?: string;
}