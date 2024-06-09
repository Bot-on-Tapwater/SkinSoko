<template>
    <div class="def-layout-ord">
        <div @click="closeMobileNav()" class="overlay"></div>

        <ChatIcon/>


        <PageLoading/>

        <header class="header">
            <nav class="nav">
                <div class="logo-container">
                    <div @click="showMenuLinks()" class="hamburger-button">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="0.504" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <PageLogo/>
                </div>
                
                
                <div class="menu-links">
                    <ul>
                        <li> <NuxtLink @click=" closeMobileNav()" class="nav-router-links mobile-link-items" to="/">home</NuxtLink> </li>
                        <li> <NuxtLink @click=" closeMobileNav()" class="nav-router-links mobile-link-items" to="/products/all/1"> products</NuxtLink> </li>

                        <li>
                            <div id="ctc" class="categories-container">
                                <p class="nav-links mobile-link-items">Categories</p>
                                <div class="categories-content">

                                    <div class="categories-content-grid">
                                        <template v-if="categories">
                                            <div class="categories-link-tags">
                                                <NuxtLink @click=" closeMobileNav()" v-for="category in categories.query_results" :key="category.name" :to="'/products/category/'+category.name+'?page=1'" class="dropdown-menu-links nav-router-links">{{ category.name }}</NuxtLink>
                                            </div>

                                        </template>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>

                            <div class="brands-container">
                                <p class="nav-links">Brands</p>
                                <div class="brands-content">
                                    <ul>
                                        <li><NuxtLink class="dropdown-menu-links">ANUA</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">HANYUL</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">ATRUE</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">NEOGEN</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">ARIUL</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">THEN I MET YOU</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">SOME BY MI</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">CERAVE</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">ARENCIA</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">ATOPALM</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">AVEENO</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">COSRX</NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li> <NuxtLink @click=" closeMobileNav()" class="nav-router-links mobile-link-items" to="/faqs">FAQs</NuxtLink> </li>

                        <li> <NuxtLink @click=" closeMobileNav()" class="nav-router-links mobile-link-items showOnMobile" to="/policy/refund-policy">refund policy</NuxtLink> </li>
                        <li> <NuxtLink @click=" closeMobileNav()" class="nav-router-links mobile-link-items showOnMobile" to="/policy/privacy-policy">privacy policy</NuxtLink> </li>
                        <li> <a href="mailto:" class="nav-router-links mobile-link-items showOnMobile">customer support</a> </li>

                    </ul>
                </div>
                <div class="cart-container">

                    <template v-if="appStore.isAuth"> 
                        <div id="login-div-c">
                                    <NuxtLink to="/account/profile">
                                        <div id="nav-login" class="login-icon" style="cursor: pointer;">
                                            <!-- <svg width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 32 32"><path d="M16 16c-4.064 0-6.4-2.336-6.4-6.4 0-3.536 2.864-6.4 6.4-6.4s6.4 2.864 6.4 6.4c0 4-2.4 6.4-6.4 6.4zM16 6.4c-1.76 0-3.2 1.44-3.2 3.2 0 2.272 0.928 3.2 3.2 3.2 2.24 0 3.2-0.96 3.2-3.2 0-1.76-1.44-3.2-3.2-3.2z"></path><path d="M27.2 28.8h-22.4v-3.2c0-4.416 3.584-8 8-8h6.4c4.416 0 8 3.584 8 8v3.2zM8 25.6h16c0-2.64-2.16-4.8-4.8-4.8h-6.4c-2.64 0-4.8 2.16-4.8 4.8z"></path></svg> -->
                                            <svg class="Icon Icon--account" role="presentation" viewBox="0 0 20 20">
                                                <g transform="translate(1 1)" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                                    <path d="M0 18c0-4.5188182 3.663-8.18181818 8.18181818-8.18181818h1.63636364C14.337 9.81818182 18 13.4811818 18 18"></path>
                                                    <circle cx="9" cy="4.90909091" r="4.90909091"></circle>
                                                </g>
                                            </svg>
                                            <span class="log-t">Account</span>
                                        </div>
                                    </NuxtLink>
                        </div>
                    </template>

                    <template v-else>
                        <div id="login-div-c">
                            <NuxtLink to="/account/login" id="nav-login" class="login-icon">
                                <svg width="84px" height="78px" aria-hidden="true" role="img" focusable="false" viewBox="0 0 32 32"><path d="M16 16c-4.064 0-6.4-2.336-6.4-6.4 0-3.536 2.864-6.4 6.4-6.4s6.4 2.864 6.4 6.4c0 4-2.4 6.4-6.4 6.4zM16 6.4c-1.76 0-3.2 1.44-3.2 3.2 0 2.272 0.928 3.2 3.2 3.2 2.24 0 3.2-0.96 3.2-3.2 0-1.76-1.44-3.2-3.2-3.2z"></path><path d="M27.2 28.8h-22.4v-3.2c0-4.416 3.584-8 8-8h6.4c4.416 0 8 3.584 8 8v3.2zM8 25.6h16c0-2.64-2.16-4.8-4.8-4.8h-6.4c-2.64 0-4.8 2.16-4.8 4.8z"></path></svg>
                                <!-- <svg class="Icon Icon--account" role="presentation" viewBox="0 0 20 20">
                                    <g transform="translate(1 1)" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                        <path d="M0 18c0-4.5188182 3.663-8.18181818 8.18181818-8.18181818h1.63636364C14.337 9.81818182 18 13.4811818 18 18"></path>
                                        <circle cx="9" cy="4.90909091" r="4.90909091"></circle>
                                    </g>
                                </svg> -->
                                <span class="log-t">log in</span>
                            </NuxtLink>
                            
                        </div>
                    </template>

                    <div class="cart-icon">

                        <div class="cart">
                            <div class="icon-div">
                                <NuxtLink class="cart-icon-a-tag" to="/cart">
                                    <div class="cart-dets-icon">
                                        <!-- <svg width="26px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                                        </svg> -->
                                        <svg width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 32 32"><path d="M25.248 22.4l3.552-14.4h-18.528l-0.96-4.8h-6.112v3.2h3.488l3.2 16h15.36zM24.704 11.2l-1.968 8h-10.24l-1.6-8h13.808z"></path><path d="M25.6 26.4c0 1.325-1.075 2.4-2.4 2.4s-2.4-1.075-2.4-2.4c0-1.325 1.075-2.4 2.4-2.4s2.4 1.075 2.4 2.4z"></path><path d="M14.4 26.4c0 1.325-1.075 2.4-2.4 2.4s-2.4-1.075-2.4-2.4c0-1.325 1.075-2.4 2.4-2.4s2.4 1.075 2.4 2.4z"></path></svg>
                                        <span class="cart-items-total">{{ appStore.totalItemsInCart }}</span>
    
                                    </div>
                                    <span class="cart-t">cart</span>

                                </NuxtLink>

                            </div>

                          
                        </div>
                    </div>


                </div>

                <!-- toast component to show error pages -->
                <Toast/> 
            </nav>

        </header>

        <template v-if="pageMounted">
        <slot />

        <footer class="footer">
            <div class="footer-container">

                <div class="footer-content">
                    
                    <PageLogo/>

                    <div class="quick-links">
                        <p>quick links</p>
                        <NuxtLink to="/faqs">FAQs</NuxtLink>
                        <NuxtLink to="/policy/privacy-policy">Privacy policy</NuxtLink>
                        <NuxtLink to="/policy/refund-policy">Refund policy</NuxtLink>
                        <a href="">contact us</a>
                    </div>
                        
                    <div class="social">
                        <p>Connect with us</p>
                        <a href="">Twitter</a>
                        <a href="">Instagram</a>
                        <a href="">Facebook</a>
                        <a href="">Tiktok</a>
                        
                    </div>
                    <div class="payment-options">
                        <div class="pay-svgs">
                            <p>Safe checkout</p>
                            <svg class="icon icon--full-color" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" x="0" y="0" width="38" height="24" viewBox="0 0 165.521 105.965" xml:space="preserve" aria-labelledby="pi-apple_pay"><title id="pi-apple_pay">Apple Pay</title><path fill="#000" d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"></path><path fill="#FFF" d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"></path><g><g><path fill="#000" d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858"></path><path fill="#000" d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048"></path></g><g><path fill="#000" d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z"></path><path fill="#000" d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z"></path><path fill="#000" d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"></path></g></g></svg>
                            <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path></svg>
                            <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
                            <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="38" height="24"><title id="pi-american_express">American Express</title><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"></path><path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"></path><path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"></path><path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"></path><path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"></path><path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"></path><path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"></path><path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"></path></svg>
                        </div>
                    </div>

                    
                </div>

               
            </div>
        </footer>

        </template>
        <template v-else>
            <PageLoading/>
        </template>


    </div>
    
