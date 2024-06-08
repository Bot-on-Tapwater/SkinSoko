<template>
    <div class="products-page-ord">

        <div class="products-container">

            <FilterProducts/>

            <template v-if="products">
                <template v-if="products.query_results.length > 0">
                    <div class="item">
    
                        <div v-for="item in products.query_results" :key="item.name"  class="items-content">

                            <!-- product component -->
                            <ProductItem :item="item"/>
        
                        </div>
                        
                    </div>

                    <div class="prev-nxt-pages-wrp">
                        <NuxtLink class="navigation-btn" v-if="products.previous_page" :to="getPageLink(products.current_page - 1)">
                            <div>
                                <svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.006 512.006" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z"></path> </g> </g> </g></svg>
                                <p class="prod-nav-btns">Previous page</p>
                            </div>
                        </NuxtLink>

                        <div class="no-nav-page" v-else>
                            <svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.006 512.006" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z"></path> </g> </g> </g></svg>
                            <p class="prod-nav-btns">Previous page</p>
                        </div>

                        <div class="current-page">
                            <div class="cp-dets">
                                <span>{{ products.current_page }}</span>
                            </div>
                        </div>

                        <NuxtLink class="navigation-btn" :to="getPageLink(products.current_page + 1)" v-if="products.next_page">
                            <div>
                                <p>Next page</p>
                                <!-- <NuxtLink class="prod-nav-btns" :to="getPageLink(products.current_page + 1)">Next page</NuxtLink> -->
                                <svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.005 512.005" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"></path> </g> </g> </g></svg>

                            </div>
                        </NuxtLink>

                        <div class="no-nav-page" v-else>
                            <p class="prod-nav-btns">Next page</p>
                            <svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.005 512.005" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"></path> </g> </g> </g></svg>
                        </div>

                    </div>
    
                    <!-- <div class="prev-nxt-pages-wrp">
                        <div class="next-arr" v-if="products.previous_page">
                            <NuxtLink :to="getPageLink(products.current_page - 1)">Previous page</NuxtLink>
                        </div>
                        <div v-else>
                            <p>Previous page</p>
                        </div>
    
                        <div v-if="products.next_page">
                            <NuxtLink :to="getPageLink(products.current_page + 1)">Next page</NuxtLink>
                        </div>
                        <div v-else>
                            <p>Next page</p>
                        </div>
    
                    </div> -->
                </template>

                <template v-else>
                    <h1 style="font-size:1.4rem; font-weight: 500">There are no products in this category. <NuxtLink to="/products/all/1" style="text-decoration: underline;">Continue shopping</NuxtLink></h1>
                </template>
            </template>
            <template v-else>
                <h1 style="font-size:1.4rem; padding:1rem; font-weight: 500">There are no products in this category. <NuxtLink to="/products/all/1" style="text-decoration: underline;">Continue shopping</NuxtLink></h1>
            </template>

            
        </div>

        <!-- <LoginModal/> -->

    </div>
</template>

<script lang="ts" setup>

import {useStore, axiosInstance} from '@/stores/state'


const route = useRoute()
const pageNumber = route.query.page;  /**get page number from url query params */

const appStore = useStore() /**using our store */

const parameter = useRoute();
let categoryID = parameter.params.category; /**get category id from url param */

const {data:products} =await axiosInstance(`/categories/${categoryID}/?page=${pageNumber}`)

useHead({
    title:'Skin Soko | Products',
})    


/**func to get page to show */
function getPageLink(page: number) {
    return `/products/category/${categoryID}?page=${page}`;
}

</script>

<style lang="scss" scoped>


.products-page-ord{
    position: relative;
}

.products-container{

    max-width: var(--maxWidth);
    margin: 10rem auto;
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: 20% 80%;
    .item{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
        margin: 1rem;
        padding: .5rem;
        .items-content{
            margin:1.5rem 1rem;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            padding: 1rem;
            width: 90%;
            // height: 90%;
            // height: auto;
            text-align: center;
            max-height: 33rem;
            margin: 1.5rem auto;
            position: relative;


            //icon to be clicked to add item to cart
            .add-to-wishlist{
                margin: .5rem;
                cursor: pointer;
                width: 1.4rem;
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                opacity: 0;
                visibility: hidden;
                transition: all .1s ease-in;
            }

            a{
                color: black;
                text-decoration: none;
                display: grid;
                height: 40%;
                // padding: 1rem;

                .image-container{
                    height: 18rem;
                    width: 100%;
                    overflow: hidden;
                    
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        transition: all .3s ease;

                        &:hover{
                            transform: scale(1.2);
                        }

                    }
                }

                .name-container{
                    margin: 1rem 0;
                    .product-name{
                        color: var(--webPriColor);
                        font-size: 1.4rem;
                        font-weight: 400;
                        text-transform: capitalize;
                        // opacity: .9;
                    }
                }

                .quantity-container{
                    .quantity_in_stock{
                        // text-align: center;
                        text-transform: capitalize;
                        font-weight: 400;
                        font-size: 1.3rem;
                        opacity: .8;
                    }
                    .out-of-stock{
                        text-transform:lowercase;
                        background-color: var(--webPriColor);
                        padding: .5rem 1rem;
                        color: white;
                        border-radius: .2rem;
                        width: auto;
                    }
                }
                .price-container{
                    .product-price{
                        // text-align: center;
                        width: 100%;
                        padding: 0 0 1.2rem 0;
                        font-size: 1.4rem;
                        opacity: .9;
                        font-weight: 400;
            
                    }
                }
            }

            // &:hover{
            //     opacity: .9;
            // }
        }

        .items-content:hover .add-to-wishlist{
            opacity: 1;
            visibility: visible;
        }




    }

    /**style for the pagination 'nav' */
    .prev-nxt-pages-wrp{
        display: flex;
        font-weight: 500;
        font-size: 1.5rem;
        width: 40rem;

        /**div to hold the page number */
        .current-page{
            text-align: center;
            display: grid;
            place-items: center;

            .cp-dets{
                height: 3rem;
                width: 3rem;
                text-align: center;
                display: grid;
                place-items: center;
                color: white;
                background-color: var(--webPriColor);
            }
            // height: 2.4rem;
        }
        div, .navigation-btn{
            display: flex;
            align-items: center;
            margin: 1rem;
            padding: 1rem;
            padding: unset;

            p{
                color: var(--webPriColor);
            }
            
            svg{
                width: 2rem;
                height: 3rem;
                fill: var(--webPriColor);
                padding: 0 .1rem;
            }
            a{
                font-size: 1.5rem;
                color: var(--webPriColor);
                font-weight: 500;
            }
        }
        
        .no-nav-page{
            opacity: .3;
        }
        
    }
}



@media screen and (max-width:789px) {
    .products-container .item{
        grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));

    }
}

@media screen and (max-width:630px) {
    .products-container{
        width:100vw;

        .item{
        border: none;
        grid-template-columns: 1fr 1fr;
        margin: unset;
        padding:unset;

        .items-content{
            margin: 2rem .5rem;
        }
    }
    } 
}


</style>
