<!-- the 'left side panel' on products page -->
<template>
  <section>
    <div @click="hideOverlay()" class="filters-sidebar-overlay"></div>

    <div class="filter-products-wrp">
      <div class="fpw-container">
        <div class="fpw-content">
          <div v-for="category in categories" :key="category.name" class="fpw">
            <p class="fpw-ttl">{{ category.name }}</p>
            <ul>
              <a
                :href="`/products/all/1?filter_sub_category=${subcategory.name}`"
                v-for="subcategory in subcategories[category.name]"
                :key="subcategory.name"
              >
                {{ subcategory.name }}
              </a>
            </ul>
          </div>

          <div class="fpw">
            <p class="fpw-ttl">Brands</p>
            <ul v-if="brands">
              <li v-for="brand in brands" :key="brand.brand_id">
                <a :href="`/products/all/1?filter_brand=${brand.name}`">{{
                  brand.name
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { BrandInterface, CategoriesInterface, Subcategories } from "~/interfaces/types";

const appStore = useStore(); /**accessing out store */

//get available brands
const brands = appStore.brands;
const categories = appStore.categories;

const subcategories: Subcategories = appStore.subcategories


function hideOverlay() {
  const sideBarElement = document.querySelector(".filter-products-wrp");
  const sideBarOverlay = document.querySelector(".filters-sidebar-overlay");

  sideBarElement
    ? sideBarElement.classList.remove("showHidden")
    : alert("sideBarElement not found");
  sideBarOverlay
    ? sideBarOverlay.classList.remove("showSidebarOverlay")
    : alert("sideBarElement not found");
}


</script>

<style scoped lang="scss">
/**overlay to be shown on mobile when user
opens menu */
.filters-sidebar-overlay {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 3;
}
.filters-sidebar-overlay.showSidebarOverlay {
  /**toggle showing overlay on mobile */
  display: block;
}

.filter-products-wrp {
  width: 18rem;
  // box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 3px 0px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  // border: 2px solid red;
  overflow-y: scroll;
  height: 100%;
  background-color: white;
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: rgb(152, 134, 134) white;
  // scrollbar-color: white white;
  transition: all 0.2s ease-in;

  .fpw-container {
    .fpw-content {
      // background-color: white;
      display: flex;
      flex-direction: column;

      .fpw {
        flex-grow: 1;
        border-bottom: 0.1px solid gainsboro;
        margin: 2rem 0;
        scrollbar-width: thin; /* "auto" or "thin" */
        scrollbar-color: rgb(152, 134, 134) white;
        scrollbar-color: white white;
        overflow-y: scroll;
        padding: 0 1rem;
        overflow: scroll;
        .fpw-ttl {
          margin: 2rem 0;
          text-transform: uppercase;
          font-size: 1.2rem;
        }

        a {
          display: block;
          font-weight: 400;
          text-transform: capitalize;
          font-size: 1.1rem;
          opacity: 0.8;
          margin: 0.6rem 0;
          padding: 0.4rem;
          text-transform: uppercase;

          &:hover {
            border-radius: 0.2rem;
            background-color: rgba(176, 197, 237, 0.2);
          }
        }
        // ul li {
        //   font-size: 1.2rem;
        //   font-weight: 400;
        //   text-transform: capitalize;
        //   font-size: 1.1rem;
        //   opacity: 0.8;
        //   list-style-type: none;
        //   margin: 0.8rem 0;
        //   // margin-left: 1.5rem;
        //   padding: 0.4rem 1rem;

        //   &:hover {
        //     border-radius: 0.2rem;
        //     background-color: rgba(176, 197, 237, 0.2);
        //     // text-decoration: underline;
        //   }
        // }
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .filter-products-wrp {
    opacity: 0;
    visibility: hidden;
  }
}

.showHidden {
  z-index: 434;
  right: 0;
  left: 0;
  bottom: 0;
  max-width: unset;
  width: 50vw;
  visibility: visible;
  opacity: 1;
}
</style>
