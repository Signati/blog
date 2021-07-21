<template>
  <v-container>
    <section>
      <div class="font-weight-black text-uppercase mb-2"> Articulos Nuevos</div>
      <client-only>
        <v-row>
          <v-col cols="12"
                 sm="12"
                 md="4"
                 lg="4"
                 v-for="(article, i) of articles"
                 :key="i"
          >
            <v-card
              v-if="article.extension !=='ads'"
              :to="article.path"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                transition="scale-transition"
                :src="article.picture"/>
              <v-card-title>{{ article.title }}</v-card-title>
              <v-card-subtitle class="pb-0">
                {{ article.description }}
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>{{ article.createdAt }}</div>
              </v-card-text>
            </v-card>
            <span
              v-else
            >
          <InFeedAdsense
            data-ad-client="ca-pub-3148933927224946"
            data-ad-slot="1234567890">
        </InFeedAdsense>
        </span>
          </v-col>
        </v-row>
      </client-only>
    </section>
    <section>
      <div class="font-weight-black text-uppercase mb-2"> WebApps</div>
    </section>
    <section>
      <div class="font-weight-black text-uppercase mb-2"> Librerias</div>
    </section>
  </v-container>
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
import Jumbotron from "~/components/core/Jumbotron.vue";

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
