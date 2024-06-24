<template>
  <div>
    <main class="main">
      <section class="main-container">
        <div class="main-content">
          <div class="image-container">
            <div class="text-container">
              <div id="div1"></div>
              <div id="div2"></div>
              <div id="div3">
                <div class="div3-wrp">
                  <div class="div3-content">
                    <h2>Get Your Dream Skin</h2>
                    <p>
                      Shop for beauty products that deliver that first and
                      lasting impression.
                    </p>
                    <NuxtLink to="/products/all/1" class="browse-categories">
                      <button class="browse-products-btn">
                        browse products
                      </button>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="tsection">
        <div class="ts-container">
          <div class="ts-content">
            <div class="ts-header">
              <h1 class="all-section-ttl">Save Big</h1>
            </div>
            <div class="ts-p">
              <template v-if="products">
                <div
                  v-for="product in discounted_products"
                  :key="product.product_id"
                  class="items-content"
                >
                  <ProductItem :item="product" />
                </div>
              </template>
            </div>
          </div>
        </div>
      </section>

      <section class="latest-products-wp">
        <div class="lp-wrp">
          <div class="lp-container">
            <h1 class="all-section-ttl"></h1>

            <div class="lp-grid-wrp">
              <div class="lp-grid">
                <div>
                  <h1 class="prod-name">
                    Yuja Niacin Anti Blemish Starter Kit
                  </h1>
                  <p class="prod-price">KSh 3,000</p>
                  <NuxtLink to="/products/yuja-niacin-anti-blemish-starter-kit">
                    <button>Buy Now</button>
                  </NuxtLink>
                </div>
              </div>

              <div class="lp-grid">
                <div>
                  <h1 class="prod-name">Super Matcha Pore Care Starter Kit</h1>
                  <p class="prod-price">KSh 2,800</p>
                  <NuxtLink to="/products/super-matcha-pore-care-starter-kit">
                    <button>Buy Now</button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="categories-section">
        <div class="categories-container">
          <div class="categories-content">
            <div class="ts-header">
              <h1 class="all-section-ttl">Shop By Category</h1>
            </div>
            <div class="categories-p">
              <div class="category-items-content">
                <NuxtLink to="/products/all/1?filter_main_category=SKINCARE">
                  <img
                    loading="lazy"
                    src="https://www.greenpeople.co.uk/cdn/shop/files/B-Range-Collection.jpg?height=454&v=1707211541&width=604"
                    alt="image of skin products"
                  />
                </NuxtLink>
                <p class="category-ttl">SKIN CARE</p>
                <p>
                  From cleansers to moisturizers, find everything you need to
                  build a skincare routine that leaves your complexion glowing
                  and refreshed.
                </p>
              </div>

              <div class="category-items-content">
                <NuxtLink to="/products/all/1?filter_main_category=SKIN+TYPE">
                  <img
                    loading="lazy"
                    src="https://www.greenpeople.co.uk/cdn/shop/files/sunprotect-l.jpg?height=454&v=1697122312&width=604"
                    alt="image of beauty products"
                  />
                </NuxtLink>
                <p class="category-ttl">Skin type</p>
                <p>
                  Discover products designed specifically for your skin type,
                  ensuring you get the best care whether you're oily, dry,
                  combination, or sensitive.
                </p>
              </div>

              <div class="category-items-content">
                <NuxtLink to="/products/all/1?filter_main_category=HAIR+CARE">
                  <img
                    loading="lazy"
                    src="https://sokoglam.com/cdn/shop/files/New-Product_-Neogen-A-Clear-Soothing-Essence-Pad_PDP_1_low_600x.jpg?v=1613711534"
                    alt="image of skin products"
                  />
                </NuxtLink>
                <p class="category-ttl">hair care</p>
                <p>
                  Explore a range of hair care products that keep your hair
                  healthy, shiny, and strong, no matter your hair type or
                  concern.
                </p>
              </div>

              <div class="category-items-content">
                <NuxtLink
                  to="/products/all/1?filter_main_category=SKIN+CONCERNS"
                >
                  <img
                    loading="lazy"
                    src="https://www.greenpeople.co.uk/cdn/shop/files/makeup-l.jpg?height=454&v=1697122312&width=604"
                    alt="image of skin products"
                  />
                </NuxtLink>
                <p class="category-ttl">skin concern</p>
                <p>
                  Address your specific skin concerns with targeted treatments
                  for acne, aging, hyperpigmentation, redness, and more.
                </p>
              </div>

              <div class="category-items-content">
                <NuxtLink to="/products/all/1?filter_main_category=SCENTFREE">
                  <img
                    loading="lazy"
                    src="https://www.greenpeople.co.uk/cdn/shop/files/H-Range-Collection.jpg?height=454&v=1707211600&width=604"
                    alt="image of skin products"
                  />
                </NuxtLink>
                <p class="category-ttl">SCENT-FREE</p>
                <p>
                  Perfect for sensitive skin or those who prefer no added
                  scents, these fragrance-free products provide effective care
                  without any irritation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="tsection">
        <div class="ts-container">
          <div class="ts-content">
            <div class="ts-header">
              <h1 class="all-section-ttl">Best Sellers</h1>
            </div>
            <div class="ts-p">
              <template v-if="products">
                <div
                  v-for="product in best_selling_products"
                  :key="product.product_id"
                  class="items-content"
                >
                  <ProductItem :item="product" />
                </div>
              </template>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const appStore = useStore(); /**using our store */

