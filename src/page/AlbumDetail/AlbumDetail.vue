<template>
  <div id="AlbumDetail" class="area">
      <div class="container">
            <div class="containerLeft">
                <div class="songarea" v-if="albumdetailJson.album">
                    <div class="sl">
                        <div class="u-cover">
                            <img :src="albumdetailJson.album.picUrl | filterImg" alt="">
                            <div class="msk"></div>
                        </div>
                    </div>
                    <div class="sr">
                        <div class="songdetail">
                            <h3>{{albumdetailJson.album.name}}</h3>
                            <p>歌手:{{albumdetailJson.album.artist.name}}</p>
                            <p>发行公司：{{albumdetailJson.album.company}}</p>
                            <p class="description" :class="{collapse:isCollapse}">
                                介绍：{{albumdetailJson.album.description}}
                            </p>
                            <p class="collapseBtn" @click="collapse()">
                                <span v-if="isCollapse">展开<i class="el-icon-arrow-down"></i></span>
                                <span v-else>收缩<i class="el-icon-arrow-up"></i></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="songlistbox">
                    <div class="songlistTitle">
                        <h3>歌曲列表</h3>
                    </div>
                    <ul class="searchList">
                        <li v-for="(i,key) in albumdetailJson.songs" :key="key">
                            <router-link :to="`/songDetail?id=${i.id}`">
                                <span class="number">{{key + 1}}</span>
                                <span class="name">{{i.name}}</span>
                                <span>{{i.ar[0].name}}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="commentbox">
                    <Comment :commentData="albumcommentJson.topComments" name="最热评论"></Comment>
                    <Comment :commentData="albumcommentJson.hotComments" name="精彩评论"></Comment>
                    <Comment :commentData="albumcommentJson.comments" name="评论"></Comment>
                </div>
            </div>
            <div class="containerRight">
                <div class="margin">
                    <div class="simisongbox">
                        <div>他的其他热门专辑</div>
                        <ul>
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Comment from "../../components/Comment/Comment";
export default {
  name: "AlbumDetail",
  props: [],
  components: {Comment},
  data() {
    return {
      pagename: "专辑详情",
      isCollapse: true
    };
  },
  methods: {
    ...mapActions(["getAlbumDetailData", "getAlbumCommentData","getSingerAlbumData"]),
    collapse(){
        this.isCollapse=!this.isCollapse;
    }
  },
  computed: {
    ...mapState({
      albumdetailJson: state => state.songlist.albumdetail,
      albumcommentJson: state => state.songlist.albumcomment
    })
  },
  mounted() {
    let id = this.$route.query.id;
    this.getAlbumDetailData({ id });
    this.getAlbumCommentData({ id });
  }
};
</script>
<style lang="scss">
@import "~@/assets/scss/variables.scss";

#AlbumDetail {
    .songarea{
        display: flex;
        .sl{
            width: 230px;
            .u-cover{
                position: relative;
                margin-top: 30px;
                img{
                    width: 177px;
                    height: 177px;
                }
                .msk{
                    position: absolute;
                    width: 209px;
                    height: 177px;
                    top: 0;
                    left: 0;
                    background:url('../../assets/images/coverall.png') no-repeat 0 -986px;
                }
            }
        }
        .sr{
            flex: 1;
            overflow: hidden;
            .songdetail{
                margin-top: 30px;
                p{
                    line-height: 25px;
                    font-size: $font-size - 2;
                    margin-top: 5px
                }
                .description{
                    &.collapse{
                        max-height: 200px;
                        overflow: hidden;
                    }
                }
                .collapseBtn{
                    text-align: right;
                    span{
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
