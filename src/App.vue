<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
 width: 100%;
 height: 100%;
  background-image: url("./assets/img/bg_1.png");
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

</style>
