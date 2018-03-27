<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-express-typescript-template
      </h1>
      <h2 class="subtitle">
        nuxt express typescript
      </h2>
      <div class="links">
        <a
          @click="click"
          class="button--green">Foo</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import AppLogo from '~/components/AppLogo.vue'
import { foo } from '~/service/util'

export default {
  components: {
    AppLogo
  },
  methods:{
    click(args:string){

    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
