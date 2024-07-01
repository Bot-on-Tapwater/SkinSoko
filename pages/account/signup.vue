<template>
  <div>
    <main class="main">
      <div class="signup-form-container">
        <h3 class="sign-up-title">Sign Up</h3>
        <div class="signup-form">
          <form
            @submit.prevent="appStore.createUser(registerDetails)"
            id="signup-form"
            method="post"
          >

            <div class="email-div">
              <FormInput
                v-model.trim="registerDetails.email"
                label-text="Email *"
                label-for="email-field"
                input-type="email"
                input-id="email-field"
              />
            </div>


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

            <div class="btn-container">
              <PriButton button-text="Register" button-id="register-btn" />
            </div>

            <div class="or-wrp">
              <span>Or login with</span>
            </div>

            <div class="social-auth-wrp">
              <div class="social-auth">
                <div class="g">
                 
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" fill="white" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90912H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7637 23.04 12.2614Z"
                      fill="#4285F4"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 23.4998C15.105 23.4998 17.7081 22.47 19.6109 20.7137L15.8943 17.8282C14.8645 18.5182 13.5472 18.9259 12 18.9259C9.00474 18.9259 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z"
                      fill="#34A853"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z"
                      fill="#FBBC05"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z"
                      fill="#EA4335"
                    />
                  </svg>

                  <span>Google</span>
                  <!-- </a> -->
                </div>

                <div class="g">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_99)">
                      <rect width="24" height="24" fill="#1877F2" />
                      <path
                        d="M23.5 12.0699C23.5 5.7186 18.3513 0.56988 12 0.56988C5.64872 0.56988 0.5 5.7186 0.5 12.0699C0.5 17.8099 4.70538 22.5674 10.2031 23.4302V15.3941H7.2832V12.0699H10.2031V9.53629C10.2031 6.6541 11.92 5.06207 14.5468 5.06207C15.805 5.06207 17.1211 5.28668 17.1211 5.28668V8.11675H15.671C14.2424 8.11675 13.7969 9.00322 13.7969 9.91266V12.0699H16.9863L16.4765 15.3941H13.7969V23.4302C19.2946 22.5674 23.5 17.8099 23.5 12.0699Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_99">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Facebook</span>
                </div>
              </div>
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
          // border: 3px solid;
          .social-auth {
            width: 100%;
            // border: 1px solid green;
            margin: 0.5rem 0;
            display: flex;

            .g {
              border: 1px solid gainsboro;
              display: flex;
              // margin: 1rem 0;
              width: 100%;
              cursor: pointer;
              justify-content: space-evenly;
              align-items: center;
              padding: 0.6rem 1.5rem;

              &:nth-child(1) {
                margin-right: 0.4rem;
              }
              &:nth-child(2) {
                background-color: #1877f2;
                color: white;
                border: unset;
              }

              span {
                // padding-left: 1rem;

                font-size: 1.2rem;
                text-transform: uppercase;
              }
            }
          }

          img {
            // width: 100%;
            margin: 0.5rem 0;
            height: 3rem;
          }
        }

        .or-wrp {
          // border: 1px solid;
          text-align: center;
          display: grid;
          place-items: center;

          span {
            text-transform: capitalize;
            padding: 2rem 0;
            font-weight: 500;
            opacity: .8;
            font-size: 1.2rem;
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

@media screen and (max-width: 400px) {
  .main
    .signup-form-container
    .signup-form
    #signup-form
    .social-auth-wrp
    .social-auth {
    flex-direction: column;

    .g{
      margin: unset;
      display: grid;
      grid-template-columns: 1fr 1fr;

      &:nth-child(1) {
        margin-bottom: 1.5rem;
      }

    }
  }
}
</style>
