<template>
  <div class="lineCanvas">
  </div>
  <Code>
<pre>
import {lineCanvas} from '../canvasAin'; 
new lineCanvas('.lineCanvas');
</pre>
  </Code>
</template>

<script setup>
import Code from './Code.vue'
import {lineCanvas} from '../canvasAin';
import { onMounted } from 'vue';
  onMounted(()=>{
    new lineCanvas('.lineCanvas');
  })
</script>

<style lang="scss" scoped>
  .lineCanvas{
    height:400px;
  }
</style>