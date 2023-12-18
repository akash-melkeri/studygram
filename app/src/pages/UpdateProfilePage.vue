<template>
  <q-page>
    <div class="tw-drop-shadow-sm tw-w-full tw-flex tw-items-center">
      <q-btn
        icon="arrow_back"
        class="tw-h-12 tw-w-12"
        flat
        dense
        v-close-popup
        @click="$router.go(-1)"
      ></q-btn>
      <div class="tw-text-bold tw-text-xl">Update Profile</div>
    </div>
    <q-separator />
    <div>
      <q-form ref="signup_form">
        <div class="tw-p-4 tw-flex tw-flex-col tw-gap-6">
          <div class="tw-flex tw-flex-col tw-p-8 tw-gap-0 tw-justify-center tw-items-center tw-rounded-full tw-relative">
            <div class="tw-w-36 tw-h-36 tw-aspect-square tw-bg-gray-200 tw-rounded-full tw-flex tw-justify-center tw-items-center tw-relative tw-shrink-0 ">
              <div class="tw-absolute tw-top-2 tw-right-2">
                <q-uploader @@uploading="profileUploading" @uploaded="profileUploadedSuccessfully" @finish="profileUploadFinished" @failed="profileUploadFailed" class="hidden" ref="profile_uploader" url="/api/user/upload-profile-picture" auto-upload accept=".jpg, .jpeg" :max-file-size="2*1024*1024" />
                <q-btn dense icon="edit" @click="openFileUploader" class="tw-z-10" color="primary" round unelevated></q-btn>
              </div>
              <q-img v-if="profile_form_data.profile_picture" class="tw-h-full tw-rounded-full" no-native-menu fit="fill" :src="(profile_form_data.profile_picture.includes('data:image'))?(profile_form_data.profile_picture):('data:image/jpeg;base64,'+profile_form_data.profile_picture)" />
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="tw-h-24 tw-text-gray-500" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
          </div>
          <q-input
            v-model="profile_form_data.username"
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
            ref="profile_username"
            @update:model-value="checkUsernameAvailability"
            debounce="300"
            :autocomplete="false"
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
            v-model="profile_form_data.display_name"
            label="Name"
            type="text"
            outlined
            :autocomplete="false"
            hint="You can add your nickname"
            :rules="[
              (val) =>
                (val && val.length < 31) ||
                'Name must have less than 30 characters',
              (val) =>
                /^[a-zA-Z_.][a-zA-Z0-9_.]*$/.test(val) ||
                'Name can only contain Alphabets, Numbers, underscore(_) and period(.)',
            ]"
            lazy-rules
            ref="profile_display_name"
          >
          </q-input>
          <q-input
            v-model="profile_form_data.bio"
            label="Bio"
            type="textarea"
            outlined
            :autocomplete="false"
            hint="Describe Yourself"
            :rules="[]"
            lazy-rules
            ref="signup_confirm_password"
          >
          </q-input>
        </div>
        <div class="tw-p-4">
          <q-btn
            label="Update Profile"
            icon-right="check"
            color="primary"
            class="tw-rounded-md tw-w-full"
            @click="$router.replace('/home')"
          ></q-btn>
        </div>
      </q-form>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'UpdateProfile',
  components:{},
  setup(){
    return{
      prev_profile_values:ref({
        username: "",
        display_name: "",
        bio: "",
        profile_picture:null,
      }),
      profile_form_data: ref({
        username: "",
        display_name: "",
        bio: "",
        profile_picture:null,
      }),
      toggle: ref({
      }),
      errors: ref({
        username_availability: ""
      }),
      dialogs:ref({
      }),
    }
  },
  computed:{

  },
  methods:{
    async checkUsernameAvailability() {
      if ((await this.$refs.profile_username.validate()) == false) {
        this.errors.username_availability = "";
        return;
      }
      this.errors.username_availability = "check";
      this.$api
        .get(
          `/auth/username-availabilty?username=${this.profile_form_data.username}`
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
    openFileUploader(){
      this.$refs.profile_uploader.pickFiles()
    },
    profileUploading(info){
      console.log(info)
      this.$q.loading.show({message:"Uploading"})
    },
    async profileUploadedSuccessfully(info){
      console.log(info)
      let reader = new FileReader()
      await reader.readAsDataURL(info.files[0])
      reader.onload = function () {
        this.profile_form_data.profile_picture = reader.result
      }.bind(this)
      reader.onerror = function (error) {
        console.log('Error: ', error)
      }
      // this.profile_form_data.profile_picture = URL.createObjectURL(info.files[0])
      this.$q.notify({
        message:'Profile picture updated',
        type:"positive",
        timeout: 1500,
      })
    },
    profileUploadFailed(info){
      console.log(info)
      if(info.xhr.status == 413){
        this.$q.notify({
          message:'File is too large.',
          type:"negative",
          timeout: 1500,
        })
      }else{
        this.$q.notify({
          message:info.xhr.response,
          type:"negative",
          timeout: 1500,
        })
      }

    },
    profileUploadFinished(){
      this.$q.loading.hide()

    },
    validate_profile(){
      // validate profile

      this.update_profile({...this.profile_form_data})
    },
    update_profile(payload){
      delete payload.profile_picture
      let self = this
      self.$q.loading.show({message:"Updating"})
      self.$api.patch('/user/update-profile',payload).then(response=>{
        if(response.data.ok){
          self.$q.notify({
            message:'Profile updated',
            type:"positive",
            timeout: 1500,
          })
          self.$q.loading.hide()
          this.$router.replace('/profile')
        }else{
          self.$q.notify({
            message:response.data.message,
            type:"negative",
            timeout: 1500,
          })
        }
      }).catch(error=>{
        self.$q.notify({
          message:''+error,
          type:"negative",
          timeout: 1500,
        })
      }).finally(()=>{
        self.$q.loading.hide()
      })
    },
    fetch_profile(){
      let self = this
      this.$q.loading.show({message:'Loading'})
      self.$api.get('/user/fetch-profile').then(response=>{
        if(response.data.ok){
          self.profile = response.data.profile
        }else{

        }
      }).catch(error=>{
        self.$q.notify({
          message:''+error,
          type:"negative",
          timeout: 1500,
        })
      }).finally(()=>{
        self.$q.loading.hide()
      })
    },
    upload_avatar(payload){
      let self = this
      self.$q.loading.show({message:"Uploading"})
      self.$api.patch('/user/update-profile-picture',payload).then(response=>{
        if(response.data.ok){
          self.$q.notify({
            message:'Avatar updated',
            type:"positive",
            timeout: 1500,
          })
        }else{
          self.$q.notify({
            message:response.data.message,
            type:"negative",
            timeout: 1500,
          })
        }
      }).catch(error=>{
        self.$q.notify({
          message:''+error,
          type:"negative",
          timeout: 1500,
        })
      }).finally(()=>{
        self.$q.loading.hide()
      })
    },
    set_profile_values(){
      this.profile_form_data.username = this.$store.auth.sessionData.username
      this.profile_form_data.display_name = this.$store.auth.sessionData.display_name
      this.profile_form_data.bio = this.$store.auth.sessionData.bio
      this.profile_form_data.profile_picture = null

      this.prev_profile_values.username = this.$store.auth.sessionData.username
      this.prev_profile_values.display_name = this.$store.auth.sessionData.display_name
      this.prev_profile_values.bio = this.$store.auth.sessionData.bio

    },
  },
  mounted(){

  },
  created(){
    // this.fetch_profile()
    this.set_profile_values()
  }

})
</script>
