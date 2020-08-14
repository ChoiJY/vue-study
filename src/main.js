import Vue from 'vue'
import router from './routes';
import App from "@/App";

Vue.config.productionTip = false

/**
 *  Description:
 *
 *  @Author: Choi Jun Young
 *  Copyright (c) 2020-08-14 CJ ENM MEZZOMEDIA
 */

// initialize app
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
