<template>
  <div id="Recommend">
      <Banner :toBanner='bannerJson.banners'></Banner>
      <div class="area container">
          <div class="containerLeft">
              <!--热门推荐-->
              <div class="wrap">
                <div class="container-title wrap-title">
                    <h4>热门推荐</h4>
                    <span class="more">
                        更多
                    </span>
                </div>
                <div class="wrapcontent">
                    <Personalized :personalized="recommendsongJson.result"></Personalized>
                </div>
              </div>
               <!--新碟上架-->
              <div class="wrap">
                <div class="container-title wrap-title">
                    <h4>新碟上架</h4>
                    <span class="more">
                        更多
                    </span>
                </div>
                <div class="wrapcontent">
                    <Album :albumData="albumJson.albums"></Album>
                </div>
              </div>
               <!--推荐mv-->
              <div class="wrap">
                <div class="container-title wrap-title">
                    <h4>推荐mv</h4>
                    <span class="more">
                        更多
                    </span>
                </div>
                <div class="wrapcontent">
                    <MV :mvData="mvJson.result" title="personalized"></MV>
                </div>
              </div>
          </div>
          <div class="containerRight">
             <div class="smallTitle">热门歌手</div>
             <SingerComponent :singersData="hotSingerJson.artists"></SingerComponent>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Banner from "@/components/Banner/Banner";
import Personalized from "@/components/Personalized/Personalized";
import Album from "@/components/Album/Album";
import MV from "@/components/MV/MV";
import SingerComponent from "@/components/SingerComponent/SingerComponent";

export default {
  name: "Recommend",
  components: {
    Banner,
    Personalized,
    Album,
    MV,
    SingerComponent
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "getBannerData",
      "getRecommendData",
      "getTopAlbumData",
      "getMVData",
      "getHotSingersData"
    ])
  },
  computed: {
    ...mapState({
      bannerJson: state => state.banner.banner,
      recommendsongJson: state => state.songlist.recommendsong,
      albumJson: state => state.songlist.topalbum,
      mvJson: state => state.songlist.MV,
      hotSingerJson: state => state.singer.hotsingers
    })
  },
  mounted() {
    this.getBannerData(); //banner
    this.getRecommendData({ limit: 8 }); //推荐歌单
    this.getTopAlbumData({ offset: 0, limit: 8 }); //新碟上架
    this.getMVData(); //推荐MV
    this.getHotSingersData({offset:0,limit:10}); //热门歌手
  }
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
#Recommend {
  .wrap-title {
    display: flex;
    h4 {
      font-weight: normal;
      flex: 1;
    }
    span {
      font-size: $font-size;
    }
  }
  .wrapcontent {
    padding-bottom: 27px;
  }
  .albumList li {
    margin-right: 17px;
  }
  .containerRight {
    width: 228px;
    padding: 14px;
    .searchsingerList{
        display: block;
        li{
            margin-right: 0;
            margin-top: 10px;
            display: flex;
            width: 100%;
            background-color: $grey;
            border: 1px solid darken($grey, 10%);
            img{
                width: 60px;
                height: 60px;
                margin-right: 10px;
                border: 0
            }
        }
    }
  }
}
</style>
