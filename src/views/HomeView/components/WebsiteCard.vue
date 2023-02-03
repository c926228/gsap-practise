<script setup>
// import { reactive, onMounted, ref, computed } from "vue";
</script>

<template>
  <div class="website-card-zone">
    <div v-for="i in 5" :key="i" class="website-card">
      <div class="head">
        <span class="dot" bg-rose-300 />
        <span class="dot" bg-amber-300 />
        <span class="dot" bg-lime-300 />
      </div>
      <div class="img">
        <img src="https://picsum.photos/300/200" alt="">
      </div>
      <div class="introduce">
        <div class="title">
          {{ i }}title
        </div>
        <div class="text">
          introduce - text Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti veniam eius earum reprehenderit perspiciatis excepturi pariatur ipsum provident corporis tenetur magnam voluptas, fugiat rerum voluptatibus minus mollitia a harum.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.website-card-zone {
  @apply p-10;
}
.website-card {
  @apply  inline-flex flex-col justify-between w-1/3 h-auto bg-neutral-100 border-3 border-solid border-neutral-100 rounded-lg cursor-pointer overflow-hidden c-neutral-600 m-5;
  transition: all 1s ease-in-out ;
  &:hover {
    @apply bg-neutral-600 border-neutral-600 c-light-900;
  }

  .head {
    @apply p-5px ;
    .dot {
      @apply inline-block w-10px h-10px mr-5px rounded-full ;
    }
  }
  .img {
    img {
      @apply w-100%
    }
  }
  .introduce {
    @apply p-5px ;
  }

}
</style>
