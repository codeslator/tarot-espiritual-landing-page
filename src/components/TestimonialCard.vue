<template>
  <div class="media d-flex mx-3">
    <div class="row text-left">
      <div
        class="
          col-sm-12 col-md-12 col-lg-3
          d-flex
          justify-content-center
          align-items-center
          mb-3
        "
      >
        <img :src="avatar" class="mr-3 img-thumbnail" :alt="username" />
      </div>
      <div class="col-sm-12 col-md-12 col-lg-9">
        <div class="media-body">
          <div class="testimonial">
            <p class="start-text">
              {{ text }}
            </p>
            <p class="overview start-text">
              <b>{{ fullName }}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "TestimonialCard",
  props: {
    testimony: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      avatar: computed(() => props.testimony.avatarUrl),
      text: computed(() => props.testimony.text),
      username: computed(() => props.testimony.username),
      fullName: computed(() => props.testimony.fullName),
    };
  },
};
</script>

<style scoped>
.testimonial {
  padding: 0 15px 0 60px;
  position: relative;
}
.testimonial::before {
  content: "\201C";
  font-family: Arial, sans-serif;
  color: #e2e2e2;
  font-weight: bold;
  font-size: 68px;
  line-height: 54px;
  position: absolute;
  left: 15px;
  top: 0;
}

.start-text {
  text-align: left;
}

.overview b {
  text-transform: uppercase;
  color: #6a040f;
}

.media img {
  width: 100px;
  height: 100px;
  display: block;
  border-radius: 50%;
}
</style>