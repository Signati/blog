// ~/plugins/vuex-persist.js
// @ts-ignore
import VuexPersistence from 'vuex-persist'
import type {Context} from '@nuxt/types'
// @ts-ignore
import { VueEmotion } from '@egoist/vue-emotion'
import Vue from "vue";
Vue.use(VueEmotion)

export default ({store}: Context) => {
  new VuexPersistence({
    storage: window.localStorage,
    modules: ['theme'],
    // asyncStorage: true
    /* your options */
  }).plugin(store)
}
