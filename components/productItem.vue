<!-- component for each product item -->
<template>
  <!-- <div> -->
  <div class="product-item">
    <template v-if="item.quantity_in_stock > 0">
      <div v-if="item.discount > 0" class="discount-wrp">
        <div class="discount-content">
          <span>-{{ item.discount }}%</span>
        </div>
      </div>

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
        <svg
          title="add to wishlist"
          @click="appStore.addItemToWishlist(item.product_id)"
          width="22px"
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
              stroke="#000000"
              stroke-width="0.72"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </div>
    </template>

    <NuxtLink :to="'/products/' + item.slug">
      <div class="image-container">
        <img loading="lazy" :src="item.image" :alt="item.name" />
      </div>

      <div class="product-details-div">
        <div class="name-container">
          <p class="product-name">{{ item.name }}</p>
        </div>
        <div class="brand-container">
          <p class="prod-brandname">{{ item.brand.name }}</p>
        </div>
        <div class="price-container">
          <p class="product-price">
            KSh {{ appStore.formatNumber(item.price) }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>

  <!-- </div> -->
</template>

<script setup lang="ts">
const appStore = useStore(); /**using our store */

const props = defineProps(["item"]);

</script>

<style scoped lang="scss">
.product-item {
  height: 100%;
  position: relative;
  text-align: center;
  width: 20rem;
  // padding: .5rem;
  .discount-wrp {
    position: absolute;
    left: 0.5rem;
    left: 0;
    top: 0;
    background-color: var(--webPriColor);
    color: white;
    padding: 0.4rem 0.6rem;
    .discount-content {
      span {
        font-size: 1.2rem;
      }
    }
  }
  .add-to-wishlist {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 2;
    // margin: .5rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transform: translateX(1.5rem);
    transition: all 0.15s ease-in;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 8px 0px;
    width: 3.5rem;
    border-radius: 5rem;
    svg {
      cursor: pointer;
      width: 1.7rem;
      margin: 0.7rem 0;
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
        object-fit: cover;
        object-fit: contain;
      }
    }

    .product-details-div {
      padding: 0.5rem;
    }

    .name-container {
      margin: 1rem 0;
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
        // padding: 0 0 1.2rem 0;
        font-size: 1.2rem;
        opacity: 0.9;
        font-weight: 400;
      }
    }
  }
}

/**show the add to cart/wishlist icons when hovering over product */
.product-item:hover .add-to-wishlist {
  opacity: 1;
  visibility: visible;
  transform: translateX(0rem);
}

@media screen and (max-width: 600px) {
  .product-item  {
        width: unset;
        // max-width: 20rem;
        width: 100%;
      .add-to-wishlist {
        opacity: 1;
        visibility: visible;
        transform: translateX(0rem);
      }
  }
}
</style>
