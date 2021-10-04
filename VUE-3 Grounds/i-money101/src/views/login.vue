<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <form @submit.prevent="onSubmit">
      <div
        class="
          container
          max-w-sm
          mx-auto
          flex-1 flex flex-col
          items-center
          justify-center
          px-2
        "
      >
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Login</h1>

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            v-model="email"
          />

          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            v-model="password"
          />

          <button
            type="submit"
            :disabled="isPending"
            class="
              w-full
              text-center
              py-3
              rounded
              bg-green-500
              text-white
              hover:bg-green-dark
              focus:outline-none
              my-1
            "
          >
            {{ isPending ? "Loading..." : "Login" }}
          </button>
        </div>
        <span class="text-red-800" v-if="error">{{ error }}</span>
        <div class="text-grey-dark mt-6">
          Dont have an account?
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="no-underline border-b border-blue text-blue"
            >Register</router-link
          >.
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useSignIn } from "@/composables/useSignIn";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, isPending, signin } = useSignIn();
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    async function onSubmit() {
      await signin(email.value, password.value);
      if (!error.value) router.push({ name: "Profile", params: {} });
    }
    return { email, password, error, isPending, onSubmit };
  },
};
</script>