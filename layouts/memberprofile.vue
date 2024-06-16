<!-- layout for user dashboard -->
<template>
    <div class="nav-root-div">
        <template v-if="pageMounted" >
        <section>
            <!-- DIV HOLDING THE NAVIGATION TABS -->

            <div class="navbar-wrp">
                <div class="navbar-content">
                    <div class="ham-btn">
                        <svg @click="toggleNav()" stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                    </div>

                    <div class="addn-dets">
                        <div class="chosen-lang">
                            <p>English</p>
                        </div>
                        <div @click="toggleNotificationsVisibility()" class="notification-wrp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        </div>
                    </div>

                    <div class="user-notifications">
                        <div class="user-nt-wrp">
                            <div class="user-nt-header">
                                <h3 class="not-ttl">Notifications</h3>
                                <p>Clear All</p>
                            </div>
                            <div class="notifications">
                                <div>
                                    <p>There are no notifications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mobile-nav-overlay">

            </div>

            <div class="app-root-div">
                <div class="app-container">
                    <div class="app-container-content">
                        <!-- LOGO IMAGE -->
                        <!-- THE ICONS ALLOWING USER TO NAVIGATE -->
                        <div class="tabs-container">
                            <!-- <div class="image-div"> -->
                                <!-- <PageLogo/> -->
                                <NuxtLink to="/products/all/1" class="back-to-shop-btn">
                                    <svg fill="#000000" height="20px" width="54px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.006 512.006" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z"></path> </g> </g> </g></svg>
                                    <span>Continue Shopping</span>
                                </NuxtLink>
                            <!-- </div> -->

                            <ul>
                                <li>
                                    <NuxtLink class="router-link-class" to="/account/profile">
                                        <div class="playlists-div nav-tabs">
                                            <div class="svg-wrp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            </div>
                                            <p class="tab-details-text">Profile settings</p>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink class="router-link-class" to="/account/orders">
                                        <div class="top-tracks-div nav-tabs">
                                           <div class="svg-wrp">
                                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart">
                                                   <circle cx="9" cy="21" r="1"></circle>
                                                   <circle cx="20" cy="21" r="1"></circle>
                                                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                                </svg>
                                            </div>
                                            <p class="tab-details-text">Orders</p>
            
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink class="router-link-class" to="/account/reviews">
            
                                        <div class="top-artists-div nav-tabs">
                                            <div class="svg-wrp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
                                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                                </svg>
                                            </div>
                                            <p class="tab-details-text">Reviews</p>
                                        </div>
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink class="router-link-class" to="/account/shipping-address">
                                        <div class="recents-div nav-tabs">
                                           <div class="svg-wrp">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                            </div>
                                               <p class="tab-details-text">Shipping Address</p>
                                        </div>
                                    </NuxtLink>
                                </li>

                                <li>
                                    <div class="router-link-class router-logout-user">
                                        <a href="mailto:skinsoko@gmail.com">
                                        <div class="playlists-div nav-tabs">
                                            <div class="svg-wrp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                            </div>
                                                <p class="tab-details-text">Contact Support</p>
                                        </div>
                                        </a>
                                    </div>
                                </li>
                                
                                <li>
                                    <div @click="appStore.logoutUser" class="router-link-class router-logout-user">
                                        <div class="playlists-div nav-tabs">
                                            <div class="svg-wrp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                            </div>
                                                <p class="tab-details-text">Sign Out</p>
                                            </div>
                                    </div>
                                </li>
                                

                            </ul>

                        </div>

                    </div>
                </div>

            </div>

        </section>

        <!-- page loading spinner -->
        <PageLoading/>

        <!-- toast component to show errors on ui -->
        <Toast/>

        <slot/>
        </template>
    </div>
</template>

<script setup lang="ts">


const pageMounted = ref(false)
onMounted(async ()=>{
    pageMounted.value = true
    await nextTick() /**wait for DOM updates to finish */
    menuLinksClicked()
})

const appStore = useStore()

/**function to close mobile nav when one of the links is clicked */
function menuLinksClicked() {
    document.querySelectorAll(".router-link-class").forEach((link)=>{
        link.addEventListener("click", closeMobileNav)
    })
}
/**func to close nav on mobile */

function closeMobileNav() {
    const sideNav = document.querySelector(".app-root-div")
    const overlay = document.querySelector(".mobile-nav-overlay")

    if (sideNav && overlay) {
        if (sideNav.classList.contains("navOpen")) {
            sideNav.classList.remove("navOpen")
            sideNav.classList.add("navClose")
            overlay.classList.remove("showOverlayOnMobile")
        }
    } else {
        alert("sideNav and ovelay missing in memberprofile.vue")
    }
}

/**func to open nav on mobile when hamburger button clicked */
function toggleNav() {
    const sideNav = document.querySelector(".app-root-div")
    const overlay = document.querySelector(".mobile-nav-overlay")

    if (sideNav && overlay) {
        if (sideNav.classList.contains("navOpen")) {
            sideNav.classList.remove("navOpen")
            sideNav.classList.add("navClose")
            overlay.classList.remove("showOverlayOnMobile")
        } else {
            sideNav.classList.remove("navClose")
            sideNav.classList.add("navOpen")
            overlay.classList.add("showOverlayOnMobile")
        }

    } else {
        alert("sideNav and ovelay missing in memberprofile.vue")
    }

    overlay?.addEventListener("click", closeMobileNav)
}

