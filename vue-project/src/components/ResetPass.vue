<script lang="js">
import {ref} from 'vue'
import {email, maxLength, minLength, required} from "@vuelidate/validators";
import useVuelidate from '@vuelidate/core'

//added form validation with vuelidate package
//automatic email validation
//configured password validation (requires certain conditions)

export default {
  name: 'ResetPass',
  props: {},

  setup() {
    return {v$: useVuelidate()} //necessary to use package
  },

  data() {
    return {
      form: { //data should be in the form object
        username: '',
        password: '',
      },
      showConfirmation: false, //state for the confirmation modal
    }
  },

  methods: {
    submit() { //form submit function, this will be replaced with the actual function later on, for now it checks if there are any errors, and if not, it sets modal show state to true
      this.v$.form.$touch();
      if (this.v$.form.$error) return
      // to form submit after this
      this.showConfirmation = true;
    }
  },

  watch: {
    username() {
      console.log(this.username);
    },
    password() {
      console.log(this.password);
    }
  },

  validations: { //validation object for the vuelidate package
    form: {
      username: {
        required, //required and is an email
        email
      },
      password: {
        required,
        containsUppercase: function (value) {
          return /[A-Z]/.test(value)
        },
        containsLowercase: function (value) {
          return /[a-z]/.test(value)
        },
        containsNumber: function (value) {
          return /[0-9]/.test(value)
        },
        containsSpecial: function (value) {
          return /[#?!@$%^&*-]/.test(value)
        },
        minLength: minLength(8), maxLength: maxLength(19)
      },
    }
  }


}

</script>

<template>

  <div
      class="h-full w-full flex justify-center items-center absolute">
    <div class="bg-zinc-800 rounded-3xl shadow-2xl  border  h-[30em] w-[50em] flex justify-center  flex-row ">
      <div class="h-full w-[50%]  flex flex-col border-r justify-center items-center gap-5">
        <img class="" src="../assets/vue-svgrepo-com.svg"/>
        <h3 class="text-2xl">VueJS Demo</h3>
      </div>


      <div class="h-full  w-[50%]  border-l flex flex-col justify-center items-center"
           :class="{ 'gap-3' : v$.form.password.$error, 'gap-7' : !v$.form.password.$error}">

        <div class="w-fit h-fit text-3xl  underline underline-offset-4">
          RESET PASSWORD
        </div>

        <div class="h-fit w-[90%]   flex flex-col justify-center items-center gap-2">
          <div class="w-[90%] flex flex-col justify-center  ">
            <h1 class="ml-2 mb-1">email:</h1>
            <input type="text" maxlength="31"
                   class="text-black h-10 shadow-2xl duration-200 shadow-black w-full rounded-2xl font-mono px-2"
                   v-model="form.username"
                   :class="{'border-r-[0.65em] border-r-red-600 ' : v$.form.username.$error}"
            />
            <h1 v-if="v$.form.username.$error" class="text-red-600 m-1 w-full  text-right px-5">Invalid Email</h1>
          </div>
          <div class="w-[90%] flex flex-col justify-center  ">
            <h1 class="ml-2 mb-1">password:</h1>
            <input type="password"
                   class="text-black h-10 w-full shadow-2xl duration-200 shadow-black rounded-2xl font-mono px-2 "
                   v-model="form.password"
                   :class="{'border-r-[0.65em] border-r-red-600' : v$.form.password.$error}"
            />
          </div>
          <h1 v-if="v$.form.password.$error" class="text-red-600 m-1 w-full  text-[0.75rem] ">Invalid Password, Please
            Make Sure Your Password Contains:
            <div class=" h-fit text-right">
              -Lowercase character
              <br>
              -Uppercase character
              <br>
              -Number
              <br>
              -Special character
              <br>
              -minimum 8 characters
            </div>
          </h1>
        </div>
        <div class="h-fit w-full flex justify-center items-center flex-col gap-4">
          <button
              :disabled="!!v$.form.$error"
              @click="submit"
              class="h-10 w-[45%]   rounded-xl bg-blue-700 flex justify-center items-center  text-lg hover:scale-105 duration-200 ">
            CHANGE
          </button>
          <h1>
            Already have an account?
            <RouterLink to="/">
              <span class="text-blue-500"> Sign In</span>
            </RouterLink>
          </h1>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="showConfirmation" class="h-full w-full absolute  flex justify-center items-center glass">
        <div class="w-[30em] h-[15em] rounded-3xl p-5 bg-[#1f1f1f] flex justify-center items-center flex-col ">
          <div class="text-2xl flex h-[75%] justify-center items-center gap-5">
            Password Changed
            <img src="../assets/check.svg" class="h-[2.5em]"/>
          </div>
          <button
              @click="() => showConfirmation = false"
              class="h-10 w-[45%]   rounded-xl bg-blue-700 flex justify-center items-center  text-lg hover:scale-105 duration-200 ">
            CLOSE
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