</template>

<script lang="ts" setup>

import { onMounted } from 'vue';
import {axiosInstance} from '@/stores/state'

const appStore = useStore()  /**accessing out store */

const pageMounted = ref(false)
appStore.pageLoading = true /**show loading screen */
onMounted(async ()=>{
    appStore.pageLoading = false /**hide loading screen */
    pageMounted.value = true
    await nextTick() /**wait for DOM updates to finish */
})


/**fetch categories from backend and show on UI */
const categories = ref(await getCategories())

/**get available categories */
async function getCategories() {
    const categories_url = "/categories/"
    try {
        const {data} = await axiosInstance(categories_url)
        if (data.query_results) {
            return data
        }
    } catch (error) {
        
    }
}
/**func to close navbar on mobile */
function closeMobileNav() {
    document.querySelector('.menu-links')!.classList.remove('showMenuLinks')
    document.querySelector('.hamburger-button')!.classList.remove('hamburgerButtonClicked')
    document.querySelector(".overlay")?.classList.remove("showOverlayOnMobile")

}

//funtion for when hamburger button is clicked
function showMenuLinks(){
    let menuButton = document.querySelector('.hamburger-button')!

    menuButton.classList.toggle('hamburgerButtonClicked')
    document.querySelector('.menu-links')!.classList.toggle('showMenuLinks')
    
    document.querySelector(".overlay")?.classList.toggle("showOverlayOnMobile")

}




