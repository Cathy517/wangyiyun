<template>
  <div id="SongDetail" class="area">
     <div class="container" >
         <div class="containerLeft">
             <div class="songarea" v-if="songdetailJson[0]">
                 <div class="sl">
                     <div class="u-cover">
                        <img :src="songdetailJson[0].al.picUrl | filterImg" alt="">
                        <div class="msk"></div>
                     </div>
                 </div>
                 <div class="sr">
                     <div class="songdetail">
                        <h3>{{songdetailJson[0].name}}</h3>
                        <p>歌手：{{songdetailJson[0].ar[0].name}}</p>
                        <p>所属专辑：{{songdetailJson[0].al.name}}</p>
                     </div>
                     <Lyric :lyricData="lyricJson.lrc" name="ep"></Lyric>
                </div>                 
             </div>
             <div class="commentbox">
                 <div class="u-title">
                    <h3>评论</h3>
                    <span>共{{commentMusicJson.total}}条评论</span>
                </div>
                 <Comment :commentData="commentMusicJson.hotComments" name="精彩评论"></Comment>
                 <Comment :commentData="commentMusicJson.topComments" name="最热评论"></Comment>
                 <Comment :commentData="commentMusicJson.comments" name="最新评论"></Comment>                 
             </div>
         </div>
         <div class="containerRight">
             <div class="margin">
                 <div class="simisongbox">
                     <div class="smallTitle">相似歌曲</div>
                     <ul v-if="simisongJson">
                         <li v-for="(i,idx) in simisongJson" :key="idx">
                            <router-link :to="`/songDetail/?id=${i.id}`">
                                 <span class="songname">{{i.name}}</span>
                                 <span class="name">{{i.artists[0].name}}</span>
                            </router-link>
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
import Lyric from "@/components/Lyric/Lyric";
import Comment from "@/components/Comment/Comment";

export default {
  name: "SongDetail",
  props: [],
  components: { Lyric, Comment },
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "getSongDetailData",
      "getLyricData",
      "getCommentMusicData",
      "getSimisongData"
    ])
  },
  computed: {
    ...mapState({
      songdetailJson: state => state.songlist.songdetail.songs, //歌曲详情
      lyricJson: state => state.songlist.lyric, //歌词
      commentMusicJson: state => state.songlist.commentmusic, //歌曲评论
      simisongJson: state => state.songlist.simisong.songs //相似歌曲
    })
  },
  mounted() {
    let id = this.$route.query.id;//400162138
    console.log(id);
    this.getSongDetailData({ id: id }); //歌曲详情
    this.getLyricData({ id: id }); //歌词详情
    this.getCommentMusicData({ id: id, limit: 1 });//歌曲评论
    this.getSimisongData({id:id})//相似歌曲
  }
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
#SongDetail {
  .songarea {
    display: flex;
    .sl {
      width: 230px;
      .u-cover {
        position: relative;
        margin-top: 30px;
        img {
          width: 130px;
          height: 130px;
          margin: 34px;
        }
        .msk {
          position: absolute;
          width: 206px;
          height: 205px;
          top: -4px;
          left: -4px;
          background: url("../../assets/images/coverall.png") no-repeat -140px -580px;
        }
      }
    }
    .sr {
      flex: 1;
      overflow: hidden;
      .songdetail {
        p {
          line-height: 25px;
          font-size: $font-size - 2;
        }
      }
    }
  }
  .commentbox {
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
  .simisongbox{
      li{
          padding: 5px 0;
          border-bottom: 1px dashed darken($grey,5%);
          span{
              display: block;
              line-height: 20px;
          }
          .name{
              color:$font-detail-color
          }
      }
  }
}
</style>
