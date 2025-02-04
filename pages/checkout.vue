<template>
  <div class="checkout-ord">
    <template v-if="appStore.cartSummaryDetails.totalItems > 0">
      <div>
        <!-- <CheckoutModal/> -->
        <CheckoutModal v-if="showCheckoutModal" />

        <div class="checkout-ord-wrapper">
          <CheckoutLinks />

          <h1 class="cow-header">Shipping Address</h1>
          <div class="cow-container">
            <div class="cow-div">
              <div class="cow-dets">
                <h1 class="min-ttl">1. Delivery Details</h1>

                <form
                  @submit.prevent="
                    appStore.saveShippingAddress()
                  "
                  id="checkoutForm"
                >
                  <div class="form-grid-wrp">
                    <div>
                      <FormInput
                        v-model.trim="appStore.userShippingAddress.phone_number"
                        label-text="Phone Number *"
                        label-for="phonenum-field"
                        input-type="tel"
                        input-id="phonenum-field"
                      />
                    </div>
                    <div>
                      <FormInput
                        v-model.trim="appStore.userShippingAddress.county"
                        label-text="County *"
                        label-for="county-field"
                        input-type="text"
                        input-id="county-field"
                      />
                    </div>
                  </div>

                  <div>
                    <FormInput
                      v-model.trim="appStore.userShippingAddress.street_address"
                      label-text="Street Address *"
                      label-for="street-address-field"
                      input-type="text"
                      input-id="street-address-field"
                    />
                  </div>

                  <div class="select-town">
                    <label for="user-town">Town *</label>
                    <p>{{appStore.userShippingAddress.town }}</p>
                    <select
                      required
                      v-model="selectedTown"
                      id="user-town"
                      name="user-town"
                    >
                      <option
                        v-for="town in availableTowns"
                        :key="town.town_id"
                        :value="town.name"
                      >
                        {{ town.name }}
                      </option>
                    </select>
                  </div>
                  

                  <div class="addn-shipping-dets">
                    <label id="additional-info">Any Additional Details</label>
                    <textarea
                      placeholder="Please provide any other info that we should keep in mind regarding your order"
                      id="additional-info"
                      v-model.trim="appStore.userShippingAddress.additional_details"
                      name="additional_dets"
                      row="20"
                      column="40"
                      maxlength="600"
                    ></textarea>
                  </div>

                  <PriButton
                    button-id="shipping-address-form-btn"
                    button-text="save address"
                  />
                </form>
              </div>

              <div class="payment-div">
                <h1 class="min-ttl">2. Payment</h1>
                <!-- <p>Cash on Delivery</p> -->
                 <NuxtLink to="#" @click.prevent="proceedToPaymentPage()" id="ptp-tag">Proceed To Payment</NuxtLink>
                
              </div>
            </div>

            <CartSummary
              :shipping-fee="appStore.cartSummaryDetails.shippingFee"
              :cart-items-subtotal="
                appStore.formatNumber(appStore.cartSummaryDetails.itemsSubtotal)
              "
              :estimated-tax="appStore.cartSummaryDetails.estimatedTax"
              :total-cart-items="
                appStore.formatNumber(appStore.cartSummaryDetails.totalItems)
              "
              :order-total="
                appStore.formatNumber(appStore.cartSummaryDetailsOrderTotal)
              "
            />
          </div>
        </div>
      </div>

    </template>

    <template v-else>
      <CartEmpty />
    </template>
  </div>
</template>

<script setup lang="ts">

// import { CartProduct, CartItems } from '~~/interfaces';
import { useStore, axiosInstance } from "@/stores/state";

const appStore = useStore(); /**access our store */

/** variable to hold the list of towns that we can deliver orders to */
const availableTowns = await appStore.getTowns();

const selectedTown = ref(""); /**holds the town selected by user */

watch(selectedTown, async (newVal) => {
  const selectedTownDetails = availableTowns.find(
    (town: any) => town.name === newVal
  );
  if (selectedTownDetails) {
    /**populate the respective fields in our state file */
    appStore.userShippingAddress.town = selectedTownDetails.name;
    appStore.cartSummaryDetails.shippingFee = selectedTownDetails.delivery_fee;
  } 
});


