<template>
  <div id="Singer" class="area">
     <div class="container">
         <div class="containerRight">
             <h4>推荐</h4>
            <div class="boardbox">
                <div class="menulist">
                    <span>{{hotSingerTitle}}</span>
                </div>
            </div>
         </div>
         <div class="containerLeft ">
             <div class="container-title">{{hotSingerTitle}}</div>
             <SingerComponent :singersData="hotSingersJson.artists"></SingerComponent>
         </div>
         
     </div>

  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import SingerComponent from "@/components/SingerComponent/SingerComponent";
export default {
  name: "Singer",
  components: {SingerComponent},
  data() {
    return {
        hotSingerTitle:'热门歌手'
    };
  },
  methods: {
    ...mapActions(["getHotSingersData"]),
    get_hotsingers(offset, limit) {
      this.getHotSingersData({'offset':offset,'limit':limit});
    }
  },
  computed: {
    ...mapState({
      hotSingersJson: state => state.singer.hotsingers
    })
  },
  mounted() {
      this.get_hotsingers()
  }
};
</script>
<style lang="scss">
@import "~@/assets/scss/variables.scss";
#Singer{
  .containerRight{
    width: 240px
  }
}
</style>
