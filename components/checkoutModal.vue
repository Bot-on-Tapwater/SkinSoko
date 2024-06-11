<!-- component to show user after they've placed an order  -->
<template>
    <div>
        <div class="order-placed-successfully-modal addmodal">
            <div class="adm-lg">
                <div class="adm-lg-container">
                    <div class="content">
                        <div class="close-modal-div">
                            <span class="close-modal">
                                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="fr-ec-icon fr-ec-icon--default fr-ec-button-icon__icon"><title>Close</title><g fill-rule="evenodd"><polygon points="21 4.6 19.4 3 12 10.4 4.6 3 3 4.6 10.4 12 3 19.4 4.6 21 12 13.6 19.4 21 21 19.4 13.6 12"></polygon></g>
                                </svg>
                            </span>
                        </div>
                        <h2>Order Confirmed!</h2>
                        <p>Thank you for shopping with us.Check your email for the confirmation and tracking information.</p>
                        <p>Any questions? Reach out to our support team <a href="mailto:">here</a> </p>
                        <div class="login-container">
                            <NuxtLink to="/products/all/1" class="modal-btn">Continue Shopping</NuxtLink>
                            <div class="arrow-div">
                                <div class="arrow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

onMounted(()=>{
    let modal = document.querySelector('.addmodal')
    let closeModal = document.querySelector('.close-modal')
    closeModal.addEventListener('click',async ()=>{
        location.href = "/products/all/1" /**take to product page once they close checkout modal*/
        modal.classList.add('hideModal')
    })
})

</script>

<style scoped>
/**use the global style in main.scss */

</style>