<script setup>
import { computed, onMounted, ref } from 'vue'
import gsap from 'gsap'
// 實際清單
const productList = [
  {
    img: 'products1.jpg',
    name: '【田中屋オリジナル商品】るるる温泉１箱３０包入り',
    price: '3,888',
  },
  {
    img: 'products2.jpg',
    name: '会津亀屋のふる里3年味噌袋（つぶ）',
    price: '1,080',
  },
  {
    img: 'products3.jpg',
    name: 'タイプA露天風呂付特別室ペア宿泊券（平日）',
    price: '66,000',
  },
  {
    img: 'products4.jpg',
    name: '【当館の温泉使用】みかえり乙女洗顔せっけん「八汐ピンク」',
    price: '1,850',
  },
  {
    img: 'products5.jpg',
    name: '塩原ハンドクリーム',
    price: '1,100',
  },
  {
    img: 'products6.jpg',
    name: '日本の名湯　那須塩原入浴剤（５包）',
    price: '620',
  },
  {
    img: 'products7.jpg',
    name: '那須高原黒毛和牛ラーメン（１袋）',
    price: '270',
  },
  {
    img: 'products8.jpg',
    name: 'ブルーベリーカシス黒酢ジュース',
    price: '1,320',
  },
  {
    img: 'products9.jpg',
    name: '川瀬巴水ポストカード',
    price: '1,320',
  },
  {
    img: 'products10.jpg',
    name: '背中洗い網',
    price: '1,100',
  },
  {
    img: 'products11.jpg',
    name: '【田中屋オリジナル商品】るるる温泉　飲泉カップ　',
    price: '2,500',
  },
]
// Dom 渲染的清單 ＝ 實際清單*3
const processList = computed(() => {
  return Array(3).fill().flatMap(() => productList)
})

const cardDecorate = ref(null)

// 卡片背景動畫
function cardBgAnimation() {
  gsap.timeline()
    .to(cardDecorate.value, {
      duration: 5,
      keyframes: [
        { y: '1.25%', rotation: 2, scale: 1.05 },
        { y: '-1.25%', rotation: -5, scale: 1 },
      ],
      repeat: -1,
      yoyo: true,
      ease: 'none',
    })
}

const currentItem = ref(productList.length) // 當前項目
const previousItem = ref(0) // 前一個項目

// 切換商品項目 type: 1 arrBtn ,2 paginationBtn
function changeProductItem(type, value) {
  previousItem.value = currentItem.value
  currentItem.value = type === 1 ? currentItem.value += value : value + productList.length

  moveProductListLis()
}

const listItems = ref(null)
const moveX = computed(() => currentItem.value * -100 * (4 / 3))

//* 清單 位移
function moveProductListLis() {
  gsap.timeline()
    .to(`.item${previousItem.value}`, {
      duration: 1,
      y: 0,
      ease: 'back.out(1.7)',
    }, '<')
    .to(`.item${currentItem.value}`, {
      duration: 1,
      y: -80,
      ease: 'back.out(1.7)',
    }, '<')
    .to(listItems.value, {
      duration: 1,
      xPercent: moveX.value,
      onComplete: () => {
        if (currentItem.value === (productList.length - 1) || currentItem.value === (productList.length * 2))
          setToOriginal()
      },
    }, '<')
}

// 位置初始化
function setToOriginal() {
  previousItem.value = currentItem.value
  currentItem.value = (currentItem.value % productList.length) + productList.length

  gsap.timeline()
    .set(listItems.value, { xPercent: moveX.value })
    .set(`.item${currentItem.value}`, { y: -80 }, '<')
    .set(`.item${previousItem.value}`, { y: 0 }, '<')
}

function isActive(index) {
  return index === (currentItem.value % productList.length) ? 'active' : null
}

function getImageUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

onMounted(() => {
  cardBgAnimation()
  moveProductListLis()
})
</script>

<template>
  <div class="product-slid-page">
    <div class="title">
      <h6>Products</h6>
      <h3>商品一覧</h3>
    </div>
    <div class="list-box">
      <div class="arrowBtn">
        <a class="arrow-icon" left--23px @click="changeProductItem(1, -1)"><div i-ion:chevron-back-outline c-white text-2xl /></a>
        <a class="arrow-icon" right--23px @click="changeProductItem(1, 1)"><div i-ion:chevron-forward c-white text-2xl /></a>
      </div>
      <div class="process-list">
        <div v-for="(item, index) in processList" :key="item.name" ref="listItems" class="list-items" :class="`item${index}`">
          <div class="decorate">
            <div ref="cardDecorate" />
          </div>
          <a>
            <figure>
              <img :src="getImageUrl(`productImg/${item.img}`)" alt="">
            </figure>
            <h4>{{ index }} {{ item.name }}</h4>
            <p>{{ item.price }}<span text-xs ml-5px>円</span></p>
          </a>
        </div>
      </div>
      <div class="pagination-box">
        <a v-for="(item, index) in productList" :key="item" class="pagination-btn" :class="isActive(index)" @click="changeProductItem(2, index)" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-slid-page{
  @apply mt-[185px] pb-[135px];
  .title{
    @apply text-center;
  }
  .list-box{
    @apply relative  mt-[150px];
    .arrowBtn {
      @apply absolute top-[20%] translate-[-50%] left-[50%]  w-[300px] z-5 ;
      .arrow-icon {
        @apply absolute  top-[50%] translate-y-[-50%] w-46px h-46px text-center bg-black rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out;
        &:hover {
          @apply bg-#f72f8d ;
        }
      }
    }
    .process-list {
      @apply relative translate-x-50% left-[-150px] whitespace-nowrap ;
      .list-items {
        @apply relative w-300px mr-100px inline-block align-top;
        &::marker {

        }
        .decorate {
          @apply absolute top-50% left-50% translate-[-50%] w-[398px] h-[535px] z-[-1] invisible scale-0 transition-all duration-300 ease-in-out;
          div {
            @apply w-100% h-100% bg-white rounded-[30px];
          }
        }
        figure {
          @apply overflow-hidden;
          img {
            @apply transition-all duration-300 ease-in-out;
          }
        }
        h4 {
          @apply text-center mt-22px mb-8px whitespace-pre-wrap;
        }
        p {
          @apply transition-color duration-300 ease-in-out text-2xl color-white text-center;
        }
        &::before {
          @apply  absolute top-[-60px] left-[50%] translate-x-[-50%] z-5 block content-empty w-[80px] h-[100px] transition-all duration-300 ease-in-out
          bg-[url('/gsap-practise/series-steam.svg')];
          clip-path: inset(100% 0 0 0);
        }
        &:hover {
          &::before{
          clip-path: inset(0% 0 0 0);
          }
          img{
            @apply scale-[1.2];
          }
          p {
            @apply text-#f72f8d;
          }
          .decorate {
            @apply visible scale-100;
          }
      }
      }
    }
    .pagination-box{
      @apply absolute bottom-0 w-100% text-center ;
      .pagination-btn {
        @apply relative mx-[6px] w-[10px] h-[10px] inline-block bg-white rounded-full;
      }
      .active {
        @apply bg-#f72f8d;
        &::before {
          @apply absolute top-[50%] left-[50%] translate-[-50%] block content-empty w-[18px] h-[18px] rounded-full border-2 border-solid border-#f72f8d ;
        }
      }
    }
  }
}
</style>
