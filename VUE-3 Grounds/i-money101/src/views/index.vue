<template>
  <div class="home"></div>
  <span v-if="user"> {{ user.displayName }} </span>
</template>

<script>
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    return { user };
  },
};
</script>
