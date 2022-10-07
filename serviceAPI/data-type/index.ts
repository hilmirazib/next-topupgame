export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BanksTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}
export interface PaymentTypes {
  map(arg0: (payment: any) => any): import('react').ReactNode;
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[];
}

export interface NominalsTypes {
  map(arg0: (nominal: any) => JSX.Element): import('react').ReactNode;
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface CheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface HistoryVoucherTopupTypes {
  category: string;
  coinName: string;
  coinQuantity: string;
  gameName: string;
  price: number;
  thumbnail: string;
}

export interface HistoryPaymentTypes {
  bankName: string;
  name: string;
  noRekening: string;
  type: string;
}

export interface HistoryTransactionTypes {
  _id: string;
  historyVoucherTopup: HistoryVoucherTopupTypes;
  value: number;
  status: string;
  accountUser: string;
  tax: number;
  name: string;
  historyPayment: HistoryPaymentTypes;
}

export interface TopUpCategoriesTypes {
  map(arg0: (item: any) => any): import('react').ReactNode;
  _id: string;
  valeu: number;
  name: string;
}
