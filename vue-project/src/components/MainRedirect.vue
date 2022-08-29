<template>

</template>

<script setup>
import {onMounted} from "vue";
import router from "../Router/index.js";

//the purpose of this component is to act as a redirect, right now it redirects to the sign in page, but when a backend is implemented, it would check if we have
// a valid token, and if not, it would redirect to sign in, else it would take you to the dashboard.

//runs on mount, console logs a message and redirects with router
onMounted(() => {
  console.log('user not logged in, redirect to sign in page!')
  router.push('/signin');
});

</script>

<style scoped>

</style>