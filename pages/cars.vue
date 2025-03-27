<template>
  <div>
    <h1>Az adatbázisban található autók</h1>
    <v-row justify="center" gutter="10">
      <v-col cols="12" md="6" lg="4" sm="12">
        <Card :car="car" />
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="12">
        <Card :car="car" />
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="12">
        <Card :car="car" />
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="12">
        <Card :car="car" />
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="12">
        <Card :car="car" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import type { CarModel } from '~/models/car.model'

const car = ref<CarModel>({ id: 1, make: 'Ford', model: 'Fiesta', year: 2017, image_url: 'http://dummyimage.com/149x865.png/ff4444/ffffff' })

</script>

<style></style>