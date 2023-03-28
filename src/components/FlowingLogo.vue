<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const logoBounce = gsap.timeline()
const flowingAnimation = gsap.timeline()
const logoRepeat = ref(2)
const flowingBox = ref(null)

onMounted(() => {
  logoBounce
    .to('.flowing-logo-box img', { // logo 彈出
      duration: 1,
      keyframes: [
        { y: '0%' },
        { y: '-25%' },
        { y: '0%' },
        { y: '15%' },
        { y: '0%' },
      ],
      ease: 'power1.inOut',
      stagger: 0.07,
      repeat: -1,
    })

  flowingAnimation
    .to(flowingBox.value, {
      duration: 10,
      xPercent: '-50',
      ease: 'none',
    })
    .repeat(-1)
})
</script>

<template>
  <div class="flowing-logo-page">
    <div ref="flowingBox" class="flowing-box">
      <div v-for="j in 2" :key="j" whitespace-nowrap inline-block>
        <div v-for="i in logoRepeat" :key="i" class="flowing-logo-box">
          <img class="w-[15%]" pt-5 top-2 src="../assets/images/logo-rororo1.svg">
          <img class="w-[15%]" pt-5 top-2 src="../assets/images/logo-rororo1.svg">
          <img class="w-[15%]" pt-5 top-2 src="../assets/images/logo-rororo1.svg">
          <img class="w-[25%]" mr-5 top-4 src="../assets/images/logo-rororo2.svg">
          <img class="w-[25%]" src="../assets/images/logo-rororo3.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flowing-logo-page{
  @apply mt-[175px] overflow-hidden;
  .flowing-box{
    @apply whitespace-nowrap inline-block;
    .flowing-logo-box{
      @apply w-50vw inline-block mr-15;
      img {
        @apply relative inline-block ;
      }
    }
  }
}
</style>
