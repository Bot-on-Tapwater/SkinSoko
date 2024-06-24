<template>
    <div class="cart-ord">

        <template v-if="cart_items">
            <div v-if="cart_items.length > 0" class="cart-items-present">
                
                <div class="cart-header-ttl-wrp">
                    <h1 class="cart-header">Shopping Cart</h1>   
                    <p class="empty-cart" @click="clearEntireCart">Empty Cart</p>
                </div>
        
                <div class="cart-it-wrapper">
                    <div class="cart-container">
                        <div class="cc-details">
        
                            <div class="cart-items-wrp">
        
                                <div v-for="product in cart_items" class="cart-item-div">
                                    <div class="item-dets">
                                        <img :src="product.product_image" :alt="product.product_name">

                                        <div>
                                            <p class="item-name">{{ product.product_name }}</p>
                                            <p class="item-price">Ksh {{ appStore.formatNumber(product.product_price) }}</p>
                                        </div>
        
                                    </div>
                                    <div class="item-quantity">
        
                                        <div class="iq-wrp">
                                            <p>Quantity</p>
                                            <div>
                                                <div class="btns-wrapper">
                                                    <div @click="updateQuantity(product, 'subtract')">
                                                        <svg class=" subtract ant-collapse-arrow" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg" style="margin-top: -5px;"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6 19h12v2H6z"></path></svg>
                                                    </div>
                                                    <div>
                                                        <!-- <input disabled :value="product.quantity" :max="product.product.quantity_in_stock" class="total-products" id="item-quantity" min="1" type="number"> -->
                                                        <input disabled :value="product.quantity" class="total-products" id="item-quantity" min="1"  max="5" type="number">
                                                    </div>
                                                    <div @click="updateQuantity(product, 'add')">
                                                        <svg class="add" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <p class="item-subtotal">Subtotal: Ksh {{ appStore.formatNumber(product.subtotal) }}</p>
        
                                        </div>
                                    </div>
                                    <div class="cart-prod-addn-actions">

                                        <div class="update-ttls-wrp">
                                            <span class="update-cart-totals" @click="updateProductSubtotal(product)">Click here to update product sub total</span>
                                        </div>
                                        <div class="remove-item-div">
                                            <span class="remove-cart-item" @click="removeCartItem(product.product_id)">Remove from cart</span>
                                        </div>
                                    </div>
                               
                                </div>
                                
                            </div>
                        </div>
                    </div>
        
                    <!-- <div> -->

                        <!-- <CartSummary
    
                        :shipping-fee=cartSummaryDetails.shippingFee
                        :cart-items-subtotal=appStore.formatNumber(cartSummaryDetails.itemsSubtotal)
                        :estimated-tax=cartSummaryDetails.estimatedTax
                        :total-cart-items=appStore.formatNumber(cartSummaryDetails.totalItems)
                        :order-total=appStore.formatNumber(cartSummaryDetails.orderTotal)
    
                        /> -->
                        <CartSummary
                        :shipping-fee="appStore.cartSummaryDetails.shippingFee"
                        :cart-items-subtotal="
                            appStore.formatNumber(appStore.cartSummaryDetails.itemsSubtotal)
                        "
                        :estimated-tax="appStore.cartSummaryDetails.estimatedTax"
                        :total-cart-items="
                            appStore.formatNumber(appStore.cartSummaryDetails.totalItems)
                        "
                        :order-total="
                            appStore.formatNumber(appStore.cartSummaryDetailsOrderTotal)
                        "
                        />
                </div>
            </div>
            
            <div v-else >
                <CartEmpty/>
            </div>

        </template>
        <template v-else>
            <CartEmpty/>
        </template>

    </div>
</template>

<script setup lang="ts">

useHead({
    title: "Skin Soko | Cart"
})

import {useStore, axiosInstance} from '@/stores/state'
// import { CartProduct, CartItems } from '~~/interfaces';

const appStore = useStore()


/**object to hold details to be put in the cart summary of the cart page */
const cartSummaryDetails = ref({
    totalItems: 0,
    itemsSubtotal: 0,
    shippingFee: 0,
    estimatedTax: 0,
    orderTotal: 0
})


/**variable to hold the total items of the product that user wants to 
 * add to their cart */
 const cartProduct = ref({
    totalItems: 1
})


/**array to hold the cart items of a user. To be shown on ui */
// let cart_items = ref<CartItems>({ current_page: 0, total_pages: 0, query_results: [] });
let cart_items: any = ref();

cart_items.value = await appStore.getCartItems();

// if (cart_items.value) { /**if there are items in cart, update the cart summary */
//     getCartSummary()
// }


/** getting details to show on the cart summary
 * is only called after the function to get cart items
*/
async function getCartSummary() {
    let { totalItems, itemsSubtotal, shippingFee, estimatedTax, orderTotal } = cart_items.value.cart_summary;

    /**object to hold details to be put in the cart summary */
    cartSummaryDetails.value.totalItems = totalItems,
    cartSummaryDetails.value.itemsSubtotal = itemsSubtotal,
    cartSummaryDetails.value.shippingFee = shippingFee,
    cartSummaryDetails.value.estimatedTax =  estimatedTax,
    cartSummaryDetails.value.orderTotal = orderTotal

}

/**func to refresh cart items shown on the page, eg after
 * user removes item from cart */
