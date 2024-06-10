<template>
    <div class="products-page-ord">
        <div class="products-container">
            <h1 class="wishlist-ttl">Your Wishlist</h1>

            <div class="item">

                <template v-if="products">
                    <div v-for="item in products.query_results" :key="item"  class="items-content">
                        <!-- product component -->
                        <WishlistProduct :item="item"/>

                    </div>
                </template>
                
                <template v-else>
                    <h2>Your wishlist is empty.</h2>
                    <CartEmpty/>

                </template>
            </div>
            
            <ScrollToTop/>
            
        </div>


    </div>
</template>

<script lang="ts" setup>

import {useStore, axiosInstance} from '@/stores/state'

useHead({
    title:'Skin Soko | Wishlist',
})


const appStore = useStore() /**using our store */


const parameter = useRoute();
let pageNumber = parameter.params.productpage;

const products = ref(await getAllWishlistProducts())

/**func to get all wishlist products from db */
async function getAllWishlistProducts() {
    try {
        const response = await axiosInstance(`/products/?page=${pageNumber}`)
        if (response.data && response.status === 200) {
            return response.data
        }

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