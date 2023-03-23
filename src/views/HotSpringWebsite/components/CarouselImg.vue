<script setup>
// import Svgtest from '@//views/HotSpringWebsite/components/img.svg'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import gsap from 'gsap'

const carouselImgList = [
  'gallery-01.jpg',
  'gallery-02.jpg',
  'gallery-03.jpg',
  'gallery-04.jpg',
  'gallery-05.jpg',
  'gallery-06.jpg',
]
const processList = computed(() => {
  return Array(2).fill().flatMap(() => carouselImgList)
})

const carouselImgBox = ref(null)

function carouselAnimation() {
  gsap.timeline()
    .to(carouselImgBox.value, {
      duration: (carouselImgList.length * 10),
      xPercent: -50,
      ease: 'none',
    })
    .repeat(-1)
}

onMounted(() => {
  carouselAnimation()
})
</script>

<template>
  <div class="carousel-img-page">
    <div ref="carouselImgBox" class="carousel-img-box">
      <div v-for="img in processList" :key="img" class="img-item">
        <img :src="`src/assets/images/hot-spring-website/${img}`">
      </div>
    </div>
    <div class="logo-decorate">
      <img src="src/assets/images/hot-spring-website/gallery-logo.svg" alt="vertical-logo">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .carousel-img-page {
    @apply relative mt-190px h-[550px] overflow-hidden;
    .carousel-img-box {
      @apply h-100% inline-block whitespace-nowrap;
      .img-item {
        @apply w-[433px] h-100% inline-block;
      }
    }
    .logo-decorate {
      @apply absolute top-0 left-[50%] translate-x-[-50%] h-100% w-[433px] bg-black flex justify-center items-center;
      img {
        @apply h-50%;
      }
    }
  }
</style>
