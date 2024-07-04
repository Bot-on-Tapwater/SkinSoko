<template>
  <div>
    <h1>Pay page</h1>
    <div class="iframe-wrp">
      <iframe
        src=""
        frameborder="0"
        class="iframe"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const appStore = useStore();

const myaxios = axios.create({
  baseURL: " https://pay.pesapal.com/v3/api/",
  // baseURL: " https://cybqa.pesapal.com/pesapalv3/api/",
  //withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

myaxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error => ", error);
  }
);

definePageMeta({
  layout: "newla",
});
onMounted(async () => {
  await getToken()
  // await registerIPN()
  // await submitOrder()
});

let token = ref("");

async function getToken() {
  try {
    const res = await myaxios.post("/Auth/RequestToken", {
      consumer_key: "Uuxs5bJpO41gihSHqdnXWdO5ZDlr8RT6",
      consumer_secret: "zL2AC3wIrdMxHoxiEYCwgUEblX4=",
    });
    console.log("res => ", res);

    if (!res.data.error) {
      /**no error found */
      token.value = res.data.token;
    }
  } catch (error) {}
}

/**
 * {
    "url": "localhost:3000/payment",
    "created_date": "2024-07-04T08:03:40.6563014Z",
    "ipn_id": "9d14a384-c677-40d3-a543-dd094f458ba9",
    "notification_type": 0,
    "ipn_notification_type_description": "GET",
    "ipn_status": 1,
    "ipn_status_decription": "Active",
    "status": "200",
    "message": "Request processed successfully"
}
 */

async function registerIPN() {
  try {
    const res = await myaxios.post(
      "/URLSetup/RegisterIPN",
      {
        url: "localhost:3000/payment",
        ipn_notification_type: "GET",
      },
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
    console.log("res => ", res);

    if (!res.data.error) {
      /**no error found */
      // token.value = res.data.token
      console.log("no error");
    }
  } catch (error) {}
}

async function submitOrder() {
  try {
    const response = await myaxios.post(
      "/Transactions/SubmitOrderRequest",
      {
        id: "idtwo",
        currency: "KES",
        amount: 1.0,
        description: "pay for your item",
        callback_url: "localhost:3000/pay",
        notification_id: "9d14a384-c677-40d3-a543-dd094f458ba9",
        billing_address: {
          phone_number: "0795494587",
          email_address: "",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    if (!response.data.error) {
      console.log("order res=> ", response.data);
      const paymentIframe = document.querySelector(".payframe");
      location.href = response.data.redirect_url
      paymentIframe.src = response.data.redirect_url;
    }
  } catch (error) {}
}

</script>

<style lang="scss" scoped>
.iframe-wrp {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
  height: auto;
  min-height: 100vh;

  .iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