/**function to show notifcations details */
function toggleNotificationsVisibility() {
    let notificationsDiv = document.querySelector(".user-notifications")
    if (notificationsDiv) {
        if (notificationsDiv.classList.contains("showNotifications")) {
            notificationsDiv.classList.remove("showNotifications")
        } else {
            notificationsDiv.classList.add("showNotifications")
        }
    } else {
        alert("notification div not found")
    }
}

</script>

<style lang="scss" scoped>


/**navbar of the dashboard */
.navbar-wrp{
    background-color: #F8FAFC;
    position: fixed;
    z-index: 43;
    height: 6rem;
    width: 100%;
    border-bottom: 1px solid gainsboro;
    top: 0;
    left: 0;
    .navbar-content{
        // border: 2px solid red;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;

        .ham-btn{
            svg{
                cursor: pointer;
                color: var(--webPriColor);
            }
        }

        .addn-dets{
            display: flex;
            align-items: center;
            padding: 0 1rem;
            display: grid;
            grid-gap: 2rem;
            grid-template-columns: 1fr 1fr;
            opacity: .9;
            .chosen-lang{
                font-weight: 500;
                cursor: pointer;
                opacity: .8;
            }
            .notification-wrp{
                cursor: pointer;
                svg{
                    color: var(--webPriColor);
                }   
            }
        }

        /**style for the div showing user notifications */

        .user-notifications{
            position: absolute;
            top: 6rem;
            // border: 2px solid;
            background-color: white;
            z-index: 84;
            right: 5rem;
            box-shadow: var(--dashboardBoxShadow);
            width: 25rem;
            height: auto;
            padding: 1rem;
            padding-bottom: 2rem;
            opacity: 0;
            visibility: hidden;
            transition: all .2s ease-in;
            .user-nt-wrp{
                .user-nt-header{
                    padding: 2rem 0;
                    border-bottom: 1px solid gainsboro;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-weight: 400;
                    .not-ttl{
                        font-weight: 400;
                        font-size: 1.5rem;
                    }
                    p{
                        font-size: 1.3rem;
                        opacity: .7;
                        cursor: pointer;
                    }
                }
                
                .notifications{
                    p{
                        font-size: 1.3rem;
                        opacity: .7;
                    }
                    div{
                        padding: 1rem 0
                    }
                    
                }
            }
        }

        
    }
}


/**class to be toggled to show user notifications */

.navbar-wrp .navbar-content .user-notifications.showNotifications{
    opacity: 1;
    visibility: visible;
}


/**overlay to be shown on mobile when user
opens menu */
.mobile-nav-overlay{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    display: none;
}


/**class to show overlay on mobile */
.mobile-nav-overlay.showOverlayOnMobile{
    display: block;
}

.app-root-div{
    position: fixed;
    height: 100vh;
    width: 25rem;
    left: 0;
    font-size: 1.4rem;
    overflow-y: scroll;
    z-index: 3239;
    bottom: 0;
    background-color: white;
    white-space: nowrap;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--dashboardBoxShadow);
    clip-path: inset(0 0 0 0);
    transition: all .3s ease-in;

    .app-container{
        // padding-left: 3rem;
        height: 100%;
        width: 100%;
        .app-container-content{
            text-align: center;
            height: 100%;
            padding: 0 .5rem;
            // display: flex;
            // flex-direction: column;
            // align-items: center;
            // justify-content: space-around;
            display: grid;
            place-items: center;
        
        .tabs-container{
            height: 85%;

            .back-to-shop-btn{
                display: flex;
                // margin: 1.6rem 0;
                margin: 2rem 0;
                align-items: center;
                font-size: 1.5rem;
            }

            h4{
                color: black;
            }


            .image-div{
                border: 2px solid;
                margin-bottom: 2rem;
            }
            
            li{
                border: 2px solid;
            }
            .router-logout-user{
                cursor: pointer;
                color: black;
            }
            .nav-tabs{
                display: flex;
                align-items: center;
                margin: .8rem 0;
                padding: 1rem;
                transition: all .1s ease-in;

                &:hover{
                    background-color:  rgba(100, 149, 237, .2);
                }

                svg{
                    opacity: .6;

                }
            }
            .router-link-class{  //REMOVING THE DEFAULT TEXT DECORATION FROM THE ROUTER LINK ELEMENTS
            text-decoration: none;
            text-decoration:dotted;
            
            &.router-link-exact-active{//ACTIVE ROUTER LINK
                opacity: 1;
                
                div{  
                background-color: gainsboro;
                // border: 1px solid;
                background-color: rgba(100, 149, 237, .2);
                
                .svg-wrp{
                    border-radius: .6rem;
                    background-color: rgba(100, 149, 237, .7);
                }
                svg{
                    color: blue;
                }
            }
            
        } 
                

            }


        }
        div{
            // border: 1px solid;
            padding: .5rem;
        }
        //THE TEXTS UNDER THE ICONS
        .tab-details-text{
            text-transform: capitalize;
            padding: 0 2rem;  
            text-decoration: none;     
        }

        }
    }


}


/**class to be toggled to show sidenav */

.navOpen{
    // transform: translateX(0%);
    clip-path: inset(0 0 0 0) !important; /**used ! to override style in the media query */
        transition: all .3s ease-in-out;

    // width: 30rem;
}

/**class to be toggled to hide sidenav */
.navClose{
    clip-path: inset(0 100% 0 0);
        transition: all .2s ease-in;


}


@media screen and (max-width:1000px) {
    .app-root-div{
        // transform: translateX(-49%);
        clip-path: inset(0 100% 0 0);

    }
    
}


</style>