<!-- TODO: 有bug 會影響 Zoomin page 的 ScrollTrigger -->
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

const activeBtn = ref(-1)
const scrollAnimation = gsap.timeline()
const contentList = ref('')

const titleList = ref('')

function getImageUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

onMounted(() => {
  function isActive(active) {
    activeBtn.value = active
    const activeItem = contentList.value.children[active] // 目標 item
    scrollAnimation.to(window, {
      duration: 1,
      scrollTo: activeItem.offsetTop + (activeItem.offsetHeight / 2) - (window.innerHeight / 2),
    })
  }

  function handleScroll() {
    const scrollTop = document.documentElement.scrollTop // 目前滾超出螢幕上面的高度
    Array.from(contentList.value.children).map((item, index) => {
      const itemIn = item.offsetTop - (window.innerHeight / 2)
      const itemOut = item.offsetTop + item.offsetHeight - (window.innerHeight / 2)
      titleList.value.children[index].classList.remove('is-active')
      if (itemIn < scrollTop && scrollTop < itemOut)
        titleList.value.children[index].classList.add('is-active')
    })
  }
  window.addEventListener('scroll', handleScroll)

  const arrow = CSSRulePlugin.getRule('.sticky-page main .left-area .title-list a::before')

  bounceArrow
    .to(arrow, { duration: 0.2, cssRule: { y: 0 } })
    .to(arrow, { duration: 0.2, cssRule: { y: -20 } })
    .to(arrow, { duration: 0.1, cssRule: { y: 10 } })
    .to(arrow, { duration: 0.3, cssRule: { y: -5 } })
    .to(arrow, { duration: 0.2, cssRule: { y: 0 } })
    .repeat(-1)
})
</script>

<template>
  <div class="sticky-page" scoped>
    <main>
      <div class="left-area">
        <div sticky top-100px>
          <h6>Let’s enjoy RuRuRu Onsen!</h6>
          <h3>るるる温泉の楽しみ方</h3>
          <div ref="titleList" class="title-list">
            <a v-for="(item, index) in introductionList" :key="item" :class="[{ 'is-active': index === activeBtn }, `title-btn-${index}`]" @click="isActive(index)">
              <img :src="getImageUrl(item.idolImg)" alt="">
              <h6>{{ item.title }}</h6>
              <p>{{ item.span }}</p>
            </a>
          </div>
        </div>
      </div>
      <div ref="contentList" class="right-area">
        <div v-for="(item, index) in introductionList" :id="`content${index}`" :key="item" class="content-list border-decorate" :class="[`content-list-${index}`]">
          <img class="idol-img" :src="getImageUrl(item.idolImg)" alt="">
          <img class="balloon-img" :src="getImageUrl(item.balloonImg)" alt="">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </main>
    <img src="../assets/images/serow-enjoy.svg" alt="" class="introduction-icon">
  </div>
</template>

<style lang="scss" scoped>
.sticky-page{
  border: 1px solid #00f;
  padding-bottom: 1px;
  main {
    @apply flex justify-between px-[7.5%] mt-[302px] ;
    >div {
      @apply w-50%;
    }
    .left-area {
      h3 {
        @apply mt-[0.35rem];
      }
      .title-list {
        @apply flex justify-between mt-[75px];
        a{
          @apply relative w-30% opacity-50;
          &:hover{
            @apply opacity-100;
          }
          &::before {
            @apply absolute top-[-50px] right-50% translate-x-[50%] opacity-0 c-#f72f8d w-35px h-45px rotate-90 inline-block content-empty i-ion-caret-forward-sharp;
            transition: opacity 1s ease 0s;
          }
          h6 {
            @apply  text-7 text-center;

          }
          p {
            @apply text-3.5 font-bold text-center mt-[-3px];
          }
        }
        .is-active {
          @apply opacity-100;
          &::before {
            @apply opacity-100 ;
          }
        }

      }
    }
    .right-area {
      @apply pl-5.5%;
      .content-list {
        @apply relative px-10% py-9% mt-[154px];
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
  // translate-x-[-50%] opacity-0
  .introduction-icon {
    @apply fixed bottom-0 left-[2.3%] w-16vw translate-x-[-50%] opacity-0;
    transition:opacity .25s linear 0s,transform .25s cubic-bezier(.6,-.28,.735,.045) 0s
  }
}
</style>
