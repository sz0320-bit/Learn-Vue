<script setup lang="ts">
//removed script elements, no need for them yet
//router view, equivalent of the Router element in React
//problem with router animations, will figure out soon
</script>


<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"/>
    </Transition>
  </router-view>
</template>

<style scoped>
</style>
