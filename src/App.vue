<template>
  <div class="app">
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <svg-icon name="sun" />

    <div>{{ count }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style lang="less" scoped>
.app {
  color: #f00;
}
</style>
