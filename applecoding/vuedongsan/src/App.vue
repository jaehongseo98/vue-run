<!-- @veu/cli 뷰브로젝트 생성 라이브러리 -->
<!--v-for="작명 in 횟수" :key="작명"-->
<template>
    <div class="black-bg" v-if="모달창 === true">
        <div class="white-bg">
            <h4>상세페이지</h4>
        </div>
    </div>
    <div class="menu">
        <!-- <a v-for="작명 in 3" :key="작명">HOME</a> -->
        <a v-for="(작명, i) in menu" :key="i">{{ 작명 + i }}</a>
        <!-- key 필수 i만 인식 나머지는 언디파인드 -->
    </div>

    <div>
        <h4 @click="모달창 = true" class="red" :style="style">xx 원룸</h4>
        <p>{{ price1 }} 만원</p>
    </div>
    <div>
        <h4>xx 원룸</h4>
        <p>{{ price2 }} 만원</p>
        <!-- 데이터 바인딩 자주변경 되는 데이터 -->
        <button @click="increase">허위매물신고</button
        ><span>신고수 : {{ 신고수 }}</span>
    </div>
    <div v-for="(pd, i) of products" v-bind:key="i">
        {{ pd }}<br />
        {{ price1 }}
        <img
            alt="Vue logo"
            :src="require(`@/assets/room${i}.jpg`)"
            class="img-li"
        />
        <!-- :이거 붙여줘야 ${}가능 -->

        <button @click="increase">허위매물신고</button
        ><span>신고수 : {{ 신고수[i] }}</span>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            i: [0, 1, 2],
            모달창: false,
            신고수: [0, 0, 0],
            menu: ['HOME', 'PRODUCT', 'ABOUT'],
            price1: 1000,
            price2: 70,
            style: 'color:blue', //html속성도 가능
            products: ['역삼동원룸', '천호동원룸', '서울원룸'],
        };
    },
    components: {},
    methods: {
        increase() {
            this.신고수 += 1;
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

body {
    margin: 0;
}
div {
    box-sizing: border-box;
}

.black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0, 5);
    position: fixed;
    padding: 20px;
}

.white-bg {
    width: 100%;
    border-radius: 8px;
    background: white;
    padding: 20px;
}
.menu {
    background: darkblue;
    padding: 15px;
    border-radius: 5px;
}

.menu a {
    color: white;
    padding: 10px;
}

.img-li {
    width: 100%;
    margin-top: 40px;
}
</style>
