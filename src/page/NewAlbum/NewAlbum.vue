<template>
  <div id="NewAlbum" class="area">
      <div class="container-title">新碟上架</div>
      <Album :albumData="albumDataJson"></Album>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Album from "@/components/Album/Album";
export default {
  name: "NewAlbum",
  components: { Album },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getTopAlbumData"]),
    get_topalbum(offset, limit) {
      this.getTopAlbumData({ offset: offset, limit: limit });
    }
  },
  computed: {
    ...mapState({
      albumDataJson: state => state.songlist.topalbum.albums
    })
  },
  mounted() {
    this.get_topalbum();
  }
};
</script>
<style lang="scss">
@import "~@/assets/scss/variables.scss";
#NewAlbum{
  padding: 30px;
}
</style>
