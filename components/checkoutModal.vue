<!-- component to show user after they've placed an order  -->
<template>
    <div>
        <div class="checkout-modal">
        <!-- <div class="order-placed-successfully-modal addmodal"> -->
            <div class="adm-lg">
                <div class="adm-lg-container">
                    <div class="content">
                        <h2>Please confirm your shipping address</h2>
                        <ul>
                            <li>Phone Number:  <span class="user-address">{{ appStore.userShippingAddress.phone_number }}</span></li>
                            <li>Street Address:  <span class="user-address">{{ appStore.userShippingAddress.street_address }}</span></li>
                            <li>Town: <span class="user-address">{{ appStore.userShippingAddress.town }}</span></li>
                            <li>County: <span class="user-address">{{ appStore.userShippingAddress.county }}</span></li>
                            <li></li>
                        </ul>

                        <div class="buttons-wrp">
                            <button @click="editAddress()" class="edit-address">edit</button>
                            <button @click="proceedToPaymentPage()" class="proceed-w-paymen">proceed</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

const router = useRouter()
const appStore = useStore()


function proceedToPaymentPage() {
    router.push("/payment")
}

function editAddress(){
    let modal = document.querySelector('.checkout-modal')
    modal? modal.classList.add('hideModal') : alert("add modal not found")
    
}

</script>

<style scoped>
/**use the global style in main.scss */

</style>