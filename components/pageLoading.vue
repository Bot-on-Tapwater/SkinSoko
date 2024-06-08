component to be shown when page is loading. eg before mount, making api requests
<template>
    <div  v-if="appStore.pageLoading" class="loading-page-ord">
        <div class="loading-page-wrp">
            <div>
                <img src="https://cdn.dribbble.com/users/108183/screenshots/2301400/spinnervlll.gif" alt="loading spinner" class="loading-spinner">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useStore } from '~~/stores/state';
const appStore = useStore()

</script>

<style lang="scss" scoped>

.loading-page-ord{
    position: fixed;
    top: 8rem;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: .6;
    background-color: whitesmoke;
    z-index: 43;
    display: grid;
    place-items: center;
    // margin-top: 9;
    .loading-page-wrp{
        div{
            img{
                width: 42rem;
            }
           
        }
    }
}


</style>