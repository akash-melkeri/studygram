<template>
  <q-page class="flex flex-center tw-relative tw-px-8">
    <!-- <div class="tw-absolute tw-top-0 tw-left-0 tw-h-screen tw-w-screen tw-brightness-50 tw-backdrop-blur-sm" style="background-image: url('/images/book.jpg');background-size: cover; background-repeat: no-repeat;"></div> -->
    <div
      class="tw-absolute tw-top-0 tw-left-0 tw-h-screen tw-w-screen tw-backdrop-blur-sm"
      style="
        background-image: linear-gradient(to bottom right, #0a4191, #3f6eb4);
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
        <q-form ref="login_form" class="tw-flex tw-flex-col tw-gap-4">
          <q-input
            v-model="login_form_data.username"
            label="Username"
            outlined
            :rules="[(val) => !!val || 'Username is required']"
            lazy-rules
            ref="login_username"
            hint="Enter your username"
          ></q-input>

          <q-input
            v-model="login_form_data.password"
            label="Password"
            type="password"
            outlined
            autocomplete="password"
            :rules="[(val) => !!val || 'Password is required']"
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
              @click="dialogs.signup = true"
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
    <q-dialog v-model="dialogs.signup" maximized>
      <q-card>
        <div class="tw-drop-shadow-sm tw-w-full tw-flex tw-items-center">
          <q-btn
            icon="close"
            class="tw-h-12 tw-w-12"
            flat
            dense
            v-close-popup
          ></q-btn>
          <div class="tw-text-bold tw-text-xl">Create New Account</div>
        </div>
        <q-separator />
        <q-form ref="signup_form">
          <div class="tw-p-4 tw-flex tw-flex-col tw-gap-6">
            <q-input
              v-model="signup_form_data.username"
              label="Username"
              outlined
              hint="Type a unique username"
              :rules="[
                (val) => !!val || 'Username is required',
                (val) =>
                  val.length > 0 || 'Username must have more than 1 characters',
                (val) =>
                  /^[^0-9]/.test(val) || 'Username cannot start with number',
                (val) =>
                  /^[a-zA-Z0-9_][a-zA-Z0-9_.]*[a-zA-Z0-9_]$/.test(val) ||
                  'Username cannot start or end with period(.)',
                (val) =>
                  !/\.\./.test(val) ||
                  'Username cannot have consecutive periods(.)',
                (val) =>
                  /^[a-zA-Z_.][a-zA-Z0-9_.]*$/.test(val) ||
                  'Username can only contain Alphabets, Numbers, underscore(_) and period(.)',
                (val) =>
                  val.length < 31 ||
                  'Username must have less than 30 characters'
              ]"
              lazy-rules
              ref="signup_username"
              @update:model-value="checkUsernameAvailability"
              debounce="300"
            >
              <template v-slot:append>
                <q-icon
                  v-if="errors.username_availability == 'available'"
                  name="done"
                  color="positive"
                />
                <q-spinner
                  v-else-if="errors.username_availability == 'check'"
                  color="primary"
                  size="1em"
                  :thickness="4"
                />
                <q-icon
                  v-else-if="errors.username_availability == 'unavailable'"
                  name="close"
                  color="negative"
                />
              </template>
            </q-input>
            <q-input
              v-model="signup_form_data.password"
              label="Password"
              :type="toggle.password_visibility ? 'text' : 'password'"
              outlined
              :autocomplete="false"
              hint="Create a strong password"
              :rules="[
                (val) => !!val || 'Password is required',
                (val) =>
                  val.length > 5 || 'Password must have more than 6 characters',
                (val) =>
                  val.length < 31 ||
                  'Password must have less than 30 characters',
                (val) =>
                  /[A-Z]/.test(val) ||
                  'Password must contain atleast one uppercase letter (A-Z)',
                (val) =>
                  /[a-z]/.test(val) ||
                  'Password must contain atleast one lowercase letter (a-z)',
                (val) =>
                  /\d/.test(val) ||
                  'Password must contain atleast one digit (0-9)',
                (val) =>
                  /[^a-zA-Z0-9]/.test(val) ||
                  'Password must contain atleast one special character (!, @, &, %, etc.)'
              ]"
              lazy-rules
              ref="signup_password"
            >
              <template v-slot:append>
                <q-icon
                  v-if="toggle.password_visibility"
                  name="visibility_off"
                  @click="toggle.password_visibility = false"
                />
                <q-icon
                  v-else
                  name="visibility"
                  @click="toggle.password_visibility = true"
                />
              </template>
            </q-input>
            <q-input
              v-model="signup_form_data.confirm_password"
              label="Confirm password"
              :type="toggle.confirm_password_visibility ? '' : 'password'"
              outlined
              :autocomplete="false"
              hint="Type password again"
              :rules="[
                (val) => !!val || 'Password confirmation is required',
                (val) =>
                  val == signup_form_data.password ||
                  'Passwords are not matching'
              ]"
              lazy-rules
              ref="signup_confirm_password"
            >
              <template v-slot:append>
                <q-icon
                  v-if="toggle.confirm_password_visibility"
                  name="visibility_off"
                  @click="toggle.confirm_password_visibility = false"
                />
                <q-icon
                  v-else
                  name="visibility"
                  @click="toggle.confirm_password_visibility = true"
                />
              </template>
            </q-input>
          </div>
          <div class="tw-p-4">
            <q-btn
              label="Create account"
              color="primary"
              class="tw-rounded-md tw-w-full"
              @click="submitCreateForm"
            ></q-btn>
          </div>
        </q-form>
      </q-card>
    </q-dialog>
    <q-dialog v-model="dialogs.after_signup">
      <q-card class="tw-relative tw-w-full tw-rounded-xl tw-overflow-hidden">
        <q-card-section class="tw-text-xl tw-text-center">
          Signup Successful
        </q-card-section>
        <q-separator/>
        <q-card-section class="tw-flex tw-flex-col tw-gap-4">
          <div class="tw-text-center">
            <q-icon size="8rem" name="verified" color="positive" />
          </div>
          <div class="tw-text-center tw-text-gray-700">
            You have successfully signup. Please login to continue.
          </div>
          <q-btn
              label="Continue to login"
              color="primary"
              class="tw-rounded-md tw-w-full"
              @click="dialogs.after_signup = false"
            ></q-btn>
        </q-card-section>
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
        password: "",
        confirm_password: ""
      }),
      toggle: ref({
        password_visibility: false,
        confirm_password_visibility: false
      }),
      errors: ref({
        username_availability: ""
      }),
      dialogs:ref({
        signup:false,
        after_signup:false,
      }),
    };
  },
  computed: {},
  methods: {
    async checkUsernameAvailability() {
      if ((await this.$refs.signup_username.validate()) == false) {
        this.errors.username_availability = "";
        return;
      }
      this.errors.username_availability = "check";
      this.$api
        .get(
          `/auth/username-availabilty?username=${this.signup_form_data.username}`
        )
        .then((response) => {
          if (response.data.ok) {
            this.errors.username_availability = "available";
          } else {
            this.$q.notify({
              type: "negative",
              message: response.data.message
            });
            this.errors.username_availability = "unavailable";
          }
        })
        .catch((error) => {
          console.error(error);
          this.$q.notify({
            type: "negative",
            message: "Unknown Error occured!"
          });
          this.errors.username_availability = "unavailable";
        })
        .finally(() => {});
    },
    async submitCreateForm() {
      console.log(await this.$refs.signup_form.validate());
      if ((await this.$refs.signup_form.validate()) == true) {
        this.$api
          .post("/auth/signup", this.signup_form_data)
          .then((response) => {
            if (response.data.ok) {
              this.$q.notify({
                type: "positive",
                message: response.data.message
              });
            } else {
              this.$q.notify({
                type: "negative",
                message: response.data.message
              });
            }
          })
          .catch((error) => {
            console.error(error);
            this.$q.notify({
              type: "negative",
              message: "Unknown Error occured!"
            });
          });
      }
    },
    submitLoginForm() {
      this.$api
        .post("/auth/login", this.login_form_data)
        .then((response) => {
          if (response.data.ok) {
            this.$q.notify({
              type: "positive",
              message: response.data.message
            });
          } else {
            this.$q.notify({
              type: "negative",
              message: response.data.message
            });
          }
        })
        .catch((error) => {
          console.error(error);
          this.$q.notify({
            type: "negative",
            message: "Unknown Error occured!"
          });
        });
    }
  },
  mounted() {},
  created() {}
});
</script>
<style>
.q-field--outlined .q-field__control {
  border-radius: 6px !important;
}
</style>
