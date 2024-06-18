<template>
  <section class="outer-section-wrp">
    <ProfileNavbar/>

    <div class="profile-ord">
      <div class="pord-container">
        <template v-if="userOrders && userOrders.query_results">
          <div class="orders-summary-wrp">
            <div class="osw-ord">
              <div class="summarydiv">
                <div class="summ-et">
                  <div class="summary-ttl">Total Orders</div>
                  <div class="summary-p">
                    {{ userOrders.query_results.length }}
                  </div>
                </div>
              </div>

              <div class="summarydiv">
                <div class="summ-et">
                  <div class="summary-ttl">Active Orders</div>
                  <div class="summary-p">
                    {{ userOrders.query_results.length }}
                  </div>
                </div>
              </div>

              <div class="summarydiv">
                <div class="summ-et">
                  <div class="summary-ttl">Completed Orders</div>
                  <div class="summary-p">0</div>
                </div>
              </div>

              <div class="summarydiv">
                <div class="summ-et">
                  <div class="summary-ttl">Declined Orders</div>
                  <div class="summary-p">0</div>
                </div>
              </div>
            </div>
          </div>

          <div class="orders-wrp">
            <template v-if="userOrders.query_results.length > 0">
              <div class="orderstables">
                <table>
                  <tr>
                    <th>Order ID</th>
                    <th>Payment Mode</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Created At</th>
                  </tr>

                  <tr v-for="order in userOrders.query_results">
                    <td>{{ order.order_id }}</td>
                    <td>Cash On Delivery</td>
                    <td>Ksh {{ appStore.formatNumber(order.total_amount) }}</td>
                    <td>{{ order.order_status }}</td>
                    <td>{{ order.created_at }}</td>
                  </tr>
                </table>
              </div>
            </template>
          </div>
        </template>

        <template v-else>
          <p class="item-absent">You have not placed any orders.</p>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const appStore = useStore();

const userOrders = ref(await appStore.getUserOrders());


</script>

<style lang="scss" scoped>
// styles in dashboard.scss
</style>
