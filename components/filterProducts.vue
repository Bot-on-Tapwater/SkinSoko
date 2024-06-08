<!-- the 'left side panel' on products page -->
<template>
    <section>

        <div @click="hideOverlay()" class="filters-sidebar-overlay"></div>

        <div class="filter-products-wrp">
                <div class="fpw-container">
                    <div class="fpw-content">


                        <div class="fpw">
                            <p class="fpw-ttl">Skin Concern</p>
                            <ul>
                                <li><NuxtLink to="/">Pigmentation</NuxtLink></li>
                                <li><NuxtLink to="/">Redness</NuxtLink></li>
                                <li><NuxtLink to="/">Sensitive</NuxtLink></li>
                                <li><NuxtLink to="/">Oil Control/Pores</NuxtLink></li>
                                <li><NuxtLink to="/">Dryness/Hydration</NuxtLink></li>
                                <li><NuxtLink to="/">Acne</NuxtLink></li>
                                <li><NuxtLink to="/">Anti-Aging/Wrinkles</NuxtLink></li>
                            </ul>
                        </div>
                        <div class="fpw">
                            <p class="fpw-ttl">Product type</p>
                            <ul>
                                <li><NuxtLink to="/">Essence</NuxtLink></li>
                                <li><NuxtLink to="/">Mists</NuxtLink></li>
                                <li><NuxtLink to="/">Sets</NuxtLink></li>
                                <li><NuxtLink to="/">Sheet Masks</NuxtLink></li>
                                <li><NuxtLink to="/">Sleeping mask</NuxtLink></li>
                                <li><NuxtLink to="/">Lip Treatment</NuxtLink></li>
                                <li><NuxtLink to="/">Body</NuxtLink></li>
                                <li><NuxtLink to="/">Exfoliator</NuxtLink></li>
                                <li><NuxtLink to="/">Wash off Mask</NuxtLink></li>
                                <li><NuxtLink to="/">Spot Treatments</NuxtLink></li>
                                <li><NuxtLink to="/">Sun protection</NuxtLink></li>
                                <li><NuxtLink to="/">Makeup</NuxtLink></li>
                                <li><NuxtLink to="/">Moisturizer</NuxtLink></li>
                                <li><NuxtLink to="/">Eye Masks</NuxtLink></li>
                                <li><NuxtLink to="/">Eye Creams</NuxtLink></li>
                            </ul>
                        </div>
                        
                        
                        <div class="fpw">
                            <p class="fpw-ttl">Brand</p>
                            <ul>
                                <li><NuxtLink to="/">GOODAL</NuxtLink></li>
                                <li><NuxtLink to="/">ISNTREE</NuxtLink></li>
                                <li><NuxtLink to="/">I'M FROM</NuxtLink></li>
                                <li><NuxtLink to="/">IOPE</NuxtLink></li>
                                <li><NuxtLink to="/">CERAVE</NuxtLink></li>
                                <li><NuxtLink to="/">HANSKIN</NuxtLink></li>
                                <li><NuxtLink to="/">GOOD LIGHT</NuxtLink></li>
                                <li><NuxtLink to="/">HARUHARU WONDER</NuxtLink></li>
                                <li><NuxtLink to="/">GOOD DAYS FOR ALL</NuxtLink></li>
                                <li><NuxtLink to="/">KLAIRS</NuxtLink></li>
                                <li><NuxtLink to="/">SON & PARK</NuxtLink></li>
                                <li><NuxtLink to="/">THE PLANT BASE</NuxtLink></li>
                                <li><NuxtLink to="/">SOME BY MI</NuxtLink></li>
                            </ul>
                        </div>
                        

                    </div>
                </div>

        </div>
    </section>
</template>

<script setup lang="ts">

function hideOverlay() {
    const sideBarElement = document.querySelector(".filter-products-wrp")
    const sideBarOverlay = document.querySelector(".filters-sidebar-overlay")

    sideBarElement ? sideBarElement.classList.remove("showHidden") : alert("sideBarElement not found")
    sideBarOverlay? sideBarOverlay.classList.remove("showSidebarOverlay") : alert("sideBarElement not found")
}


</script>

<style scoped lang="scss">

/**overlay to be shown on mobile when user
opens menu */
.filters-sidebar-overlay {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
}
.filters-sidebar-overlay.showSidebarOverlay{ /**toggle showing overlay on mobile */
    display: block;
}

.filter-products-wrp{
        width: 18rem;
        // box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 3px 0px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        // border: 2px solid red;
        overflow-y: scroll;
        height: 100%;
        background-color: white;
        scrollbar-width: thin;          /* "auto" or "thin" */
        scrollbar-color: rgb(152, 134, 134) white; 
        // scrollbar-color: white white;
        transition: all .2s ease-in;


        .fpw-container{
            .fpw-content{
                // background-color: white;
                display: flex;
                flex-direction: column;


                .fpw{
                    flex-grow: 1;
                    border-bottom: .1px solid gainsboro;
                    margin: 2rem 0;
                    scrollbar-width: thin;          /* "auto" or "thin" */
                    scrollbar-color: rgb(152, 134, 134) white; 
                    scrollbar-color: white white;
                    overflow-y: scroll;
                    padding: 0 1rem;
                    overflow: scroll;
                    .fpw-ttl{
                        margin: 2rem 0;
                        text-transform: uppercase;
                        font-size: 1.2rem;
                    }
                    ul li{
                        font-size: 1.2rem;
                        font-weight: 400;
                        text-transform: capitalize;
                        font-size: 1.1rem;
                        opacity: .8;
                        list-style-type: none;
                        margin: .8rem 0;
                        // margin-left: 1.5rem;
                        padding: .4rem 1rem;
                        
                        &:hover{
                            border-radius: .2rem;
                            background-color: rgba(176, 197, 237, 0.2);
                            // text-decoration: underline;

                        }

                        
                    }
                }
            }
        }
}


@media screen and (max-width:1000px) {
    .filter-products-wrp {
        opacity: 0;
        visibility: hidden;

    }
}

.showHidden{
    z-index: 434;
    right: 0;
    left: 0;
    bottom: 0;
    max-width: unset;
    width: 50vw;
    visibility: visible;
    opacity: 1;

}
</style>