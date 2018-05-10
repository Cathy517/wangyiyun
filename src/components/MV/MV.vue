<template>
  <div id="MV" >
      <ul class="searchsingerList mvsList" v-if="mvData && title==='personalized'">
          <li v-for="item in mvData" :key="item.id">
              <router-link :to="`/mvDetail?id=${item.id}`">
                <span class="mvcover">
                    <img :src="item.picUrl | filterImg" />
                    <span class="playcount">{{item.playCount | transformNumber}}</span>
                    <span class="duration">{{item.duration | transformTime}}</span>
                    <span class="iconplay"></span>
                </span>
                <span class="mvcotent">
                    <span>{{item.name}}</span>
                    <span>{{item.artistName}}</span>
                </span>
              </router-link>
          </li>
      </ul>

        <ul class="searchsingerList mvList" v-if="mvData && title==='search'">
           <li v-for="(itemx,idx) in mvData" :key="idx">
                <router-link :to="`/mvDetail?id=${itemx.id}`">
                    <span class="mvcover">
                        <img :src="itemx.cover|filterImg" />
                        <span class="playcount">{{itemx.playCount | transformNumber}}</span>  
                        <span class="duration">{{itemx.duration | transformTime}}</span>  
                        <span class="iconplay"></span>  
                    </span>
                    <span class="mvcontent">
                        <span>{{itemx.name}}</span>
                        <span>{{itemx.artistName}}</span>                            
                    </span>                       
                </router-link>
            </li>
        </ul>

      <ul class="searchsingerList mvList" v-if="mvData && title==='singer'">
          <li v-for="item in mvData" :key="item.id">
              <router-link :to="`/mvDetail?id=${item.id}`">
                <span class="mvcover">
                    <img :src="item.imgurl | filterImg" />
                    <span class="iconplay"></span>
                </span>
                <span class="mvcotent">
                    <span>{{item.name}}</span>
                </span>
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "MV",
  props: ["mvData", "title"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
</style>
