/* eslint-disable @typescript-eslint/no-explicit-any */
export type TBike = {
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  image: string;
  cc: number;
  year: number;
  model: string;
  brand: string;
  __v: number;
};

export type TRental = {
  _id: string;
  userId?: UserId;
  bikeId?: BikeId;
  startTime: string;
  returnTime: string;
  payment: string;
  coupon: string;
  totalCost: number;
  isReturn: boolean;
  __v: number;
};

export interface BikeId {
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  image: string;
  cc: number;
  year: number;
  model: string;
  brand: string;
  __v: number;
}

export interface UserId {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  isDeleted: boolean;
}
