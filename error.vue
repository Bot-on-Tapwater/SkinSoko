<!-- page to be shown in case of any errors -->
<template>
  <div class="ed-container">
    <div class="err-d">
      <div class="err-content">
        <template v-if="errorStatusCode === 404">
          <h3 class="error-ttl">{{ error.message }}</h3>
          <NuxtLink to="/">return home</NuxtLink>
        </template>

        <template v-else-if="error.statusCode === '500'">
          <h1 class="error-ttl">Something went wrong on our end</h1>
          <h2 class="error-p">
            Please try refreshing the page or try again after some time.
            <br />
            If the issue persists,
            <a href="mailto:skinsoko@gmail.com">Contact Us</a>
          </h2>
          <NuxtLink to="/">return home</NuxtLink>
          <!-- <p>{{ error }}</p> -->
        </template>

        <template v-else>
          <h1 class="error-ttl">Something went wrong</h1>
          <h2 class="error-p">
            Please try refreshing the page or try again after some time.
            <br />
            If the issue persists,
            <a href="mailto:skinsoko@gmail.com">Contact Us</a>
          </h2>
          <NuxtLink to="/">return home</NuxtLink>
          <!-- <p>{{ error }}</p> -->
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

interface pageError {
  url: string;
  statusCode: string;
  statusMessage: string;
  message: string;
  description: string;
  data?: any;
}

const error: pageError = useError();

const errorStatusCode: number = error.value.statusCode;
</script>

<style lang="scss" scoped>
body {
  font-weight: 400;
}
.error-ttl {
  font-size: 3rem;
  font-weight: 400;
}
.error-p {
  font-weight: 400;
}

.ed-container {
  background-color: whitesmoke;
  height: 100vh;
  width: 100vw;
}
.err-d {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 0;
  height: 50%;
  display: grid;
  text-align: center;
  place-items: center;
  padding: 0 2rem;
  .err-content {
    a {
      font-weight: 500;
      font-size: 1.3rem;
      text-transform: capitalize;
      text-decoration: underline;
      color: black;
    }
  }
}
</style>
