import Vue from "vue";
import VueRouter from "vue-router";
import App from "./modul/index.vue";

console.log(vue)

Vue.usr(VueRouter);

var router = new VueRouter({
    hashbang: false,
    history: true,
    saveScrollPosition: true
});

router.start(App, '#app');