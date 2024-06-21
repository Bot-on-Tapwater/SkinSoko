<template>
  <div class="checkout-ord">
    <template v-if="cart_items">
      <div v-if="cart_items.length > 0">
        <CheckoutModal v-if="orderPlacedSuccessfully" />

        <div class="checkout-ord-wrapper">
          <h1 class="cow-header">Checkout</h1>
          <div class="cow-container">
            <div class="cow-div">
              <div class="cow-dets">
                <h1 class="min-ttl">1. Delivery Details</h1>

                <form
                  @submit.prevent="
                    appStore.saveShippingAddress()
                    // appStore.saveShippingAddress(userShippingAddress)
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

                  <div>
                    <FormInput
                      v-model.trim="appStore.userShippingAddress.street_address"
                      label-text="Street Address *"
                      label-for="street-address-field"
                      input-type="text"
                      input-id="street-address-field"
                    />
                  </div>

                  <div class="form-grid-wrp">
                    <div>
                      <CustomSelect />
                      <!-- <FormInput
                        v-model.trim="userShippingAddress.town"
                        label-text="Town *"
                        label-for="town-city-field"
                        input-type="text"
                        input-id="town-city-field"
                      /> -->
                    </div>
                  </div>

                  <div class="addn-shipping-dets">
                    <label id="additional-info">Any Additional Details</label>
                    <textarea
                      placeholder="Please provide any other info that we should keep in mind regarding your order"
                      id="additional-info"
                      v-model.trim="userShippingAddress.additional_details"
                      name="additional_dets"
                      row="20"
                      column="40"
                      maxlength="250"
                    ></textarea>
                  </div>

                  <PriButton
                    button-id="shipping-address-form-btn"
                    button-text="confirm"
                  />
                </form>
              </div>

              <div class="payment-div">
                <h1 class="min-ttl">2. Payment Option</h1>
                <p>Cash on Delivery</p>

                <PriButton
                  @click="placeOrder"
                  button-id="complete-order-btn"
                  button-text="Place order"
                />
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

      <div v-else>
        <!--cart is empty -->
        <CartEmpty />
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

/**array to hold the cart items of a user. To be shown on ui */
// let cart_items = ref<CartItems>({ current_page: 0, total_pages: 0, query_results: [] });
let cart_items: any = ref();

cart_items.value = await appStore.getCartItems();

/**will determine when to shown the 'order placed' popup */
const orderPlacedSuccessfully = ref(false);


/**obect to hold user shipping address while being filled in the form */
const userShippingAddress = ref({
  town: "",
  street_address: "",
  county: "",
  phone_number: "",
  additional_details: "",
});

/**see if user already has a shipping address saved in db
 * if so, autofill the form with the values
 */

const savedUserAddress = await appStore.getUserShippingAddress();

/**if user has a shipping address, autofill it in the form */
if (savedUserAddress) {
  appStore.userShippingAddress.county = savedUserAddress.county;
  // appStore.userShippingAddress.town = savedUserAddress.town;
  appStore.userShippingAddress.street_address = savedUserAddress.street_address;
  appStore.userShippingAddress.phone_number = savedUserAddress.phone_number;
}


/** place order function */
async function placeOrder() {
  const place_order_url = `/users/orders/create/`;

  const userAddress = await appStore.getUserShippingAddress();
  /**check if user has address saved before they can place order */
  if (!userAddress) {
    appStore.errorMessageToShowOnToast =
      "Please confirm your shipping address first";
    appStore.showToast();
    return;
  }

  try {
    await axiosInstance.post(place_order_url);

    orderPlacedSuccessfully.value = true;
    appStore.getCartItems(); /** in order to show correct number of products in cart */
  } catch (error) {
    
  }
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
  font-size: 2rem;
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
    font-size: 2.5rem;
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
        }
      }

      .payment-div {
        font-size: 1.4rem;
        padding: 2rem 0;
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
