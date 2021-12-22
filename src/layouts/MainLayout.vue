<template>
  <navbar />
  <main>
    <home />
    <hero />
    <services />
    <testimonials />
    <contact />
  </main>
  <custom-footer />
  <fab :icon="'fa-whatsapp'" :type="'btn-success'" :link="'https://api.whatsapp.com/send/?phone=5491152175891&text&app_absent=0'" />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "MainLayout",
  components: {
    Navbar: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Navbar" */ "@/components/Navbar")
    ),
    CustomFooter: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Footer" */ "@/components/Footer")
    ),
    Fab: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Fab" */ "@/components/Fab")
    ),
    Home: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Home" */ "@/views/Home")
    ),
    Hero: defineAsyncComponent(() =>
      import(/* webpackChunkName: "About" */ "@/views/About")
    ),
    Services: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Services" */ "@/views/Services")
    ),
    Testimonials: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Testimonials" */ "@/views/Testimonials")
    ),
    Contact: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Contact" */ "@/views/Contact")
    ),
  }
};
</script>

<style scoped>
.full-container {
  width: 100%;
  height: 100vh;
}
</style>