import { defineStore } from 'pinia';
import axios from 'axios';
import type { CarModel } from '~/models/car.model';
import type { CarStoreState } from '~/models/car.store.state.model';


export const useCarStore = defineStore('carStore', {
  state: () : CarStoreState => ({
    cars:[],
    loading: false,
    error: null
  }),
  actions: {
    async fetchCars() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get<CarModel[]>('http://localhost:3000/cars');
        this.cars = response.data;
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Ismeretlen hiba';
        console.error('Hiba a kérés közben:', this.error);
      } finally {
        this.loading = false;
      }
    },
    async fetchCarById(id:any) : Promise<CarModel|undefined> {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get<CarModel>('http://localhost:3000/cars/'+id);
        if (response.data) {
          return response.data;
        }
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Ismeretlen hiba';
        console.error('Hiba a kérés közben:', this.error);
      } finally {
        this.loading = false;
      }
    }
  }
})