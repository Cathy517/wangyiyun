<template>
  <div id="Comment" v-if="commentData">
    <div class="m-cmmt">
        <div class="CommentTitle">{{name}}
            <span>{{commentData.length}}条</span>
            </div>
        <ul>
            <li v-for="(i,idx) in commentData" :key="idx">
                <img :src="i.user.avatarUrl" alt="">
                <div class="info">
                    <span class="name">{{i.user.nickname}}</span>
                    <span class="c">{{i.content}}</span>
                </div>
            </li>
        </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["commentData", "name"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
#Comment {
  
  .m-cmmt{
      margin-top: 20px;
      font-size: $font-size - 2;
      .CommentTitle{
          padding: 5px 0;
          border-bottom: 1px solid $grey;
          font-size: $font-size;
          span{
              font-size: $font-size;
              color: $red;
              margin-left: 2px;
          }
      }
      ul{
          li{
              display: flex;
              padding: 20px 0;
              border-bottom: 1px dashed darken($grey,15%);
          }
          img{
              width: 50px;
              height: 50px;
              margin-right: 10px;
          }
          .info{
              flex: 1;
              .name{
                  color: $blue
              }
          }
      }
  }
}
</style>
