<script setup>
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
import gsap from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'

const introductionList = reactive([
  {
    idolImg: 'mv-chara-drink.svg',
    balloonImg: 'enjoy-balloon-drink.svg',
    title: 'Drink',
    span: 'のめる',
    content: '湯守田中屋の源泉はつかるだけではもったいない。飲んだらもっとすごいんです。ナトリウムカルシウム硫酸塩泉は飲めば胆汁の分泌が促進され腸の蠕動運動を活発にすることが実証されております。また糖尿病・肥満症・便秘の改善にも期待。',
  },
  {
    idolImg: 'mv-chara-food.svg',
    balloonImg: 'enjoy-balloon-food.svg',
    title: 'Food',
    span: 'たべれる',
    content: 'お料理のレシピに混ぜてお召し上がりください。胃が疲れてきたときには温泉がゆ、温泉湯豆腐としての食べ方がおすすめ。一人前の鍋に10包が目安です。またごはん 1合あたり1袋を目安に混ぜてお米を炊くとふっくらともちもちとしたごはんになります。',
  },
  {
    idolImg: 'mv-chara-bath.svg',
    balloonImg: 'enjoy-balloon-bath.svg',
    title: 'Bath',
    span: 'はいれる',
    content: '美顔器に10包入れてみてください。美人の湯であることが実証されるはず。小分けのスプレーボトルに溶かして気になるところにシュシュっと。バケツに10包足湯としてリラックス。',
  },
])

const bounceArrow = gsap.timeline()

onMounted(() => {
  nextTick(() => {
    const arrow = CSSRulePlugin.getRule('')
    // console.log('nextTick -> CSSRulePlugin', CSSRulePlugin);
    console.log('onMounted -> arrow', arrow)
    // console.log('test', document.querySelector('.sticky-page main .left-area .titleImgs-list a::before'))
    // console.log('test', getComputedStyle(document.querySelector('.titleImgs-list a'), '::before'))
  })

  // bounceArrow.to('.titleImgs-list a', {
  //   direction: 1,
  //   x: '50px',
  // })
})
</script>

<template>
  <div class="sticky-page">
    <main>
      <div class="left-area">
        <div sticky top-100px>
          <h6>Let’s enjoy RuRuRu Onsen!</h6>
          <h3>るるる温泉の楽しみ方</h3>
          <div class="titleImgs-list">
            <a class="test" />
            <!-- <a v-for="item in introductionList" :key="item" :href="`#${item.title}`">
              <img :src="`src/assets/images/hot-spring-website/${item.idolImg}`" alt="">
              <h6>{{ item.title }}</h6>
              <p>{{ item.span }}</p>
            </a> -->
          </div>
        </div>
      </div>
      <div class="right-area">
        <div v-for="item in introductionList" :id="item.title" :key="item" class="contentList">
          <img class="idol-img" :src="`src/assets/images/hot-spring-website/${item.idolImg}`" alt="">
          <img class="balloon-img" :src="`src/assets/images/hot-spring-website/${item.balloonImg}`" alt="">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.sticky-page{
  main {
    @apply flex justify-between px-[7.5%] mt-[302px] ;
    border: 1px solid #000;
    >div {
      @apply w-50%;
      border: 1px solid #f00;
    }
    .left-area {
      h3 {
        @apply mt-[0.35rem];
      }
      .titleImgs-list {
        @apply flex justify-between mt-[75px];
        a{
          @apply relative w-30%;
          border: 1px solid #000;
          &::before {
            @apply absolute top-[-50px] right-50% translate-x-[50%] c-#f72f8d w-35px h-45px rotate-90 inline-block content-empty i-ion-caret-forward-sharp;
          }
          h6 {
            @apply  text-7 text-center;
          }
          p {
            @apply text-3.5 font-bold text-center mt-[-3px];
          }
        }
      }
    }
    .right-area {
      @apply pl-5.5%;
      .contentList {
        @apply relative border-8px border-black px-10% py-9% mt-[154px];
        &:first-child {
          @apply mt-0;
        }
        .idol-img{
          @apply px-10% mb-10%;
        }
        .balloon-img {
          @apply absolute top-[-9.9%] right-[3.4%] w-30% ;
        }
      }
    }
  }
}
</style>
