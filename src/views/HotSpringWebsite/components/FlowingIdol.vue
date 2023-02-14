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

const logoRepeat = ref(2)

const flowingAnimation = gsap.timeline()
const flowingBox = ref(null)

const test = ref(null)

const currentItem = ref(1)
const flowingBoxMoveX = computed(() => currentItem.value / 5)
onMounted(() => {
  flowingAnimation
    .to(test.value, {
      duration: 2,
      // keyframes: [
      //   { x: '-10%', y: '-20%' },
      //   { x: '-25%', y: '-30%' },
      //   { x: '-50%', y: '-20%' },
      //   { x: '-75%', y: '0%' },
      //   { x: '-100%', y: '0%' },
      // ],
      ease: 'power3.inOut',
    })
    .set(flowingBox.value, {
      x: flowingBoxMoveX.value,
      onComplete: () => {
        console.log('onMounted -> flowingBoxMoveX.value', flowingBoxMoveX.value);
        currentItem.value += 1
      },
    })
    // .repeat(-1)
})
</script>

<template>
  <div class="flowing-idol-page">
    <div ref="flowingBox" class="flowing-box">
      <div v-for="(item, index) in processList" ref="test" :key="item.idolImg" class="flowing-idol-box">
        <span>{{ index }}</span>
        <img :src="`src/assets/images/hot-spring-website/${item.idolShadowImg}`">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flowing-idol-page{
  // overflow-hidden
  @apply mt-[175px] ;
  .flowing-box{
    @apply whitespace-nowrap inline-block;
    // border: 1px solid #f00;
    .flowing-idol-box{
      @apply w-20vw inline-block p-10;
      border: 1px solid #000;
      img {
        @apply relative inline-block ;
      }
    }
  }
}
</style>
