<template>
  <div id="Banner">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for='(item,index) in toBanner' :key="index">
            <img :src="item.pic | filterImg" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "Banner",
  props: ["toBanner"],
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";
$banner_height: 336px;
#Banner {
  width: 100%;
  height: $banner_height;
  background-color: #e8e8e8;
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-slide {
      text-align: center;
      img {
        width: auto;
        height: auto;
      }
    }
    .swiper-pagination {
      width: 100%;
      left: 0;
      bottom: 0.2666rem;
      .swiper-pagination-bullet {
        background: #fff;
      }
    }
  }
}
</style>