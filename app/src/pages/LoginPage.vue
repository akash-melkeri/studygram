<template>
  <q-page class="flex flex-center tw-relative tw-px-8">
    <!-- <div class="tw-absolute tw-top-0 tw-left-0 tw-h-screen tw-w-screen tw-brightness-50 tw-backdrop-blur-sm" style="background-image: url('/images/book.jpg');background-size: cover; background-repeat: no-repeat;"></div> -->
    <div
      class="tw-absolute tw-top-0 tw-left-0 tw-h-screen tw-w-screen tw-backdrop-blur-sm"
      style="
        background-image: linear-gradient(to bottom right, #0A4191, #3f6eb4);
        background-size: cover;
        background-repeat: no-repeat;
      "
    ></div>
    <q-card class="tw-relative tw-w-full tw-rounded-xl tw-overflow-hidden">
      <!-- <div class="tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0 tw-bg-white/20 tw-backdrop-blur-md"></div> -->
      <q-card-section>
        <div class="tw-text-center">
          <q-img src="/favicon.png" class="tw-h-20 tw-w-20 tw-mx-auto" />
        </div>
        <div class="tw-text-2xl tw-font-bold tw-text-center">Welcome</div>
        <div class="tw-text-center tw-text-gray-500">
          Please login to continue
        </div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="login" class="tw-flex tw-flex-col tw-gap-4">
          <q-input
            v-model="form_data.username"
            label="Username"
            outlined
          ></q-input>

          <q-input
            v-model="form_data.password"
            label="Password"
            type="password"
            outlined
          ></q-input>
          <div class="tw-flex tw-flex-col tw-gap-2">

            <q-btn
              type="submit"
              label="Login"
              color="primary"
              class="tw-rounded-md"
            ></q-btn>
            <q-btn
              flat
              dense
              no-caps
              label="Create an account"
              color="primary"
              class="tw-rounded-md"
            ></q-btn>
            <q-btn
              flat
              dense
              no-caps
              label="Forgot Password ?"
              color="primary"
              class="tw-rounded-md"
            ></q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginPage",
  components: {},
  setup() {
    return {
      form_data: ref({
        username: "",
        password: ""
      })
    };
  },
  computed: {},
  mounted() {},
  created() {}
});
</script>
<style>
.q-field--outlined .q-field__control {
  border-radius: 6px !important;
}
</style>
