<template>
    <div>
        <!-- 메뉴 리스트 -->
        <div class="menu">
            <!-- <a v-for="작명 in 3" :key="작명">HOME</a> -->
            <a v-for="(menulist, i) in menu" :key="i">{{ menulist }}</a>
            <!-- key 필수 i만 인식 나머지는 언디파인드 -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            menu: ['HOME', 'PRODUCT', 'ABOUT'],
        };
    },
};
</script>

<style>
.menu {
    background: darkblue;
    padding: 15px;
    border-radius: 5px;
}

.menu a {
    color: white;
    padding: 10px;
}
</style>
