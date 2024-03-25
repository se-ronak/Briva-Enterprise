<template>
  <v-app>
    <v-main class="black-background">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.black-background {
  background-color: black;
}
</style>
