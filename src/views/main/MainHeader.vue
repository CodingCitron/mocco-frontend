<script setup>

</script>
<template>
    <header class="main-header">
        <div class="main-header-inner">
            <div>
                <h1>
                    <RouterLink to="/">
                        MOGAGCO
                    </RouterLink>
                </h1>
            </div>
            <nav class="main-nav">
                <ul>
                    <li>
                        <RouterLink to="#">
                            내 모각코
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'login' }">
                            로그인
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<style scoped>

</style>