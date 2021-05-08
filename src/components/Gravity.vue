<template>
  <div class="gravity"></div>
  <Code>
<pre>
import {Gravity} from '../canvasAin'; 
Gravity('.gravity');
</pre>
  </Code>
</template>

<script setup>
import Code from './Code.vue'
import {Gravity} from '../canvasAin';
import { onMounted } from 'vue';
let demo;
  onMounted(()=>{
    demo = Gravity('.gravity');
    console.log('demo',demo);
  })
</script>

<style lang="scss" scoped>
  .gravity{
    height:400px;
    background: #000;
  }
</style>