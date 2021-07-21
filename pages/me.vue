<template>
  <div>
    <Jumbotron/>
  </div>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
// import Markup from "~/components/Markup.vue";
import {
  defineComponent,
  onMounted,
  onServerPrefetch,
  ref,
  ssrRef,
  useAsync,
  useContext,
  useStore
} from "@nuxtjs/composition-api";
import {useNetwork} from '@vueuse/core'
import {computed, reactive} from "@vue/composition-api";
import type {Context} from "@nuxt/types";
import {$content} from "@nuxt/content/";
import {getArticles} from "~/common/service/Articles";
import Jumbotron from "~/components/core/Jumbotron";

export default defineComponent({
  components: {
    Logo,
    Jumbotron,
    VuetifyLogo,
    VueMarkdown: () => {
      if (process.client) {
        return import('vue-markdown-render')
      }
    },
  },
  setup(props, {}) {

    const network = reactive(useNetwork())
    const {state, commit} = useStore()
    const articles = computed(() => {
      // @ts-ignore
      return state.article.articles
    })
    onMounted(async () => {
      const article = await getArticles()
      commit("article/setArticles", article)
    })
    /* useAsync(async () => {
       const article = await getArticles()
       commit("article/setArticles", article)
     })*/

    return {
      network,
      articles
    }
  }
})
</script>
<style scoped>
v-deep .v-image__image--cover:hover {
  transform: scale(1.1);
}
</style>
