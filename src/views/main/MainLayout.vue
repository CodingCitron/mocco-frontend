<script setup>
import MainHeader from './MainHeader.vue'
import MainFooter from './MainFooter.vue'

</script>
<template>
    <div class="main-layout">
        <MainHeader />
        <router-view></router-view>
        <MainFooter />
    </div>
</template>
<style scoped>

</style>