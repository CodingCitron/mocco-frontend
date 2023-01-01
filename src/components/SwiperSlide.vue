<script setup>
import { ref, onMounted, defineProps } from 'vue'
import Swiper, { Navigation, Pagination } from 'swiper'

const props = defineProps({
    width: String,
    height: String
})

const swiper = {
    el: ref(null),
    prevEl: ref(null),
    nextEl: ref(null),
    slide: null
}

onMounted(() => {
    swiper.slide = new Swiper(swiper.el.value, {
        modules: [Navigation, Pagination],
        loop: true,
        navigation: {
            nextEl: swiper.nextEl.value,
            prevEl: swiper.prevEl.value,
        },
    })
})
</script>
<template>
    <!-- Slider main container -->
    <div class="swiper" :ref="swiper.el">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev" :ref="swiper.prevEl"></div>
        <div class="swiper-button-next" :ref="swiper.nextEl"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>
<style scoped>
.swiper {
    height: 100%;
}
</style>