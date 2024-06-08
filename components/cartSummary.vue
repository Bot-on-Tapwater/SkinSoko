<!-- component to show user the summary of items in their cart -->
<template>
    <div>
        <div class="cart-summary-container">
                <div class="csc-wrp">
                    <div class="csc-details">
                        <h1 class="csc-header">Cart Summary</h1>
                        <div class="csc-div">
                            <div>
                                <p>Total Items</p>
                                <p>{{ totalCartItems }}</p>
                            </div>
                            <div>
                                <p>Item(s) subtotal</p>
                                <p>Ksh {{ cartItemsSubtotal }}</p>
                            </div>
                            <div>
                                <p>Shipping</p>
                                <p>Ksh {{ shippingFee }}</p>
                            </div>
                            <div>
                                <p>Estimated Tax</p>
                                <p>Ksh {{ estimatedTax }}</p>
                            </div>
                            <div class="order-ttl">
                                <p>Order total</p>
                                <p>Ksh {{ orderTotal }}</p>
                            </div>
                        </div>

                        
                    </div>


                    <template v-if="showCheckoutButton()">
                    <NuxtLink to="/checkout">
                        <div class="checkout-btn">
                            <PriButton button-text="PROCEED TO CHECKOUT"/>
                        </div>
                    </NuxtLink>
                </template>
                </div>
        </div>

    </div>
</template>

<script setup lang="ts">

/**props to be entered by child components */
defineProps(["totalCartItems", "cartItemsSubtotal", "shippingFee", "estimatedTax", "orderTotal"])

/**to determine what pages to show the checkout button on */
function showCheckoutButton() {
    const showCheckoutButtonOnPages = ["/cart"]
    const pageRoute = useRoute()

    return showCheckoutButtonOnPages.includes(pageRoute.path)
}
</script>

<style lang="scss" scoped>

/**styles are in main.scss */

.cart-summary-container{
    padding: 1rem;
    position: sticky;
    top: 10rem;
    .csc-wrp{
        .csc-details{
            padding: 3rem 1.4rem;
            background-color: #F8FAFC;
            .csc-header{
                border-bottom: .1px solid gainsboro;
                font-size: 1.5rem;
                color: var(--webPriColor);
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
                    border-bottom: .1px solid gainsboro;
                    border-top: .1px solid gainsboro;
                    color: var(--webPriColor);
                }
            }
        }

            a{
                border: 1px solid;
                width: 100%;
                color:white;
                text-decoration: none;
                .checkout-btn{
                    text-align: center;
                    font-size: 1.3rem;
                    
                }
            }
    }
}

</style>