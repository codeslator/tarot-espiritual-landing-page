<template>
  <section class="contact" id="contact">
    <svg
      id="visual"
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <path
        d="M0 13L40 15.7C80 18.3 160 23.7 240 27.8C320 32 400 35 480 30.7C560 26.3 640 14.7 720 16C800 17.3 880 31.7 960 37.2C1040 42.7 1120 39.3 1160 37.7L1200 36L1200 0L1160 0C1120 0 1040 0 960 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0L0 0Z"
        fill="#ffffff"
        stroke-linecap="round"
        stroke-linejoin="miter"
      ></path>
    </svg>
    <div class="container">
      <div class="row py-4 text-center text-light">
        <div
          class="col-xs-12 col-sm-12 col-md-3"
          v-for="({ icon, contact, url }, index) in contacts"
          :key="index"
        >
          <div class="contact-avatar py-2 d-flex justify-content-center">
            <a :href="url" class="link contact-icon bg-light text-primary">
              <i class="fa-2x" :class="icon"></i>
            </a>
          </div>
          <a :href="url" class="link link-primary text-light" target="_blank">{{ contact }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useData from "@/hooks/useData";

export default {
  name: "Contact",
  setup() {
    const { contactsSection } = useData();

    return {
      contacts: contactsSection,
    };
  },
};
</script>

<style scoped>
.contact {
  width: 100%;
  background: rgb(3, 7, 30);
  background: linear-gradient(
    0deg,
    rgba(3, 7, 30, 1) 0%,
    rgba(55, 6, 23, 1) 35%,
    rgba(106, 4, 15, 1) 65%,
    rgba(157, 2, 8, 1) 100%
  );
}

.link {
  text-decoration: none;
}

.contact-avatar {
  width: 100%;
}

.contact-icon {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>