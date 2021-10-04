<template>
  <form @submit.prevent="onSubmit">
    <div class="row mt-8">
      <div class="bg-white round-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pd-1">
                <span
                  class="
                    inline-block
                    px-1
                    text-dark-500
                    border border-dark
                    rounded
                    text-sm
                    font-bold
                  "
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  id="total"
                  type="text"
                  class="text-4xl text-dark w-full outline-none mt-1"
                  placeholder="0"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="
                  flex
                  items-center
                  flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                  pd-1
                "
              >
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 flex-col border-b border-gray-100 py-3">
                <input
                  id="category"
                  type="text"
                  class="text-4xl text-dark w-full outline-none"
                  placeholder="select category"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="
                  flex
                  items-center
                  flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                  pd-1
                "
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-document text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 flex-col border-b border-gray-100 py-3">
                <input
                  id="note"
                  type="text"
                  class="text-dark w-full outline-none"
                  placeholder="Note"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="createAt" class="flex items-center">
              <div
                class="
                  flex
                  items-center
                  flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                  pd-1
                "
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-calendar text-2xl"></i>
                </span>
              </div>
              <div
                class="
                  flex-1 flex-col
                  border-b border-gray-100
                  py-3
                  border-gray-100
                "
              >
                <div class="text-dark w-full">{{ new Date() }}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div
                class="
                  flex
                  items-center
                  flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                  pd-1
                "
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-wallet text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 flex-col border-b border-gray-100 py-3">
                <input
                  id="wallet"
                  type="text"
                  class="text-dark w-full outline-none"
                  placeholder="My Wallet"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-8" v-if="!showMoreDetails">
      <button
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
        @click="showMoreDetails = !showMoreDetails"
      >
        More Details
      </button>
    </div>

    <div class="row mt-8" v-if="showMoreDetails">
      <div class="bg-white round-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="location" class="flex items-center">
              <div
                class="
                  flex
                  items-center
                  flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                  pd-1
                "
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-location text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 flex-col border-b border-gray-100 py-3">
                <input
                  id="location"
                  type="text"
                  class="text-dark w-full outline-none"
                  placeholder="Select location"
                  v-model="location"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="withPerson" class="flex items-center">
              <div
                class="
                  flex
                  items-center
                  flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                  pd-1
                "
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-users text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 flex-col border-b border-gray-100 py-3">
                <input
                  id="withPerson"
                  type="text"
                  class="text-dark w-full outline-none"
                  placeholder="With Person"
                  v-model="person"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="upload" class="flex items-center">
              <div
                class="
                  flex
                  items-center
                  flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                  pd-1
                "
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-camera text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 flex-col border-b border-gray-100 py-3">
                <div class="w-full">Upload Photos</div>
                <span class="text-red-600" v-if="errorfile">{{
                  errorfile
                }}</span>
                <input
                  id="upload"
                  type="file"
                  class="w-0 h-0 overflow-hidden absolute"
                  @change="onChangeFile"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStorage";
export default {
  setup() {
    const showMoreDetails = ref(false);
    const { getUser } = useUser();
    const { addRecord } = useCollection("transaction");
    const { uploadFile, url } = useStorage("transaction");

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());

    const location = ref(null);
    const person = ref(null);
    const file = ref(null);
    const errorfile = ref(null);

    function onChangeFile(e) {
      errorfile.value = null;
      const selected = e.target.files[0];
      const typesFile = ["image/png", "image/jpg", "image/jpeg"];

      if (selected && typesFile.includes(selected.type)) {
        file.value = selected;
      } else {
        file.value = null;
        errorfile.value = "Please select JPG, PNG";
        console.log(errorfile.value);
      }
    }

    async function onSubmit() {
      const { user } = getUser();
      if (file.value) await uploadFile(file.value);

      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        userId: user.value.uid,
        location: location.value,
        person: person.value,
        thumbnail: url.value
      };
      await addRecord(transaction);
    }
    return {
      onSubmit,
      showMoreDetails,
      total,
      category,
      note,
      time,
      location,
      person,
      onChangeFile,
      errorfile,
    };
  },
};
</script>