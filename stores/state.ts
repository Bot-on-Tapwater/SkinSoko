import axios from "axios";

import type {
  BrandInterface,
  CategoriesInterface,
  Subcategories,
} from "~/interfaces/types";

export const axiosInstance = axios.create({
  baseURL: "https://skinsoko.botontapwater.tech/skinsoko",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

axiosInstance.interceptors.request.use((config) => {
  // Set loading to true to show loading spinner
  const appStore = useStore();
  appStore.pageLoading = true;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    const appStore = useStore();
    appStore.pageLoading = false;
    return response;
  },
  (error) => {
    // Handle response errors
    const appStore = useStore();
    appStore.pageLoading = false;

    /**if user not auth */
    if (error.response.status && error.response.status === 401) {
      appStore.showLogin =
        true; /**set to true so as to show the login prompt on ui */
      appStore.errorMessageToShowOnToast = error.response.data.error;
      appStore.showToast();
      return;
    }

    if (error.response.data.error) {
      appStore.errorMessageToShowOnToast = error.response.data.error;
    } else {
      appStore.errorMessageToShowOnToast =
        "Something went wrong. Please try refreshing the page";
    }
    appStore.showToast();
    return error;
  }
);

export const useStore = defineStore("user_state", {
  state: () => ({
    isAuth: false /**tells if current user is logged in */,
    errorMessageToShowOnToast: "" /**hold error msg to show to user on ui */,
    pageLoading: false /**determine when to show loading spinner */,
    showLogin: false,
    showItemAddedToCartMessage:
      false /**will help know when to show the "product added to cart message on the products page" */,
    cartSummaryDetails: {
      totalItems: 0,
      itemsSubtotal: 0,
      shippingFee: 0,
      estimatedTax: 0,
      // orderTotal: this.cartSummaryDetails.itemsSubtotal + this.cartSummaryDetails.shippingFee + this.cartSummaryDetails.estimatedTax,
    },
    /**these states below will help avoid multiple api calls, we'll store their data here instead */
    // cart: [],
    cart_loaded: false,
    subcategories: {} as Subcategories,
    brands: [] as BrandInterface[],
    categories: [] as CategoriesInterface[],
    categories_loaded: false,
    subcategories_loaded: false,
    brands_loaded: false /**will help call some apis only once */,

    /**user shipping address */
    userShippingAddress: {
      town: "",
      street_address: "",
      county: "",
      phone_number: "",
      additional_details: "",
    },
  }),

  getters: {
    cartSummaryDetailsOrderTotal: (state) => {
      /**total order of items in cart */
      return (
        state.cartSummaryDetails.itemsSubtotal +
        state.cartSummaryDetails.shippingFee +
        state.cartSummaryDetails.estimatedTax
      );
    },
  },

  actions: {
    /**function to hide the toast showing any errors on UI to user */
    hideToast() {
      const toastDiv = document.querySelector(".toast-ord-wrp");
      const errorPTag = document.querySelector(".toast-msg-p");

      if (errorPTag) {
        errorPTag.textContent = "";
      } else {
        alert("Tag not found. Error in function to hideToast");
      }
      toastDiv?.classList.remove("showToast");
    },

    /**function to display toast showing any errors on UI to user */
    showToast() {
      const toastDiv = document.querySelector(".toast-ord-wrp");
      const errorPTag = document.querySelector(".toast-msg-p");
      if (errorPTag) {
        errorPTag.textContent = this.errorMessageToShowOnToast;
      } else {
        alert("Tag not found. Error in function to showToast");
      }
      toastDiv?.classList.add("showToast");

      setTimeout(() => {
        this.hideToast();
      }, 4000);
      return;
    },

    async loginUser(loginDetails: any) {
      /** func to login user */
      /**check if all inputs have a value */
      if (!loginDetails.password || !loginDetails.email) {
        return;
      }

      const loginFormData = new FormData();
      loginFormData.append("password", loginDetails.password);
      loginFormData.append("email", loginDetails.email);

      try {
        const response = await axiosInstance.post("/login/", loginFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status && response.status === 200) {
          await this.getUser();
          this.showLogin =
            false; /**set to false so as to hide the login prompt on ui */

          await this.getCartItems(); /**load cart items after login, in case they had any */

          window.history.back(); /**return to prev url */
        }
      } catch (error) {}
    },

    /**func to register a user */
    async createUser(registerDetails: any) {
      if (registerDetails.password !== registerDetails.confirm_password) {
        this.errorMessageToShowOnToast = "Both passwords must match";
        this.showToast();
        return;
      }

      const registerFormData = new FormData();

      // registerFormData.append("username", registerDetails.username)
      registerFormData.append("password", registerDetails.password);
      // registerFormData.append("first_name", registerDetails.first_name)
      // registerFormData.append("last_name", registerDetails.last_name)
      registerFormData.append("email", registerDetails.email);

      try {
        const { data } = await axiosInstance.post(
          "/register/",
          registerFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (data.error) {
          /**if error. show user */
          this.errorMessageToShowOnToast = data.error;
          this.showToast();
          return;
        } else {
          ("User created successfully");
          await navigateTo({ path: "/account/login" });
        }
      } catch (error) {}
    },

    async getUser() {
      /**called on every route by our middleware */
      try {
        const { data: response } = await axiosInstance("/user_status/");
        if (response.user) {
          this.isAuth = true;
          return true;
        }
        return null;
      } catch (error) {
        return null;
      }
    },

    async getUserInfo() {
      /**func to get profile details of logged in user */
      try {
        const { data: userProfile } = await axiosInstance("/users/");
        return userProfile;
      } catch (error) {
        return null;
      }
    },

    async updateUserProfile() {
      /**call endpoint to update user info in db */
      try {
        await axiosInstance.put("/users/update/", {
          first_name: "first",
          last_name: "last",
          email: "email",
          username: "username",
        });
      } catch (error) {}
    },

    async logoutUser() {
      try {
        await axiosInstance("/logout/");
        this.isAuth = false;
        // this.getUser();
        //alert("you have logged out")
        window.location.href = "/";
      } catch (error) {}
    },

    async addItemToCart(productID: number, productQuantity = "1") {
      const add_product_to_user_cart_url = `/users/cart/add/${productID}/`;
      const formData = new FormData();
      formData.append("quantity", productQuantity);

      try {
        await axiosInstance.post(add_product_to_user_cart_url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        this.showItemAddedToCartMessage =
          true; /**show the "product added to cart msg" for 2s*/

        setTimeout(() => {
          this.showItemAddedToCartMessage =
            false; /**hide the "product added to cart msg" for 2s*/
        }, 2000);

        await this.getCartItems(); /**will help show the correct number of items in cart */
      } catch (error) {}
    },
    /**adding item to wishlist */
    async addItemToWishlist(productID: number) {
      if (!this.isAuth) {
        /**if use rnot authenticated, can't add item to wishlist */
        this.errorMessageToShowOnToast =
          "Please login in order to add item to wishlist";
        this.showToast();
        return;
      }

      const add_product_to_user_wishlist_url = `/users/wishlists/add/${productID}/`;

      try {
        await axiosInstance.post(add_product_to_user_wishlist_url);
      } catch (error) {}
    },

    /**func to populate subcategories to be shown */
    async populateSubcategories() {
      if (!this.categories_loaded)
        await this.getCategories(); /**fetch categories first */

      for (let category of this.categories) {
        const subs = await this.getSubCategories(category.name);
        this.subcategories[category.name] = subs;
      }
      this.subcategories_loaded = true;
    },
    // Fetch subcategories
    async getSubCategories(main_category: string) {
      const subcategories_url = `/subcategories/${main_category}/`;
      try {
        const response = await axiosInstance(subcategories_url);

        if (response.data && response.status === 200) {
          return response.data;
        }
      } catch (error) {}
      return [];
    },
    /**get available categories */
    async getCategories() {
      if (this.categories_loaded) return;

      const categories_url = "/main-categories/";
      try {
        const { data } = await axiosInstance(categories_url);
        if (data) {
          this.categories = data;
          this.categories_loaded = true;

          // return data
        }
      } catch (error) {}
    },
    /**func to get all wishlist products from db */
    async getAllWishlistProducts() {
      try {
        const response = await axiosInstance(`/users/wishlists/`);
        if (response.data && response.status === 200) {
          return response.data;
        }
      } catch (error) {}
    },

    /**function to get products */
    async getAllProducts(products_url: string) {
      try {
        const response = await axiosInstance(products_url);
        if (response.data && response.status === 200) {
          return response.data;
        }
      } catch (error) {}
    },
    /**get available brands */
    async getBrands() {
      if (this.brands_loaded) return;

      const brands_url = "/brands/";
      try {
        const { data } = await axiosInstance(brands_url);
        if (data) {
          this.brands = data;
          this.brands_loaded = true;
        }
      } catch (error) {}
    },
    async createProductReview(
      reviewDetails: any,
      productID: string | string[]
    ) {
      //   await this.getUser();

      if (!this.isAuth) {
        /**if user not authenticated, can't add review */
        this.errorMessageToShowOnToast =
          "Please login in order to add a review";
        this.showToast();
        return;
      }
      const createProductReviewUrl = `/users/products/${productID}/reviews/create/`;
      const reviewFormData = new FormData();
      reviewFormData.append("comment", reviewDetails.comment);
      reviewFormData.append("summary", reviewDetails.summary);
      reviewFormData.append("rating", reviewDetails.rating);

      try {
        await axiosInstance.post(createProductReviewUrl, reviewFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {}
    },

    /**get user items in cart */
    async getCartItems() {
      const get_user_cart_items_url = `/users/cart/`;
      try {
        // const {data: cartItems} = await axiosInstance(get_user_cart_items_url)
        const { data: user_cart } = await axiosInstance(
          get_user_cart_items_url
        );

        if (user_cart) {
          if (user_cart.cart_summary) {
            /**populate our cartSummary dict */
            this.cartSummaryDetails.itemsSubtotal =
              user_cart.cart_summary["itemsSubtotal"];
            this.cartSummaryDetails.totalItems =
              user_cart.cart_summary["totalItems"];
            // this.cartSummaryDetails.orderTotal =
            //   user_cart.cart_summary["orderTotal"];
          }
          // this.getCartSummary(user_cart)
          this.showLogin = false;
          this.cart_loaded = true; /**set to True to avoid redundtant calls */
          return user_cart.cart_items;
        }
        return null;
      } catch (error) {}
    },

    /** function to get user shipping address and save it in db */
    async saveShippingAddress() {
      const create_address_url = `/users/addresses/create/`;

      if (!this.userShippingAddress.town) {
        /**town not selected */
        this.errorMessageToShowOnToast = "Please select the town field";
        this.showToast();
        return;
      }

      // /** if user has a shipping address already,
      //  * autofill the form with those values
      //  */

      const shippingFormData = new FormData();
      shippingFormData.append("town", this.userShippingAddress.town);
      shippingFormData.append(
        "street_address",
        this.userShippingAddress.street_address
      );
      shippingFormData.append(
        "phone_number",
        this.userShippingAddress.phone_number
      );
      shippingFormData.append("county", this.userShippingAddress.county);
      shippingFormData.append(
        "additional_details",
        this.userShippingAddress.additional_details
      );

      try {
        await axiosInstance.post(create_address_url, shippingFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        //alert("Your address has been updated")
      } catch (error) {}
    },

    /**check if user has a shipping address
     * and use those values in the delivery details form
     */
    async getUserShippingAddress() {
      try {
        const get_user_saved_address_url = `/users/addresses/`;
        const { data: address } = await axiosInstance(
          get_user_saved_address_url
        );
        /**get the latest address(last updated) */
        const latestAddress = address.query_results.slice(-1)[0];
        return latestAddress ? latestAddress : null;
      } catch (error) {
        return null;
      }
    },
    /**func to get all orders of a user */
    async getUserOrders() {
      try {
        const { data: userOrders } = await axiosInstance("users/orders/");
        return userOrders;
      } catch (error) {
        return null;
      }
    },

    /**function to format produdct prices (add commas to price eg 3,000) */
    formatNumber(number: any) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
});
