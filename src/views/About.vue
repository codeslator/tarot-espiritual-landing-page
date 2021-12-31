<template>
  <section class="about" id="about">
    <div class="container mt-5">
      <div class="row mb-5 align-items-center">
        <div
          class="col-sm-12 col-md-5 col-lg-5 d-flex justify-content-center p-5"
        >
          <img
            class="rounded img-fluid"
            :src="section.imageUrl"
            :alt="section.title"
          />
        </div>
        <div class="col-sm-12 col-md-7 col-lg-7 py-5">
          <h1 class="display-4 text-center">
            <span class="fw-bold lh-1">{{ section.title }}</span>
            🧙‍♂️
          </h1>
          <p class="lead text-center">
            {{ section.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useData from "@/hooks/useData";

export default {
  name: "Hero",
  setup() {
    const { aboutSection } = useData();

    return {
      section: aboutSection,
    };
  },
};
</script>

<style>
</style>