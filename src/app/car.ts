export enum Transmisson {
  MANUAL,
  AUTOMATIC
}

export class Car {
  id: number;
  name: string;
  img_url: string;
  pricePerDay: number;
  transmission: Transmisson;
}
