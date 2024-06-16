<template>
  <div>
    <main class="main">
      <div class="signup-form-container">
        <h3 class="sign-up-title">Sign Up</h3>
        <div class="signup-form">
          <form @submit.prevent="appStore.createUser(registerDetails)" id="signup-form" method="post">
          <!-- <form id="signup-form" method="post"> -->
          <!-- <div class="username-div">
              <FormInput
                v-model.trim="registerDetails.username"
                label-text="Username *"
                label-for="username-field"
                input-type="text"
                input-id="username-field"
              />
            </div> -->

            <div class="email-div">
              <FormInput
                v-model.trim="registerDetails.email"
                label-text="Email *"
                label-for="email-field"
                input-type="email"
                input-id="email-field"
              />
            </div>

            <!-- <div class="firstname-div">
              <FormInput
                v-model.trim="registerDetails.first_name"
                label-text="First Name *"
                label-for="firstname-field"
                input-type="text"
                input-id="firstname-field"
              />
            </div>

            <div class="lastname-div">
              <FormInput
                v-model.trim="registerDetails.last_name"
                label-text="Last Name *"
                label-for="lastname-field"
                input-type="text"
                input-id="lastname-field"
              />
            </div> -->

            <div class="password-div">
              <FormInput
                v-model.trim="registerDetails.password"
                label-text="Password *"
                label-for="password-field"
                input-type="password"
                input-id="password-field"
              />
            </div>

            <div class="confirm-password-div">
              <FormInput
                v-model.trim="registerDetails.confirm_password"
                label-text="Confirm Password *"
                label-for="confirmpassword-field"
                input-type="password"
                input-id="confirmpassword-field"
              />
            </div>
<!-- 
            <div class="social-auth-wrp">
              <div class="social-auth">

                  <div class="g">
                    <a href="">
                    <img src="../../assets/images/google.svg" alt="continue with google button" />
                    </a>
                  </div>
                
                <div class="g">
                  <a href="">
                    <img src="../../assets/images/fbs.svg" alt="continue with facebook button" />
                  </a>
                </div>
              </div>
            </div> -->

            <div class="btn-container">
              <PriButton button-text="Register" button-id="register-btn" />
            </div>
          </form>
          <p>Have an account? <NuxtLink to="/account/login">Login</NuxtLink></p>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "~~/stores/state";

useHead({
  title: "Skin Soko | Register",
});

const appStore = useStore();

/**obj holding dets needed to register a user */
const registerDetails = ref({
  email: "",
  password: "",
  confirm_password: "",
});
</script>

<style lang="scss" scoped>
.main {
  max-width: 500px;
  padding: 3rem;
  margin: 8rem auto;
  // border: 2px solid;
  display: grid;
  height: calc(100vh - 8rem);
  height: auto;
  .signup-form-container {
    // border: 2px solid;
    h3 {
      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;
      margin-bottom: 3rem;
    }
    .signup-form {
      #signup-form {

        .social-auth-wrp {
          display: grid;
          place-items: center;

          img{
            width: 100%;
            margin: .5rem 0;
            height: 4rem;
          }

         
        }

        div {
          label {
            font-size: 1.2rem;
            opacity: 0.8;
          }

          button {
            all: unset;
            text-align: center;
            padding: 1rem 0.2rem;
            font-size: 1.2rem;
            font-weight: 500;
            text-transform: capitalize;
            background-color: black;
            cursor: pointer;
            color: white;
            width: 100%;
            margin-top: 2rem;

            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
    }
    p {
      font-size: 1.2rem;
      font-weight: 500;
      margin-top: 2rem;
    }
    a {
      color: black;
      // font-weight: bold;
      text-decoration: underline;
      font-size: 1.2rem;
    }
  }
}
</style>
