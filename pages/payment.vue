<template>
  <div class="top-ord">
    <div class="if-ttl">
      <h1 class="ttl">Payment</h1>
    </div>
    <div class="checkout-lnks">
      <CheckoutLinks />
    </div>
    <div class="iframe-wrp">
      <iframe
        src="https://pay.pesapal.com/iframe/PesapalIframe3/Index?OrderTrackingId=98b17f86-f4c8-4a8e-9345-dd09ad41232c"
        frameborder="0"
        class="iframe"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
const appStore = useStore();

// definePageMeta({
//     layout: "newla"
// })
</script>

<style lang="scss" scoped>
.top-ord {
  margin: 0 auto;
  margin-top: 10rem;
  max-width: var(--maxWidth);
  padding: 0 2rem;

  .checkout-lnks {
    margin: 1rem 0;
  }

  .if-ttl {
    .ttl {
      padding: 0 1rem;
      font-weight: 400;
      font-size: 2rem;
    }
  }
  .iframe-wrp {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 56.25%;
    min-height: 50rem;

    .iframe {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
}
</style>
