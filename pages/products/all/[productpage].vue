<!-- PAGE SHOWING ALL PRODUCTS AVAILABLE IN THE DB -->
<template>
  <div class="products-page-ord">
    <FilterProducts />

    <div class="products-container">
      <div @click="showSideBar()" class="open-sidebar">
        <!-- <svg width="20px" height="24px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z" stroke="#000000" stroke-width="1.025" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z" stroke="#000000" stroke-width="1.025" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z" stroke="#000000" stroke-width="1.025" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z" stroke="#000000" stroke-width="1.025" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> -->
        <svg
          width="18px"
          height="18px"
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
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              stroke-width="0.504"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>

        <p>show sidebar</p>
      </div>

      <div class="item">
        <template v-if="products">
          <div
            v-for="item in products.query_results"
            :key="item"
            class="items-content"
          >
            <!-- product component -->
            <ProductItem :item="item" />
          </div>
        </template>

        <template v-else>
          <h2 style="margin: 2rem 0">Oops. There are no products here :(</h2>
        </template>
      </div>

      <template v-if="products">
        <div class="prev-nxt-pages-wrp">
        <!-- @click="getProductsWithProductPage((productsPage += 1))" -->
          <NuxtLink
            class="navigation-btn"
            v-if="products.previous_page"
            :to="getPageLink(products.current_page - 1)"

          >
            <div>
              <svg
                fill="#000000"
                height="64px"
                width="64px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.006 512.006"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path
                        d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <p class="prod-nav-btns">Previous page</p>
            </div>
        </NuxtLink>

          <div class="no-nav-page" v-else>
            <svg
              fill="#000000"
              height="64px"
              width="64px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512.006 512.006"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path
                      d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <p class="prod-nav-btns">Previous page</p>
          </div>

          <div class="current-page">
            <div class="cp-dets">
              <span>{{ products.current_page }}</span>
              <!-- <span>{{ productsPage }}</span> -->
            </div>
          </div>

          <!-- @click="getProductsWithProductPage((productsPage += 1))" -->
          <NuxtLink
            class="navigation-btn"
            :to="getPageLink(products.current_page + 1)"
            v-if="products.next_page"
          >
            <div>
              <p>Next page</p>
              <!-- <NuxtLink class="prod-nav-btns" :to="getPageLink(products.current_page + 1)">Next page</NuxtLink> -->
              <svg
                fill="#000000"
                height="64px"
                width="64px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.005 512.005"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path
                        d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            </NuxtLink>

          <div class="no-nav-page" v-else>
            <p class="prod-nav-btns">Next page</p>
            <svg
              fill="#000000"
              height="64px"
              width="64px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512.005 512.005"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path
                      d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore, axiosInstance } from "@/stores/state";

useHead({
  title: "Skin Soko | Products",
});

let productsPage =
  ref(1); /**to help with pagination, will tell which product's page to show */

const appStore = useStore(); /**using our store */

// let products_url = "/products/";

const parameter = useRoute();
let pageNumber = parameter.params.productpage;

let products_url = `/products/?page=${pageNumber}`;

let query_params = parameter.query;

if ("filter_brand" in query_params) {
  let brands = query_params["filter_brand"];
  products_url += `?filter_brand=${brands}`;
} else if ("filter_main_category" in query_params) {
  let main_category = query_params["filter_main_category"];
  products_url += `?filter_main_category=${main_category}`;
} else if ("filter_sub_category" in query_params) {
  let sub_category = query_params["filter_sub_category"];
  products_url += `?filter_sub_category=${sub_category}`;
}

const products = ref(await appStore.getAllProducts(products_url));

/**func to get page to show */
function getPageLink(page: number) {
  return `/products/all/${page}`;
}

function showSideBar() {
  const sideBarElement = document.querySelector(".filter-products-wrp");
  const sideBarOverlay = document.querySelector(".filters-sidebar-overlay");

  sideBarElement
    ? sideBarElement.classList.add("showHidden")
    : alert("sideBarElement element not found");
  sideBarOverlay
    ? sideBarOverlay.classList.add("showSidebarOverlay")
    : alert("sideBarOverlay element not found");
}

async function getProductsWithProductPage(page: number) {
  console.log("page ", page);
  window.location.href = `/products/all/${page}`
  products_url = `/products/?page=${page}`
  products.value = await appStore.getAllProducts(products_url)
}
</script>

<style lang="scss" scoped>
.products-page-ord {
  position: relative;
  max-width: var(--maxWidth);
  min-height: 50rem;
  margin: 8rem auto;

  .products-container {
    margin-bottom: 5rem;
    margin-left: 20rem;
    .open-sidebar {
      display: flex;
      padding: 2rem;
      padding-top: 2rem;
      width: 20rem;
      display: none;
      align-items: center;
      cursor: pointer;

      p {
        padding: 0 0.5rem;
        font-size: 1.3rem;
        text-transform: capitalize;
      }
    }

    .item {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      padding: 0.5rem;
      place-items: center;
      .items-content {
        box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
        height: auto;
        // max-width: 30rem;
        width: 90%;
        width: auto;
        height: 90%;
        text-align: center;
        margin: 1.5rem auto;
        position: relative;
      }
    }
  }
  /**style for the pagination 'nav' */
  .prev-nxt-pages-wrp {
    display: flex;
    font-weight: 500;
    font-size: 1.5rem;
    width: 40rem;

    /**div to hold the page number */
    .current-page {
      text-align: center;
      display: grid;
      place-items: center;

      .cp-dets {
        height: 3rem;
        width: 3rem;
        // border-radius: 50%;
        text-align: center;
        display: grid;
        place-items: center;
        color: white;
        background-color: var(--webPriColor);
      }
      // height: 2.4rem;
    }
    div,
    .navigation-btn {
      display: flex;
      align-items: center;
      margin: 0 1rem;
      padding: 1rem;
      padding: unset;
      cursor: pointer;

      p {
        color: var(--webPriColor);
      }

      svg {
        width: 1.7rem;
        height: 3rem;
        fill: var(--webPriColor);
        padding: 0 0.1rem;
      }
      a {
        font-size: 1.5rem;
        color: var(--webPriColor);
        font-weight: 500;
      }
    }

    .no-nav-page {
      opacity: 0.3;
    }
  }
}

@media screen and (max-width: 1000px) {
  .products-page-ord .products-container {
    margin-left: unset;

    .open-sidebar {
      display: flex;
    }
  }
}

@media screen and (max-width: 789px) {
  .products-container .item {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
}

@media screen and (max-width: 630px) {
  .products-container {
    width: 100vw;

    .item {
      border: none;
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
