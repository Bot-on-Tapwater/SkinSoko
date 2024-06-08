<!-- website logo component -->
<template>
    <div>
        <div class="image-div">
            <NuxtLink class="logo" to="/">SKIN SOKO</NuxtLink>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>



/**style for the logo */
.logo{
    text-transform: capitalize;
    font-weight: 500;
    text-decoration: none;
    color: var(--webPriColor);
    font-size: 2rem;
    padding:0 1rem;
}
@media screen and (max-width: 750px) {
    .logo{
        font-size: 1.7rem;
    }
    
}
</style>