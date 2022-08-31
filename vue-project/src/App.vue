<script setup lang="ts">
//removed script elements, no need for them yet
//router view, equivalent of the Router element in React
//problem with router animations, will figure out soon
</script>


<template>
  <router-view v-slot="{ Component }">

      <component :is="Component" />

  </router-view>
</template>

<style scoped>
</style>