/**will determine when to shown the 'confirm shipping address' popup */
const showCheckoutModal = ref(false)

const savedUserAddress = await appStore.getUserShippingAddress();

// /**if user has a shipping address, autofill it in the form */
// if (savedUserAddress) {
//   appStore.userShippingAddress.county = savedUserAddress.county;
//   appStore.userShippingAddress.town = savedUserAddress.town;
//   appStore.userShippingAddress.street_address = savedUserAddress.street_address;
//   appStore.userShippingAddress.phone_number = savedUserAddress.phone_number;
// }

/** place order function */
async function placeOrder() {
  const place_order_url = `/users/orders/create/`;

  /**check if user has address saved before they can place order */
  if (!savedUserAddress) {
    appStore.errorMessageToShowOnToast =
      "Please confirm your shipping address first";
    appStore.showToast();
    return;
  }

  alert("please make your payment first");
  return;

  try {
    await axiosInstance.post(place_order_url);

    appStore.getCartItems(); /** in order to show correct number of products in cart */
  } catch (error) {}
}

/**func to take user to the payment page */
function proceedToPaymentPage() {
  
  /**check if user has address saved before they can place order */
  if (!savedUserAddress) {
    appStore.errorMessageToShowOnToast =
    "Please add a shipping address first";
    appStore.showToast();
    return;
  }
  
  const checkoutModal = document.querySelector('.checkout-modal') /**modal asking user to confirm their address */
  if (checkoutModal?.classList.contains("hideModal")) checkoutModal.classList.remove("hideModal") /**first remove the hideModal class if present */
  
  showCheckoutModal.value = true /**show checkoutModal (confirm user address) */
}


</script>

<style lang="scss" scoped>
.checkout-ord {
  margin: 10rem 0;
  background-color: white;
  position: relative;
  padding: 1rem;
}

.min-ttl {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  font-weight: 400;
}

.checkout-ord-wrapper {
  padding: 1rem 1.6rem;
  max-width: 1000px;
  margin: 0 auto;

  .cow-header {
    padding: 0 1rem;
    font-weight: 400;
    font-size: 2rem;
    margin: 3rem 0;
  }
  .cow-container {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-gap: 2rem;
    .cow-div {
      padding: 1rem;
      .cow-dets {
        #checkoutForm {
          font-size: 1.4rem;
          div {
            // margin: 2rem 0;
            margin-right: 0.7rem;
            label {
              display: block;
            }
            input {
              background-color: transparent;
              border: 1px solid gainsboro;
              width: 100%;
              margin: 0.3rem 0;
              padding: 1.5rem 1rem;
            }
          }

          .form-grid-wrp {
            margin: unset;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .select-town {
            // border: 2px solid;
            margin-bottom: 1.5rem;


            select {
              width: 100%;
              &:focus {
                border: 0.1px solid black;
                outline: none;
              }

              option {
                color: black;
                background-color: white;
                padding: 1rem 0;
                font-size: 1.3rem;
              }
            }
          }
        }
      }

      .payment-div {
        font-size: 1.4rem;
        padding: 2rem 0;
        margin-top: 2rem;

        #ptp-tag{
          text-decoration: underline;
        }
      }
    }
  }
}

//style for the textarea getting additional details
.addn-shipping-dets {
  textarea {
    height: 10rem;
  }
}

.complete-order-error-wrp {
  color: red;
  font-size: 1.4rem;
  text-transform: uppercase;
  display: none;
}

/**class to be toggled to show the error
if user cannot place order */
.showPlaceOrderError {
  display: block;
}

@media screen and (max-width: 800px) {
  .checkout-ord-wrapper .cow-container {
    display: flex;
    flex-direction: column-reverse;

    .cow-div .cow-dets #checkoutForm .form-grid-wrp {
      grid-template-columns: 1fr;
    }
  }
}
</style>
