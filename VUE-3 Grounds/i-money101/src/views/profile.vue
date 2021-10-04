<template>
  <div class="container mx-auto mt-20">
    <div>
      <div
        class="
          bg-white
          relative
          shadow-xl
          w-5/6
          md:w-4/6
          lg:w-3/6
          xl:w-2/6
          mx-auto
        "
      >
        <div class="flex justify-center">
          <img
            :src="require('@/assets/images/logo.png')"
            alt=""
            class="
              rounded-full
              mx-auto
              absolute
              -top-20
              w-32
              h-32
              shadow-2xl
              border-4 border-white
            "
          />
        </div>

        <div class="mt-16">
          <div v-if="user">
            <h1 class="font-bold text-center text-3xl text-gray-900">
              {{ user.displayName }}
            </h1>
            <p class="text-center text-sm text-gray-400 font-medium">
              {{ user.email }}
            </p>
            <p>
              <span> </span>
            </p>
          </div>
          <div class="w-full">
            <h3 class="font-bold text-gray-600 text-left px-4">General</h3>
            <div class="mt-5 w-full">
              <div class="grid grid-cols-1">
                <div class="col-span-1">
                  <ul>
                    <li
                      v-for="profileOption in profileOptions"
                      :key="profileOption.name"
                    >
                      <router-link
                        :to="profileOption.route"
                        class="flex justify-between items-center py-3"
                      >
                        <div
                          class="flex item-center text-left"
                          :class="{
                            'text-red-500': profileOption.name === 'logout',
                          }"
                        >
                          <i
                            class="t2ico text-2x1"
                            :class="profileOption.icon"
                          ></i>
                          <h5 class="font-semibold ml-3">
                            {{ profileOption.name }}
                          </h5>
                        </div>
                        <span class="text-right">
                          <i class="t2ico t2ico-arrow-right"></i>
                        </span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { PROFILE_OPTIONS } from "@/constants";
import { useUser } from "@/composables/useUser";

export default {
  setup() {
    const profileOptions = reactive(PROFILE_OPTIONS);
    const { getUser } = useUser();
    const { user } = getUser();

    return { user, profileOptions };
  },
};
</script>