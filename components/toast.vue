<!-- message component to show user when an error occurs  -->
<template>
    <div class="toast-ord-wrp">
        <div class="toast-ord-content">

            <div @click="appStore.hideToast()" class="close-toast-div">
                <h2>Error</h2>
                <svg width="20px" height="20" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="0.504"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#000000" stroke-width="0.504" stroke-linecap="round"></path> </g></svg>
            </div>
            <p class="toast-msg-p"></p>
        </div>
    </div>
</template>

<script setup lang="ts">

import {useStore} from '@/stores/state'
const appStore = useStore()


</script>

<style lang="scss" scoped>

.toast-ord-wrp{
    position: absolute;
    top:9rem;
    color: black;
    right: 3rem;
    width: 40rem;
    max-width: 25rem;
    background-color: pink;
    // height: 8rem;
    height: auto;
    font-size: 1.3rem;
    opacity: 0;
    padding: 2rem;
    visibility: hidden;

    .toast-ord-content{
        .close-toast-div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            margin: 1rem 0;

            svg{
                width: 4rem;
                height: 3.4rem;
            }

            h2{
                font-weight: 400;
                font-size: 1.7rem;
            }
        }
        
    }

}


.toast-ord-wrp.showToast{
    opacity: 1;
    visibility: visible;
}

</style>