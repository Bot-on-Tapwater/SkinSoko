<!-- PAGE SHOWING A SPECIFIC PRODUCT -->
<template>
  <div class="pr-outer-root-div">
    <ItemAddedToCartPopup />
    <!-- popup to be shown when product added to cart -->

    <template v-if="product">
      <section class="cart-section-wrapper">
        <div class="cart-section">
          <div class="cart-container">
            <div class="image-container">
              <img :alt="product.name" id="aic-image" :src="product.image" />
            </div>

            <div class="product-details-wrp-sticky">
              <div class="product-details">
                <h4 class="product-title">{{ product.name }}</h4>
                <h4 class="product-price">
                  KSh {{ appStore.formatNumber(product.price) }}
                </h4>

                <div class="product-dets-overall-wrp">
                  <div class="wc-p-div">
                    <div class="svgp">
                      <h3 class="services-h">Description</h3>
                      <div class="serv-arrow">
                        <span class="vertical"></span>
                        <span class="horizontal"></span>
                      </div>
                    </div>
                    <div class="serv-p">
                      <p
                        class="product-description"
                        v-html="product.description.replace(/\r?\n/g, '<br>')"
                      ></p>
                    </div>
                  </div>

                  <div class="wc-p-div">
                    <div class="svgp">
                      <h3 class="services-h">Ingredients</h3>
                      <div class="serv-arrow">
                        <span class="vertical"></span>
                        <span class="horizontal"></span>
                      </div>
                    </div>
                    <div class="serv-p">
                      <p
                        class="product-ingredients"
                        v-html="product.ingredients.replace(/\r?\n/g, '<br>')"
                      ></p>
                    </div>
                  </div>
                </div>

                <!-- if product in stock -->
                <template v-if="product.quantity_in_stock > 0">
                  <form
                    @submit.prevent="checkIfValid(product)"
                    action=""
                    id="add-prod-to-cart"
                  >
                    <label>Quantity</label>
                    <!-- <CartInput :maxItems="product.quantity_in_stock"/> -->

                    <div class="btns-wrapper">
                      <div
                        @click="
                          cartProduct.totalItems > 1
                            ? cartProduct.totalItems--
                            : 1
                        "
                      >
                        <svg
                          class="subtract ant-collapse-arrow"
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="15"
                          width="15"
                          xmlns="http://www.w3.org/2000/svg"
                          style="margin-top: -5px"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z"></path>
                          <path d="M6 19h12v2H6z"></path>
                        </svg>
                      </div>
                      <div>
                        <input
                          v-model.trim.number="cartProduct.totalItems"
                          type="text"
                          class="total-products"
                          autocomplete="off"
                          pattern="[0-9]*"
                          title="ENTER NUMBERS ONLY!"
                          inputmode="numeric"
                        />
                      </div>
                      <div
                        @click="
                          cartProduct.totalItems < product.quantity_in_stock
                            ? cartProduct.totalItems++
                            : product.quantity_in_stock
                        "
                      >
                        <svg
                          class="add"
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                      </div>
                    </div>

                    <!-- ADD ITEM TO CART BTN-->
                    <PriButton button-text="Add to Cart" />
                    <div class="order-onw-wrp">
                      <a
                        @click="openWhatsappChat(product)"
                        id="chat-on-whatsapp-btn"
                        target="_blank"
                        href="#"
                      >
                        <div>
                          <svg
                            fill="#ffffff"
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#ffffff"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <title>whatsapp</title>
                              <path
                                d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"
                              ></path>
                            </g>
                          </svg>
                          <span>Order on Whatsapp</span>
                        </div>
                      </a>
                    </div>
                  </form>
                </template>
                <!-- if product out of stock -->
                <template v-else>
                  <div class="out-of-stock-el">
                    <p class="out-of-stock">out of stock</p>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <template v-if="relatedProducts">
            <div class="related-products-wrapper">
              <h2 class="rp-ttl">Related Products</h2>
              <div class="rp-container">
                <div class="rp-content">
                  <!-- <NuxtLink v-for="related_product in relatedProducts" :key="related_product.name"  :to="'/products/'+related_product.product_id"> -->
                  <NuxtLink
                    v-for="(related_product, index) in relatedProducts.slice(
                      0,
                      7
                    )"
                    :key="index"
                    :to="'/products/' + related_product.product_id"
                  >
                    <div class="rp-div">
                      <!-- don't show same product twice. ie main product and related product -->
                      <template
                        v-if="related_product.product_id != product.product_id"
                      >
                        <!-- <div :class="related_product.product_id === product.product_id ? 'active-product': 'not-active-prod'"> -->
                        <div class="rp-img">
                          <img
                            :src="related_product.image"
                            :alt="related_product.name"
                          />
                        </div>
                        <div class="rp-dets">
                          <p class="rp-name">{{ related_product.name }}</p>
                          <p class="rp-price">
                            Ksh
                            {{ appStore.formatNumber(related_product.price) }}
                          </p>
                        </div>
                      </template>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </template>
        </div>
      </section>

      <section class="product-reviews-wrp">
        <div class="review-ttl-wrp">
          <h1 class="review-ttl">Reviews</h1>
          <p @click="toggleWriteReviewDiv()">Leave a review</p>
        </div>

        <div
          class="user-write-review-wrp"
          :class="{ showWriteReviewDiv: isWriteReviewDivVisible }"
        >
          <div class="uwr-div">
            <div class="uwr-dets">
              <form
                @submit.prevent="reviewToCreate()"
                ref="createReviewForm"
                id="user-submit-review-form"
              >
                <!-- <p>Overall rating *</p> -->
                <div class="product-rating-grp">
                  <label for="product-rating">Overall rating *</label> <br />
                  <select
                    v-model="reviewDetails.rating"
                    name="product-overall-rating"
                    id="product-rating"
                  >
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="3">2</option>
                    <option value="1">1</option>
                  </select>
                </div>

                <div class="general-review-ttl-wrp">
                  <label for="general-review-title">Title *</label> <br />
                  <input
                    v-model="reviewDetails.summary"
                    placeholder="Summary of your review"
                    required
                    id="general-review-title"
                    type="text"
                    maxlength="15"
                  />
                </div>

                <div class="overall-comment-wrp">
                  <label for="overall-comment">Review *</label> <br />
                  <textarea
                    v-model="reviewDetails.comment"
                    required
                    name="overall-comment"
                    id="overall-comment"
                    placeholder="Share your general thoughts about the product"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <PriButton
                  button-text="Submit Review"
                  button-id="submit-user-review-btn"
                />
              </form>
            </div>
          </div>
        </div>

        <div class="prw-container">
          <div class="prw-div">
            <template v-if="product_reviews && product_reviews.length > 0">
              <!-- format of each review -->
              <div
                v-for="review in product_reviews"
                class="product-review-container"
              >
                <div class="top-d-div">
                  <div class="rating-star">
                    <svg
                      v-for="star in review.rating"
                      :key="review.rating"
                      width="64px"
                      height="64px"
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
                          d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
                          stroke="#000000"
                          stroke-width="0.624"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p class="review-date">{{ review.created_at }}</p>
                </div>
                <div class="review-txt">
                  <p>{{ review.comment }}</p>
                </div>
                <div class="reviewer">
                  <!-- <p>Written by {{ review.user }}</p> -->
                </div>
              </div>
            </template>

            <template v-else>
              <p>Be the first one to review this product.</p>
            </template>
          </div>
        </div>
      </section>
    </template>

    <template v-else>
      <h2 style="padding: 1rem">
        Product not found.
        <NuxtLink to="/products/all/1" style="text-decoration: underline"
          >Continue Shopping</NuxtLink
        >
      </h2>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { useStore, axiosInstance } from "@/stores/state";

