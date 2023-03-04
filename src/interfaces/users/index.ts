import { IAddress } from '../address'

export interface IAddressRequest {
  cep: string 
  state: string 
  city: string 
  street: string 
  number: string 
  complement: string
}

export interface IUser {
  name: string
  password: string
  cpf: string
  birthdate: string
  description: string
  is_seller: boolean
  email: string
  phone: string
  address: IAddressRequest
}

export interface IUserUpdate {
  name?: string
  password?: string
  cpf?: string
  birthdate?: string
  description?: string
  is_seller?: boolean
  email?: string
  phone?: string
  address?: IAddressRequest
}

export interface IUserUpdateRequest {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthdate?: string;
  description?: string;
  is_seller?: boolean;
  password?: string;
  address?: IAddressRequest;
}