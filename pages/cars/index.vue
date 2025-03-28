<template>
  <div>
    <h1>Az adatbázisban található autók</h1>
    <v-row justify="center" gutter="10">
      <v-col v-for="c in carStore.cars" cols="12" md="6" lg="4" sm="12">
        <Card class="animation" :car="c" />
      </v-col>

    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { useCarStore } from '~/stores/car';

const carStore = useCarStore()
carStore.fetchCars();

</script>

<style lang="css">
</style>