</script>

<style lang="scss" scoped>

.header{
    color: var(--buttonColor);
    height: 8rem;
    background-color: var(--bodyBgColor);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 5;
    border-bottom: 1px solid rgba(0, 0, 0, 0.297);
    .nav{
        height: 100%;
        position: relative;
        max-width: var(--maxWidth);
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        padding: 0 1rem;
        
        margin-bottom: 4rem;


        .logo-container{
            padding: .5rem;
            display: flex;
            align-items: center;
            .hamburger-button{
                cursor: pointer;
                display: none;               
            }

        }

        .menu-links{
            .router-link-exact-active{
                color:var(--webPriColor);
            }

            ul li{
                list-style: none;
                display: inline-block;
                list-style-type: none;
                .nav-router-links, .nav-links{
                    color: black;
                    padding: .2rem 2rem;
                    font-size: 1.3rem;
                    text-transform: uppercase;
                    font-weight: 400;
                    text-decoration: none;
                    opacity: .8;
                    cursor:pointer;
                }

                .dropdown-menu-links{
                    text-transform: uppercase;
                    font-size: 1.1rem;
                    opacity: .9;
                    width: 100%;
                    display: inline-block;
                    font-weight: 400;
                }

                .showOnMobile{
                    display: none;
                }

                // div holding the brands
                .brands-container{
                    position: relative;
                    width: 100%;
                    display: inline-block;
                    .brands-content{
                        position: absolute;
                        background-color: white;
                        box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
                        min-width: 16rem;
                        max-height: 0;
                        overflow-y: scroll;
                        scrollbar-color: gray white;
                        scrollbar-width: thin;
                        z-index: 1;
                        opacity: 0;
                        visibility: hidden;
                        transition: all .2s ease-in-out;
                        padding: 0 3rem;
                        ul{

                            li{
                                display: block;
                                padding: .8rem 0;
                                opacity: .8;
                            
                            }
                        }
                    }
                }

                // showing brands on hover
                .brands-container:hover .brands-content{
                    max-height: 30rem;
                    opacity: 1;
                    visibility: visible;
                }
             
                
                // showing the categories
                .categories-container{
                    position: relative;

                    .categories-content{
                        position: absolute;
                        overflow: hidden;
                        top: 150%;
                        left: 50%;
                        height: auto;
                        box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
                        // padding: 3rem 1rem;
                        background-color: white;
                        z-index: 3;
                        transform: translate(-50%);
                        opacity: 0;
                        padding: 0 3rem;
                        max-height: 0;
                        visibility: hidden;
                        transition: all .1s ease-in;

                       
                    }

                    .categories-link-tags{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        width: 100%;
                        a{
                            font-size: 1.1rem;
                            margin: 1rem 0;
                            opacity: .8;
                        }
                    }
                    .categories-content-grid{
                        // display: grid;
                        // background-color: pink;
                        // grid-template-columns: 1fr 1fr;
                        // height: 100%;
                        // place-items: center;
                    }
                    

                    //NUXT LINKS
                    a{
                        display: block;


                        .nav-img{
                            width: 8rem;
                            height: 8rem;
                            object-fit: cover;
                        }
                    }

                }

                // showing div containing categories, on hover
                .categories-container:hover .categories-content{
                    opacity: 1;
                    visibility: visible;
                    max-height: 50rem;
                }
            }

        }
        
        .cart-container{
            padding:0 1rem ;
            padding: 1rem;
            position: relative;
            display: flex;

            span{
                color: black;
                font-size: 1.3rem;
                margin-top: .2rem;
            }
            
             .cart-icon{
                
                .cart{
                    position: relative;
                    //SHOWING ITEMS IN CART WHEN THIS IS HOVERED
                    &:hover .cart-items-container{
                            opacity: 1;
                            visibility: visible;
                        }

                        
                    .icon-div{  //div with cart icon and name
                        display: flex;
                        padding: 0 1rem;
                        flex-direction: column;
                        text-transform: capitalize;

                        .cart-icon-a-tag{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }
                        .cart-dets-icon{
                            position: relative;


                            svg{
                                transform: scale(1.2);
                            }

                            .cart-items-total{
                                position: absolute;
                                background-color: var(--webPriColor);
                                color: white;
                                height: 1.4rem;
                                font-size: 1rem;
                                border-radius: 50%;
                                width: 1.4rem;
                                text-align: center;
                            }
                        }


                    }

                 
                }
             }
            
            
            a{
                // color: black;
                text-decoration: none;
                font-size: 1rem;
            }

            svg{
                width: 2rem;
                color: black;
                height: 2rem;
            }

            
            .login-icon{
                display: flex;
                flex-direction: column;
                text-transform: capitalize;
                margin: 0 1rem;
                align-items: flex-start;
                align-items: center;
                padding: 0 .4rem;

                span{
                    color: black;
                    font-size: 1.3rem;
                }

            }

        }
    }
}


