<template>
    <section id="services-section" class="mi-oud">
        <div class="mi-oud-wrapper">

          <div class="wcu">
            <div class="wcu-wrp">
              <h1 class="section-title">Frequenty Asked Questions:</h1>
              <div class="wc-wrapper">

                <div class="wc-p-div">
                  <div class="svgp">
                   
                    <h3 class="services-h"> Do you offer international shipping? </h3>
                    <div class="serv-arrow">
                        <span class="vertical"></span>
                        <span class="horizontal"></span>
                    </div>
                  
                  </div>
                  <div class="serv-p">
                    <p class="services-p">At this time, we are no longer shipping internationally. Orders placed can only be shipped within Tanzania.</p>
                    <p></p>
                  </div>
                 
                </div>
                
                <div class="wc-p-div">
                  <div class="svgp">
                   
                    <h3 class="services-h"> Can I change the shipping address of a placed order? </h3>
                    <div class="serv-arrow">
                        <span class="vertical"></span>
                        <span class="horizontal"></span>
                    </div>
                  
                  </div>
                  <div class="serv-p">
                    <p class="services-p">At this time, once the order has been placed, we do not have the ability to change/modify any details of the order, including the address.</p>
                    <p></p>
                  </div>
                 
                </div>

                <div class="wc-p-div">
                  <div class="svgp">
                   
                    <h3 class="services-h"> Can I modify or cancel my order after it's placed? </h3>
                    <div class="serv-arrow">
                        <span class="vertical"></span>
                        <span class="horizontal"></span>
                    </div>
                  
                  </div>
                  <div class="serv-p">
                    <p class="services-p">Unfortunately, once an order is placed, it cannot be modified or canceled. Please review your order carefully before completing the checkout process.</p>
                    <p></p>
                  </div>
                 
                </div>
                <div class="wc-p-div">
                  <div class="svgp">
                   
                    <h3 class="services-h"> Are there any warranty options for the products?</h3>
                    <div class="serv-arrow">
                        <span class="vertical"></span>
                        <span class="horizontal"></span>
                    </div>
                  
                  </div>
                  <div class="serv-p">
                    <p class="services-p">Most of our products come with a standard manufacturer's warranty. Details about the warranty period and coverage can be found on the product page or in the product's documentation.</p>
                    <p></p>
                  </div>
                 
                </div>
                <div class="wc-p-div">
                  <div class="svgp">
                   
                    <h3 class="services-h"> How do I contact customer support? </h3>
                    <div class="serv-arrow">
                        <span class="vertical"></span>
                        <span class="horizontal"></span>
                    </div>
                  
                  </div>
                  <div class="serv-p">
                    <p class="services-p"> You can reach our customer support team through the "Contact Us" link on the footer. Alternatively, you can call our helpline during business hours.</p>
                    <p></p>
                  </div>
                 
                </div>
                <div class="wc-p-div">
                  <div class="svgp">
                   
                    <h3 class="services-h"> What is your return policy?</h3>
                    <div class="serv-arrow">
                        <span class="vertical"></span>
                        <span class="horizontal"></span>
                    </div>
                  
                  </div>
                  <div class="serv-p">
                    <p class="services-p">We offer a hassle-free return policy within 10 days of receiving your order. Please visit our "Returns & Exchanges" page for detailed instructions on initiating a return.</p>
                    <p></p>
                  </div>
                 
                </div>
                <div class="wc-p-div">
                  <div class="svgp">
                   
                    <h3 class="services-h">How can I track my order? </h3>
                    <div class="serv-arrow">
                        <span class="vertical"></span>
                        <span class="horizontal"></span>
                    </div>
                  
                  </div>
                  <div class="serv-p">
                    <p class="services-p">Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this tracking number on our website or the courier's website to monitor the status of your shipment.</p>
                    <p></p>
                  </div>
                 
                </div>
                <div class="wc-p-div">
                  <div class="svgp">
                   
                    <h3 class="services-h">How can I place an order on your website?</h3>
                    <div class="serv-arrow">
                        <span class="vertical"></span>
                        <span class="horizontal"></span>
                    </div>
                  
                  </div>
                  <div class="serv-p">
                    <p class="services-p"> To place an order, simply browse our products, select the items you want, and click on the "Add to Cart" button. Follow the checkout process to enter your shipping and payment information</p>
                    <p></p>
                  </div>
                 
                </div>

                
              </div>
            </div>
          </div>
         
      </div>

    </section>
