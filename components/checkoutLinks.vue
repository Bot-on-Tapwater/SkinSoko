<template>
    <div>

        <div class="cow-link-dets">
            <div class="link-wrp">
              <div class="link-container">
                <NuxtLink to="/cart">Cart</NuxtLink>
                <svg width="10px" height="10px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"></path></g></svg>
              </div>
              <div class="link-container">
                <NuxtLink to="/checkout">Shipping Address</NuxtLink>
                <svg width="10px" height="10px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"></path></g></svg>
              </div>
              <div class="link-container">
                <NuxtLink to="/payment">Payment</NuxtLink>
                <!-- <svg width="10px" height="10px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"></path></g></svg> -->
              </div>
            </div>

          </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.cow-link-dets{
    padding: 0 .6rem;
    .link-wrp{
      display: flex;
      .link-container{
        margin: 0 .5rem;
        display: flex;
        align-items: center;
        a{
          padding-right: .3rem;
          color: black;
          font-size: 1.2rem;
          &.router-link-exact-active{
              color: var(--webPriColor);
              color: blue;
            }
        }
      }
    }
  }

</style>