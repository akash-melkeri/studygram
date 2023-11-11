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
        <q-form class="tw-flex tw-flex-col tw-gap-4">
          <q-input
            v-model="login_form_data.username"
            label="Username"
            outlined
            :rules="[val => !!val || 'Username is required']"
            lazy-rules
            ref="login_username"
            hint="Enter your username"
          ></q-input>

          <q-input
            v-model="login_form_data.password"
            label="Password"
            type="password"
            outlined
            :rules="[val => !!val || 'Password is required']"
            lazy-rules
            ref="login_password"
            hint="Enter your password"
          ></q-input>
          <div class="tw-flex tw-flex-col tw-gap-2">

            <q-btn
              label="Login"
              color="primary"
              class="tw-rounded-md"
              @click="submitLoginForm"
            ></q-btn>
            <q-btn
              flat
              dense
              no-caps
              @click="dialog_signup = true"
              label="Create an account"
              color="primary"
              class="tw-rounded-md"
            ></q-btn>
            <q-btn
              flat
              dense
              no-caps
              disable
              label="Forgot Password ?"
              color="grey"
              class="tw-rounded-md"
            ></q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
    <q-dialog v-model="dialog_signup" maximized>
      <q-card>
        <div class="tw-drop-shadow-sm tw-w-full tw-flex tw-items-center" >
          <q-btn icon="close" class="tw-h-12 tw-w-12" flat dense v-close-popup></q-btn>
          <div class="tw-text-bold tw-text-xl">Create New Account</div>
        </div>
        <q-separator />
        <div>
          <div class="tw-p-4 tw-flex tw-flex-col tw-gap-6">
            <q-input
              v-model="signup_form_data.username"
              label="Username"
              outlined
              hint="Type a unique username"
              :rules="[val => !!val || 'Username is required']"
              lazy-rules
              ref="signup_username"
            ></q-input>
            <q-input
              v-model="signup_form_data.password"
              label="Password"
              type="password"
              outlined
              hint="Create a strong password"
              :rules="[val => !!val || 'Password is required']"
              lazy-rules
              ref="signup_password"
            ></q-input>
            <q-input
              v-model="signup_form_data.confirm_password"
              label="Confirm password"
              type="password"
              outlined
              :rules="[val => !!val || 'Password confirmation is required']"
              lazy-rules
              ref="signup_password"
            ></q-input>
          </div>
          <div class="tw-p-4">
            <q-btn
              label="Create account"
              color="primary"
              class="tw-rounded-md tw-w-full"
              @click="submitCreateForm"
            ></q-btn>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginPage",
  components: {},
  setup() {
    return {
      login_form_data: ref({
        username: "",
        password: ""
      }),
      signup_form_data: ref({
        username: "",
        password: ""
      }),
      dialog_signup:ref(true),
    };
  },
  computed: {},
  methods: {
    submitCreateForm(){
      this.$api.post('/auth/signup',this.signup_form_data).then(response=>{
        if(response.data.ok){
          this.$q.notify({
            type:'positive',
            message:response.data.message
          })
        }else{
          this.$q.notify({
            type:'negative',
            message:response.data.message
          })
        }
      }).catch(error=>{
        console.error(error);
        this.$q.notify({
          type:'negative',
          message:"Unknown Error occured!"
        })
      })
    },
    submitLoginForm(){
      this.$api.post('/auth/login',this.login_form_data).then(response=>{
        if(response.data.ok){
          this.$q.notify({
            type:'positive',
            message:response.data.message
          })
        }else{
          this.$q.notify({
            type:'negative',
            message:response.data.message
          })
        }
      }).catch(error=>{
        console.error(error);
        this.$q.notify({
          type:'negative',
          message:"Unknown Error occured!"
        })
      })
    },
  },
  mounted() {
  },
  created() {
    console.log(this.$route);
  }
});
</script>
<style>
.q-field--outlined .q-field__control {
  border-radius: 6px !important;
}
</style>
