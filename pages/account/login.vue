<template>
    <div class="login-page-ord">
        <div class="login-main-section">
            <div class="lms-wrapper">

                <h2 class="lg-title">Login</h2>
                <div class="login-container">
                    <div class="login-content">
                        <!-- <form @submit.prevent="appStore.loginUser(loginDetails)" id="login-form">  -->
                        <form id="login-form"> 

                            <div class="email-container">
                                <label for="login-email">Email Address</label>
                                <input v-model.trim="loginDetails.email" name="email" required placeholder="" id="login-email" type="email">
                            </div>
                            
                            <div class="password-container">
                                
                                <div class="password-wrapper">
                                    <label for="login-password">Password</label>
                                    <input v-model.trim="loginDetails.password" required id="login-password" name="password" placeholder="" class="user-password" type="password">
                                </div>
                            </div>

                            <!-- to show errors if any -->
                            <div class=" form-error-wrp login-error-wrp">
                            </div>
        
                            <div class="login-button-wrapper">
                                <PriButton button-text="Log in"/>
                            </div>

                        </form>
                        <p>Don't have an account? <NuxtLink to="/account/signup">Sign up.</NuxtLink> </p>
                    </div>
                </div> 
            </div>
        </div>
    </div> 
</template>

<script lang="ts" setup>


useHead({
    title:'Skin Soko | Account Login'
})

const loading = ref(false)

const appStore = useStore()

/**user login dets */
const loginDetails = ref({
    email: "",
    password: ""
})

</script>

<style lang="scss" scoped>


.spinner-l-wrp{
    // height: 50vh;
    // width: 100vw;
    display: grid;
    place-items: center;

    .sp-div{
        img{
            width: 3rem;
        }
    }
}

.login-page-ord{
    margin: 10rem 0;
}

.login-main-section{
    margin:0 auto;
    height: calc(100vh - 8rem);
    max-width: var(--maxWidth);
    display: grid;
    place-items: center;
    height: auto;
    .lms-wrapper{
        .lg-title{
            font-weight: 600;
            font-size: 1.7rem;
            text-align: center;
            margin: rem 0;
        }
        .login-container{
            padding: 4rem 2.5rem;
            min-width: 38rem;
           
            label{
                font-size: 1.2rem;
            }
            input{
                background-color: transparent;
                padding: 1rem .4rem;
                border: 1px solid rgba(0, 0, 0, 0.375);
                font-weight: 400;
                font-size: 1.3rem;
                width: 100%;
                color: black;
                margin-bottom: 2rem;
                
                &:focus{
                    border: 1px solid rgb(0, 0, 0);
                }
            }



            .login-button-wrapper{
                margin-bottom: 1rem;
                // display: flex;
            }

            p{
                font-size: 1.2rem;
                font-weight: 500;
                color: black;
                // opacity: .8;

                a{
                    opacity: 1;
                    color: black;
                    font-size: 1.2rem;
                    text-decoration: underline;
                }
            }
        }
    }
}



</style>