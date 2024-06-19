<!-- the additional navbar for member's profile  -->
<template>
    <div>

        <div class="profile-nav-wrp">
        <div class="pnw-container">
            <ul>
                <li><NuxtLink class="router-link-class" to="/account/profile">Profile</NuxtLink></li>
                <li><NuxtLink class="router-link-class" to="/account/orders">orders</NuxtLink></li>
                <li><NuxtLink class="router-link-class" to="/account/reviews">Reviews</NuxtLink></li>
                <!-- <li><a href="mailto:skinsoko@gmail.com">Customer support</a></li> -->
                <li><NuxtLink @click="appStore.logoutUser">sign out</NuxtLink></li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">


const appStore = useStore();


</script>

<style scoped lang="scss">


.profile-nav-wrp{
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 1rem;
    display: grid;
    place-items: center;
    .pnw-container {
      overflow-x: auto;
      padding: 2rem;
      width: 100%;
      background-color: white;
      scrollbar-width: thin;

      ul{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-evenly;

        li{
          list-style: none;
          display: inline-block;
          padding: 0 .8rem;
          text-transform: capitalize;
          font-size: 1.3rem;
          opacity: .9;


          a{
            cursor: pointer;
          }
          .router-link-class{
          
            &.router-link-exact-active{
              border-bottom: .1px solid black;
            }

          }

        }
      }
    }
}

</style>