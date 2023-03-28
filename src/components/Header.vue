<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const navList = ['お知らせ', 'ご利用規約', '特定商取引法に基づく表記', 'プライバシーポリシー', 'お問い合わせ']

onMounted(() => {

})
</script>

<template>
  <header class="header-page" scoped>
    <div class="header-logo">
      <img src="../assets/images/logo-tanakaya.svg" alt="">
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
</template>

<style lang="scss" scoped>
.header-page {
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
</style>
