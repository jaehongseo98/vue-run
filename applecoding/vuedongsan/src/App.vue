<!-- @veu/cli 뷰브로젝트 생성 라이브러리 -->
<!--v-for="작명 in 횟수" :key="작명"-->
<!-- template html, script js, style css-->
<!-- vue 3 뭐지 잘 안된다 -->
<template>
    <div id="app">
        <Header />
        <div id="content" class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from './components/layout/Header.vue';
export default {
    name: 'App',

    components: {
        Header,
    },
};
</script>

<style></style>