/**overlay to be shown on mobile when user
opens menu */
.overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
}
.overlay.showOverlayOnMobile{ /**toggle showing overlay on mobile */
    display: block;
}

.header .nav .menu-links ul li .categories-container .categories-content.showNavCategoriesContent{
    opacity:1;
    visibility: visible;
    max-height: 50rem;
    
}


//class to show menu links when menu button is clicked
.header .nav .menu-links.showMenuLinks{
    clip-path: inset(0 0 0 0);
}


.footer{
    // background-color: rgb(5, 4, 4);
    background-color: var(--webPriColor);
    background-color: var(--bgColor);
    background-color: white;
    padding: 1rem;
    color: black;
    margin-top: 1rem;
    
    // border: 2px solid;
    .footer-container{
        max-width: var(--maxWidth);
        margin: 2rem auto;
        padding: 1rem;
        border-top: .1px solid gainsboro;            
        height: 100%;
        
        .footer-content{
            // margin-top: 2rem;
            // display: grid;
            // grid-template-columns: 1fr 1fr;
            display: flex;
            justify-content: space-between;

            height: 100%;
            width: 100%;
            opacity: .8;
            font-weight: 400;


            svg{
                display: block;
                
            }
                a{
                    display: block;
                    font-size: 1.2rem;
                    margin: .8rem 0;
                }
                svg{
                    margin: 0 .3rem;                    
                }
            p{
                text-transform: capitalize;
                font-size: 1.2rem;
                margin-bottom: 2rem;
            }
        
            
        }

      
    }
}


@media screen and (max-width:750px) {
    .header .nav{
        .logo-container{
            background-color: white;
            z-index: 122;
            .hamburger-button{
                display: block;
            }
        }

        .menu-links{
            // display: none;
            height: 100vh;
            background-color: rgb(255, 255, 255);
            position: absolute;
            top: 0;
            // z-index: 133;
            left: 0;
            width: 70vw;
            padding-top: 8rem;
            overflow-y: scroll;
            color: black;
            clip-path: inset(0 100% 0 0);
            transition: all .3s ease;
            ul{
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                padding-left: .7rem;
                li{
                    padding: 1.5rem 0;
                    
                    .nav-router-links, .nav-links {
                        border-bottom: 1px solid gainsboro;
                        width: 100%;
                        display: inline-block;
                    }
                    a{
                        color: black;
                        opacity: 1;
                        font-size: 1.4rem;
                        font-weight: 400;
                    }

                    .showOnMobile{
                        display: block;
                    }
                    .categories-container{
                        // padding-bottom: .4rem;
                        width: 100%;
                        .categories-content{
                            box-shadow: unset;
                            transform: translate(0%);
                            position: static;
                            }
                            
                            .categories-content-grid{
                            grid-template-columns: 1fr 1fr;
                        }

                        .categories-link-tags{
                            grid-template-columns: repeat(2, 1fr);
                        }

                    } 

                    .brands-container{
                        .brands-content{
                            box-shadow: unset;
                            position: static;

                            ul li{
                                border-bottom: 1px solid gainsboro;
                                width: 100%;
                                display: inline-block;
                            }
                        }
                    }
            }
            }
        }
     
    }
}


@media screen and (max-width:600px) {
    .footer .footer-container .footer-content{
        display: grid;
        grid-template-columns: 1fr 1fr;

        div{
            padding: .5rem;
            margin: 1rem 0;
        }
       
    }
}


</style>
