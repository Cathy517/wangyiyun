<template>
  <div id="app">
    <Header :searchQuery="searchQueryValue"></Header>
    <router-view :key="key"/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      searchQ: ""
    };
  },
  methods: {
    searchQueryValue(data) {
      this.searchQ = data;
    }
  },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    }
  }
};
</script>

<style lang="scss">

</style>
