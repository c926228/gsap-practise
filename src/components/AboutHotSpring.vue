<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {

})
</script>

<template>
  <div class="about-hotspring-page" scoped>
    <div class="title">
      <h6>About</h6>
      <h3>るるる温泉とは</h3>
    </div>
    <div class="introduction">
      <p class="leading-[1.85] text-[16px]">
        “るるる温泉”は、那須塩原大綱にある温泉旅館「湯守田中屋」の源泉掛け流し100%天然温泉から採れた温泉の粉です。<br>当温泉は保健所より飲泉許可をいただいており、泉質は硫酸塩泉です。飲み物、食べ物に入れてお召し上がりください。もし余ったら、お風呂に入れると温泉にもなります。
      </p>
      <div class="pl-[4.5%] border-white border-l mt-[30px]">
        <h4 class="mb-[0.25em]">
          塩原温泉について
        </h4>
        <p>塩原温泉は約150ヶ所以上の多種多様な源泉があり、泉質や効能で湯を選べることが特徴です。その中で塩原温泉郷と総称して呼ばれる11の温泉「塩原十一湯」があります。また、塩原温泉は日本にある10種類の泉質のうち6種類があり、かつ150以上の源泉が存在する国内屈指の一大温泉郷です。</p>
      </div>
      <a class="to-next" href="">硫酸塩泉の効果・効能について<span i-ion-ios-arrow-dropright-circle /></a>
    </div>
    <div class="about-idol border-decorate">
      <img src="../assets/images/serow-whats-chara.svg" alt="">
      <h5>カモシカ番頭について</h5>
      <p>湯守田中屋の駐車場にちょこちょこ顔を出しているうちに、いつしか田中屋の番頭に抜擢された。明るく気さくだが、少し恥ずかしがり屋、好きな食べ物は生ゆば（とってもグルメ）</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-hotspring-page{
  @apply flex mt-[160px] px-[7.5%];
  .title {
    h3 {
        @apply write-vertical-left mt;
      }
  }
  .introduction{
    @apply pt-[45px] ml-[7.5%];
    h4 {
      @apply relative pl-[30px];
      &::before {
        @apply absolute left-0 top-0 w-22px h-100% content-empty inline-block bg-no-repeat bg-center
        bg-[url('/icon-onsen.svg')];
      }
    }
  }
  .about-idol {
    @apply p-[2%] ml-[7.5%] h-fit;
    img {
      @apply px-[26%] mb-[9%];
    }
    h5 {
      @apply leading-[33px] mb-[0.25em] text-center;
    }
  }

}
</style>
