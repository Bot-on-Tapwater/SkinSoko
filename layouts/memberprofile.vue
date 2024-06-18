<!-- layout for user dashboard -->
<template>
  <div class="nav-root-div">
    <template v-if="pageMounted">
      <section>
        <!-- DIV HOLDING THE NAVIGATION TABS -->

        <div class="navbar-wrp">
          <div class="navbar-content">
            <div class="ham-btn">
              <!-- @click="toggleNav()" -->
              <svg
                @click="showSideBar()"
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
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#000000"
                    stroke-width="0.504"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>

            <div class="addn-dets"></div>
          </div>
        </div>

        <div class="mobile-nav-overlay" @click="closeMobileNav()"></div>

        <div class="app-root-div">
          <div class="app-container">
            <div class="app-container-content">
              <!-- LOGO IMAGE -->
              <!-- THE ICONS ALLOWING USER TO NAVIGATE -->
              <div class="tabs-container">
                <!-- <div class="image-div"> -->
                <!-- <PageLogo/> -->
                <NuxtLink to="/products/all/1" class="back-to-shop-btn">
                  <svg
                    fill="#000000"
                    height="20px"
                    width="54px"
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
                  <span>Shop</span>
                </NuxtLink>
                <!-- </div> -->

                <ul>
                  <li>
                    <NuxtLink class="router-link-class" to="/account/profile">
                      <div class="nav-tabs">
                        <p class="tab-details-text">Profile</p>
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="router-link-class" to="/account/orders">
                      <div class="nav-tabs">
                        <p class="tab-details-text">Orders</p>
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="router-link-class" to="/account/reviews">
                      <div class="nav-tabs">
                        <p class="tab-details-text">Reviews</p>
                      </div>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink
                      class="router-link-class"
                      to="/account/shipping-address"
                    >
                      <div class="nav-tabs">
                        <p class="tab-details-text">Shipping Address</p>
                      </div>
                    </NuxtLink>
                  </li>

                  <li>
                    <!-- <div class="router-link-class router-logout-user"> -->
                    <a href="mailto:skinsoko@gmail.com">
                      <div class="nav-tabs">
                        <p class="tab-details-text">Contact Support</p>
                      </div>
                    </a>
                    <!-- </div> -->
                  </li>

                  <li>
                    <NuxtLink
                      @click="appStore.logoutUser"
                      class="router-link-class router-logout-user"
                    >
                      <div class="nav-tabs">
                        <p class="tab-details-text">Sign Out</p>
                      </div>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- page loading spinner -->
      <PageLoading />

      <!-- toast component to show errors on ui -->
      <Toast />

      <slot />
    </template>
  </div>
</template>

<script setup lang="ts">
const pageMounted = ref(false);
onMounted(async () => {
  pageMounted.value = true;
  await nextTick(); /**wait for DOM updates to finish */
  menuLinksClicked();
});

const appStore = useStore();

/**function to close mobile nav when one of the links is clicked */
function menuLinksClicked() {
  document.querySelectorAll(".router-link-class").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });
}
/**func to close nav on mobile */

function closeMobileNav() {
  const sideNav = document.querySelector(".app-root-div");
  const overlay = document.querySelector(".mobile-nav-overlay");

  sideNav
    ? sideNav.classList.remove("showHidden")
    : alert("sideNav element not found");

  //   sideNav.classList.remove("showHidden");
  overlay.classList.remove("showOverlayOnMobile");
}

function showSideBar() {
  const sideNav = document.querySelector(".app-root-div");
  const overlay = document.querySelector(".mobile-nav-overlay");

  sideNav
    ? sideNav.classList.add("showHidden")
    : alert("sideNav element not found");
  //   sideNav.classList.add("showHidden");
  console.log(sideNav);
  overlay.classList.add("showOverlayOnMobile");
}

/**func to open nav on mobile when hamburger button clicked */
function toggleNav() {
  const sideNav = document.querySelector(".app-root-div");
  const overlay = document.querySelector(".mobile-nav-overlay");

  //   sideNav.classList.add("showHidden");
  //   overlay.classList.add("showOverlayOnMobile");

  //   if (sideNav && overlay) {
  //     if (sideNav.classList.contains("navOpen")) {
  //       sideNav.classList.remove("navOpen");
  //       sideNav.classList.add("navClose");
  //       overlay.classList.remove("showOverlayOnMobile");
  //     } else {
  //       sideNav.classList.remove("navClose");
  //       sideNav.classList.add("navOpen");
  //       overlay.classList.add("showOverlayOnMobile");
  //     }
  //   } else {
  //     alert("sideNav and ovelay missing in memberprofile.vue");
  //   }

  //   overlay?.addEventListener("click", closeMobileNav);
}
</script>