const products = ref(await appStore.getAllProducts(`/products/`));

/**get discounted products to show on home page */
const discounted_products = products.value.query_results.filter(
  (item) => item.discount > 0
);
/**get discounted products to show on home page */
const best_selling_products = products.value.query_results.filter(
  (item) => item.best_seller
);
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  margin-top: 10rem;
}

.all-section-ttl {
  opacity: 0.9;
  margin-top: 3rem;
  text-align: center;
  font-weight: 400;
  font-size: 1.9rem;
}
.main-container {
  height: 50rem;
  width: 100%;
  .main-content {
    height: 100%;
    width: 100%;
    .image-container {
      height: 100%;
      overflow: hidden;
      width: 100%;

      .text-container {
        padding: 0 2rem;
        height: 100%;
        max-width: var(--maxWidth);
        margin: 0 auto;

        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
        gap: 0;
        width: 100%;
        height: 100%;
      }
      #div1 {
        grid-area: 1 / 1 / 3 / 2;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.2)
          ),
          url("https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
      #div2 {
        grid-area: 2/2/3/3;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.2)
          ),
          url("https://assets.beautyhub.co.ke/wp-content/uploads/2023/10/31132020/the-best-vitamin-c-serums-for-sensitive-skin.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
      #div3 {
        grid-area: 1/2/2/3;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url("https://assets.beautyhub.co.ke/wp-content/uploads/2023/10/31191453/best-vitamin-c-serums-in-kenya.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        .div3-wrp {
          display: grid;
          place-items: center;
          height: 100%;
          .div3-content {
            padding: 0 1rem;
            color: white;
            h2 {
              font-weight: 400;
              font-size: 3.3rem;
            }
            p {
              padding: 2rem 0;
            }
            a {
              color: rgb(0, 0, 0);
              font-size: 1.3rem;
              font-weight: 500;
              text-decoration: none;

              button {
                all: unset;
                padding: 1rem 2.4rem;
                background-color: white;
                color: black;
                font-weight: 400;
                text-transform: capitalize;
              }
            }
          }
        }
      }
    }
  }
}

.tsection {
  // max-width: 940px;
  width: 100%;
  margin: 2rem auto;
  margin-bottom: 1rem;
  .ts-container {
    height: 100%;
    max-width: 1000px;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 2rem 0;

    .ts-content {
      padding: 1rem 0;

      .ts-p {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
        margin: 1rem;
        padding: 0.5rem;
        grid-gap: .8rem;
        place-items: center;
        .items-content {
          // padding: 2rem 0rem;
          max-width: 20rem;
          // height: auto;
          // border: 0.1px solid gainsboro;
          text-align: center;
          position: relative;

          // margin-bottom: 3rem;
          cursor: pointer;

         
          p {
            margin: 0.4rem 0;
            opacity: 0.9;
          }
        }
      }
    }
  }
}

