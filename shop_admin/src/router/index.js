import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = ()=> import("views/login/Login")
const Home = ()=> import("views/home/Home")
 
Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      redirect:"/login"
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:"/home",
      component:Home
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
