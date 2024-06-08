<!-- primary button component used throught the site -->
<template>
    <div>
        <button :id="buttonId">{{ buttonText }}</button>

    </div>
</template>

<script setup>

defineProps(["buttonId", "buttonText"])

</script>

<style lang="scss" scoped>


button{
    all: unset;
    display: block;
    cursor: pointer;
    color: white;
    background-color: var(--buttonColor);
    margin-top: 1rem;
    font-weight: 400;
    padding: 1.4rem 0;
    border-radius: .2rem;
    text-align: center;
    font-size: 1.3rem;
    text-transform: uppercase;
    width: 100%;

    &:hover{
        opacity: .8;
    }
}

</style>
