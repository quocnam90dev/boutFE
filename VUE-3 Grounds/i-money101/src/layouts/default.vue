<template>
  <Header />
  <slot />
  <Footer v-if="!meta.isHideFooter" />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";
export default {
  components: { Header, Footer },
  setup() {
    const route = useRoute();

    const meta = computed(() => route.meta);
    return { meta };
  },
};
</script>