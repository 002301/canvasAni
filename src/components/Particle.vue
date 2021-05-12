<template>
  <div class="Particle">
  </div>
  <Code>
<pre>
import {Particle} from '../canvasAin'; 
new Particle('.Particle');
</pre>
  </Code>
</template>

<script setup>
import Code from './Code.vue'
import {Particle} from '../canvasAin';
import { onMounted } from 'vue';
  onMounted(()=>{
    new Particle('.Particle');
  })
</script>

<style lang="scss" scoped>
  .Particle{
    height:400px;
    background: #000;
  }
</style>