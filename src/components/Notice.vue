<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const noticeList = [
  { date: '2022.07.26', title: '５０００円以上お買い上げで送料無料 ！' },
  { date: '2022.07.10', title: 'オンラインショップオープンのお知らせ' },
]

onMounted(() => {

})
</script>

<template>
  <div class="notice-page" scoped>
    <div class="title">
      <h3 text-10>
        お知らせ
      </h3>
    </div>
    <div class="list-box">
      <a v-for="item in noticeList" :key="item.title" class="notice-list">
        <span>{{ item.date }}</span>
        <p>{{ item.title }}</p>
        <div><span i-ion:chevron-forward c-white w-20px h-20px inline-block align-middle/> </div>
      </a>
      <div>
        <a class="more" href="">ニュース一覧<span i-ion-ios-arrow-dropright-circle /></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notice-page{
  @apply flex justify-between mt-[145px] pb-[160px] px-[7.5%] ;
  .title {
    @apply flex-[0_0_30%];
  }
  .list-box {
    @apply flex-auto;
    >a, >div {
      @apply w-[100%] border-t-2 border-solid border-black;
    }
    >a {
      @apply relative inline-block py-[27px] pr-[60px];
      span {
        @apply c-white  text-3 font-bold;
      }
      div {
        @apply absolute right-[16px] top-[50%] translate-y-[-50%] w-[35px] h-[35px] text-center ;
        &::after {
          @apply absolute top-[-2px] left-[-1px] content-empty bg-#f72f8d w-100% h-100% z-[-1] rounded-full transition-all duration-200 ease-upper scale-0;
        }
      }
      &:hover {
        div {
          &::after {
          @apply scale-100 animate-bounce-in;
        }
        }
      }
    }
    >div {
      @apply pt-[38px] pr-[5px] text-right;
    }
    .more {
      span {
        @apply relative ml-[15px] inline-block v-middle w-22px h-22px bg-black rounded-full;
      }
      &:hover {
        @apply color-#f72f8d;
        span{
          @apply bg-#f72f8d;
        }
      }

    }
  }

}
</style>
