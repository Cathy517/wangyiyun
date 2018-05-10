<template>
  <div id="SingerComponent">
      <ul class="searchsingerList" v-if="singersData">
        <li v-for="(item,idx) in singersData" :key="idx">
          <router-link :to="`/artist?id=${item.id}&avator=${item.picUrl}&name=${item.name}`">
            <img :src="item.picUrl | fiterAvator | filterImg" alt="">
          </router-link>
          <router-link :to='`/artist?id=${item.id}&avator=${item.picUrl}&name=${item.name}`'>              
            <p>{{item.name}}</p>
          </router-link>    
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "Singer",
  props: ["singersData"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
</style>
