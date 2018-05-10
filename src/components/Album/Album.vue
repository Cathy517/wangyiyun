<template>
  <div id="Album" v-if="albumData">
     <ul class="searchsingerList albumList">
         <li v-for="item in albumData" :key="item.id">
            <router-link :to="`/albumDetail?id=${item.id}`">
                <img :src="item.picUrl | filterImg">
                <span class="msk"></span>
                <span>{{item.name}}</span>
                <span>{{item.artist.name}}</span>
            </router-link>
         </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: "Album",
  props: ["albumData"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
#Album {
  ul {
    .msk {
      margin: 0;
      padding: 0;
    }
    span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 5px;
      font-size: $font-size - 2;
    }
  }
}
</style>