<style lang="scss" scoped>
/**navbar of the dashboard */
.navbar-wrp {
  background-color: #f8fafc;
  position: fixed;
  z-index: 43;
  height: 6rem;
  width: 100%;
  border-bottom: 1px solid gainsboro;
  top: 0;
  left: 0;
  .navbar-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

    .ham-btn {
      svg {
        cursor: pointer;
        color: var(--webPriColor);
      }
    }
  }
}

/**class to be toggled to show user notifications */

.navbar-wrp .navbar-content .user-notifications.showNotifications {
  opacity: 1;
  visibility: visible;
}

/**overlay to be shown on mobile when user
opens menu */
.mobile-nav-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
}

/**class to show overlay on mobile */
.mobile-nav-overlay.showOverlayOnMobile {
  display: block;
}

.app-root-div {
  //   position: fixed;
  position: absolute;
  height: 100vh;
  width: 25rem;
  left: 0;
  font-size: 1.4rem;
  //   overflow-y: scroll;
  z-index: 39;
  bottom: 0;
  background-color: white;
  white-space: nowrap;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 20rem;
  box-shadow: var(--dashboardBoxShadow);
  transition: all 0.3s ease-in;

  /** */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  // border: 2px solid red;
  overflow-y: scroll;
  height: 100%;
  transition: all 0.2s ease-in;

  .app-container {
    // padding-left: 3rem;
    height: 100%;
    padding-left: 1rem;
    width: 100%;
    place-items: center;
    display: flex;

    .app-container-content {
      //   text-align: center;
      // height: 90%;
      //   border: 2px solid blue;
      width: 100%;
      padding: 0 0.5rem;

      .tabs-container {
        // border: 3px solid green;
        // height: 85%;

        .back-to-shop-btn {
          display: flex;
          // margin: 1.6rem 0;
          margin: 2rem 0;
          align-items: center;
          font-size: 1.5rem;

          svg {
            width: 2rem;
          }
        }

        h4 {
          color: black;
        }

        .image-div {
          border: 2px solid;
          margin-bottom: 2rem;
        }

        li {
          border: 2px solid;
        }
        .router-logout-user {
          cursor: pointer;
          color: black;
        }
        .nav-tabs {
          margin: 0.5rem 0;
          //   border: 1px solid green;
          border-bottom: 0.1px solid gainsboro;
          text-align: left;
          transition: all 0.1s ease-in;

          &:hover {
            background-color: rgba(100, 149, 237, 0.2);
          }

          svg {
            opacity: 0.6;
          }
        }
        .router-link-class {
          //REMOVING THE DEFAULT TEXT DECORATION FROM THE ROUTER LINK ELEMENTS
          text-decoration: none;

          &.router-link-exact-active {
            //ACTIVE ROUTER LINK
            opacity: 1;

            div {
              background-color: gainsboro;
              // border: 1px solid;
              background-color: rgba(100, 149, 237, 0.2);
            }
          }
        }
      }
      div {
        // border: 1px solid;
        padding: 0.5rem;
      }
      //THE TEXTS UNDER THE ICONS
      .tab-details-text {
        text-transform: capitalize;
        // padding: 0 2rem;
        text-decoration: none;
      }
    }
  }
}

/**class to be toggled to show sidenav */
.showHidden {
  border: 8px solid red;
  z-index: 434;
  right: 0;
  left: 0;
  bottom: 0;
  max-width: unset;
  background-color: white;
  width: 50vw;
  visibility: visible;
  opacity: 1;
}

.navOpen {
  // transform: translateX(0%);
  clip-path: inset(
    0 0 0 0
  ) !important; /**used ! to override style in the media query */
  transition: all 0.3s ease-in-out;

  // width: 30rem;
}

/**class to be toggled to hide sidenav */
.navClose {
  clip-path: inset(0 100% 0 0);
  transition: all 0.2s ease-in;
}

@media screen and (max-width: 1000px) {
  .app-root-div {
    // transform: translateX(-49%);
    // clip-path: inset(0 100% 0 0);
    // opacity: 0.5;
    // visibility: hidden;
    // border: 8px solid red;
  }
}
</style>
