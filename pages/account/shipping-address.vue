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
                appStore.saveShippingAddress()
              "
              class="pageForm"
              id="shippingAddForm"
            >

            <div class="pageFormGridWrp">
              <div>
                <label for="phonenum-field">Phone Number *</label>
                <input
                  v-model.trim="appStore.userShippingAddress.phone_number"
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
                  label-text="Address *"
                  label-for="street-address-field"
                  input-type="text"
                  input-id="street-address-field"
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

/**see if user already has a shipping address saved in db
 * if so, autofill the form with the values
 */
const savedUserAddress = await appStore.getUserShippingAddress();

/**if user has a shipping address, autofill it in the form */
if (savedUserAddress) {
  appStore.userShippingAddress.county = savedUserAddress.county;
  appStore.userShippingAddress.street_address = savedUserAddress.street_address;
  appStore.userShippingAddress.phone_number = savedUserAddress.phone_number;
}

</script>

<style lang="scss" scoped>
.ord-wrapper {
  padding: 1rem 1.6rem;
  max-width: 700px;
  margin: 0 auto;
  .cow-header {
    padding: 0 1rem;
    font-weight: 400;
    font-size: 2.2rem;
    margin: 2rem 0;
  }
  .cow-container {
    .cow-div {
      padding: 1rem;
      .cow-dets {
        .pageForm {
          font-size: 1.4rem;

          .pageFormGridWrp{
            display: grid;
            grid-gap: .5rem;
            grid-template-columns: 1fr 1fr;
            
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
