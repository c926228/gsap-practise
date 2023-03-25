<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const zoominAnimation = gsap.timeline()

onMounted(() => {
  zoominAnimation.to('.curtain', {
    scrollTrigger: {
      trigger: '.zoomin-page',
      start: 'top top',
      toggleActions: 'play pause resume reset',
      scrub: true,
      toggleClass: 'is-active',
      markers: true,
    },
    keyframes: [
      { scale: 1.5, yPercent: 0 },
      { scale: 3, yPercent: -200 },
    ],
  })
})
</script>

<template>
  <div class="zoomin-page" scoped>
    <img src="src/assets/images/curtain.svg" alt="" class="curtain">
  </div>
</template>

<style lang="scss" scoped>
.zoomin-page{
  border: 1px solid #f00;
  @apply reactive mt-[157px] pb-[1750px] overflow-hidden;
  img {
    @apply absolute;
  }
}
.is-active {
  img {
    @apply fixed top-0;
  }
}
</style>
