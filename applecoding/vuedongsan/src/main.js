// import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vue from 'vue';

// createApp(App).mount('#app');

new Vue({
    el: '#app',
    router,
    comments: { App },
    template: '<App>',
});
