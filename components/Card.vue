<template>
  <v-card :title="`${car.make} ${car.model}`" :subtitle="car.year" :text="lorem">
    
    <v-card-actions>
      <v-btn>Tovább a gyártó oldalára</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
const {car} = defineProps(['car'])
</script>

<style>

</style>