const createReviewForm = ref(null);

onMounted(() => {
  getProductDetails(); /**get info of the product to be shown  */
  showMoreDetails();
  imageHovered();
});

/**to be toggled to show/hide the write div */
const isWriteReviewDivVisible = ref(false);

const appStore = useStore(); /**use our store */

/**variable to hold the total items of the product that user wants to
 * add to their cart */
const cartProduct = ref({
  totalItems: 1,
});

const parameter = useRoute();
let productID = parameter.params.product; /**get id of product from url */

const productName = ref(""); /**product name to be shown as <title> tag */
const product: any = ref(await getProductDetails()); /**get product details */
const relatedProducts =
  ref(); /**variable to hold array of items in the same category as the shown product */

// if (product.value) {
//   const categoriesId = product.value.category.name;
//   await getRelatedProducts(
//     categoriesId
//   ); /**get products in the same category as the current one */
// }

const product_reviews = ref(
  await getProductReviews()
); /**get product reviews to be shown on page */

/**object to hold revies details entered by user */
const reviewDetails = ref({
  comment: "",
  summary: "",
  rating: "5" /**set default */,
});

/**get details of product to show on page */
async function getProductDetails() {
  const product_url = `/products/${productID}/`;

  try {
    const { data } = await axiosInstance(product_url);
    if (data.name) {
      productName.value = data.name;
      return data;
    }
    return null;
  } catch (error) {
    return null;
  }
}

