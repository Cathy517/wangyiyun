<template>
  <div id="SongList" v-if="songListData">
    <div class="songlistTitle">
      <h3>歌曲列表</h3>
      <span>{{songListData.tracks.length}}首歌</span>
      <p>播放<span class="red">{{songListData.playCount}}</span>次</p>
    </div>
    <ul class="searchList">
      <li v-for="(item,idx) in songListData.tracks" :key="idx">
        <router-link :to="`/songDetail?id=${item.id}`">
          <span class="number">{{idx+1}}</span>
          <span class="name"><img :src="item.al.picUrl" class="pic">{{item.name}}</span>
          <span>{{item.dt|transformTime}}</span>
          <span>{{item.ar[0].name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SongList",
  props: ["songListData"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
.songlistTitle {
  display: flex;
  border-bottom: 2px solid $red;
  padding: 20px 0 10px 0;
  font-size: $font-size - 2;
  align-items: center;
  h3 {
    font-weight: normal;
    margin-right: 20px;
    font-size: $font-size + 4;
  }
  span {
    flex: 1;
  }
}
</style>
