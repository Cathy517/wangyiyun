<template>
  <div id="Personalized" v-if="personalized">
      <ul>
          <li v-for="(item,idx) in personalized" :key="idx">
              <router-link :to="`/playListDetail/?id=${item.id}`">
                  <img class="pic" :src="item.picUrl" alt="">
                  <span>{{item.copywriter}}</span>
                  <span class="name">{{item.name}}</span>
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "Personalized",
  props:['personalized'],
  data(){
      return {}
  },
  components: {}
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
#Personalized {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin: 21px 30px 0 0;
      margin-right: 30px;
      width: 140px;
      .pic {
        width: 100%;
        height: 140px;
        border: 1px solid $grey;
        margin-bottom: 5px;
      }
      span {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
