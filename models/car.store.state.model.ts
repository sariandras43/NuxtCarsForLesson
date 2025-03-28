import type { CarModel } from "./car.model";

export interface CarStoreState {
    cars: CarModel[];
    loading: boolean;
    error: string | null;
  }