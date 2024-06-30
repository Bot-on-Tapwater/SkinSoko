<template>
    <div class="products-page-ord">
        <div class="products-container">
            <h1 class="wishlist-ttl">Your Wishlist</h1>

            
            <div class="item">

                <template v-if="wishlist_products">
                    <div v-for="item in wishlist_products" :key="item.product_id"  class="items-content">

                        <div class="product-item">
                            <div @click="removeProductFromWishlist(item.product_id)" class="remove-wrp">
                            <div class="remove-content">
                                <svg
                                width="24px"
                                height="25px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                    d="M8 8L16 16"
                                    stroke="#000000"
                                    stroke-width="0.45600000000000007"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ></path>
                                    <path
                                    d="M16 8L8 16"
                                    stroke="#000000"
                                    stroke-width="0.45600000000000007"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ></path>
                                </g>
                                </svg>
                            </div>
                            </div>
                            <!-- <template v-if="item.quantity_in_stock > 0"> -->
                            <div class="add-to-wishlist">
                                <svg
                                class="add-to-cart-icon"
                                @click="appStore.addItemToCart(item.product_id)"
                                title="add to cart"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                    d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                    stroke="#000000"
                                    stroke-width="0.72"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ></path>
                                </g>
                                </svg>
                            </div>
                            <!-- </template> -->

                            <NuxtLink :to="'/products/' + item.product_slug">
                            <div class="image-container">
                                <img :src="item.product_image" :alt="item.product_name" />
                            </div>

                            <div class="name-container">
                                <p class="product-name">{{ item.product_name }}</p>
                            </div>
                            <div class="brand-container">
                                <p class="prod-brandname">{{ item.brand }}</p>
                            </div>
                            <div class="price-container">
                                <p class="product-price">
                                KSh {{ appStore.formatNumber(item.product_price) }}
                                </p>
                            </div>
                            </NuxtLink>
                        </div>

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


/**func to remove product from wishlist */
async function removeProductFromWishlist(product_id: number) {
  const remove_product_from_wishlist_url = `/users/wishlists/remove/${product_id}/`;

  try {
    await axiosInstance.delete(remove_product_from_wishlist_url);
    
    /**refresh items shown on the page */
    wishlist_products.value = await appStore.getAllWishlistProducts()
  } catch (error) {}
}

</script>

<style scoped lang="scss">


.products-page-ord{
    position: relative;
    max-width: var(--maxWidth);
    margin: 0 auto;
    margin-top: 11rem;
    .products-container{
        .wishlist-ttl{
            text-align: center;
            font-weight: 400;
            opacity: .9;
            margin: 2rem 0;
        }
        .item{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
            padding: .5rem;
            place-items: center;
            .items-content{
                // padding: 1rem;
                width: auto;
                height: 90%;
                text-align: center;
                margin: 1.5rem auto;
                position: relative;

                .product-item {
                    height: 100%;
                    // padding: 1rem 0;
                    width: 20rem;
                    position: relative;
                    border: 0.1px solid gainsboro;


                    .remove-wrp {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 3rem;
                        height: 3rem;
                        display: grid;
                        place-items: center;
                        color: white;
                        box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 8px 0px;
                        z-index: 3;
                        background-color: white;
                        // border-radius: 5rem;
                        // padding: 0.4rem 0.6rem;
                        cursor: pointer;
                    }
                    .add-to-wishlist {
                        position: absolute;
                        top: 0;
                        right: 0;
                        cursor: pointer;
                        height: auto;
                        opacity: 0;
                        display: grid;
                        place-items: center;
                        visibility: hidden;
                        transition: all 0.15s ease-in;
                        background-color: white;
                        box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 8px 0px;
                        width: 3rem;
                        height: 3rem;
                        
                        svg {
                        width: 1.7rem;
                        // margin: 0.7rem 0;
                        }

                        .add-to-cart-icon {
                        transform: rotate(-360deg);
                        }
                    }
                    a {
                        color: black;
                        text-decoration: none;
                        display: grid;
                        // height: 40%;

                        .image-container {
                        height: 18rem;
                        width: 100%;
                        overflow: hidden;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                            object-fit: cover;
                            transition: all 0.3s ease;
                        }
                        }

                        .name-container {
                        margin: 1rem 0;
                        padding: 0 .2rem;
                        .product-name {
                            color: var(--webPriColor);
                            font-size: 1.3rem;
                            font-weight: 400;
                            text-transform: capitalize;
                        }
                        }

                        .brand-container {
                        padding: 0 0 1.2rem 0;

                        .prod-brandname {
                            text-transform: uppercase;
                            opacity: 0.6;
                            font-size: 1.3rem;
                        }
                        }

                        .price-container {
                        .product-price {
                            width: 100%;
                            padding: 0 0 .6rem 0;
                            font-size: 1.2rem;
                            opacity: 0.9;
                            font-weight: 400;
                        }
                        }
                    }
                }



            }

        }

        }
}


/**show the add to cart/wishlist icons when hovering over product */
.products-page-ord .products-container .item .items-content .product-item:hover .add-to-wishlist {
  opacity: 1;
  visibility: visible;
  transform: translateX(0rem);
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

        .product-item {
            width: unset;
            width: 100%;
            .add-to-wishlist {
            opacity: 1;
            visibility: visible;
            transform: translateX(0rem);
            }
        }
      }
    }
  }
}

</style>