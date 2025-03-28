<template>
  <div>
    <v-img color="surface-variant" height="200" :src="car.image_url ?? '/images/placeholder_car.png'" cover
      rounded>
    </v-img>
    <v-card class="my-2 text-center" color="space" :title="`${car.make} ${car.model}`" :subtitle="car.year">
    </v-card>
    <v-btn width="100%" color="space" :to="'/cars/'+car.id">
      Tovább a részletekre
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
// import CarModel from '@models/CarModel'
import type { CarModel } from '~/models/car.model'
const props = defineProps<{ car: CarModel }>()

</script>

<style>
</style>