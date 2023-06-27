<script setup>
import Header from '@/components/Header.vue'
import CarouselIdol from '@/components/CarouselIdol.vue'
import CarouselImg from '@/components/CarouselImg.vue'
import Sticky from '@/components/Sticky.vue'
import Zoomin from '@/components/Zoomin.vue'
import AboutHotSpring from '@/components/AboutHotSpring.vue'
import AboutShop from '@/components/AboutShop.vue'
import FlowingLogo from '@/components/FlowingLogo.vue'
import FlowingIdol from '@/components/FlowingIdol.vue'
import FlowingCoupon from '@/components/FlowingCoupon.vue'
import CommentSlid from '@/components/CommentSlid.vue'
import ProductSlid from '@/components/ProductSlid.vue'
import Notice from '@/components/Notice.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <Header w-screen />
  <main>
    <CarouselIdol w-screen h-screen />
    <!-- <Sticky w-screen /> -->
    <!-- <Zoomin w-screen /> -->
    <AboutHotSpring w-screen />
    <FlowingLogo w-screen />
    <ProductSlid w-screen />
    <FlowingIdol w-screen />
    <CommentSlid w-screen />
    <CarouselImg w-screen />
    <AboutShop w-screen />
    <FlowingCoupon w-screen />
    <Notice w-screen />
  </main>
  <Footer w-screen />
</template>

<style lang="scss">
  h3 {
    @apply font-black text-12;
  }
  h4 {
    @apply font-black text-lg;
  }
  h5 {
    @apply font-black text-xl ;
  }
  h6 {
    @apply c-white text-6 font-bold;
  }
  p {
    @apply font-450 text-[14px] tracking-[-0.0125em];
  }
  a {
    @apply cursor-pointer leading-relaxed;
  }
  a.to-next {
    @apply mt-[40px] inline-block leading-[60px] c-white bg-black p-l-[25px] p-r-[15px] rounded-full transition-all duration-300 ease-in-out;
      span {
        @apply relative ml-[17px] inline-block v-middle w-20px h-20px bg-white rounded-full;
      }
      &:hover {
        @apply bg-#f72f8d;
      }
  }
  ::before, ::after {
    @apply pointer-events-none;
  }
  .border-decorate {
    @apply border-8px border-black;
  }

  main {
    @apply bg-[url('/gsap-practise/bg.jpg')];
    &::before, &::after{
      @apply absolute bottom-[-150px] inline-block content-empty w-18% h-182px bg-repeat-inherit bg-[length:26px_auto];
      bg-[url('/gsap-practise/dot.svg')];
    }
    &::before{
      @apply bg-right-top left-0;
    }
    &::after{
      @apply bg-left-top right-0;
    }
  }
</style>
