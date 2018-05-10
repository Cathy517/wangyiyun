<template>
  <div id="PlayListComponent">
     <!-- <div class="playlistcomponent margin" v-if="highqualityData">
      <ul>
          <li v-for="(i,idx) in highqualityData" :key="idx">
              <router-link :to="`/playListDetail?id=${i.id}`">
                  <div class="cover">
                    <img class="pic" :src="i.coverImgUrl" alt="">
                    <div class="msk"></div>
                    <div class="bottom">
                        <a class="icon-play" href=""></a>
                        <span class="icon-headset"></span>
                        <span class="nb">{{i.trackCount}}</span>
                    </div>
                  </div>
                  <span class="name">{{i.name}}</span>
                  <span class="nickname">{{i.creator.nickname}}</span>
              </router-link>
          </li>
      </ul>
      </div>
       -->
      <ul class="playList searchList" v-if="highqualityData">
          <li v-for="(itemx,idx) in highqualityData" :key="idx">
                <router-link :to="`/playListDetail?id=${itemx.id}`">
                    <img :src="itemx.coverImgUrl" class="pic">
                    <span class="name">{{itemx.name}}</span>
                    <span class="count">{{itemx.trackCount}}首</span>
                    <span class="nickname">by {{itemx.creator.nickname}}</span>
                    <span class="bookcount">收藏: {{itemx.bookCount | transformNumber}}</span>
                    <span class="playcount">收听: {{itemx.playCount | transformNumber}}</span>
                </router-link>
            </li>
      </ul>
  </div>

</template>
<script>
export default {
  name: "PlayListComponent",
  props: ["highqualityData", "name"],
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "~@/assets/scss/variables.scss";
// #PlayListComponent {
//   ul {
//     padding: 10px 0;
//     font-size: $font-size - 2;
//   }
//   .cover {
//     position: relative;
//     width: 140px;
//     height: 140px;
//     .msk {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background: url("~@/assets/images/coverall.png") no-repeat;
//     }
//     .bottom {
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       width: 100%;
//       height: 27px;
//       background-position: 0 -537px;
//       color: #ccc;
//       background: url("~@/assets/images/coverall.png?69fb2a724bc49f7f31151b798f0a4f7d")
//         no-repeat;
//       .icon-play {
//         position: absolute;
//         background: url("~@/assets/images/iconall.png?094f0d2684d3366a77fe5b8bfef09776")
//           no-repeat;
//         right: 10px;
//         bottom: 5px;
//         width: 16px;
//         height: 17px;
//         background-position: 0 0;
//         display: inline-block;
//       }
//       .icon-headset {
//         position: absolute;
//         width: 14px;
//         height: 11px;
//         background: url("~@/assets/images/iconall.png?094f0d2684d3366a77fe5b8bfef09776")
//           no-repeat;
//         background-position: 0 -24px;
//         margin: 9px 5px 9px 10px;
//         display: inline-block;
//       }
//       .nb {
//         margin: 4px 0 0 28px;
//       }
//     }
//   }
// }
</style>





