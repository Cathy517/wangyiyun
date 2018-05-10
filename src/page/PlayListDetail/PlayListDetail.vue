<template>
  <div id="PlayListDetail" class="area" v-if="playdetailJson">
     <div class="container" >
         <div class="containerLeft">
             <div class="songarea">
                 <div class="sl">
                     <div class="u-cover" >
                        <img :src="playdetailJson.coverImgUrl | filterImg" alt="">
                        <div class="msk"></div>
                     </div>
                 </div>
                <div class="sr">
                  <div class="songdetail">
                    <div class="hd">
                      <i class="icn"></i>
                      <h2>{{playdetailJson.name}}</h2>
                    </div>
                    <div class="user">
                      <a href="">
                        <img :src="playdetailJson.creator.avatarUrl" alt="">
                      </a>
                      <span class="name">{{playdetailJson.creator.nickname}}</span>
                      <i class="u-icn"></i>
                      <span class="time">{{playdetailJson.createTime}}创建</span>
                    </div>
                    <div id="content-operation">
                      <a class="play u-btn2 u-btn2-2 u-btni-addply f-fl">
                        <i><em class="ply"></em>播放</i>
                      </a>
                    </div>
                    <div class="tag">
                      <span>标签：</span>
                      <a class="u-tag">
                        <i v-for="(i,idx) in playdetailJson.tags" :key="idx">{{i}}</i>
                      </a>
                    </div>
                    <div>
                      <Description :DescriptionData="playdetailJson.description" name="ep"></Description>
                    </div>
                  </div>
                </div> 
             </div>
             <div class="commentbox" v-if="playcommentJson">
                <div class="u-title">
                    <h3>评论</h3>
                    <span>共{{playcommentJson.total}}条评论</span>
                </div>
                 <Comment :commentData="playcommentJson.hotComments" name="精彩评论"></Comment>
                 <Comment :commentData="playcommentJson.topComments" name="最热评论"></Comment>
                 <Comment :commentData="playcommentJson.comments" name="最新评论"></Comment>                 
             
             </div>
         </div>

        <div class="containerRight">
            <div class="margin">
              <div class="simiplaybox">
                  <div class="smallTitle">精品歌单</div>
                  <PlayListComponent :highqualityData="playlisthighqualityJson.playlists" class="playlistcomponent"></PlayListComponent>
              </div>
             </div>
         </div>

         <!-- <div class="containerRight">
            <div class="margin">
              <div class="simiplaybox">
                  <div class="smallTitle">相似歌单</div>
                  <ul v-if="simiplayJson">
                <li v-for="(i,idx) in simiplayJson" :key="idx">
                  <div class="cover">
                    <a href="">
                      <img :src="i.coverImgUrl | filterImg" alt="">
                    </a>
                  </div>
                  <router-link :to="`/playListDetail/?id=${i.id}`">
                  <div class="info">
                        <span class="simiplayname">{{i.name}}</span>
                        <span class="nickname">{{i.creator.nickname}}</span>
                  </div>
                  </router-link>
                </li>
                  </ul>
              </div>
             </div>
         </div> -->
         
     </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Comment from "@/components/Comment/Comment";
import Description from "@/components/Description/Description";
import PlayListComponent from"@/components/PlayListComponent/PlayListComponent";
export default {
  name: "PlayListDetail",
  props: [],
  components: { Comment, Description,PlayListComponent },
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "getPlayListDetailData",
      "getCommentPlayData",
      "getSimiplayData",
      "getPlaylistHighquality"
    ])
  },
  computed: {
    ...mapState({
      playdetailJson: state => state.songlist.playlistdetail.result, //歌单详情
      playcommentJson: state => state.songlist.commentplay, //歌单详情
      simiplayJson: state => state.songlist.simiplay.playlists, //相似歌单
      playlisthighqualityJson: state => state.songlist.playlisthighquality,//精品歌单

    })
  },
  mounted() {
    let id = this.$route.query.id; //400162138
    this.getPlayListDetailData({ id: id }); //歌单详情
    this.getCommentPlayData({ id: id, limit: 1 }); //歌单评论
    this.getSimiplayData({ id: "347230" }); //相似歌单
    this.getPlaylistHighquality({'limit':10}); //精品歌单    

  }
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
@import "~@/assets/scss/mixin.scss";