</template>

<script setup lang="ts">


useHead({
  "title": "Skin Soko | FAQs"
})
onMounted(FAQs)
/**func to show more details about a FA Question */
function FAQs(){
    const faqsWrapper = document.querySelectorAll(".wc-p-div")

    faqsWrapper.forEach((item)=>{
    item.addEventListener("click", ()=>{
        item.querySelector(".serv-p")?.classList.toggle("show-p")
        item.querySelector(".serv-arrow")?.classList.toggle("active-svg")
        })
    })
}

</script>

<style lang="scss" scoped>

.serv-arrow { /**the plus icon/svg */
    display: inline-block;
    position: relative;
    width: 1.3rem;
    height: 1.2rem;
    span {
        position: absolute;
        background-color: #333; 
    }
    .vertical {
        width: .1rem;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
        transition: all .2s ease-in;
    }
    
    .horizontal {
        height: .1rem;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }

}

.active-svg{ /**class to be toggled to active icon/svg */
    .vertical{
        opacity: 0;
        height: 0;
    }
}

.mi-oud{
    height: auto;
    color: black;
    margin: 0;
    margin-top: 8rem;
    .mi-oud-wrapper{
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      
      .wcu{
        color: black;
        .wcu-wrp{

          .section-title{
            padding: 3rem 0;
            font-weight: 400;
            font-size: 2.3rem;
            opacity: .9;
          }
          .wc-wrapper{
            .wc-p-div{
              border-bottom: 1px solid rgba(0,0,0,.2);
              padding: 2rem 0;
              cursor: pointer;
              transition: background-color .2s ease-in-out;
              
              &:nth-child(1) {
                border-top: 1px solid rgba(0,0,0,.2);
              }

              .svgp{
                display: flex;
                align-items: center;
                justify-content: space-between;
                svg{
                  margin:0 1rem;
                  width: 1.5rem;
                  transition: all .2s ease-in-out;
                }
                h3{
                  font-size: 1.7rem;
                  opacity: 0.9;
                  font-weight: 400;
                  padding-bottom: 2rem;
                }
                
              }
              .serv-p{
                display: grid;
                grid-template-columns: 1fr 1fr;
                overflow: hidden;
                max-height: 0;
                transition:max-height .4s ease-in;
                will-change: max-height;
                p{
                  font-size: 1.4rem;
                  line-height: 1.7;
                  opacity: .9;
                  font-weight: 400;
                }
              }
              
              .show-p{
                max-height: 3000px;
              }
            }

          }
        }
      }
    }

}

@media screen and (max-width: 650px) {
  .mi-oud {
    // padding: 7rem 0;

    .mi-oud-wrapper{
      .wcu .wcu-wrp  {
        .section-title{
          font-size: 1.9rem;
        }
        .wc-wrapper .wc-p-div{
          .svgp{
            h3{
              font-size: 1.5rem;
            }
  
          }
          .serv-p{
            grid-template-columns: 70% 30%;
            p{
              font-size: 1.3rem;
            }
          }
        }
      }
  
    }
  }
  
  
}
@media screen and (max-width: 450px) {
  .mi-oud .mi-oud-wrapper .wcu .wcu-wrp .wc-wrapper .wc-p-div{
        .svgp{
          svg{
            width: 2.2rem;
          }

        }
        .serv-p{
          grid-template-columns: 80% 20%;
        }
      }
}




</style>