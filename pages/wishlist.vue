<template>
    <div class="products-page-ord">
        <div class="products-container">
            <h1 class="wishlist-ttl">Your Wishlist</h1>

            <div class="item">

                <template v-if="wishlist_products">
                    <div v-for="item in wishlist_products.query_results" :key="item"  class="items-content">
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


/**func to remove item from wishlist */
async function removeWishlistProduct(productID: number) {
    const remove_wishlist_item_url = `/users/wishlists/remove/${productID}/`

    try {
        await axiosInstance.delete(remove_wishlist_item_url)

        /**refresh items shown on the page */
        wishlist_products.value = await appStore.getAllWishlistProducts()


    } catch (error) {
    }
}


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
                width: 90%;
                height: 90%;
                text-align: center;
                margin: 1.5rem auto;
                position: relative;

            }

        }

        }
}


</style>