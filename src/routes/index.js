import List from "@/components/pages/List";
import Post from "@/components/pages/Post";
import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/components/pages/Home";

/**
 *  Description:
 *
 *  @Author: Choi Jun Young
 *  Copyright (c) 2020-08-14 CJ ENM MEZZOMEDIA
 */

const lists = [
    {path: '/', name: 'Home', component: Home},
    {path: '/list', name: 'List', component: List},
    {path: '/post', name: 'Post', component: Post},
];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: lists,
});

export default router;
