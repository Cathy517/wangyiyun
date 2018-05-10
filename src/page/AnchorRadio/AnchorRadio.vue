<template>
  <div id="AnchorRadio" class="area">
    <div class="catelistbox">
        <ul>
            <li v-for="(i,idx) in CateListJson" :key="idx">
                <router-link to="">
                    <span class="pic" :style="{background: 'url('+i.picWebUrl+')'}"></span>
                    <span class="name">{{i.name}}</span>
                </router-link>
            </li>
        </ul>
    </div>
    <div class="programbox">
        <div class="pl">
            <div class="plTitle">推荐节目</div>
            <div class="plist">
                <ProgramRelist :programrecommendData="programrecommendJson"></ProgramRelist>
            </div>
        </div>
        <div class="pl">
            <div class="plTitle">独家放送</div>
            <div class="plist">
                <ProgramRelist :privatecontentData="privatecontentJson"></ProgramRelist>
            </div>
        </div>
    </div>
    <div class="anchorbox" v-if="djRecommendTypeJson.djRadios">
        <div class="container-title">{{djRecommendTypeJson.djRadios[0].category}}·电台</div>
        <div class="anchorlist">
            <ul>
                <li v-for="(item,idx) in djRecommendTypeJson.djRadios" :key="idx">
                    <img :src="item.picUrl | filterImg" alt="">
                    <span class="namebox">
                        <i class="name">{{item.name}}</i>
                        <i class="dex">{{item.rcmdtext}}</i>
                    </span>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import ProgramRelist from "@/components/ProgramRelist/ProgramRelist";
export default {
  name: "AnchorRadio",
  data() {
    return {};
  },
  components: { ProgramRelist },
  methods: {
    ...mapActions([
      "getCateListData",
      "getProgramRecommendData",
      "getPrivatecontentData",
      "getDJRecommendType"
    ])
  },
  computed: {
    ...mapState({
      CateListJson: state => state.anchoradio.catelist.categories, //电台分类
      programrecommendJson: state => state.anchoradio.programrecommend.programs, //推荐节目
      privatecontentJson: state => state.anchoradio.privatecontent.result, //独家放送
      djRecommendTypeJson: state => state.anchoradio.djrecommendtype //电台分类推荐
    })
  },
  mounted() {
    this.getCateListData();
    this.getProgramRecommendData();
    this.getPrivatecontentData();
    this.getDJRecommendType({ type: 1 });
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/variables.scss";
#AnchorRadio {
  .catelistbox {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 97px;
        text-align: center;
        display: block;
        a {
          display: block;
          padding: 10px;
        }
        .pic {
          width: 48px;
          height: 48px;
          overflow: hidden;
          margin: 0 auto;
          display: block;
        }
        .name {
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: $font-size - 2;
          color: $font-detail-color;
        }
      }
    }
  }
  .programbox {
    display: flex;
    padding: 23px;
    .pl {
      flex: 1;
      padding-left: 23px;
      overflow: hidden;
      &:first-child {
        padding-left: 0;
        padding-right: 23px;
      }
      .plTitle {
        padding: 10px 0;
        font-size: $font-size +($font-size / 2);
      }
      .plist {
        border-style: solid;
        border-width: 2px 1px 1px 1px;
        border-color: $red $grey $grey $grey;
        .serachList {
          padding: 0;
        }
      }
    }
  }
  .anchorbox{
      padding: 23px;
      .anchorlist{
          ul{
              display: table;
              li{
                  float: left;
                  padding: 20px 0;
                  border-bottom: 1px solid $grey;
                  box-sizing: padding-box;
                  width: 50%;
                  display: flex;
                  flex-wrap: wrap;
                  img{
                      width: 120px;
                      height: 120px;
                  }
                  .namebox{
                      flex: 1;
                      margin-left: 20px;
                      i{
                          font-style: normal;
                          display: block;
                          &.name{
                              font-size: $font-size + ($font-size / 2);
                              margin-bottom: 10px;
                              color: $font-title-color
                          }
                      }
                  }
              }
          }
      }
  }
}
</style>
