<template>
  <section class="testimonials" id="testimonials">
    <div class="container">
      <h1 class="display-4 fw-bold lh-1 text-center">
        {{ testimonialSection.title }}
      </h1>
      <p class="lead text-center mt-3">
        {{ testimonialSection.text }}
      </p>
      <div class="row py-3 mb-5 mt-2">
        <div class="col-12">
          <carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
            <slide v-for="(testimony, index) in testimonials" :key="index">
              <div class="carousel__item">
                <testimonial-card :testimony="testimony" />
              </div>
            </slide>
            <!-- <template #addons>
              <navigation />
            </template> -->
          </carousel>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
// import { useWindowSize } from "vue-window-size";
import useData from "@/hooks/useData";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "Testimonials",
  components: {
    Carousel,
    Slide,
    // Pagination,
    TestimonialCard: defineAsyncComponent(() =>
      import("@/components/TestimonialCard")
    ),
  },
  setup() {
    const { testimonials, testimonialSection } = useData();
    // const { width } = useWindowSize();

    return {
      testimonials,
      testimonialSection,
      // smBreakpointSlides: computed(() => width < 576 ? 1 : 2)
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        // 700px and up
        576: {
          itemsToShow: 2,
          snapAlign: "center",
        },
      },
    };
  },
};
</script>

<style>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background-color: #fff;
}
</style>