.latest-products-wp {
  padding: 6rem 2rem;
  background-color: rgba(195, 207, 231, 0.1);
  .lp-wrp {
    max-width: 1100px;
    border-radius: 0.5rem;
    margin: 3rem auto;

    .lp-container {
      .lp-grid-wrp {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 2rem 0;
        grid-gap: 2rem;
      }
      .lp-grid {
        border-radius: 0.2rem;
        height: 30rem;
        padding: 2rem;
        color: white;
        display: flex;
        align-items: center;
        .prod-name {
          font-weight: 400;
          font-size: 1.8rem;
          // padding: 1rem 0;
        }
        p {
          line-height: 140%;
          font-size: 1.2rem;
          // padding: .3rem 0;
        }
        .prod-price {
          font-weight: 400;
          padding: 1rem 0;
          font-size: 1.2rem;
        }

        a {
          color: rgb(0, 0, 0);
          font-size: 1.3rem;
          font-weight: 500;
          text-decoration: none;

          button {
            all: unset;
            padding: 1rem 2.4rem;
            background-color: white;
            color: black;
            font-weight: 400;
            text-transform: capitalize;
          }
        }
        &:nth-child(1) {
          background-image: url("https://kbeautykenya.com/wp-content/uploads/2024/04/SOME-BY-MI-Yuja-Niacin-Anti-Blemish-Starter-Kit.webp");
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.2)
            ),
            url("https://kbeautykenya.com/wp-content/uploads/2024/04/SOME-BY-MI-Yuja-Niacin-Anti-Blemish-Starter-Kit.webp");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
        &:nth-child(2) {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.4)
            ),
            url("https://kbeautykenya.com/wp-content/uploads/2023/10/SOME-BY-MI-Super-Matcha-Pore-Care-Starter-Kit.jpg");
          // background-image: url("https://kbeautykenya.com/wp-content/uploads/2023/10/SOME-BY-MI-Super-Matcha-Pore-Care-Starter-Kit-300x300.jpg");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
    }
  }
}

.categories-section {
  width: 100%;
  margin: 2rem auto;
  .categories-container {
    // height: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 3rem 1rem;
    .categories-content {
      .categories-p {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        margin: 1rem;

        padding: 0.5rem;

        .category-items-content {
          width: 30rem;
          height: auto;
          text-align: center;
          margin: 2rem 0;
          img {
            height: 90%;
            height: 27rem;
            width: 100%;
            object-fit: cover;
          }
          .category-ttl {
            text-transform: uppercase;
          }
          p {
            font-size: 1.1rem;
            line-height: 190%;
            opacity: 0.9;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 980px) {
  .categories-section .categories-container .categories-content .categories-p {
    margin: unset;

    .category-items-content {
      width: 25rem;
    }
  }
}

@media screen and (max-width: 900px) {
  .main-container .main-content .image-container {
    #div1 {
      grid-area: 1 / 1 / 2 / 3;
    }
    #div2 {
      grid-area: 2/2/3/3;
    }
    #div3 {
      grid-area: 2/1/3/2;

      .div3-wrp .div3-content {
        h2 {
          font-size: 2.8rem;
        }
        p {
          font-size: 1.3rem;
        }
        a {
          font-size: 1.2rem;
        }
      }
    }
  }

  .latest-products-wp .lp-wrp .lp-container {
    .lp-grid {
      grid-template-columns: 1fr;

    }
  }
}

@media screen and (max-width: 550px) {
  .main .main-container {
    height: 70vh;
    .main-content .image-container .text-container .t-content {
      h1 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }

  .latest-products-wp .lp-wrp .lp-container .lp-grid-wrp {
    grid-template-columns: 1fr;
  }

  .tsection .ts-container {
    padding: 2rem 0;
    .ts-content .ts-p {
      grid-template-columns: 1fr 1fr;
      padding: 0.5rem 0;

      .items-content img {
        height: 17rem;
        width: 17rem;
      }
    }
  }

  .categories-section .categories-container .categories-content .categories-p {
    .category-items-content {
      width: 20rem;
      width: 95vw;
    }
  }
}
</style>
