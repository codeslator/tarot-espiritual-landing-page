<template>
  <section class="home mb-5">
    <div class="container mb-5">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center text-center text-light">
        <div class="col p-3 p-lg-5 pt-lg-3 mx-auto">
          <h1 class="display-4 fw-bold lh-1">{{ homeSection.title }}</h1>
          <p class="lead my-4">
            {{ homeSection.hero }}
          </p>
          <div
            class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3"
          >
            <a
              href="#about"
              class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
            >
              {{ homeSection.primaryButton }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 144.54 17.34"
      preserveAspectRatio="none"
      fill="#ffffff"
    >
      <path
        d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"
      ></path>
    </svg>
  </section>
</template>

<script>
import useData from "@/hooks/useData";

export default {
  name: "Home",
  setup() {
    const { homeSection } = useData();

    return {
      homeSection
    };
  }
};
</script>

<style scoped>
.home {
  background: rgb(3, 7, 30);
  background: linear-gradient(
    180deg,
    rgba(3, 7, 30, 1) 0%,
    rgba(55, 6, 23, 1) 35%,
    rgba(106, 4, 15, 1) 65%,
    rgba(157, 2, 8, 1) 100%
  );
}
</style>