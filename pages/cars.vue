<template>
  <div>
    <h1>cars</h1>
    <Card :car="car"/>
  </div>
</template>

<script lang="ts" setup>
const car = ref({id:1,make:'Ford',model:'Fiesta',year:2017})

</script>

<style>

</style>