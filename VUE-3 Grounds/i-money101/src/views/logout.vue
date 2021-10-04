<template>
  <h1>Logout Page...</h1>
</template>

<script>
import { useLogOut } from "@/composables/useLogOut";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const { error, logout } = useLogOut();
    async function onLogout() {
      await logout();
      if (!error.value) {
        router.push({ name: "Login", params: {} });
      }
    }
    onLogout();
    return { error };
  },
};
</script>