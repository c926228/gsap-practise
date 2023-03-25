<script setup>
import { computed, onMounted, ref } from 'vue'
import gsap from 'gsap'

const flowingDot = ref(null)
const flowingCoupon = ref(null)

function flowingDotClass(num) {
  return num === 1 ? 'top' : 'bottom'
}

function flowingAnimation() {
  gsap.timeline()
    .to(flowingCoupon.value, {
      duration: 25,
      xPercent: 0,
      ease: 'none',
    })
    .to(flowingDot.value, {
      duration: 25,
      xPercent: -50,
      ease: 'none',
    }, '<')
    .repeat(-1)
}

onMounted(() => {
  flowingAnimation()
})
</script>

<template>
  <div class="flowing-coupon-page">
    <div class="coupon-img">
      <img src="src/assets/images/coupon-title.svg" alt="">
    </div>
    <div class="flowing-box">
      <div v-for="j in 2" :key="j" ref="flowingDot" class="flowing-dot" :class="flowingDotClass(j)">
        <div v-for="i in 2" :key="i" />
      </div>
      <a ref="flowingCoupon" class="flowing-coupon">
        <div v-for="i in 2" :key="i">
          <img src="src/assets/images/coupon-buy.svg" alt="">
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flowing-coupon-page{
  @apply mt-[125px] relative overflow-hidden pb-[50px];
  .coupon-img {
    @apply w-screen px-[2.4%] relative z-5;
    img {
      @apply w-100% h-auto;
    }
  }
  .flowing-box {
    @apply relative ;
    .flowing-dot {
      @apply absolute left-0 inline-block whitespace-nowrap ;
      div {
        @apply w-[2075px] h-[42px] inline-block bg-[url('src/assets/images/dot.svg')] bg-repeat-inherit bg-[length:21px_auto];
      }
    }
    .top {
      @apply top-[-48px];
    }
    .bottom {
      @apply bottom-[-48px];
    }
    .flowing-coupon {
      @apply h-[110px] inline-block whitespace-nowrap transition-colors duration-300 ease-in-out bg-black translate-x-[-50%];
      &:hover {
          @apply bg-[#f72f8d] ;
        }
      div {
        @apply relative w-[2075px] h-[100%] inline-block ;
        img {
          @apply absolute top-[50%] left-[50%] translate-[-50%] w-100% h-auto;
        }
      }
    }
  }

}
</style>
