<template>
  <a v-if="isExternalLink" :href="link.to" target="_blank" class="nav-link">{{
    link.name
  }}</a>
  <router-link v-else v-slot="{ isActive }" :to="route">
    <a class="nav-link" :class="isActive ? 'active' : ''">
      {{ link.name }}
    </a>
  </router-link>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    // const { link } = toRefs(props);

    return {
      isExternalLink: computed(() => props.link.to.startsWith("http")),
      routerLink: computed(() =>
        props.link.id === undefined
          ? { name: props.link.to }
          : { name: props.link.to, params: { id: props.link.id } }
      ),
    };
  },
};
</script>