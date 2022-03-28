<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff0000;
  background-color: rgb(226, 226, 226);
  padding-top: 200px;
  padding-bottom: 150px;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: white;
  margin-left: 5px;
}

#nav a.router-link-exact-active {
  color: #ff0000;
}
</style>
