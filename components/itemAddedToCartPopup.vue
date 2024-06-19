<!-- message component to show user when an error occurs  -->
<template>
    <div v-if="appStore.showItemAddedToCartMessage" class="item-added-to-cart-wrp">
        <div class="item-added-to-cart-content">
            <p>Product added to cart</p>
        </div>
    </div>
</template>

<script setup lang="ts">

import {useStore} from '@/stores/state'
const appStore = useStore()


</script>

<style lang="scss" scoped>

.item-added-to-cart-wrp{
    position: fixed;
    color: black;
    z-index: 43;
    right: 0;
    left: 0;
    text-align: center;
    top: 0;
    background-color: rgba(194, 207, 231, 0.622);

    height: auto;
    font-size: 1.3rem;
    padding: .6rem 1rem;

    .item-added-to-cart-content{
        p{
            font-size: 1.2rem;
        }
        
    }

}


</style>