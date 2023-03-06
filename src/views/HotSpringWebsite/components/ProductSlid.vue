<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import gsap from 'gsap'
// 實際清單
const productList = reactive([
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
    img: 'products1.jpg',
    name: '',
    price: '',
  },
  {
    img: 'products1.jpg',
    name: '',
    price: '',
  },
  {
    img: 'products1.jpg',
    name: '',
    price: '',
  },
  {
    img: 'products1.jpg',
    name: '',
    price: '',
  },
  {
    img: 'products1.jpg',
    name: '',
    price: '',
  },
])
// Dom 渲染的清單 ＝ 實際清單*3
const processList = computed(() => {
})

onMounted(() => {
  
})
</script>

<template>
  <div class="product-slid-page">
   
  </div>
</template>

<style lang="scss" scoped>
.product-slid-page{
 
}
</style>
