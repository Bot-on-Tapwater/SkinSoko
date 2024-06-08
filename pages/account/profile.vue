<template>
    <section class="outer-section-wrp">
        <div class="ord-wrapper">

            <div class="grid-left">
                <div class="user-dets-wrp">
                    <div class="udw-container">
                        <svg width="54px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" stroke="#1C274C" stroke-width="0.744"></circle> <path d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18" stroke="#1C274C" stroke-width="0.744" stroke-linecap="round"></path> </g></svg>
                        <template v-if="currentUser">
                            
                            <template v-if="currentUser.username">
                                <p class="name">{{ currentUser.username }}</p>
                            </template>
                            <template v-else>
                                <p>Username not found</p>
                            </template>
                            <template v-if="currentUser.email">
                                <p class="email">{{ currentUser.email }}</p>
                            </template>
                            <template v-else>

                            </template>
                        </template>
                    </div>
                </div>

            </div>

            <div class="grid-right">
                <div class="cow-ord">

                    <h1 class="cow-header">Change Account Password</h1>
                    <p style="padding: 1rem;">Protect your account with a strong and secure password</p>
                    <div class="cow-container">
                        <div class="cow-div">
    
                            <div class="cow-dets">
    
                                <!-- <form @submit.prevent="appStore.saveShippingAddress(userShippingAddress)" id="orm"> -->
                                <form @submit.prevent="showLog()" class="pageForm" id="newAccPwd">
                                    <div>
                                        <FormInput
                                            v-model.trim="userPasswords.oldPassword"
                                            label-text="Old Password *"
                                            label-for="old-pwd"
                                            input-type="password"
                                            input-id="old-pwd"
                                        />
                                    </div>
                                    
                                    
                                    <div>
                                        <FormInput
                                            v-model.trim="userPasswords.newPassword"
                                            label-text="New Password *"
                                            label-for="new-pwd-field"
                                            input-type="password"
                                            input-id="new-pwd-field"
                                        />
                                    </div>
                                    
                                    
                                    <PriButton button-id="save-new-pwd" button-text="save changes"/>
                                </form>
    
                            </div>
    
                        </div>
    
                    </div>
                </div>
            </div>

        </div>

            </section>
</template>

<script setup lang="ts">

// onMounted(async()=>{
//     await appStore.updateUserProfile()
// })

definePageMeta({
    layout: "memberprofile"
})

const appStore = useStore()

const currentUser = ref(await appStore.getUserInfo())



/**when user clicks on button to change their password, show this error for now */
function showLog() {
    alert("Can't update password. This logic is yet to be set.")
}


/**obect to hold old and new user password address while being filled in the form */
const userPasswords = ref({
    oldPassword: "",
    newPassword: "",
})

</script>

<style lang="scss" scoped>



.ord-wrapper{
    padding: 1rem 1.6rem;
    max-width: 1200px;
    margin: 0 auto;
    // margin-left: 30rem;

    display: grid;
    grid-template-columns: 40% 60%;


    .grid-left{
        .user-dets-wrp{
            .udw-container{
                width: 20rem;
                height: 20rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: white;
                text-align: center;
                border-radius: .8rem;
                box-shadow: var(--dashboardBoxShadow);

                svg{
                    width: 100%;
                }
                .name{
                    font-weight: 500;
                    font-size: 1.7rem;
                    padding: 1rem 0;
                }
                .email{

                }
            }
        }
    }

    .grid-right{
        .cow-ord{
            padding: 1.8rem;
            background-color: white;
            border-radius: .8rem;
        }
        .cow-header{
            padding: 0 1rem;
            font-weight: 400;
            font-size: 2.5rem;
            margin: 3rem 0;
        
        }   
        .cow-container{
            .cow-div{
                padding: 1rem;
                .cow-dets{
                    .pageForm{
                        font-size: 1.4rem;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        div{
                            // margin: 2rem 0;
                            margin: .2rem;
                            margin-right: .8rem;
                        }
                    }
                }
                
            }
    
        }
    }


}


@media screen and (max-width: 1000px) {
    .ord-wrapper{
        grid-template-columns: 1fr;
        place-items: center;

        .grid-left{
            margin-bottom: 3rem;
            width: 100%;
            display: grid;
            background-color: white;
            box-shadow: var(--dashboardBoxShadow);
            place-items: center;

            .user-dets-wrp .udw-container{
                background-color: inherit;
                box-shadow: unset;
            }
        }

        .grid-right{
            width: 100%;
        }
    }
    
}

@media screen and (max-width: 750px) {
    .ord-wrapper .grid-right .cow-container .cow-div .cow-dets .pageForm{
        grid-template-columns: 1fr;
    }
}

</style>