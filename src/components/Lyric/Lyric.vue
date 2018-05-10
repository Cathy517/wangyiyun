<template>
  <div id="Lyric" v-if="lyricData">
    <!-- 搜索页面的歌曲的歌词 -->
    <ul v-if="name==='search'" class="lyricList">
      <li v-for="(itemx,idx) in lyricData" :key="idx">
        <span class="lyricDes">
          <span>{{itemx.name}}</span>
          <span>{{itemx.artists[0].name}}</span>
          <span>《{{itemx.album.name}}》</span>
          <span>{{itemx.duration | transformTime}}</span>
        </span>
        <span class="lyrics">
          <span :class="{collapse:isCollapse}" class="lyricstext">
            <p v-for="(text,idxs) in  (itemx.lyrics.txt).split('\n')" :key="idxs">{{text}}</p>
          </span>
          <span class="crl" @click="collapse()">
            <span v-if="isCollapse">展开<i class="el-icon-arrow-down"></i></span>
            <span v-else>收缩<i class="el-icon-arrow-up"></i></span>
          </span>
        </span>
      </li>
    </ul>
    <!-- 单个歌曲的歌词 -->
      <ul v-if="name==='ep'" class="lyricList">
          <li>
              <span class="lyrics">
                <span :class="{collapse:isCollapse}" class="lyricstext">
                    <span v-for="(text,idx) in (lyricData.lyric).split('\n')" :key="idx">{{text}}</span>
                </span>
                <span class="crl" @click="collapse()">
                    <span v-if="isCollapse">展开<i class="el-icon-arrow-down"></i></span>
                    <span v-else>收缩<i class="el-icon-arrow-up"></i></span>
                </span>
              </span>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Lyric",
  props: ["lyricData", "name"],
  components: {},
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    collapse() {
      this.isCollapse = !this.isCollapse;
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
#Lyric {
  font-size: $font-size - 2;
  .lyrics,
  .lyricstext,
  .lyricstext span {
    display: block;
    line-height: 20px;
  }
  .lyrics {
    margin-left: 0;
    .lyricstext.collapse {
      max-height: 280px;
    }
  }
}
</style>
