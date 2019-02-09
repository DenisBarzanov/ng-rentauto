export enum Transmission {
  MANUAL = 'РЪЧНА',
  AUTOMATIC = 'АВТОМАТИК'
}

export class Car {
  id: number;
  name: string;
  img_url: string;
  pricePerDay: number;
  transmission: Transmission;
}
