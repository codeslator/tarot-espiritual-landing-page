<template>
  <div class="card shadow border-primary card-fixed">
    <div class="card-body d-flex justify-content-center align-items-center" v-if="hasAvatar">
      <!-- <img src="@/assets/avatar-1.png" class="avatar circle" alt="" srcset=""> -->
      <div class="d-flex justify-content-center align-items-center">
        <div class="avatar circle d-flex justify-content-center align-items-center bg-primary" v-if="icon">
          <i class="fa fa-2x" :class="icon" />
        </div>
        <img :src="avatar" :alt="title"  class="avatar circle img-thumbnail" v-if="avatar">
      </div>
    </div>
    <div class="card-body text-center body-fixed">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ text }}
      </p>
      <a href="" class="btn btn-primary" v-if="hasBtnText" >{{ btnText }}</a>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
  setup(props) {

    return {
      title: computed(() => props.service.title),
      text: computed(() => props.service.text),
      hasAvatar: computed(() => (props.service.icon || props.service.avatar) ? true : false),
      icon: computed(() => props.service.icon),
      btnText: computed(() => props.service.btnText),
      hasBtnText: computed(() => props.service.btnText ? true : false),
      avatar: props.service.avatar,
    }
  }
};
</script>

<style scoped>
.avatar {
  width: 120px;
  height: 120px;

}
i {
  font-size: 40px;
  color: #fff;
}

.circle {
  border-radius: 50%;
}

.body-fixed {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

}

.card-fixed {
  min-height: 460px;
}
</style>