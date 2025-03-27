<template>
  <v-footer class="d-flex align-center justify-center ga-2 flex-wrap flex-grow-1 py-3" color="emerald">
    <v-btn to="/" text="Főoldal" variant="text" rounded></v-btn>
    <v-btn to="/about" text="Rólunk" variant="text" rounded></v-btn>
    <v-btn to="/cars" text="Autók" variant="text" rounded></v-btn>

    <div class="flex-1-0-100 text-center mt-2">
      {{ new Date().getFullYear() }} — <strong>AutóMester</strong>
    </div>
  </v-footer>
</template>
