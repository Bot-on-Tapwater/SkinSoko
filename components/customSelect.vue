<!-- custom select element for the checkout page -->
<template>
  <div>
    <template v-if="availableTowns">
      <div class="towns-wrp">
        <div class="towns-content">
            <h2>{{ selectedTown }}</h2>
          <p @click="showAvailableTowns()" class="town-ttl">Select town *</p>
          <div class="towns-div">
            <p
              class="town"
              v-for="town in availableTowns"
              :key="town.town_id"
              :value="town.town_id"
              @click="setSelectedTown(town)"
            >
              {{ town.name }}
            </p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>

import { useStore, axiosInstance } from "@/stores/state";


const appStore = useStore(); /**access our store */

const selectedTown = ref(null) /** var to hold town selected by user, initially null */

const availableTowns = ref(await getTowns());

/**func to get the list of towns that we can deliver orders to */
async function getTowns() {
  try {
    const response = await axiosInstance(`/towns/`);
    if (response.data && response.status === 200) {
      return response.data;
    }
  } catch (error) {}
}


/**func to get the town selected by user, and to close the 'towns dropdown' */
function setSelectedTown(town){

    /**populate the respective fields in our state file */
    appStore.userShippingAddress.town = town.name
    appStore.cartSummaryDetails.shippingFee = town.delivery_fee


    const TownTitle = document.querySelector(".town-ttl")
    TownTitle ? TownTitle.textContent = town.name : alert("Can't find TownTitle element")

    // close the dropdown if  a town is clicked
    const townsDropdown = document.querySelector(".towns-div")
    townsDropdown ? townsDropdown.classList.remove("showTowns") : alert("Can't find townsDropdown element")

    
}

/**show/hide the availble towns  */
function showAvailableTowns() {
    const townsDropdown = document.querySelector(".towns-div")
    townsDropdown.classList.contains("showTowns") ? townsDropdown.classList.remove("showTowns") : townsDropdown.classList.add("showTowns")
    
}

</script>

<style lang="scss" scoped>
.towns-wrp {
  .towns-content {
    width: 15rem;

    .towns-div {
      border: 1px solid rgba(0,0,0,0.5);
      opacity: 0;
      padding: .5rem;
      visibility: hidden;
      max-height: 0;
      overflow-y: scroll;
      scrollbar-color: rgba(128, 128, 128, 0.431) white;
      scrollbar-width: thin;
      transition: 0.2s ease-in-out;
    }
    // class to be toggled to show the towns
    .showTowns {
        opacity: 1;
        visibility: visible;
        max-height: 35rem;
    }

    p {
      // width: auto;
    //   border-right: unset;
      cursor: pointer;
      padding: 0.3rem;
    }
    span {
        display: block;
    }
    .town-ttl {
        border: 0.1px solid gainsboro;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .town {
        border-bottom: .1px solid gainsboro;
        
        &:hover{
            background-color: gainsboro;
        }
    }
  }
}


</style>
