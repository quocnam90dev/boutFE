<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white py-4 p-b-safe-4"
  >
    <div class="container mx-aut px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <i class="t2icon text-2xl" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
      <router-link :to="{name: 'NewTransaction', params: {}}">
        <button
          class="
            bg-blue-500
            hover:bg-blue-400
            text-white
            font-bold
            py-2
            px-4
            border-b-4 border-blue-700
            hover:border-blue-500
            rounded
            addTrans
          "
        >
          +
        </button>
      </router-link>
    </div>
  </footer>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { FOOTER_OPTIONS } from "@/constants";
export default {
  setup() {
    const navItems = reactive(FOOTER_OPTIONS);
    return { navItems };
  },
};
</script>

<style scoped lang='css'>
.container {
  position: relative;
}
.addTrans {
  position: absolute;
  left: 50%;
  margin-left: -20px;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  bottom: 95%;
}
</style>