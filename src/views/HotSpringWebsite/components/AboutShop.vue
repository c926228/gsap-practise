<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'


onMounted(() => {

})
</script>

<template>
  <div class="about-shop-page" scoped>
    <div class="title">
      <h6>About Tanakaya</h6>
      <h3>塩原温泉「湯守田中屋」</h3>
    </div>
    <div class="content mt-3em">
      <div class="section">
        <p>栃木県那須塩原 大網にある温泉旅館 湯守田中屋でございます。</p>
        <p>日光国立公園特別地域内にある湯守田中屋は、</p>
        <p>都心から2時間半という立地でございます。</p>
        <p>自家源泉を3本所有した毎分300リットルもの豊富な湯量が自慢です。</p>
        <p>当館すべてのお風呂が、源泉掛け流し100％の天然温泉でございます。</p>
        <p>320段下の渓流沿いにある野天風呂は混浴風呂や自噴しているお風呂もございます。</p>
        <p>保健所より飲泉許可も頂いており、飲泉も可能です。</p>
      </div>
      <div class="section mt-2em" >
        <p>ひろがる塩原の自然と、湯守田中屋ならではのおもてなし。</p>
        <p>どうぞ心ゆくまでお寛ぎください。</p>
      </div>
      <a class="to-next" href="">田中屋について<span i-ion-ios-arrow-dropright-circle/></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-shop-page{
  @apply mt-[160px];
  .title {
    @apply text-center;
  }
  .content {
    @apply text-center leading-[1.85] text-[16px];
  }
 

}
</style>
