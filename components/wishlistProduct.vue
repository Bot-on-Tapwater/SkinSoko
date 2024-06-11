<!-- component for each wishlist product -->
<template>
  <!-- <div> -->
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
    <template v-if="item.quantity_in_stock > 0">

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
    </template>

    <NuxtLink :to="'/products/' + item.product_id">
      <div class="image-container">
        <img :src="item.image" :alt="item.name" />
      </div>

      <div class="name-container">
        <p class="product-name">{{ item.name }}</p>
      </div>
      <div class="brand-container">
        <p class="prod-brandname">aveena</p>
      </div>
      <div class="price-container">
        <p class="product-price">KSh {{ appStore.formatNumber(item.price) }}</p>
      </div>
    </NuxtLink>
  </div>

  <!-- </div> -->
</template>

<script setup lang="ts">
const appStore = useStore(); /**using our store */

const props = defineProps(["item"]);


async function removeProductFromWishlist(product_id: number) {
  const remove_product_from_wishlist_url = `/users/wishlists/remove/${product_id}/`
  alert(`removing ${product_id}`)

  try {
      await axiosInstance.delete(remove_product_from_wishlist_url)
      /**refresh items shown on the page */

  } catch (error) {
  }

}
</script>

<style scoped lang="scss">


.product-item{
    height: 100%;
    // padding: 1rem 0;
    position: relative;

    .remove-wrp{
        position: absolute;
        top: .5rem;
        border-radius: .3rem;
        left: .5rem;
        width: 3.5rem;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 8px 0px;
        z-index: 3;
        background-color: white;
        border-radius: 5rem;
        padding: .4rem .6rem;
        cursor: pointer;

        }
    }
    .add-to-wishlist{
            position: absolute;
            top: .5rem;
            right: .5rem;
            // margin: .5rem;
            padding: 0 1rem;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            height: auto;
            align-items: center;
            justify-content: center;
            opacity: 0;

            visibility: hidden;
            transform: translateX(1.5rem);
            transition: all .15s ease-in;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 8px 0px;
            width: 3.5rem;
            border-radius: 5rem;
            svg{
                width: 1.7rem;
                margin: .7rem 0;

            }

            .add-to-cart-icon{
                transform: rotate(-360deg);
            }
    }
    a{
            color: black;
            text-decoration: none;
            display: grid;
            // height: 40%;

            .image-container{
                height: 18rem;
                width: 100%;
                overflow: hidden;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    transition: all .3s ease;
                }
            }

            .name-container{
                margin: 1rem 0;
                .product-name{
                    color: var(--webPriColor);
                    font-size: 1.3rem;
                    font-weight: 400;
                    text-transform: capitalize;
                }
            }

            .brand-container{
                padding: 0 0 1.2rem 0;

                .prod-brandname{
                    text-transform: uppercase;
                    opacity: .6;
                    font-size: 1.3rem;
                }
            }


            .price-container{
                .product-price{
                    width: 100%;
                    // padding: 0 0 1.2rem 0;
                    font-size: 1.2rem;
                    opacity: .9;
                    font-weight: 400;

                }
            }
    }


/**show the add to cart/wishlist icons when hovering over product */
.product-item:hover .add-to-wishlist{
    opacity: 1;
    visibility: visible;
    transform: translateX(0rem);

}

@media screen and (max-width: 800px) {
    .product-item .add-to-wishlist{
        opacity: 1;
        visibility: visible;
        transform: translateX(0rem);
}

}
</style>
