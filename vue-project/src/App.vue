<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import LoginBox from './components/LoginBox.vue'
import {reactive, ref} from "vue";
import SignUpBox from "./components/SignUpBox.vue";


//reactive state, I could use ref as well, but I wanted to try reactive since I will use it for objects and arrays later on
  const state= reactive({
  show:  true
  });

  //function that sets show to the opposite of current state
  const setShow = () => {
    state.show = !state.show;
  }

</script>

<template>
  <LoginBox v-if="state.show" :show="setShow"/>
  <SignUpBox v-else :show="setShow"/>
</template>

<style scoped>
</style>
