<template>
    <div class="products-page-ord">
        <div class="products-container">
            <h1 class="wishlist-ttl">Your Wishlist</h1>

            
            <div class="item">

                <template v-if="wishlist_products">
                    <div v-for="item in wishlist_products" :key="item.product_id"  class="items-content">
                        <WishlistProduct :item="item"/>

                    </div>
                </template>
                
                <template v-else>
                    <CartEmpty/>
                </template>
            </div>
            
        </div>


    </div>
</template>

<script lang="ts" setup>

useHead({
    title:'Skin Soko | Wishlist',
})

const appStore = useStore()
const wishlist_products = ref(await appStore.getAllWishlistProducts())


</script>

<style scoped lang="scss">

.products-page-ord{
    position: relative;
    max-width: var(--maxWidth);
    margin: 8rem auto;
    margin-top: 10rem;

    .products-container{
        margin-bottom: 5rem;

        .wishlist-ttl{
            text-align: center;
            font-weight: 400;
            opacity: .9;
        }
        .item{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
            padding: .5rem;
            place-items: center;
            .items-content{
                box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
                padding: 1rem;
                height: auto;
                width: auto;
                height: 90%;
                text-align: center;
                margin: 1.5rem auto;
                position: relative;

            }

        }

        }
}

@media screen and (max-width: 630px) {
  .products-page-ord .products-container {
    width: 100vw;
    
    .item {
      border: none;
      grid-template-columns: unset;
      grid-template-columns: 1fr 1fr;
      margin: unset;
      padding: unset;

      .items-content {
        margin: 2rem 0.5rem;
      }
    }
  }
}

</style>