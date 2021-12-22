<template>
  <section class="services" id="services">
    <div class="container">
      <h1 class="display-4 fw-bold lh-1 text-center">{{ section.title }}</h1>
      <p class="lead text-center mt-3">
        {{ section.text }}
      </p>
      <div class="row mb-5 mt-2 justify-content-center">
        <div
          class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 mt-3"
          v-for="(service, index) in services"
          :key="index"
        >
          <service-card :service="service" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent } from "vue";
import useData from '@/hooks/useData';
export default {
  name: "Services",
  components: {
    ServiceCard: defineAsyncComponent(() => import("@/components/ServiceCard")),
  },
  setup() {
    const { services, servicesSection } = useData();

    return {
      services,
      section: servicesSection,
    };
  },
};
</script>

<style>
</style>