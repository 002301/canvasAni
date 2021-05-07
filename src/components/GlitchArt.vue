<template>
  <div class="GlitchArt">
  </div>
  <Code>
<pre>
import {GlitchArt} from '../canvasAin'; 
let img = "../assets/bg.jpg" 
GlitchArt('.GlitchArt',img);
</pre>
  </Code>
</template>

<script setup>
import Code from './Code.vue'
import {GlitchArt} from '../canvasAin';
import img from "../assets/bg.jpg";
import { onMounted } from 'vue';
  onMounted(()=>{
    GlitchArt('.GlitchArt',img);
  })
</script>

<style lang="scss" scoped>
  .GlitchArt{
    height:400px;
  }
</style>