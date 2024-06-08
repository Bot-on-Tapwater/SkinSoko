<!-- input component to show on the page when user wants to add item to cart -->
<template>
    <div>

        <div class="btns-wrapper">
            <div @click="totalItems>1?totalItems--:1">
                <svg class=" subtract ant-collapse-arrow" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg" style="margin-top: -5px;"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6 19h12v2H6z"></path></svg>
            </div>
            <div>
                <input :value="totalItems" class="total-products" min="1" type="number" :max=maxItems>
                
            </div>
            <div @click="totalItems < maxItems? totalItems++: maxItems">
                <svg class="add" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">

/**maxItems will be used to restrict user to only select
 * at most items that are in stock
 */
defineProps(["maxItems"])

/**to be shown on the input element */
const totalItems = ref(1)


</script>

<style lang="scss" scoped>

.btns-wrapper{
    margin: .4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: transparent;
    border: 1px solid gainsboro;
    font-weight: 400;
    height: 4rem;
    div{
        height: 100%;
        height: 4rem;
        cursor: pointer;
        background-color: transparent;
        display: grid;
        place-items: center;
    }
}
            
    
.add, .subtract{
    all: unset;
    font-weight: bolder;
    font-size: 1.8rem;
    margin:0 1rem;
    text-align: center;
}

input{
    color: black;
    font-weight: bolder;
    background-color: transparent;
    border: none;
    max-width: 4rem;
    width: auto;
    // border: 1px solid;
    text-align: center;
    padding-top: 1.2rem;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
        margin: 0;
    }
    &:focus{
        outline: none;
    }

    
}


</style>