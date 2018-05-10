<template>
  <div id="ProgramRelist">
     <ul class="searchList" v-if="programrecommendData">
         <li v-for="(i,idx) in programrecommendData" :key="idx">
             <router-link to="">
                 <img class="pic" :src="i.mainSong.album.picUrl |filterImg" alt="">
                 <span class="name">
                    <i>{{i.mainSong.name}}</i>
                    <i class="des">{{i.radio.name}}</i>
                 </span>
                 <span class="category">
                     <i>{{i.radio.category}}</i>
                 </span>
             </router-link>
         </li>
     </ul>
      <ul class="searchList" v-if="privatecontentData">
         <li v-for="(i,idx) in privatecontentData" :key="idx">
             <router-link to="">
                 <img class="pic" :src="i.picUrl |filterImg" alt="">
                 <span class="name">
                    <i>{{i.name}}</i>
                    <i class="des">{{i.copywriter}}</i>
                 </span>
                 <span class="category">
                     <i>{{i.alg}}</i>
                 </span>
             </router-link>
         </li>
     </ul>
  </div>
</template>
<script>
export default {
  name: "ProgramRelist",
  props: ["programrecommendData","privatecontentData"],
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "~@/assets/scss/variables.scss";
</style>
