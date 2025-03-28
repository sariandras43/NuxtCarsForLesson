<template>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-4" elevation="6">
          <v-img
            :src="car?.image_url ?? '/images/placeholder_car.png'"
            height="300"
            cover
            class="rounded"
          />

          <v-card-title class="text-h5">{{ car?.make }} {{ car?.model }}</v-card-title>

          <v-card-text>
            <p class="text-body-1">{{ car?.description }}</p>
          </v-card-text>

          <v-card-actions class="d-flex justify-space-between">
            <v-btn color="blue-darken-2" variant="tonal">
              Gyártó weboldala
            </v-btn>
            <v-btn color="green-darken-2" variant="elevated">
              Vásárlás most
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import type { CarModel } from '~/models/car.model';
import { useCarStore } from '~/stores/car';

const { id } = useRoute().params;

const carStore = useCarStore();
const car = ref<CarModel>()

carStore.fetchCarById(id).then((res)=>{
  car.value = res;
})
</script>

<style></style>