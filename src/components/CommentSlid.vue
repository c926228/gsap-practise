<script setup>
import { computed, onMounted, ref } from 'vue'
import gsap from 'gsap'
// 實際清單
const commentDataList = [
  {
    pic1: 'voice-m40-50.png',
    pic2: 'voice-balloon-nomeru.svg',
    name: 'W.Yさま',
    status: '50代 / 男性',
    content: '朝、水に溶かして一袋づつ飲んでいます！水にさっと溶けてくれるので飲みやすく、どことなく甘みを感じる味です。整腸作用が効いているのか毎日快便になってお腹もスッキリした気がします！続けてみようと思います。',
  }, {
    pic1: 'voice-w40-50.png',
    pic2: 'voice-balloon-haireru.svg',
    name: 'Y.Mさま',
    status: '40代 / 女性',
    content: '小分けのスプレーボトルにお水で溶かして持ち歩いています！泉質は、“硫酸塩泉”。「美人の湯」とも呼ばれるくらい美肌効果もあるそうで、皮膚にも優しく、保温効果やニキビなどの効果も！？温泉を持ち歩けるなんてとても豪華ですね。',
  }, {
    pic1: 'voice-w60.png',
    pic2: 'voice-balloon-tabereru.svg',
    name: 'S.Mさま',
    status: '60代 / 女性',
    content: 'ご飯を炊く際に、温泉パウダーを入れてみました。パウダーを入れたご飯、入れてないご飯を食べ比べてみると、パウダーを入れた方がお米の粒が際立っていて、また甘みも感じられ、ご飯が美味しかったです。',
  }, {
    pic1: 'voice-m40-50.png',
    pic2: 'voice-balloon-tabereru.svg',
    name: 'S.Eさま',
    status: '40代 / 男性',
    content: '米を研いで温泉パウダーを混ぜました。だまなどにはならずすっと水に溶けてくれて満遍なく成分が行き渡った印象。お米一粒一粒が立つというのだろうか？咀嚼のたびに米が程よくほぐれいつもよりもお米そのものの旨味を感じた。',
  }, {
    pic1: 'voice-m20-30.png',
    pic2: 'voice-balloon-nomeru.svg',
    name: 'ねこぽんさま',
    status: '20代 / 男性',
    content: '飲んだ感じは無味無臭で、どんな飲料・食べ物にも合いそうです。パッケージが可愛いので、プレゼントにも良いかも♪現地に足を運ばなくても自宅で、食べて・飲んで・入って楽しめるのはいいですね。まだ飲みはじめたばかりですが、送料の関係もあるので定期購入でお得に買えたらいいのにな〜って思いました。',
  }, {
    pic1: 'voice-w20-30.png',
    pic2: 'voice-balloon-nomeru.svg',
    name: 'O.Sさま',
    status: '20代 / 女性',
    content: '粉を一口舐めてみると、わたあめみたいにほんのりと甘くて美味しかったです。粉は、口で中でサラッと溶けていきました。白湯に溶かして飲んでも美味しく飲むことができました。',
  },
]
// Dom 渲染的清單 ＝ 實際清單*3
const processList = computed(() => {
  return Array(3).fill().flatMap(() => commentDataList)
})

const currentItem = ref(commentDataList.length) // 當前項目
const previousItem = ref(0) // 前一個項目
const moveX = computed(() => currentItem.value * -100)

const progressbarX = computed(() => { // 進度條大小
  return currentItem.value % commentDataList.length >= 0 ? currentItem.value % commentDataList.length + 1 : currentItem.value % commentDataList.length + 7
}) // 進度條大小

//* 切換當前項目
function changeCommentItem(btn) {
  previousItem.value = currentItem.value
  currentItem.value += btn

  moveCommentListLis()
}

const listItem = ref(null)

