/**contains code to be loaded at the creation of the Nuxtjs app */
import { useStore } from "~/stores/state";

export default defineNuxtPlugin(async (nuxtApp) => {
  const appStore = useStore(nuxtApp.$pinia);

  await appStore.getUser(); /**get user status (logged in or not) */

  /**load some items before app is created */

  if (!appStore.homepageProductsLoaded) {
    await appStore.getAllProducts(
      "/products/"
    ); /**get products to populate home page "discountedProducts, bestSelling products" */
  }
  if (!appStore.cart_loaded) {
    await appStore.getCartItems(); /**in order to get the total number of items in cart to be shown to user */
  }

  if (!appStore.brands_loaded) {
    await appStore.getBrands();
  }

  if (!appStore.categories_loaded) {
    await appStore.getCategories();
  }

  if (!appStore.subcategories_loaded) {
    await appStore.populateSubcategories(); /**the subcats to show on the products page */
  }
});
