<template>
  <NuxtLayout>
    <v-app>
      <NavBar />
      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
      <CustomFooter/>
    </v-app>
  </NuxtLayout>
</template>