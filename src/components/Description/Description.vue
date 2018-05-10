<template>
  <div id="Description" v-if="DescriptionData">
      <ul v-if="name==='ep'" class="descriptionList">
          <li>
              <span class="descriptions">
                <span :class="{collapse:isCollapse}" class="descriptionstext">
                    <span v-for="(text,idx) in (DescriptionData).split('\n')" :key="idx">{{text}}</span>
                </span>
                <span class="crl" @click="collapse()">
                    <span v-if="isCollapse">展开<i class="el-icon-arrow-down"></i></span>
                    <span v-else>收缩<i class="el-icon-arrow-up"></i></span>
                </span>
              </span>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Description",
  props: ["DescriptionData", "name"],
  components: {},
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    collapse() {
      this.isCollapse = !this.isCollapse;
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
#Description {
  font-size: $font-size - 2;
  .descriptions,
  .descriptionstext,
  .descriptionstext span {
    display: block;
    line-height: 20px;
  }
  .descriptions {
    margin-left: 0;
    .descriptionstext.collapse {
      max-height: 280px;
      overflow: hidden;
    }
    .crl{
      cursor: pointer;
    }
  }
}
</style>
