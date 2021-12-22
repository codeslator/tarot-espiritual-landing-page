<template>
  <a
    :href="link"
    v-if="isLink"
    class="btn btn-floating d-flex align-items-center justify-content-center"
    :class="type"
    target="_blank"
    data-bs-toggle="tooltip" data-bs-placement="left" title="Contactame"
  >
    <i class="fab fa-2x" :class="icon"></i>
  </a>
  <button
    class="btn btn-floating"
    :class="type"
    @click="$emit('on:click')"
    v-else
  >
    <i class="fab fa-2x" :class="icon"></i>
  </button>
</template>

<script>
import { computed, onMounted } from "vue";
import { Tooltip } from 'bootstrap';

export default {
  name: "Fab",
  props: {
    icon: {
      type: String,
      default: "fa-plus",
    },
    type: {
      type: String,
      default: "btn-primary",
    },
    link: {
      type: String,
    },
  },
  setup(props) {
    onMounted(() => {
      let tooltip = document.querySelector('[data-bs-toggle="tooltip"]')
      new Tooltip(tooltip).show()
    })
    return {
      isLink: computed(() => (props.link ? true : false)),
    };
  },
};
</script>

<style scoped>
.btn-floating {
  border-radius: 100%;
  bottom: 15px;
  height: 60px;
  position: fixed;
  right: 15px;
  width: 60px;
}
</style>