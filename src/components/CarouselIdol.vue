<script setup>
// import Svgtest from '@//views/HotSpringWebsite/components/img.svg'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import gsap from 'gsap'

const idolImgList = [
  {
    titleImg: 'mv-copy-drink.svg',
    idolImg: 'mv-chara-drink.svg',
    imgAlt: 'のめる！',
  },
  {
    titleImg: 'mv-copy-food.svg',
    idolImg: 'mv-chara-food.svg',
    imgAlt: 'たべれる！',
  },
  {
    titleImg: 'mv-copy-bath.svg',
    idolImg: 'mv-chara-bath.svg',
    imgAlt: 'はいれる！',
  },
]
const timeline = gsap.timeline()

const currentIdolImg = ref(0)

const idolshadowImgList = reactive([
  'mv-shadow-food.svg',
  'mv-shadow-bath.svg',
  'mv-shadow-drink.svg',
])

function animation() {
  timeline
    .to(`.idol-img-list-${currentIdolImg.value}`, { // idol 入場
      duration: 1,
      ease: 'elastic.out(.7, 0.3)',
      y: '-45%',
      opacity: 1,
    })
    .to(`.idol-img-list-${currentIdolImg.value} .title img`, { // idol 標題popup
      duration: 1,
      opacity: 1,
      scale: 1,
      ease: 'elastic.out(1.5, 0.3)',
      stagger: 0.2,

    }, '<0.5')
    .to('.logo-name', { // logo 彈出
      duration: 1,
      ease: 'elastic.out(.7, 0.3)',
      y: '-50%',
      opacity: 1,
      scale: 0.9,
      stagger: 0.1,
    }, '<')
    .to('.logo-name', { // logo 退場
      duration: 1,
      ease: 'elastic.in(.7, 0.3)',
      y: '50%',
      opacity: 0,
      scale: 1,
      stagger: 0.1,
    })
    .to(`.idol-img-list-${currentIdolImg.value}`, { // idol 退場 模糊
      duration: 0.7,
      filter: 'blur(20px)',
    }, '<')
    .to(`.idol-img-list-${currentIdolImg.value}`, { // idol 退場 向下
      duration: 0.8,
      ease: 'elastic.in(.5, 0.3)',
      y: '30%',
      opacity: 0,
    }, '<')
    .to(`.idolshadow-img-list-${currentIdolImg.value} div`, { // idolshadow 左彈
      duration: 0.375,
      keyframes: [
        { x: '-10%', y: '-20%', scale: 1.1 },
        { x: '-25%', y: '-30%', scale: 1.2 },
        { x: '-50%', y: '-20%', scale: 1.3 },
        { x: '-75%', y: '0%', scale: 1.4 },
        { x: '-100%', y: '30%', scale: 1.5, filter: 'blur(20px)', opacity: 0 },
      ],
      ease: 'power3.inOut',
      stagger: 0.2,
    }, '<0.5')
    .set(`.idolshadow-img-list-${currentIdolImg.value === 2 ? 0 : currentIdolImg.value + 1} div`, { // idolshadow
      x: '0',
      y: '0',
      opacity: 1,
      filter: 'blur(0)',
      scale: 1,
    }, '>')
    .set(`.idol-img-list-${currentIdolImg.value}`, { // idol 復原
      duration: 0,
      filter: 'blur(0)',
      onComplete: () => {
        currentIdolImg.value = currentIdolImg.value === 2 ? 0 : currentIdolImg.value += 1
        animation()
      },
    })
}

onMounted(() => {
  animation()
})
</script>

<template>
  <div class="carousel-page">
    <div class="idolshadow-carousel-box">
      <div v-for="(item, index) in idolshadowImgList" :key="item" class="idolshadow-img-list" :class="[`idolshadow-img-list-${index}`]">
        <div class="left-img">
          <img :src="`src/assets/images/${item}`" alt="">
        </div>
        <div class="right-img">
          <img :src="`src/assets/images/${idolshadowImgList[index === 2 ? 0 : index + 1]}`" alt="">
        </div>
      </div>
    </div>

    <div class="main-zone">
      <div class="logo-box">
        <div px-15>
          <div class="logo-name">
            <img src="src/assets/images/logo-rororo1.svg">
          </div>
          <div class="logo-name">
            <img src="src/assets/images/logo-rororo1.svg">
          </div>
          <div class="logo-name">
            <img src="src/assets/images/logo-rororo1.svg">
          </div>
        </div>
        <div pl-5>
          <div class="logo-name" mr-7>
            <img src="src/assets/images/logo-rororo2.svg">
          </div>
          <div class="logo-name">
            <img src="src/assets/images/logo-rororo3.svg">
          </div>
        </div>
      </div>

      <div class="idol-carousel-box">
        <div v-for="(item, index) in idolImgList" :key="item.idolImg" class="idol-img-list" :class="[`idol-img-list-${index}`]">
          <div class="fog">
            <img src="src/assets/images/yuge.png" alt="">
            <img src="src/assets/images/yuge.png" alt="">
          </div>
          <div class="img-item">
            <div class="title">
              <div><img :src="`src/assets/images/${item.titleImg}`" :alt="item.imgAlt" opacity-0></div>
              <div absolute top="-20%" left="-10%" w="50%">
                <img src="src/assets/images/mv-copy-nasu.svg" alt="那須塩原の" opacity-0>
              </div>
              <div absolute bottom="-35%" right-0 w="25%">
                <img src="src/assets/images/mv-copy-onsen.svg" alt="温泉" opacity-0>
              </div>
            </div>
            <div class="idol-img">
              <img :src="`src/assets/images/${item.idolImg}`" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .carousel-page {
    @apply relative pt-100px overflow-hidden;
    .idolshadow-carousel-box {
      @apply flex justify-end h-33% mb-5;
      .idolshadow-img-list {
        @apply flex items-center justify-around absolute w-1/3 ;
        div {
          @apply relative opacity-[0];
          &::before {
            @apply absolute top-[-10%] inline-block content-empty w-30% h-100px bg-no-repeat bg-[length:100%_auto]
            bg-[url('src/assets/images/mv-balloon.svg')];
          }
        }
        .left-img {
          @apply w-45%;
        }
        .right-img {
          @apply w-30% ;
          img {
            @apply opacity-[0.5];
          }
        }
      }
      .idolshadow-img-list-0 div{
        @apply opacity-[1];
      }

    }
    .main-zone {
      .logo-box {
        @apply flex justify-between pt-10 px-10 overflow-hidden ;
        // border: 1px solid #f00;

        >div {
          @apply flex w-1/3 ;
          // border: 1px solid #000;
          .logo-name {
            @apply flex-1 relative top-50% opacity-0 ;
            // border: 1px solid #000;
          }
        }
      }

      .idol-carousel-box{
        @apply absolute top-50% left-50% translate-[-50%] w-50%;
        .idol-img-list {
          @apply absolute w-100% translate-y-30% opacity-[0];
          .fog {
            @apply flex absolute w-100%;
            img {
              @apply w-50% opacity-[.5];
            }
          }
          .img-item {

            .title {
              @apply absolute top-5% left-[-20%] w-40% ;
              img {
                @apply scale-[0.7];
              }
            }
          }

        }

      }

    }

  }
</style>
