<template>
  <Header></Header>
  <nav>
    <ul>
      <li v-for="(item,index) in navList" 
      :key="index" 
      :class="{active:selectNum==index}"
      @click="onLiClick(index)"
      >{{item}}</li>
    </ul>
  </nav>
  <div class="content">
    <div class="item">
      <GlitchArt v-if="selectNum==0"></GlitchArt>
      <LineCanvas v-if="selectNum==1"></LineCanvas>
      <Gravity v-if="selectNum==2"></Gravity>
      <Particle v-if="selectNum==3"></Particle>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import GlitchArt from './components/GlitchArt.vue'
import LineCanvas from './components/LineCanvas.vue'
import Gravity from './components/Gravity.vue'
import Code from './components/Code.vue'
import Particle from './components/Particle.vue'
import { reactive,ref } from 'vue'

const selectNum = ref(0);
const navList=[
  'GlitchArt',
  'LineCanvas',
  'Gravity',
  'Particle',

]
const onLiClick = (e)=>{
  selectNum.value = e;
}
</script>

<style lang="scss" scoped>

nav{
  position: absolute;
  width: 150px;
  left:0;
  text-align: center;
}
.content{
  position: relative;
  width:calc(100% - 150px) ;
  left:140px;
  // border: 10px solid #000;
  margin:5px;
}
li{
  width: 130px;
  height: 30px;
  line-height: 30px;
  margin:10px 10px;
  cursor:pointer;
}
li.active{
  box-shadow: 0 0px 10px #547fcc;
}
</style>>
