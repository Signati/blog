// ~/plugins/vuex-persist.js
// @ts-ignore
import VuexPersistence from 'vuex-persist'
import {Context} from '@nuxt/types'
// @ts-ignore
import { VueEmotion } from '@egoist/vue-emotion'
import Vue from "vue";
import {Ctx} from "~/common/types/NuxtCustom";
Vue.use(VueEmotion)

export default ({store}: Ctx) => {
  new VuexPersistence({
    storage: window.localStorage,
    modules: ['theme'],
    // asyncStorage: true
    /* your options */
  }).plugin(store)
}
