<script setup lang="ts">
//removed script elements, no need for them yet
//router view, equivalent of the Router element in React

</script>


<template>
  <Transition name="fade" mode="out-in" appear>
    <router-view/>
  </Transition>
</template>

<style scoped>
</style>
