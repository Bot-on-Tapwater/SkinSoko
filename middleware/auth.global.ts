/**logic to run before each route */
import { useStore } from "~~/stores/state";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const appStore = useStore();

  /**try subscribing the store first */
  appStore.$subscribe((mutation, state) => {
    //
  });

  if (process.server) return;



  // /**user needs to be logged in to access these routes   */
  const protectedRoutes = [
    "/account/profile",
    "/account/orders",
    "/account/shipping-address",
    "/account/reviews",
    "/checkout",
    "/payment",
    "/account/wishlist"
    // "/cart",
  ];

  /**user tries to access protected routes */
  if (!appStore.isAuth) {
    if (protectedRoutes.includes(to.fullPath)) {
      return navigateTo("/account/login");
    }
  }

  /**if user is logged in and tries to go to /login or /register */
  if (
    appStore.isAuth &&
    (to.fullPath == "/account/login" || to.fullPath === "/account/signup")
  ) {
    return navigateTo("/");
  }
});
