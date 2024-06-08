<template>
    <div class="chat-ord">
        <div class="chat-icon-wrp">
            <div class="hidden-icons">
                <NuxtLink to="/">
                    <img class="chat-icon" src="../assets/images/whatsapp.svg" alt="whatsapp icon">
                </NuxtLink>

                <NuxtLink to="/">
                    <img class="chat-icon" src="../assets/images/instagram.svg" alt="instagram icon">
                </NuxtLink>
                <NuxtLink to="/">
                    <img class="chat-icon" src="../assets/images/phone.svg" alt="phone icon">
                </NuxtLink>

            </div>
            <img class="chat-icon shown-icon" src="../assets/images/chat.svg" alt="chat icon">
        </div>

    </div>
</template>

<script setup>

onMounted(()=>{
    let chatIcon = document.querySelector(".shown-icon")
    let hiddenIcons = document.querySelector(".hidden-icons")
    
    if (chatIcon) {
        chatIcon.addEventListener("click", ()=>{
            hiddenIcons?.classList.toggle("showHiddenIcons")
        })
    } else {
        alert("Chat icon not found")
    }
})

</script>

<style lang="scss" scoped>
.chat-ord{
    position: fixed;
    right: 1rem;
    bottom: 5rem;
    z-index: 89;
    .chat-icon-wrp{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        img{
            cursor: pointer;
            width: 3rem;
            margin: .5rem 0;
        }
        .hidden-icons{
            display: flex;
            flex-direction: column;
            max-height: 0;
            overflow: hidden;
            transition: all .2s ease-in;
        }



    }
}

.chat-ord .chat-icon-wrp .hidden-icons.showHiddenIcons{
    max-height: 13rem;
}
</style>