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
                        <li> <NuxtLink class="nav-router-links mobile-link-items" to="/">home</NuxtLink> </li>
                        <li> <NuxtLink class="nav-router-links mobile-link-items" to="/products/all/1"> products</NuxtLink> </li>

                        <li>
                            
                            <div id="ctc" class="categories-container">
                                <p class="nav-router-links mobile-link-items">Categories</p>
                                <!-- <div class="categories-title-div"> -->
                                    <!-- <div class="categories-arrow"></div> -->
                                <!-- </div> -->
                                <div class="categories-content">

                                    <div class="categories-content-grid">
                                        <template v-if="categories">
                                            <div class="categories-link-tags">
                                                <NuxtLink v-for="category in categories.query_results" :key="category.name" :to="'/products/category/'+category.name+'?page=1'" class="dropdown-menu-links nav-router-links">{{ category.name }}</NuxtLink>
                                            </div>

                                        </template>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li> <NuxtLink class="nav-router-links mobile-link-items" to="/faqs">FAQs</NuxtLink> </li>
                        <li>

                            <div class="brands-container">
                                <p class="nav-router-links">Brands</p>
                                <div class="brands-content">
                                    <ul>
                                        <li><NuxtLink class="dropdown-menu-links">MenuLink</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">MenuLink</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">MenuLink</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">MenuLink</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">MenuLink</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">MenuLink</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">MenuLink</NuxtLink></li>
                                        <li><NuxtLink class="dropdown-menu-links">MenuLink</NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li> <NuxtLink class="nav-router-links mobile-link-items showOnMobile" to="/policy/refund-policy">refund policy</NuxtLink> </li>
                        <li> <NuxtLink class="nav-router-links mobile-link-items showOnMobile" to="/policy/privacy-policy">privacy policy</NuxtLink> </li>
                        <li> <a href="mailto:stancillousr@gmail.com" class="nav-router-links mobile-link-items showOnMobile">customer support</a> </li>
                        <li class="social">
                            <!-- <div class="social showOnMobile"> -->
                            <a href="" class="nav-router-links mobile-link-items showOnMobile">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z" fill="#0F0F0F"></path> </g></svg>
                            </a>
                            <a href="" class="nav-router-links mobile-link-items showOnMobile">
                                <svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z" fill-rule="evenodd"></path> </g></svg>
                            </a>
                            <a href="" class="nav-router-links mobile-link-items showOnMobile">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564" stroke="#000000" stroke-linejoin="round"></path> </g></svg>
                            </a>
                            <a href="" class="nav-router-links mobile-link-items showOnMobile">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7828 3.91825C20.1313 3.83565 20.3743 3.75444 20.5734 3.66915C20.8524 3.54961 21.0837 3.40641 21.4492 3.16524C21.7563 2.96255 22.1499 2.9449 22.4739 3.11928C22.7979 3.29366 23 3.6319 23 3.99986C23 5.08079 22.8653 5.96673 22.5535 6.7464C22.2911 7.40221 21.9225 7.93487 21.4816 8.41968C21.2954 11.7828 20.3219 14.4239 18.8336 16.4248C17.291 18.4987 15.2386 19.8268 13.0751 20.5706C10.9179 21.3121 8.63863 21.4778 6.5967 21.2267C4.56816 20.9773 2.69304 20.3057 1.38605 19.2892C1.02813 19.0108 0.902313 18.5264 1.07951 18.109C1.25671 17.6916 1.69256 17.4457 2.14144 17.5099C3.42741 17.6936 4.6653 17.4012 5.6832 16.9832C5.48282 16.8742 5.29389 16.7562 5.11828 16.6346C4.19075 15.9925 3.4424 15.1208 3.10557 14.4471C2.96618 14.1684 2.96474 13.8405 3.10168 13.5606C3.17232 13.4161 3.27562 13.293 3.40104 13.1991C2.04677 12.0814 1.49999 10.5355 1.49999 9.49986C1.49999 9.19192 1.64187 8.90115 1.88459 8.71165C1.98665 8.63197 2.10175 8.57392 2.22308 8.53896C2.12174 8.24222 2.0431 7.94241 1.98316 7.65216C1.71739 6.3653 1.74098 4.91284 2.02985 3.75733C2.1287 3.36191 2.45764 3.06606 2.86129 3.00952C3.26493 2.95299 3.6625 3.14709 3.86618 3.50014C4.94369 5.36782 6.93116 6.50943 8.78086 7.18568C9.6505 7.50362 10.4559 7.70622 11.0596 7.83078C11.1899 6.61019 11.5307 5.6036 12.0538 4.80411C12.7439 3.74932 13.7064 3.12525 14.74 2.84698C16.5227 2.36708 18.5008 2.91382 19.7828 3.91825ZM10.7484 9.80845C10.0633 9.67087 9.12171 9.43976 8.09412 9.06408C6.7369 8.56789 5.16088 7.79418 3.84072 6.59571C3.86435 6.81625 3.89789 7.03492 3.94183 7.24766C4.16308 8.31899 4.5742 8.91899 4.94721 9.10549C5.40342 9.3336 5.61484 9.8685 5.43787 10.3469C5.19827 10.9946 4.56809 11.0477 3.99551 10.9046C4.45603 11.595 5.28377 12.2834 6.66439 12.5135C7.14057 12.5929 7.49208 13.0011 7.49986 13.4838C7.50765 13.9665 7.16949 14.3858 6.69611 14.4805L5.82565 14.6546C5.95881 14.7703 6.103 14.8838 6.2567 14.9902C6.95362 15.4727 7.65336 15.6808 8.25746 15.5298C8.70991 15.4167 9.18047 15.6313 9.39163 16.0472C9.60278 16.463 9.49846 16.9696 9.14018 17.2681C8.49626 17.8041 7.74425 18.2342 6.99057 18.5911C6.63675 18.7587 6.24134 18.9241 5.8119 19.0697C6.14218 19.1402 6.48586 19.198 6.84078 19.2417C8.61136 19.4594 10.5821 19.3126 12.4249 18.6792C14.2614 18.0479 15.9589 16.9385 17.2289 15.2312C18.497 13.5262 19.382 11.1667 19.5007 7.96291C19.51 7.71067 19.6144 7.47129 19.7929 7.29281C20.2425 6.84316 20.6141 6.32777 20.7969 5.7143C20.477 5.81403 20.1168 5.90035 19.6878 5.98237C19.3623 6.04459 19.0272 5.94156 18.7929 5.70727C18.0284 4.94274 16.5164 4.43998 15.2599 4.77822C14.6686 4.93741 14.1311 5.28203 13.7274 5.89906C13.3153 6.52904 13 7.51045 13 8.9999C13 9.28288 12.8801 9.5526 12.6701 9.74221C12.1721 10.1917 11.334 9.92603 10.7484 9.80845Z" fill="#0F0F0F"></path> </g></svg>
                            </a>
                            <a href="" class="nav-router-links mobile-link-items showOnMobile">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"></path> </g></svg>
                            </a>
                                
                            <!-- </div>  -->
                        </li>

                    </ul>
                </div>
                <div class="cart-container">

                    <template v-if="appStore.isAuth"> 
                        <div id="login-div-c">
                                    <NuxtLink to="/account/profile">
                                        <div id="nav-login" class="login-icon" style="cursor: pointer;">
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
                                <svg class="Icon Icon--account" role="presentation" viewBox="0 0 20 20">
                                    <g transform="translate(1 1)" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                        <path d="M0 18c0-4.5188182 3.663-8.18181818 8.18181818-8.18181818h1.63636364C14.337 9.81818182 18 13.4811818 18 18"></path>
                                        <circle cx="9" cy="4.90909091" r="4.90909091"></circle>
                                    </g>
                                </svg>
                                <span class="log-t">log in</span>
                            </NuxtLink>
                            
                        </div>
                    </template>

                    <div class="cart-icon">

                        <div class="cart">
                            <div class="icon-div">
                                <NuxtLink class="cart-icon-a-tag" to="/cart">
                                    <div class="cart-dets-icon">
                                        <svg width="26px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                                        </svg>
                                        
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
    showNavCategoriesContent()
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

    
    //HIDING MENU LINKS DIV WHEN A LINK IS CLICKED
    document.querySelectorAll('.nav-router-links').forEach((link)=>{

        link.addEventListener('click',()=>{
            closeMobileNav()
        })
    })
}


