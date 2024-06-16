import { useStore } from "~/stores/state";

export default defineNuxtPlugin(async (nuxtApp) => {
  const appStore = useStore(nuxtApp.$pinia);


  if (!appStore.brands_loaded) {
    await appStore.getBrands();
  }
  if (!appStore.categories_loaded) {
    await appStore.getCategories();
  }
});
