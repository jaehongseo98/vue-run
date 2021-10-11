<template>
    <div>
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
    </div>
</template>
<script>
import data from '../assets/data';
export default {
    name: 'Home',
    data() {
        return {
            원룸들: data,
        };
    },
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
<style></style>