//funtion to show the categories present 
function showNavCategoriesContent(){
    let categoriesDiv = document.querySelector('.categories-container')

    categoriesDiv?.addEventListener('click',()=>{
        document.querySelector('.categories-arrow')?.classList.toggle('arrowClicked')
        document.querySelector('.categories-content')?.classList.toggle('showNavCategoriesContent')
    })
    
    document.onclick = (e: any)=>{  /**close categories div if user clicks outside of it */
        if (!categoriesDiv?.contains(e.target)) {
            document.querySelector('.categories-arrow')?.classList.remove('arrowClicked')
            document.querySelector('.categories-content')?.classList.remove("showNavCategoriesContent")
        }
    }
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
                .nav-router-links{
                    color: black;
                    padding: .2rem 1rem;
                    font-size: 1.3rem;
                    text-transform: uppercase;
                    font-weight: 500;
                    text-decoration: none;
                    opacity: .8;
                    cursor:pointer;
                }

                .dropdown-menu-links{
                    text-transform: uppercase;
                    font-size: 1.1rem;
                    opacity: .9;
                    font-weight: 400;

                }

                
                .showOnMobile{
                    display: none;
                }

                // div holding the brands
                .brands-container{
                    position: relative;
                    display: inline-block;
                    .brands-content{
                        position: absolute;
                        background-color: white;
                        padding: 1rem;
                        box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
                        min-width: 16rem;
                        max-height: 30rem;
                        max-height: 0;
                        overflow-y: scroll;
                        scrollbar-color: whitesmoke white;
                        scrollbar-width: thin;
                        z-index: 1;
                        opacity: 0;
                        visibility: hidden;
                        transition: all .2s ease-in-out;
                        ul{

                            li{
                                display: block;
                                padding: .8rem 0;
                            
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
                        border: 1px solid gainsboro;
                        position: absolute;
                        overflow: hidden;
                        top: 150%;
                        left: 50%;
                        height: auto;
                        padding: 3rem 1rem;
                        background-color: white;
                        z-index: 3;
                        transform: translate(-50%);
                        opacity: 0;
                        max-height: 0;
                        visibility: hidden;
                        transition: all .1s ease-in;

                       
                    }

                    .categories-link-tags{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        a{
                            font-size: 1.1rem;
                            margin: .5rem 0;
                        }
                    }
                    .categories-content-grid{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        height: 100%;
                        place-items: center;
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

            .social{
                    // text-align: center;
                    // border: 1px solid;
                    // margin: 2rem 0;
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    text-align: left;

                    a{
                        display: inline-block;
                        margin: 0 .5rem;
                    }
                    svg{
                        width: 1.9rem;
                        opacity: .8;
                    }
                }
        }
        
        .cart-container{
            padding:0 1rem ;
            padding: 1rem;
            position: relative;
            display: flex;
            
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

                        span{
                            color: black;
                            font-size: 1.3rem;
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


//class to be toggled to the arrow on the nav when the arrow is clicked
.header .nav .menu-links ul li .categories-container .categories-title-div .categories-arrow.arrowClicked{
    transform: rotate(180deg);
}


.header .nav .menu-links ul li .categories-container .categories-content.showNavCategoriesContent{
    opacity:1;
    visibility: visible;
    max-height: 50rem;
    
}


//show login div when the login icon is hovered
#login-div-c:hover .login-container{
    opacity: 1;
    visibility: visible;
}


//class to be toggled to the hamburger button when clicked
.header .nav .logo-container .hamburger-button.hamburgerButtonClicked{
    span{
        background-color: black;
        width: 2.2rem;
        // height: .2rem;

        &:nth-child(1){
                transform: translateY(.4rem) rotate(45deg);
    
        }
        &:nth-child(2){
            opacity: 0;
        }

        &:nth-child(3){
            transform: translateY(-.6rem) rotate(-45deg);
        }
    }
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
            left: 0;
            width: 70vw;
            padding-top: 8rem;
            overflow-y: scroll;
            //display: grid;
            //place-items: center;
            color: black;
            clip-path: inset(0 100% 0 0);
            transition: all .3s ease;
            ul{
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                // border: 2px solid red;

                padding-left: .7rem;
                li{
                    border-bottom: 1px solid rgba(0,0,0,0.2);
                    padding: 1.5rem 0;

                    &:nth-child(1) {
                        border-top: 1px solid rgba(0,0,0,0.2);
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
                        padding-bottom: .4rem;
                        .categories-title-div{
                            justify-content:flex-start;
                            .categories-title{
                                opacity: 1;
                                font-weight: 400;
                                font-size: 1.4rem;
                                padding-left: 1rem;
                                color: black;
                            }
                            .categories-arrow{
                                border-top: 7px solid rgb(226, 214, 214);
                                margin-left:1rem;
                                margin-top:.2rem;
                            }
                        }

                        .categories-content{
                            flex-direction: column;
                            
                            justify-content: flex-start;
                            display: grid;
                            place-items: center;
                            grid-template-columns: 1fr;
                            height: auto;
                            padding: 0 .05rem;
                            width:100%;
                            background-color: transparent;
                            transform: unset;
                            position: unset;
                            border: 1px solid transparent;
                            display: block;
                            max-height: auto;
                            text-align: left;
                                    
                            &::before{
                                content:'';
                                display:none;
                            }
                        }

                        .categories-content-grid{
                            grid-template-columns: 1fr 1fr;
                        }

                        

                        .categories-link-tags{
                            grid-template-columns: repeat(2, 1fr);
                        }

                        a{
                            color:black;
                            width:100%;
                            font-size: 1.3rem;

                            
                            p{
                                display: block;
                                padding: .7rem 0;
                            }

                        }
                        .popular-categories-imgs{
                            display: none;
                        }
                    } 

                    .brands-container{

                        .brands-content{
                            // opacity: 1;
                            // visibility: visible;
                            // max-height: 40rem;
                            box-shadow: unset;

                            position: static;
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
