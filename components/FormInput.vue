<!-- form component used throughout the page  -->
<template>
    <div>
        <label :for="labelFor">{{ labelText }}</label>
        <input v-model="inputValue" :id="inputId" required placeholder="" class="fm-el" :type="inputType">
    </div>
</template>

<script lang="ts" setup>

defineProps(["labelFor", "inputId", "labelText", "inputType"])

const inputValue = defineModel() /**for the two way data binding */

</script>

<style lang="scss" scoped>

//

</style>