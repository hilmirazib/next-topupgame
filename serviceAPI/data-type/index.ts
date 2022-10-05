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
