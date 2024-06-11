<!-- component to show when user cart is empty -->
<template>
    <div>
        <div>
            <p class="cart-empty-ttl">Nothing here :(</p>
            <div class="a-null-div">
                <NuxtLink to="/products/all/1">Continue Shopping</NuxtLink>
            </div>

        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@media screen  and (max-width: 500px) {
    
}
div{
    margin: 1rem 0;
    .cart-empty-ttl{
        font-size: 1.5rem;
        font-weight: 400;
    }
    .a-null-div{
        margin-top: 1rem;
        a{
            text-decoration: underline;
            opacity: .9;
            font-size: 1.4rem;
            border-radius: .4rem;
            color: var(--webPriColor);
            padding: 1rem 0;
        }
    }
}


</style>