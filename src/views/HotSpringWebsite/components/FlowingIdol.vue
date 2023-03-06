<script setup>
import { computed, onMounted, ref } from 'vue'
import gsap from 'gsap'
const idolImgList = reactive([
  {
    idolImg: 'mv-chara-drink.svg',
    idolShadowImg: 'mv-shadow-drink.svg',
  },
  {
    idolImg: 'mv-chara-food.svg',
    idolShadowImg: 'mv-shadow-food.svg',
  },
  {
    idolImg: 'mv-chara-bath.svg',
    idolShadowImg: 'mv-shadow-bath.svg',
  },
])
// Dom 渲染的清單 ＝ 實際清單*3
const processList = computed(() => {
  return idolImgList.concat(idolImgList, idolImgList)
})

const flowingAnimation = gsap.timeline()
const idolShadow = ref(null)

const currentItem = ref(2)
const movexPercent = ref(0)

// 控制動畫
function animationHandle() {
  flowingAnimation
    .set('.popup-idol', {
      scale: 0.75,
      y: '20%',
      opacity: 0,
    })

  if (currentItem.value === 4 && movexPercent.value === 2) {
    // console.log('初始化')
    setToOriginal()
  }
  else {
    // console.log('持續往左')
    currentItem.value += 1
    movexPercent.value += 1
    anmation()
  }
}

// 動畫
function anmation() {
  flowingAnimation
    .to(idolShadow.value, {
      duration: 0.7,
      keyframes: [
        { xPercent: -10 - movexPercent.value * 100, y: '-20%' }, // 要拿到新的值 須重新呼叫
        { xPercent: -25 - movexPercent.value * 100, y: '-30%' },
        { xPercent: -50 - movexPercent.value * 100, y: '-20%' },
        { xPercent: -75 - movexPercent.value * 100, y: '0%' },
        { xPercent: -100 - movexPercent.value * 100, y: '0%' },
      ],
      ease: 'power3.inOut',
    })
    .to(`.idolShadow-${currentItem.value}`, {
      duration: 0.7,
      opacity: 1,
    }, '<+0.2')
    .to(`.idolShadow-${currentItem.value + 1}`, {
      duration: 0.7,
      opacity: 0,
    }, '<-0.2')
    .to('.popup-idol', {
      duration: 1.2,
      scale: 1,
      y: 0,
      opacity: 1,
      ease: 'elastic.out(1, 0.2)',
      onComplete: () => {
        animationHandle()
      },
    }, '<0.2')
}

// 初始化 set無效
function setToOriginal() {
  currentItem.value = 2
  movexPercent.value = 0

  flowingAnimation
    .set(idolShadow.value, {
      xPercent: 0,
      yPercent: 0,
    })
    .set(`.idolShadow-${currentItem.value}`, {
      opacity: 0,
    })
    .to(`.idolShadow-${currentItem.value + 3}`, {
      duration: 0,
      ease: 'none',
      opacity: 1,
      onComplete: () => {
        anmation()
      },
    })
}
onMounted(() => {
  anmation()
})
</script>

<template>
  <div class="flowing-idol-page">
    <div class="flowing-box">
      <div v-for="(item, index) in processList" ref="idolShadow" :key="item" class="idolShadow" :class="[`idolShadow-${index}`]">
        <span>{{ index }}</span>
        <img :src="`src/assets/images/hot-spring-website/${item.idolShadowImg}`">
      </div>
    </div>

    <div class="popup-idol">
      <img :src="`src/assets/images/hot-spring-website/${processList[currentItem + 1].idolImg}`">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flowing-idol-page{
  @apply mt-[175px] relative overflow-hidden;
  .flowing-box{
    @apply whitespace-nowrap  inline-block;
    // border: 5px solid #f00;
    >div {
      @apply w-20vw inline-block p-13;
      // border: 1px solid #000;
    }
    .idolShadow-2{
      @apply opacity-0 ;
    }
  }
  .popup-idol{
    @apply w-20vw p-5 bottom-0 left-50% translate-x-[-50%] translate-y-[20%] scale-75 absolute ;
  }
  .idolShadow{
  }
}
</style>
