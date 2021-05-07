<template>
  <div class="code">
    <div class="title"><div class="point"></div>{{title}}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup={propes,title}>

</script>

<style lang="scss" scoped>
.code{
  /* position: absolute; */
  width: 100%;
  text-align: left;
  border:1px solid #fff;
  border-radius:10px;
  background:#2d2a3b;
  margin-top:10px;
  color:#fff;
  font-size: 20px;
}
.code>pre{
  text-align: left;
  margin:0 10px;
}

.title{
  text-align: center;
  line-height: 24px;
  position: relative;
  height: 24px;
}
.content{
  margin:5px 10px;
}
.title>.point{
  width: 10px;
  height: 10px;
  top:25%;
  left:10px;
  position: absolute;
  border-radius: 5px;
  background:#fd504b;
}
.title>.point::before{
  content:" ";
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 5px;
  background:#fcb538;
  left:15px;
}
.title>.point::after{
  content:" ";
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 5px;
  background:#2bc640;
  left:30px;
}
</style>