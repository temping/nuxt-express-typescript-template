<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        GIT
      </h1>
      <h2 class="subtitle">
        temping/nuxt-express-typescript-template
      </h2>
      <div class="links">
        <a class="button--green" @click="openReference">OPEN</a>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  methods: {
    openReference(){
      window.open("https://github.com/temping/nuxt-express-typescript-template", "_blank");
    }
  }
}
</script>