<template>
  <div id="Search">
    <el-tabs v-model="SearchModel" type="border-card" @tab-click="handleClick">
        <el-tab-pane v-for="(item,index) in tabList" :key="index" :label="item.label" :name="item.name" :type="item.type">
          <!-- 单曲 -->
          <div v-if="item.type==1 && searchSongs">
            <p class="snote">搜索“{{keywords}}”,找到<span class="red">{{searchSongs.songCount}}</span>首{{item.label}}</p>
            <ul class="searchList">
              <li v-for="(itemx,idx) in searchSongs.songs" :key="idx">
                <router-link :to="`/songDetail?id=${itemx.id}`">
                  <span class="name">{{itemx.name}}</span>
                  <span>{{itemx.artists[0].name}}</span>
                  <span>{{itemx.album.name}}</span>
                  <span>{{itemx.duration | transformTime}}</span>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- 歌手 -->
          <div v-if="item.type == 100 && searchArtists">
            <p class="snote">搜索“{{keywords}}”,找到<span class="red">{{searchArtists.artistCount}}</span>个{{item.label}}</p>
            <SingerComponent :singersData="searchArtists.artists"></SingerComponent>
          </div>
          <!-- 专辑 -->
          <div v-if="item.type == 10 && searchAlbums">
            <p class="snote">搜索“{{keywords}}”,找到<span class="red">{{searchAlbums.albumCount}}</span>个{{item.label}}</p>
            <Album :albumData="searchAlbums.albums"></Album>
          </div>
          <!-- 视频 -->
          <div v-if="item.type == 1004 && searchMvs">
            <p class="snote">搜索“{{keywords}}”,找到<span class="red">{{searchMvs.mvCount}}</span>个{{item.label}}</p>
            <MV :mvData="searchMvs.mvs" title="search"></MV>
          </div>
          <!-- 歌词 -->
          <div v-if="item.type == 1006 && searchLyric">
            <p class="snote">搜索“{{keywords}}”,找到<span class="red">{{searchLyric.songCount}}</span>个{{item.label}}</p>
            <lyric :lyricData="searchLyric.songs" name="search"></lyric>
          </div>
          <!-- 歌单 -->
          <div v-if="item.type == 1000 && searchPlaylist">
            <p class="snote">搜索“{{keywords}}”,找到<span class="red">{{searchPlaylist.playlistCount}}</span>个{{item.label}}</p>
            <PlayListComponent :highqualityData="searchPlaylist.playlists"></PlayListComponent>
          </div>
          <!-- 主播电台 -->
          <div v-if="item.type == 1009 && searchRadio">
            <p class="snote">搜索“{{keywords}}”,找到<span class="red">{{searchRadio.djRadiosCount}}</span>个{{item.label}}</p>
            <ul class="searchsingerList audioList">
              <li v-for="(itemx,idx) in searchRadio.djRadios" :key="idx">
                  <img :src="itemx.dj.avatarUrl">
                  <p>{{itemx.name}}</p>
                  <p>by {{itemx.dj.nickname}}</p>
              </li>
          </ul>
          </div>
          <!-- 用户 -->
          <div v-if="item.type == 1002 && searchUser">
            <p class="snote">搜索“{{keywords}}”,找到<span class="red">{{searchUser.userprofileCount}}</span>个{{item.label}}</p>
              <ul class="searchList userList">
                <li v-for="(itemx,idx) in searchUser.userprofiles" :key="idx">
                    <a>
                        <img :src="itemx.avatarUrl">
                        <span class="name">
                            <i>{{itemx.nickname}}</i>
                            <i class="des">{{itemx.signature}}</i>
                        </span>
                        <span><el-button size="small" icon="el-icon-plus">加关注</el-button></span>
                        <span>歌单: {{itemx.authority | transformNumber}}</span>
                        <span>粉丝: {{itemx.followed | transformNumber}}</span>
                    </a>
                </li>
              </ul>
          </div>
        </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import SingerComponent from '@/components/SingerComponent/SingerComponent'
import Album from '@/components/Album/Album'
import MV from "@/components/MV/MV";
import Lyric from '@/components/Lyric/Lyric'
import PlayListComponent from '@/components/PlayListComponent/PlayListComponent'
export default {
  name: "Search",
  components: {
    SingerComponent,
    Album,
    MV,
    Lyric,
    PlayListComponent
  },
  data() {
    return {
      title: "搜索",
      SearchModel: "single",
      keywords: "",
      type: 1, // type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲 10: 专辑 100: 歌手 1000: 歌单 1002: 用户 1004: MV 1006: 歌词 1009: 电台
      tabList: [
        {
          label: "单曲",
          name: "single",
          type: 1
        },
        {
          label: "歌手",
          name: "singer",
          type: 100
        },
        {
          label: "专辑",
          name: "album",
          type: 10
        },
        {
          label: "视频",
          name: "video",
          type: 1004
        },
        {
          label: "歌词",
          name: "lyrics",
          type: 1006
        },
        {
          label: "歌单",
          name: "songs",
          type: 1000
        },
        {
          label: "主播电台",
          name: "audio",
          type: 1009
        },
        {
          label: "用户",
          name: "user",
          type: 1002
        }
      ]
    };
  },
  methods: {
    ...mapActions(["getSearchData"]),
    query(keywords, type, limit) {
      this.getSearchData({ keywords: keywords, type: type, limit: limit });
    },
    handleClick(tab, event) {
      this.type = tab.$attrs.type;
      this.query(this.keywords, this.type);
    },
    init() {
      this.keywords = this.$route.query.q;
      if (this.keywords !== "") {
        this.query(this.keywords, this.type);
      }
    }
  },
  computed: {
    ...mapState({
      searchSongs: state => state.search.search_songs, //单曲
      searchArtists: state => state.search.search_artists, //歌手
      searchAlbums: state => state.search.search_albums, //专辑
      searchMvs: state => state.search.search_mvs, //mv
      searchLyric: state => state.search.search_lyric, //歌词
      searchPlaylist: state => state.search.search_playlist, //歌单
      searchRadio: state => state.search.search_radio, //电台
      searchUser: state => state.search.search_user //用户
    })
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="scss">
@import "~@/assets/scss/variables.scss";
.searchList {
        padding: 10px 0;
        font-size: $font-size - 2;
        li {
            &:nth-child(even) {
                background: $grey;
            }
            a {
                display: flex;
                padding: 10px 20px;
                align-items: center;
            }
            span {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                &.name {
                    flex: 2;
                    i {
                        font-style: normal;
                        display: block;
                        line-height: 20px;
                        &.des {
                            color: $font-detail-color;
                        }
                    }
                }
                flex: 1;
                text-align:left;
                &:last-child {
                    flex: .5;
                    text-align: right;
                }
                &.number {
                    width: 30px;
                    flex: none;
                }
            }
            .pic,
            .pic img {
                width: 40px;
                height: 40px;
                margin-right: 10px;
                vertical-align: middle;
            }
            .category {
                i {
                    font-style: normal;
                    font-size: $font-size - 2;
                    border: 1px solid darken($grey, 5%);
                    color: $font-detail-color;
                    padding: 5px;
                    line-height: 28px;
                }
            }
        }
    }
</style>