//* 清單 位移
function moveCommentListLis() {
  gsap.timeline()
    .to('.progressbar', { duration: 0.5, scaleX: progressbarX.value, transformOrigin: '0%' })
    .to(`.item${currentItem.value}`, { duration: 0.3, opacity: 1 }, '<')
    .to(`.item${previousItem.value}`, { duration: 0.3, opacity: 0.5 }, '<')
    .to(listItem.value, {
      duration: 0.5,
      xPercent: moveX.value,
      onComplete: () => {
        // 如果是第一輪最後一個||第三輪第一個 => 彈回第二輪的第一個||最後一個
        if (currentItem.value === (commentDataList.length - 1) || currentItem.value === (commentDataList.length * 2))
          backSecondList()
      },
    }, '<')
}

// 初始化 回到第二輪的 第一個||最後一個
function backSecondList() {
  // 計算 第二輪的第一個||最後一個

  previousItem.value = currentItem.value
  currentItem.value = (currentItem.value % commentDataList.length) + commentDataList.length

  // 回第二輪的第一個||最後一個
  gsap.timeline()
    .set(listItem.value, { xPercent: moveX.value })
    .set(`.item${currentItem.value}`, { opacity: 1 }, '<')
    .set(`.item${previousItem.value}`, { opacity: 0.5 }, '<')
}

function getImageUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

onMounted(() => {
  gsap.timeline()
    .set(listItem.value, { duration: 0.5, xPercent: moveX.value })
    .set(`.item${currentItem.value}`, { duration: 1, opacity: 1 }, '<')
})
</script>

<template>
  <div class="comment-slid-page">
    <div class="left-area">
      <div class="title">
        <h6>Voice</h6>
        <h3>お客様の声</h3>
      </div>
    </div>
    <div class="right-area">
      <div class="list-box">
        <div class="process-list">
          <div v-for="(item, index) in processList" :key="item.name" ref="listItem" class="list-items " :class="`item${index}`">
            <img class="pic1" :src="getImageUrl(item.pic1)" alt="">
            <img class="pic2" :src="getImageUrl(item.pic2)" alt="">
            <h6 m-t-20px>
              {{ item.name }}
            </h6>
            <p m-t-5px m-b-15px font-bold>
              {{ item.status }}
            </p>
            <div class="content">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <a class="arrow-icon" left--23px @click="changeCommentItem(-1)"><div i-ion:chevron-back-outline c-white text-2xl /></a>
      <a class="arrow-icon" left-357px @click="changeCommentItem(1)"><div i-ion:chevron-forward c-white text-2xl /></a>
      <div class="swiper-pagination">
        <span :style="{ width: `${1 / commentDataList.length * 100}%` }" class="progressbar" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment-slid-page{
  @apply pt-20 flex c-black truncate;
  .left-area{
    @apply relative w-20% h-100% py-80px;

    &::before{
      @apply absolute w-90px h-330px inline-block left-0 content-empty bg-repeat-inherit bg-[length:30px]
      bg-[url('/gsap-practise/dot.svg')];
    }
    .title {
      @apply ml-10 flex flex-col items-center;
      h3 {
        @apply write-vertical-left mt;
      }
    }

  }
  .right-area {
    @apply relative w-80% ;
    .list-box {
      @apply py-80px truncate;
      .process-list{
        @apply relative whitespace-nowrap;

        &::before {
          @apply absolute left-0  top-0 w-380px h-100% border-8px border-black content-empty border-solid ;
        }
        .list-items {
          @apply relative w-380px max-w-380px opacity-50 inline-block py-50px px-45px v-start ;

          .pic1{
            @apply w-50% translate-x-50%;
          }
          .pic2{
            @apply absolute top-0 right-30% translate-x-50% translate-y--50% w-130px;
          }
          .content {
            @apply whitespace-pre-wrap ;
          }

        }
      }
    }
    .arrow-icon {
      @apply absolute top-[50%] w-46px h-46px  text-center bg-black rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out;
      &:hover {
        @apply bg-#f72f8d ;
      }

    }
    .swiper-pagination {
      @apply w-100% h-4px bg-black;
      .progressbar {
        @apply h-100% bg-#f72f8d block;
      }
    }
  }
}
</style>
