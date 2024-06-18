<template>
  <section class="outer-section-wrp">
    <ProfileNavbar />

    <div class="ord-wrapper">
      <h1 class="cow-header">Your Shipping Information</h1>
      <p style="padding: 1rem">Manage your shipping information</p>
      <div class="cow-container">
        <div class="cow-div">
          <div class="cow-dets">
            <form
              @submit.prevent="
                appStore.saveShippingAddress(userShippingAddress)
              "
              class="pageForm"
              id="shippingAddForm"
            >
              <div>
                <label for="phonenum-field">Phone Number</label>
                <input
                  v-model.trim="userShippingAddress.phone_number_1"
                  maxlength="10"
                  id="phonenum-field"
                  type="text"
                  pattern="[0-9]*"
                  title="ENTER NUMBERS ONLY!"
                  inputmode="numeric"
                  required
                />
              </div>

              <div>
                <label for="phone2-field">Phone Number 2*</label>
                <input
                  v-model.trim="userShippingAddress.phone_number_2"
                  maxlength="10"
                  id="phone2-field"
                  type="text"
                  pattern="[0-9]*"
                  title="ENTER NUMBERS ONLY!"
                  inputmode="numeric"
                  required
                />
              </div>
              <div>
                <FormInput
                  v-model.trim="userShippingAddress.zipcode"
                  label-text="ZIP Code *"
                  label-for="zipcode"
                  input-type="text"
                  input-id="zipcode"
                />
              </div>

              <div>
                <FormInput
                  v-model.trim="userShippingAddress.street_address"
                  label-text="Address *"
                  label-for="street-address-field"
                  input-type="text"
                  input-id="street-address-field"
                />
              </div>

              <div>
                <FormInput
                  v-model.trim="userShippingAddress.town"
                  label-text="Town *"
                  label-for="town-city-field"
                  input-type="text"
                  input-id="town-city-field"
                />
              </div>
              <div>
                <FormInput
                  v-model.trim="userShippingAddress.county"
                  label-text="County *"
                  label-for="county-field"
                  input-type="text"
                  input-id="county-field"
                />
              </div>

              <PriButton
                button-id="shipping-address-form-btn"
                button-text="save changes"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const appStore = useStore();

/**obect to hold user shipping address while being filled in the form */
const userShippingAddress = ref({
  town: "",
  street_address: "",
  zipcode: "",
  county: "",
  phone_number_1: "",
  phone_number_2: "",
  additional_details: "",
});

/**see if user already has a shipping address saved in db
 * if so, autofill the form with the values
 */
const savedUserAddress = await appStore.getUserShippingAddress();

/**if user has a shipping address, autofill it in the form */
if (savedUserAddress) {
  userShippingAddress.value.zipcode = savedUserAddress.zipcode;
  userShippingAddress.value.county = savedUserAddress.county;
  userShippingAddress.value.town = savedUserAddress.town;
  userShippingAddress.value.street_address = savedUserAddress.street_address;
  userShippingAddress.value.phone_number_1 = savedUserAddress.phone_number_1;
  userShippingAddress.value.phone_number_2 = savedUserAddress.phone_number_2;
}
</script>

<style lang="scss" scoped>
.ord-wrapper {
  padding: 1rem 1.6rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: 0.8rem;
  .cow-header {
    padding: 0 1rem;
    font-weight: 400;
    font-size: 2.5rem;
    margin: 2rem 0;
  }
  .cow-container {
    .cow-div {
      padding: 1rem;
      .cow-dets {
        .pageForm {
          font-size: 1.4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          div {
            // margin: 2rem 0;
            margin: 0.2rem;
            margin-right: 0.8rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .ord-wrapper .cow-container .cow-div .cow-dets .pageForm {
    grid-template-columns: 1fr;
  }
}
</style>
