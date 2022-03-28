import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Products from "@/views/Products.vue";
import ProductDetails from "@/views/ProductDetails.vue";
import Cart from "@/views/Cart.vue";
import Dashboard from "@/views/Dashboard.vue";
import OneProduct from "@/views/OneProduct.vue";
import UserDetails from "@/views/UserDetails.vue";
import LoginU from "@/views/LoginU.vue";
import RegisterU from "@/views/RegisterU.vue";
import Contact from "@/views/Contact.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard/:id",
    name: "OneProduct",
    component: OneProduct,
    props: true,
  },
  {
    path: "/dashboard/:id",
    name: "UserDetails",
    component: UserDetails,
    props: true,
  },
  {
    path: "/login",
    name: "LoginU",
    component: LoginU,
  },
  {
    path: "/register",
    name: "RegisterU",
    component: RegisterU,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
