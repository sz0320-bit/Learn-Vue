
import {createRouter, createWebHistory} from 'vue-router';
import LoginBox from "../components/LoginBox.vue";
import SignUpBox from "../components/SignUpBox.vue";
import MainRedirect from "../components/MainRedirect.vue";


const routes = [ //equivalent of route element in React but grouped together in an array with all routes
    {
      path: '/',
      name: 'home',
      component: MainRedirect
    },
    {
        path: '/signin',
        name: 'log in',
        component: LoginBox,
    },
    {
        path: '/signup',
        name: 'sign up',
        component: SignUpBox,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),// equivalent of useHistory in React, allows pushing routes later on without calling a hook
    routes //routes from array
});

export default router;