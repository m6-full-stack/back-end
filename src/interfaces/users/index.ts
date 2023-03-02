import { IAddress } from '../address'

export interface IUser {
  name: string
  password: string
  cpf: string
  birthdate: string
  description: string
  is_seller: boolean
  email: string
  phone: string
  address: IAddress
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
}
