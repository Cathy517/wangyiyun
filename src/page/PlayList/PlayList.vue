<template>
  <div id="PlayList" class="area" v-if="highqualityJson">
      <div class="songTitle">
        <span>全部</span>
        <span class="choose">
          <el-button size="small">选择分类<i class="el-icon-arrow-down el-icon--right"></i></el-button>
        </span>
        <span>
          <el-button-group>
            <el-button size="small">热门</el-button>
            <el-button size="small">最新</el-button>
          </el-button-group>
        </span>
      </div>
  <PlayListComponent :highqualityData="highqualityJson.playlists" class="playlistcomponent margin"></PlayListComponent>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PlayListComponent from "../../components/PlayListComponent/PlayListComponent";
export default {
  name: "PlayList",
  props: [],
  components: { PlayListComponent },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getPlaylistHighquality"])
  },
  computed: {
    ...mapState({
      highqualityJson: state => state.songlist.playlisthighquality //精品歌单
    })
  },
  mounted() {
    this.getPlaylistHighquality({ limit: 40 });
  }
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
.songTitle {
  margin: 0 27px;
  padding: 15px 0;
  border-bottom: 2px solid $red;
  display: flex;
  align-items: center;
  .choose {
    flex: auto;
    margin: 0 10px;
  }
}
#PlayList{
  a{
    padding:0;
    .name,
    .nickname{
      display: block
    }
  }
}
</style>
