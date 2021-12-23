<template>
  <footer class="container-fluid bg-dark text-light">
    <ul class="nav justify-content-center border-bottom py-3">
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">Inicio</a>
      </li>
      <li class="nav-item">
        <a href="#about" class="nav-link px-2 text-muted">Sobre mí</a>
      </li>
      <li class="nav-item">
        <a href="#services" class="nav-link px-2 text-muted">Servicios</a>
      </li>
      <li class="nav-item">
        <a href="#testimonials" class="nav-link px-2 text-muted">Testimoniales</a>
      </li>
      <li class="nav-item">
        <a href="#contact" class="nav-link px-2 text-muted">Contacto</a>
      </li>
    </ul>
    <div class="py-3 d-flex justify-content-center">
      <span class="text-center text-muted">&copy; {{ new Date().getFullYear() }} - Cuellar Technologies - Codeslator.dev</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
</style>