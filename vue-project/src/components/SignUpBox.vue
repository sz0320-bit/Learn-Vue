<script  lang="js">
import { ref } from 'vue'

//everything is the same as the login component, except one extra input for the password confirmation

export default {
  name: 'SignUpBox',
  props: {
  },




  data(){
    return{
      username: '',
      password: '',
      confirmationPass: ''
    }
  },

  methods: {
    displayEntry: function (){
      { this.username === "" && this.password === "" && this.confirmationPass === "" ?
          alert('no data present!')
          :
        alert(this.username,this.password,this.confirmationPass)
      }
    }
  },

  watch: {
    username(){
      console.log(this.username);
    },
    password(){
      console.log(this.password);
    }
  }

}

</script>

<template>
  <div class="h-full w-full flex justify-center items-center absolute">
    <div class="bg-zinc-800 rounded-3xl shadow-2xl  border  h-[30em] w-[50em] flex justify-center  flex-row ">
      <div class="h-full w-[50%]  flex flex-col border-r justify-center items-center gap-5">
        <img class="" src="../assets/vue-svgrepo-com.svg"/>
        <h3 class="text-2xl">VueJS Demo</h3>
      </div>



      <div class="h-full  w-[50%] gap-7 border-l flex flex-col justify-center items-center">

        <div class="w-fit h-fit text-3xl  underline underline-offset-4">
          SIGN UP
        </div>

        <div class="h-fit w-[90%]  flex flex-col justify-center items-center gap-2">
          <div class="w-[90%] flex flex-col justify-center  ">
            <h1 class="ml-2 mb-1">username:</h1>
            <input type="text" maxlength="31" class="text-black h-10 shadow-2xl shadow-black w-full rounded-2xl font-mono px-2" v-model="username" @input="event => username = event.target.value"/>
          </div>
          <div class="w-[90%] flex flex-col justify-center  ">
            <h1 class="ml-2 mb-1">password:</h1>
            <input type="password" maxlength="31" class="text-black h-10 w-full shadow-2xl shadow-black rounded-2xl font-mono px-2 " v-model="password" @input="event => password = event.target.value"/>
          </div>
          <div class="w-[90%] flex flex-col justify-center  ">
            <h1 class="ml-2 mb-1">confirm password:</h1>
            <input type="password" maxlength="31" class="text-black h-10 w-full shadow-2xl shadow-black rounded-2xl font-mono px-2 " v-model="confirmationPass" @input="event => confirmationPass = event.target.value"/>
          </div>
        </div>
        <div class="h-fit w-full flex justify-center items-center flex-col gap-4">
          <div @click="displayEntry" class="h-10 w-[45%]  rounded-xl bg-blue-700 flex justify-center items-center  text-lg hover:scale-105 duration-200 ">
            SIGN UP
          </div>
          <h1>
            Already have an account?
            <RouterLink to="/">
              <span class="text-blue-500"> Sign In</span>
            </RouterLink>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
