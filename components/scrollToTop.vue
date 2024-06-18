<!-- scroll to top component -->
<template>
    <div>
        <div class="scroll-to-top" id="scroll-to-top-wrp">
            <div @click="scrollToTop()" id="scroll-to-top-el" class="stt-wrp">
                <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000" stroke="#000000" stroke-width="0.00064"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#ffffff"> <path d="M32 2L16 18h10v15h12V18h10z"> </path> <path d="M32 62c-3.3 0-6-2.8-6-6.3v-9.3c0-3.5 2.7-6.3 6-6.3s6 2.8 6 6.3v9.3c0 3.5-2.7 6.3-6 6.3m0-18.6c-1.7 0-3 1.3-3 3v9.3c0 1.6 1.3 3 3 3s3-1.3 3-3v-9.3c0-1.7-1.3-3-3-3"> </path> <path d="M22 40H10v3h4.5v19h3V43H22z"> </path> <path d="M48 40h-6v22h3v-9.3h3c3.3 0 6-2.8 6-6.3c0-3.6-2.7-6.4-6-6.4m0 9.3h-3v-5.9h3c1.7 0 3 1.3 3 3s-1.3 2.9-3 2.9"> </path> </g> </g></svg>
            </div>
        </div>

    </div>
</template>

<script setup>


/**func to scroll to top of the page */
function scrollToTop() {
    window.scrollTo(0,0)
}

</script>

<style lang="scss" scoped>

.scroll-to-top{
    position: absolute;
    bottom: 0;
    right: 0;

    .stt-wrp{
        width: 4rem;
        border-radius: 50%;
        background-color: var(--webPriColor);
        cursor: pointer;
        height: 4rem;
        display: grid;
        place-items: center;

        svg{
            color: white;
            fill: white;
            width: 2.7rem;
            height: 2.7rem;
        }
    }
}

</style>