/**this is here bcz we need to get the
 * product name first in order to show it in <title> tag
 */
useHead({
  title: `Skin Soko Products | ${productName.value}`,

  meta: [
    {
      name: "description",
      content: product.value.name,
    },
    {
      name: "twitter:title",
      content: `Skin Soko | ${product.value.name}`,
    },

    {
      name: "image",
      content: product.value.image,
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:description",
      content: `Skin Soko | ${product.value.name}`,
    },
    {
      property: "og:title",
      content: product.value.name,
    },
    {
      property: "og:image",
      content: product.value.image,
    },
    {
      property: "og:url",
      content: location.href,
    },
    {
      property: "og:site_name",
      content: `Skin Soko | ${product.value.name}`,
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:image:type",
      content: "image/png",
    },
    {
      property: "og:image:width",
      content: "800",
    },
    {
      property: "og:image:height",
      content: "800",
    },
    {
      property: "og:image:type",
      content: "image/png",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    {
      property: "og:site:name",
      content: "Skin Soko",
    },
    {
      property: "og:description",
      content: `Buy the ${product.value.name} | ${product.value.description}`,
    },
  ],
});

/**func called when user clicks on button to create review */
async function reviewToCreate() {
  await appStore.createProductReview(reviewDetails.value, productID);

  /**hide the write review form element */
  document
    .querySelector(".user-write-review-wrp")
    ?.classList.remove("showWriteReviewDiv");
  product_reviews.value =
    await getProductReviews(); /**get latest product reviews to be shown on page */
}

/** function to do some checks before calling
 * the func to add item to cart */
async function checkIfValid(product: any) {
  /**if user selects more items than available */
  if (cartProduct.value.totalItems > product.quantity_in_stock) {
    appStore.errorMessageToShowOnToast = `You can only select a maximum of ${product.quantity_in_stock} items`;
    appStore.showToast();
    return;
  }
  /**call func to add item to cart */
  appStore.addItemToCart(
    product.product_id,
    cartProduct.value.totalItems.toString()
  );
}

/**function to get reviews of a product */
async function getProductReviews() {
  const product_reviews_url = `/products/${productID}/reviews/`;

  try {
    const { data: productReviews } = await axiosInstance(product_reviews_url);
    return productReviews;
  } catch (error) {
    return null;
  }
}

/**toggle showing the div for user to write review */
function toggleWriteReviewDiv() {
  isWriteReviewDivVisible.value = !isWriteReviewDivVisible.value;
}

/**function to allow user to order product via whatsapp
 * The func will open whatsapp chat with a prefilled message
 */
function openWhatsappChat(product: any) {
  let productName = product.name;
  let productPrice = product.price;
  let productURL = location.href;
  let message = `
    Hey there, I'd like to order the following product:\n
*${productName}*
*Price*: Ksh ${appStore.formatNumber(productPrice)}
*Url*: ${productURL}\n
Cheers.`;

  let encodedMessage = encodeURIComponent(message);
  let whatsappLink = "https://wa.me/+254795494587?text=" + encodedMessage;

  const orderOnWhatsappBtn = document.getElementById(
    "chat-on-whatsapp-btn"
  ) as HTMLAnchorElement;
  if (orderOnWhatsappBtn) {
    orderOnWhatsappBtn.href = whatsappLink;
  } else {
    alert("order on whatsapp element not found. ");
  }
}

/**function to get products in the same category as the one shown to the user */
async function getRelatedProducts(categoryName: string) {
  try {
    const { data: response } = await axiosInstance(
      `/categories/${categoryName}/`
    );
    relatedProducts.value = response;
  } catch (error) {}
}

/**func to show more details about a product(ingredients, description) */
function showMoreDetails() {
  const faqsWrapper = document.querySelectorAll(".wc-p-div");

  faqsWrapper.forEach((item) => {
    item.addEventListener("click", () => {
      item.querySelector(".serv-p")?.classList.toggle("show-p");
      item.querySelector(".serv-arrow")?.classList.toggle("active-svg");
    });
  });
}

/**function to be called when the image is hovered */
function imageHovered() {
  const container = document.querySelector(
    ".image-container"
  ) as HTMLDivElement;
  const image = document.getElementById("aic-image") as HTMLImageElement;

  if (container && image) {
    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
      image.style.transform = "scale(2)";
    });

    container.addEventListener("mouseleave", () => {
      image.style.transformOrigin = "center center";
      image.style.transform = "scale(1)";
    });
  } else {
    alert("on imageHovered function, container and image not found");
  }
}
</script>

<style lang="scss" scoped>
// .active-product{
//     background-color: gainsboro;
// }

