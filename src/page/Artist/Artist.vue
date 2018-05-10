<template>
  <div id="Artist" class="area">
    <div class="artistbox container">
      <div class="containerLeft">
        <h1 class="name">{{singer.name}}</h1>
        <div class="singerAvator">
          <img :src="singer.avator | filterImg" alt="">
        </div>
        <el-tabs v-model="singerModelTab" type="border-card" @tab-click="singerTabClick">
          <el-tab-pane v-for="(item,index) in singer.menu" :key="index" :label="item.label" :name="item.name">
            <div v-if="item.name==='songs'" class="songs">
              <ul class="searchList">
                <li v-for="(i,idx) in songJson.hotSongs" :key="idx">
                  <router-link :to="`/songDetail?id=${i.id}`">
                    <span class="name">{{i.name}}<b v-if="i.alia.length>0">-{{i.alia[0]}}</b></span>
                    <span>{{i.dt | transformTime}}</span>
                    <span>{{i.al.name}}</span>
                  </router-link>
                </li>
              </ul>
            </div>
            <div v-if="item.name==='album'" class="album">
              <Album :albumData="albumJson.hotAlbums"></Album>
            </div>
            <div v-if="item.name==='mv'" class="mvs">
              <MV :mvData="mvJson.mvs" title="singer"></MV>
            </div>
            <div v-if="item.name==='description'" class="description">
              <h3>{{singer.name}}简介</h3>
              <p>{{desJson.briefDesc}}</p>
              <div v-for="(item,index) in desJson.introduction" :key="index">
                <h2>{{item.ti}}</h2>
                <p v-for="(i,idx) in (item.txt).split('\n')" :key="idx">
                  {{i}}
                </p>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>

      </div>
      <div class="containerRight">
        <div class="artTitle">热门歌手</div>
        <SingerComponent class="hotsingersbox" :singersData="hotSingerJson.artists"></SingerComponent>
       </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Album from "@/components/Album/Album";
import MV from "@/components/MV/MV";
import SingerComponent from "@/components/SingerComponent/SingerComponent";

export default {
  name: "Artist",
  components: {
    Album,
    MV,
    SingerComponent
  },
  data() {
    return {
      pagename: "歌手单页",
      singer: {
        name: "",
        avator: "",
        id: "",
        menu: [
          {
            label: "热门50单曲",
            name: "songs"
          },
          {
            label: "所有专辑",
            name: "album"
          },
          {
            label: "相关MV",
            name: "mv"
          },
          {
            label: "歌手介绍",
            name: "description"
          }
        ]
      },
      singerModelTab: "songs"
    };
  },
  methods: {
    ...mapActions([
      "getSingerSongData",
      "getSingerAlbumData",
      "getSingerMVData",
      "getSingerDesData",
      "getHotSingersData"
    ]),
    //歌手单曲
    get_singersong(id, limit) {
      this.getSingerSongData({ id: id, limit: limit });
    },
    //歌手专辑
    get_singeralbum(id, limit) {
      this.getSingerAlbumData({ id: id, limit: limit });
    },
    //歌手MV
    get_singermv(id) {
      this.getSingerMVData({ id: id });
    },
    //歌手描述
    get_singerdes(id) {
      this.getSingerDesData({ id: id });
    },
    //热门歌手
    get_hotsingers(offset, limit) {
      this.getHotSingersData({ offset: offset, limit: limit });
    },
    //相似歌手
    get_samesingers(id) {
      this.getSameSingersData({ id: id });
    },
    singerTabClick(tab, event) {
      switch (tab.name) {
        case "song":
          this.get_singersong(this.singer.id);
          break;
        case "album":
          this.get_singeralbum(this.singer.id);
          break;
        case "mv":
          this.get_singermv(this.singer.id);
          break;
        case "description":
          this.get_singerdes(this.singer.id);
          break;
        default:
          break;
      }
    },
    //初始化
    init() {
      this.singer.name = this.$route.query.name;
      this.singer.avator = this.$route.query.avator;
      this.singer.id = this.$route.query.id;
      this.get_singersong(this.singer.id); //歌手单曲
      this.get_hotsingers(0, 6); //热门歌手
      // this.get_samesingers(this.singer.id); //相似歌手
    }
  },
  computed: {
    ...mapState({
      songJson: state => state.singer.song,
      albumJson: state => state.singer.album,
      mvJson: state => state.singer.mv,
      desJson: state => state.singer.singerdes,
      hotSingerJson: state => state.singer.hotsingers,
      sameSingersJson: state => state.singer.samesingers
    })
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
.artistbox {
  .containerLeft {
    .name {
      margin-bottom: 10px;
      font-weight: normal;
    }
    .singerAvator {
      img {
        width: 640px;
      }
    }
    .album,
    .mvs {
      .artistName {
        display: none;
      }
    }
    .description {
      h3 {
        border-left: 2px solid $red;
        padding-left: 10px;
      }
      p {
        text-indent: 24px;
        line-height: 25px;
      }
      p,
      h4 {
        margin-top: 10px;
      }
    }
  }
  .containerRight {
    .artTitle {
      padding: 10px;
      margin: 10px;
      border-bottom: 1px solid darken($grey, 5%);
    }
    .hotsingersbox {
      padding: 9px;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 50px;
          margin:0 0 0 25px;
          img {
            width: 100%;
            height: 50px;
          }
          p {
            font-size: $font-size - 2;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>