async function updateCartItemsShown() {
    cart_items.value = await appStore.getCartItems()
}

/**remove cart item and update UI */
async function removeCartItem(product_id: number) {
    const remove_user_cart_item_url = `/users/cart/remove/${product_id}/`

    try {
        await axiosInstance.delete(remove_user_cart_item_url)

        /**refresh items shown on the page */
        updateCartItemsShown()


    } catch (error) {
    }
}

/**func to empty cart and update ui */
async function clearEntireCart() {
    const clear_cart_url = `/users/cart/clear/`
    
    try {
        await axiosInstance.delete(clear_cart_url)

        /**refresh items shown on page */
        updateCartItemsShown()

    } catch (error) {
    } 
}

async function updateProductSubtotal(product: any) {
    const newCartDetails = {
        product_id: product.product_id,
        quantity: product.quantity
    }

    /**if user selects more items than available */
    // if (product.quantity > product.product.quantity_in_stock) {
    //     appStore.errorMessageToShowOnToast = `You can only select a maximum of ${product.product.quantity_in_stock} items`
    //     appStore.showToast()
    //     return
    // }
    const productID = product.product_id

    const update_user_cart = `/users/cart/update/${productID}/`
    const formData = new FormData()
    formData.append("new_product_quantity", newCartDetails.quantity)
    

    try {
        await axiosInstance.post(update_user_cart, formData, {
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })
        
        updateCartItemsShown()  /**update products info shown on page */
    } catch (error) {
    } 
}



/**func called when user clicks on the buttons
 * to add/deduct cart item  (on addition/subtraction) */
function updateQuantity(product: any, operation: string) {
    if (operation.toLowerCase() === "subtract" && product.quantity > 1) {
        product.quantity--
    }
    else if (operation.toLowerCase() === "add") {
        product.quantity++;
    }
}


</script>

<style lang="scss" scoped>



.cart-ord{
    margin: 0 auto;
    margin-top: 10rem;
    max-width: 1100px;
    padding: 1rem;
    position: relative;

    .cart-header-ttl-wrp{
        border-bottom: 1px solid gainsboro;
        display: flex;
        padding: 1rem;
        align-items: center;
        justify-content: space-between;
        .cart-header{
            font-weight: 400;
        }

        p{
            cursor: pointer;
            color: red;
            font-size: 1.3rem;
            text-decoration: underline;
        }
    }
}


.cart-it-wrapper{
    display: grid;
    grid-template-columns: 60% 40%;
    /* grid-gap: 1rem; */
    .cart-container{
        margin: 0 1rem;
        .cc-details{

            .cart-items-wrp{

                .cart-item-div{
                    border-bottom: 1px solid gainsboro;
                    padding: 1rem;
                    margin: 2rem 0;
                    font-weight: 400;
                    font-size: 1.4rem;
                    display: grid;
                    grid-template-columns: 70% 30%;
                    line-height: 160%;
                    .item-dets{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        img{
                            width: 17rem;
                            margin-right: 1.6rem;
                        }
                        .item-name, .item-price{
                            font-size: 1.5rem;
                            opacity: .8;
                            font-weight: 400;
                        }
                        .item-price{
                            font-size: 1.4rem;
                        }
                        p{
                            padding: .2rem 0;
                        }
                        

                    }

                    .item-quantity{
                        display: grid;
                        place-items: center;
                      
                    }
                    .remove-item-div{
                        margin: .5rem 0;
                        span{
                            cursor: pointer;
                            color: red;
                            font-size: 1.3rem;
                        }
                    }
                }

                .update-ttls-wrp {
                    margin: 1rem 0;
                    // margin-bottom: 2rem;
                    .update-cart-totals{
                        cursor: pointer;
                        font-size: 1.4rem;
                        color: var(--webPriColor);
                    }
                }

            }
        }
    }


}



//CART SUMMARY

.cart-summary-container{
        margin: 0 1rem;
        position: sticky;
        top: 10rem;
        .csc-wrp{
            .csc-details{
                padding: 3rem 1.4rem;
                background-color: gainsboro;
                .csc-header{
                    border-bottom: .1px solid black;
                    font-size: 1.5rem;
                    padding: 1rem 0;
                    font-weight: 500;
                }
                .csc-div{
                    div{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        font-size: 1.3rem;
                        padding: 1.3rem 0;

                        border-bottom: 1px solid gainsboro;
                    }
                    .order-ttl{
                        font-weight: 500;
                        font-size: 1.5rem;
                        border-bottom: .1px solid black;
                        border-top: .1px solid black;
                    }
                }
            }

                a{
                    border: 1px solid;
                    width: 100%;
                    color:white;
                    text-decoration: none;
                    .checkout-btn{
                        background-color: black;
                        padding: 1.5rem;
                        margin: 3rem 0;
                        text-align: center;
                        font-size: 1.3rem;
                        
                    }
                }
        }
}


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


@media screen and (max-width: 750px) {
    .cart-it-wrapper{
        grid-template-columns: 1fr;
    }
    
    
}

@media screen and (max-width:550px) {
    .cart-it-wrapper{

        .cart-container{
            .cc-details{
                .cart-items-wrp{
                    .cart-item-div{
                        grid-template-columns: 1fr;
        
                        
                        .item-quantity{
                            margin: 2rem 0;
                            display: block;
                        }
                    }
                }
            }
        }
    }

    
}

</style>