.serv-arrow {
  /**the plus icon/svg */
  display: inline-block;
  position: relative;
  width: 1.3rem;
  height: 1.2rem;
  span {
    position: absolute;
    background-color: #333;
  }
  .vertical {
    width: 0.1rem;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.2s ease-in;
  }

  .horizontal {
    height: 0.1rem;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}

.active-svg {
  /**class to be toggled to active icon/svg */
  .vertical {
    opacity: 0;
    height: 0;
  }
}

.pr-outer-root-div {
  max-width: 1300px;
  position: relative;
  margin: 1rem auto;
  margin-top: 8rem;
}
.cart-section-wrapper {
  .cart-section {
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: 80% 20%;

    .cart-container {
      display: grid;
      grid-template-columns: 60% 40%;
      align-items: center;
      margin-right: 2rem;
      .image-container {
        overflow: hidden;
        height: 50rem;
        margin-right: 3rem;
        img {
          width: 98%;
          object-fit: contain;
          height: 100%;
        }

        span {
          text-align: center;
          font-weight: bold;
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-decoration-color: var(--bgColor);
          font-size: 1.5rem;
          opacity: 0.9;
          margin: 1rem 0;
        }
      }

      .image-container::before {
        content: "";
        display: block;
      }

      .product-details-wrp-sticky {
        position: sticky;
        top: 10rem;
      }

      .product-details {
        .product-title {
          font-size: 2.1rem;
          // opacity: .9;
          color: var(--webPriColor);
          font-weight: 400;
        }

        .product-dets-overall-wrp {
          margin: 2rem 0;
        }
        .wc-p-div {
          border-bottom: 0.1px solid rgba(0, 0, 0, 0.4);
          padding: 1rem 0;
          // margin: 1rem 0;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;

          .svgp {
            display: flex;
            margin: 1rem 0;
            align-items: center;
            justify-content: space-between;

            // .services-h {
            //   border: 1px solid;
            // }
            svg {
              margin: 0 1rem;
              width: 1.5rem;
              transition: all 0.2s ease-in-out;
            }
          }
          .serv-p {
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.4s ease-in;
            will-change: max-height;
            p {
              font-size: 1.2rem;
              line-height: 1.7;
              opacity: 0.9;
              font-weight: 400;
            }
          }

          .show-p {
            max-height: 3000px;
          }
        }

        .product-price {
          font-size: 1.7rem;
          font-weight: 600;
          margin-bottom: 2rem;
          margin: 1rem 0;
          opacity: 0.9;
          color: var(--webPriColor);
        }

        .btns-wrapper {
          margin: 0.4rem 0;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          background-color: transparent;
          border: 1px solid gainsboro;
          font-weight: 400;
          height: 4rem;
          div {
            height: 100%;
            height: 4rem;
            cursor: pointer;
            background-color: transparent;
            display: grid;
            place-items: center;
          }
        }

        .order-onw-wrp {
          margin: 1rem 0;
          border-radius: 0.3rem;
          a {
            width: 100%;

            div {
              border-radius: 0.2rem;
              padding: 1rem 0;
              background-color: #25d366;
              display: flex;
              justify-content: center;
              align-items: center;
              // border: 2px solid blue;
              font-size: 1.3rem;
              font-weight: 400;
              text-transform: uppercase;
              color: white;
              svg {
                color: white;
                fill: white;
                stroke: white;
                height: 2rem;
                width: 2rem;
                margin-right: 1rem;
              }
            }
            img {
              width: 100%;
              height: 4rem;
              object-fit: contain;
            }
          }
          img {
            width: 100%;
            height: 4rem;
            object-fit: contain;
          }
        }

        .add,
        .subtract {
          all: unset;
          font-weight: bolder;
          font-size: 1.8rem;
          margin: 0 1rem;
          text-align: center;
        }
        input {
          // padding: .5rem;
          margin-bottom: 2rem;
          color: black;
          border: 1px solid gainsboro;
          font-weight: bolder;
          background-color: white;
          // text-align: center;
          border: none;
          text-align: center;
          // height: 80%;
          padding-top: 1rem;
          // width: 5rem;

          /* Chrome, Safari, Edge, Opera */
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          &:focus {
            outline: none;
          }
        }

        .out-of-stock-el {
          text-align: center;
          p {
            background-color: var(--webPriColor);
            text-transform: uppercase;
            padding: 1rem;
            color: white;
          }
        }
      }
    }

    .related-products-wrapper {
      border-left: 1px solid gainsboro;
      padding: 0 0.5rem;
      .rp-ttl {
        font-size: 1.5rem;
        font-weight: 400;
        opacity: 0.9;
        margin: 1rem 0;
      }
      .rp-container {
        .rp-content {
          .rp-div {
            display: flex;
            margin: 1rem 0;
            align-items: center;
            border-top: 1px solid gainsboro;
            // border: 1px solid;
            padding: 0.3rem;
            div {
              img {
                width: 9rem;
                object-fit: contain;
                height: 10rem;
              }
              p {
                padding: 0.4rem 0;
                font-size: 1.3rem;
              }
              .rp-name {
                color: var(--webPriColor);
              }
              .rp-price {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
}

.product-reviews-wrp {
  padding: 2rem 0;
  .review-ttl-wrp {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    border-bottom: 1px solid gainsboro;
    .review-ttl {
      font-size: 2.3rem;
      font-weight: 400;
    }

    p {
      cursor: pointer;
      font-size: 1.3rem;
      text-decoration: underline;
      color: black;
    }
  }

  .user-write-review-wrp {
    opacity: 0;
    display: none;
    visibility: hidden;
    transition: all 0.1s ease-in;
    .uwr-div {
      display: grid;
      grid-template-columns: 55% 45%;
      .uwr-dets {
        font-size: 1.3rem;
        font-weight: 400;
        padding: 1rem;
        form {
          font-size: 1.3rem;
          font-weight: 400;
          .product-rating-grp {
            margin-bottom: 2rem;

            select {
              padding: 1rem;
              width: 20rem;
              width: 100%;
              background-color: white;
              color: black;
            }
            option {
              font-size: 1.5rem;
            }
            input {
              opacity: 0;
              outline: 0;
              position: absolute;
              z-index: 0;

            }
          }

          input,
          textarea {
            background-color: transparent;
            border: 1px solid black;
            padding: 1rem;
            width: 100%;
            color: black;
            font-family: inherit;

            &::placeholder{
              font-size: 1.3rem;
            }
            &:focus {
              outline: none;
            }
          }

          label {
            padding: 1rem 0;
          }
          // textarea{
          //     margin: .4rem 0;
          //     padding: 1rem;
          //     width: 100%;
          //     color: black;
          //     background-color: transparent;
          //     &:focus{
          //         outline: none;
          //         border: 1px solid blue;
          //     }

          // }
        }
      }
    }
  }

  .prw-container {
    display: grid;
    grid-template-columns: 55% 45%;
    .prw-div {
      padding: 1rem;
      .product-review-container {
        margin: 2rem 0;
        opacity: 0.8;
        border-bottom: 1px solid gainsboro;
        padding: 1rem 0;
        .top-d-div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .rating {
            font-size: 2rem;
            font-weight: 500;
            font-size: 5rem;
          }
          .rating-star {
            svg {
              fill: black;
              width: 2rem;
              height: 2rem;
              font-size: 0.4rem;
            }
          }
          .review-date {
            font-size: 1.2rem;
          }
        }

        .review-txt {
          p {
            //font-size: 1.5rem;
            font-weight: 400;
            margin: 1rem 0;
            line-height: 143%;
          }
        }

        .reviewer {
          p {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}

/**toggle showing the div allowing user to write review */

.user-write-review-wrp.showWriteReviewDiv {
  opacity: 1;
  display: block;
  visibility: visible;
}

/**moving the related products from right to left on small screens */
@keyframes animate {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@media screen and (max-width: 1000px) {
  .cart-section-wrapper .cart-section {
    grid-template-columns: 100%;
    grid-gap: 2rem;

    .related-products-wrapper {
      margin: 3rem 0;
    }

    .related-products-wrapper .rp-container .rp-content {
      display: flex;
      overflow: hidden;

      .rp-div {
        width: 15rem;
        flex-direction: column;
        text-align: center;
        animation: animate 5s alternate linear infinite;
        // border: none;
      }
      &:hover {
        animation-play-state: paused;
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .cart-section-wrapper .cart-section .cart-container {
    // grid-template-columns: 1fr;
    margin-right: unset;
    display: flex;
    flex-direction: column;

    .image-container {
      height: 40rem;
      width: 100%;

      margin-right: unset;
      img {
        object-fit: contain;
        width: 100%;
      }
    }

    .product-details {
      .product-title {
        font-size: 1.8rem;
      }
      .product-description {
        font-size: 1.4rem;
      }
    }
    .image-container {
      margin-bottom: 2rem;
    }
  }

  .product-reviews-wrp {
    .review-ttl-wrp {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .user-write-review-wrp .uwr-div {
      grid-template-columns: 1fr;
    }
    .prw-container {
      grid-template-columns: 1fr;
    }
  }
}
</style>
