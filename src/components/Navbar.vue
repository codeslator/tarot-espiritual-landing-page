<template>
  <!-- <h2>Navbar</h2> -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Navbar">
    <div class="container">
      <a class="navbar-brand" href="#">Vidente Juan Quintero</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-md-end" id="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#about" class="nav-link link-light">Sobre mí</a>
          </li>
          <li class="nav-item">
            <a href="#services" class="nav-link link-light">Servicios</a>
          </li>
          <li class="nav-item">
            <a href="#testimonials" class="nav-link link-light">Testimoniales</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link link-light">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted } from 'vue';
import { Collapse } from 'bootstrap'
export default {
  name: 'Navbar',
  components: {},
  setup() {
    onMounted(() => {
      const navbar = document.querySelector('#navbar');
      new Collapse(navbar, { toggle: false })
    })
  }
}
</script>
  
<style scoped>
.link-btn {
  padding: 0 20px;
  text-decoration: none;
}

.bg-transparent {
  background-color: rgba(0, 0, 0, .6) !important;
}

.bg-custom {
  background-color: #03071e !important;

}

.custom-navbar {
  height: 90px;
}
</style>