#PlayListDetail {
  .songarea {
    display: flex;
    .sl {
      width: 230px;
      .u-cover {
        position: relative;
        margin-top: 30px;
        img {
          width: 200px;
          height: 200px;
        }
        .msk {
          position: absolute;
          width: 208px;
          height: 208px;
          top: -4px;
          left: -4px;
          background: url("../../assets/images/coverall.png") no-repeat 0 -1285px;
        }
      }
    }
    .sr {
      flex: 1;
      overflow: hidden;
      .songdetail {
        .hd {
          display: flex;
          margin-bottom: 12px;
          .icn {
            display: inline-block;
            overflow: hidden;
            vertical-align: middle;
            width: 64px;
            height: 24px;
            background: url("../../assets/images/icon.png") no-repeat 0 9999px;
            background-position: 0 -243px;
          }
          h2 {
            font-weight: normal;
          }
        }
        .user {
          margin-bottom: 25px;
          img {
            width: 35px;
            height: 35px;
            margin-right: 10px;
          }
          span {
            line-height: 35px;
            font-size: $font-size - 2;
          }
          .name {
            color: $blue;
          }
          .u-icn {
            margin: 9px 0 0 3px;
            display: inline-block;
            width: 12px;
            height: 13px;
            background: url("../../assets/images/icon.png") no-repeat 0 9999px;
            background-position: -65px -840px;
          }
        }
        #content-operation {
          display: flex;
          margin-bottom: 25px;
          .play {
            display: inline-block;
            height: 31px;
            line-height: 31px;
            overflow: hidden;
            vertical-align: top;
            text-align: center;
            cursor: pointer;
            i {
              padding: 0 7px 0 8px;
              color: #fff;
              display: inline-block;
              height: 31px;
              line-height: 31px;
              overflow: hidden;
              vertical-align: top;
              text-align: center;
              background: url(../../assets/images/button2.png) no-repeat 0
                9999px;
              background-position: 0 -387px;
              cursor: pointer;
              em {
                font-style: normal;
                text-align: left;
                font-size: inherit;
                float: left;
                width: 20px;
                height: 18px;
                margin: 6px 2px 2px 0;
                background: url(../../assets/images/button2.png) no-repeat 0
                  9999px;
                background-position: 0 -1622px;
                overflow: hidden;
              }
            }
          }
          .u-btni-add {
            width: 31px;
            height: 31px;
            line-height: 30px;
            min-width: 23px;
            padding: 0 5px 0 0;
            white-space: nowrap;
            cursor: pointer;
            background: url(../../assets/images/button2.png) no-repeat 0 9999px;
            background-position: 0 -1588px;
            margin: 0 5px 0 -3px;
          }
        }
        .tag {
          display: flex;
          margin-bottom: 5px;
          .u-tag {
            i {
              margin-right: 8px;
              color: $font-detail-color;
            }
          }
        }
      }
    }
  }
  .commentbox {
    margin-top: 27px;
    .u-title {
      height: 33px;
      border-bottom: 2px solid $red;

      h3 {
        display: inline-block;
        font-size: $font-size + 6;
        line-height: 28px;
        font-weight: normal;
      }
      span {
        margin: 9px 0 0 20px;
        font-size: $font-size - 2;
      }
    }
  }
  .simiplaybox {
        li {
            margin-right:5px;
            width: 102px;
            margin-top: 10px;
            a {
                padding:0;
            }
            span {
                display: block;
                line-height:20px;
            }
            .name {
                color:$font-detail-color;
            }
            .pic {
                height:102px;
                margin-right: 0;
            }
            .count,
            .bookcount,
            .playcount {
                display: none;
            }
        }
    }
  // .simiplaybox {
  //   li {
  //     padding: 5px 0;
  //     border-bottom: 1px dashed darken($grey, 5%);
  //     display: flex;
  //     -ms-text-overflow: ellipsis;
  //     text-overflow: ellipsis;
  //     overflow: hidden;
  //     white-space: nowrap;
  //     .cover {
  //       margin-right: 10px;
  //       img {
  //         width: 50px;
  //         height: 50px;
  //         vertical-align: middle;
  //       }
  //     }
  //     .info {
  //       flex: 1;
  //       line-height: 50px;

  //       span {
  //         display: block;
  //         line-height: 20px;
  //       }
  //       .simiplayname {
  //         display: block;
  //         width: 155px;
  //         @include ellipsis(1);
  //       }
  //       .nickname {
  //         color: $font-detail-color;
  //       }
  //     }
  //   }
  // }
}
</style>
