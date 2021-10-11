<!-- @veu/cli 뷰브로젝트 생성 라이브러리 -->
<!--v-for="작명 in 횟수" :key="작명"-->
<!-- template html, script js, style css-->
<template>
    <div>
        <!-- 모달창 -->
        <div class="black-bg" v-if="모달창 === true">
            <div class="white-bg">
                <h4>상세페이지</h4>
                <button @click="close">닫기</button>
            </div>
        </div>

        <!-- 메뉴 리스트 -->
        <div class="menu">
            <!-- <a v-for="작명 in 3" :key="작명">HOME</a> -->
            <a v-for="(menulist, i) in menu" :key="i">{{ menulist }}</a>
            <!-- key 필수 i만 인식 나머지는 언디파인드 -->
        </div>

        <!-- 데이터 바인딩 자주변경 되는 데이터 -->

        <!-- :src="require(`@/assets/room${i}.jpg`)" -->

        <div v-for="(pd, i) in 원룸들" v-bind:key="i">
            <img alt="Vue logo" :src="`${pd.image}`" class="img-li" />
            <!-- :이거 붙여줘야 ${}가능 html 속성에 -->
            <span @click="모달창 = true" class="red" :style="style">{{
                pd.title
            }}</span
            ><br />
            {{ pd.price }}
            <div>
                <button @click="increase(i)">허위매물신고</button
                ><span>신고수 : {{ pd.count }}</span>
            </div>
        </div>
        <div>
            <div>부모 카운터 :</div>
            <button>+</button>
            <button>-</button>
        </div>
    </div>
</template>

<script>
import data from './assets/data';
export default {
    name: 'App',
    data() {
        return {
            모달창: false,
            신고수: [0, 0, 0],
            menu: ['HOME', 'PRODUCT', 'ABOUT'],
            price1: [1000, 2000, 3000],
            price2: 70,
            style: 'color:blue', //html속성도 가능
            products: ['역삼동원룸', '천호동원룸', '서울원룸'],
            원룸들: data,
        };
    },
    components: {},
    methods: {
        increase(i) {
            this.원룸들[i].count += 1;
        },
        close() {
            this.모달창 = false;
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
