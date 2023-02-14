<script setup>
import Carousel from '@/views/HotSpringWebsite/components/Carousel.vue'
import Sticky from '@/views/HotSpringWebsite/components/Sticky.vue'
import Zoomin from '@/views/HotSpringWebsite/components/Zoomin.vue'
// import About from '@/views/HotSpringWebsite/components/About.vue'
import FlowingLogo from '@/views/HotSpringWebsite/components/FlowingLogo.vue'
import FlowingIdol from '@/views/HotSpringWebsite/components/FlowingIdol.vue'
import Slid from '@/views/HotSpringWebsite/components/Slid.vue'
</script>

<template>
  <header class="header">
    <div class="header-logo">
      <img src="src/assets/images/hot-spring-website/logo-tanakaya.svg" alt="">
    </div>
    <nav class="header-menu">
      <a>商品一覧</a>
      <a>田中屋について</a>
      <a>ご利用ガイド</a>
      <a i-ion-logo-twitter />
      <a i-ion-logo-instagram />
    </nav>
    <nav class="header-nav">
      <a><span i-ion-cart-sharp /></a>
      <a ml-3><span i-ion-person-circle /></a>
      <a ml-3><span i-ion-search /></a>
    </nav>
  </header>
  <main>
    <Carousel w-screen h-screen />
    <Sticky w-screen />
    <Zoomin w-screen />
    <!-- <About w-screen /> -->
    <FlowingLogo w-screen />
    <FlowingIdol w-screen />
    <Slid w-screen h-screen />
  </main>
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
  .border-decorate {
    @apply border-8px border-black;
  }
  .header {
    @apply flex justify-between items-center w-screen p-20px fixed top-0 z-20;
    .header-logo {
      @apply cursor-pointer w-130px;
    }
    .header-menu{
      a {
        @apply text-4 font-bold px-20px transition-color duration-300 ease-in-out;
        &:hover {
          @apply c-#f72f8d ;
        }
      }
    }
    .header-nav{
      a {
        @apply relative inline-block w-45px leading-45px text-center ransition-all duration-300 ease-in-out;
        &::after {
          @apply absolute top-0 left-0 content-empty bg-white w-100% h-100% z-[-1] rounded-full transition-all duration-300 ease-in-out;
        }
        &:hover {
          @apply c-white;
          &::after{
            @apply bg-#f72f8d scale-125;
          }
        }
        span {
          @apply inline-block text-5 v-middle ;
        }
      }
    }
  }
  main {
    @apply bg-[url('src/assets/images/hot-spring-website/bg.jpg')];
    &::before, &::after{
      @apply absolute bottom-[-150px] inline-block content-empty w-18% h-182px bg-repeat-inherit bg-[length:26px_auto]
      bg-[url('src/assets/images/hot-spring-website/dot.svg')];
    }
    &::before{
      @apply bg-right-top left-0;
    }
    &::after{
      @apply bg-left-top right-0;
    }
  }
</style>
