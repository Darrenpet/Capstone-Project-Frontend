import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Products from "@/views/Products/Products.vue";
import ProductDetails from "@/views/Products/ProductDetails.vue";
import Cart from "@/views/Cart.vue";
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
    path: "/Products/:id",
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
