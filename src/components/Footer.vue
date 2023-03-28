<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const navList = ['お知らせ', 'ご利用規約', '特定商取引法に基づく表記', 'プライバシーポリシー', 'お問い合わせ']

onMounted(() => {

})
</script>

<template>
  <div class="footer-page" scoped>
    <div class="nav">
      <a v-for="nav in navList" href="">{{ nav }}</a>
    </div>
    <div class="main-box">
      <div class="left-box">
        <img src="../assets/images/logo-rururu.svg">
      </div>
      <div class="right-box">
        <div class="top-nav">
          <a i-ion-logo-twitter />
          <a i-ion-logo-instagram />
          <a class="icon-blank">田中屋公式HP</a>
        </div>
        <div class="bottom-text">
          <span> © RURURU ONSEN. All rights reserved.</span>
          <span>illustration by <a href="" underline class="icon-blank">Kenichi Sugimoto</a></span>
        </div>
      </div>

      <a class="go-top"><span i-ion-ios-arrow-dropup />PAGE TOP</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-page{
  @apply p-[140px_80px_120px] c-white bg-black;
  a {
      &:hover {
        @apply c-#f72f8d;
      }
    }
  .nav {
    @apply text-xs mb-50px;
    a {
      @apply ml-30px ;
    }
    :first-child {
      @apply ml-0;
    }
  }
  .main-box {
    @apply flex items-end text-xs relative;
    border: 1px solid #000;
    .left-box {
      @apply w-[480px];
    }
    .right-box {
      @apply   flex flex-col items-end flex-1;
      .top-nav {
        @apply mb-10px;
        // border: 1px solid #f00;
        a {
          @apply p-10px mr-1.5rem;
        }
        :last-child {
          @apply border-1 border-white border-solid p-5px mr-0;
          &:hover{
            @apply  c-black bg-white;
          }
        }

      }
      .bottom-text {
        a {
          &:hover{
            @apply  c-white ;
          }
        }
      }
      .icon-blank {
        &::after {
          @apply content-empty inline-block w-[8px] h-[8px] align-middle ml-[5px] bg-no-repeat bg-cover bg-center bg-[url('src/assets/images/icon-blank.png')];
        }
      }
    }
    .go-top {
      @apply absolute right-0 top-[-60%] write-vertical-right text-sm font-bold;
      span {
        @apply p-9px mb-5px ;
        border: 1px solid #000;
      }
    }
  }

}
</style>
