/**contains code to be loaded at the creation of the Nuxtjs app */
import { useStore } from "~/stores/state";

export default defineNuxtPlugin(async (nuxtApp) => {
  const appStore = useStore(nuxtApp.$pinia);

  await appStore.getUser(); /**get user status */

  if (!appStore.cart_loaded) {
    await appStore.getCartTotalItems();
  }

  if (!appStore.brands_loaded) {
    await appStore.getBrands();
  }

  if (!appStore.categories_loaded) {
    await appStore.getCategories();
  }

  if (!appStore.subcategories_loaded) {
    await appStore.populateSubcategories();
  }
});
