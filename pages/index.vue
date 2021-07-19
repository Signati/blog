<template>
  <v-row>
    <v-col cols="12"
           sm="12"
           md="4"
           lg="4"
           v-for="article of articles"
    >

      <v-hover v-slot="{ hover }">
        <v-card
          :color="hover ? 'blue': 'green'"
        >
          <v-img
            v-if="hover"
            class="white--text align-end"
            height="200px"
            transition="scale-transition"
            :src="article.picture"/>
          <v-img
            v-else
            class="white--text align-end"
            height="200px"
            content-class="img"
            :src="article.picture"/>

          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-subtitle class="pb-0">
            {{ article.description }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ article.createdAt }}</div>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
// import Markup from "~/components/Markup.vue";
import {defineComponent, onMounted, ref, useStore} from "@nuxtjs/composition-api";
import {useNetwork} from '@vueuse/core'
import {computed, reactive} from "@vue/composition-api";
import type {Context} from "@nuxt/types";
import {$content} from "@nuxt/content/";

export default defineComponent({
  components: {
    Logo,
    VuetifyLogo,
    VueMarkdown: () => {
      if (process.client) {
        return import('vue-markdown-render')
      }
    },
  },
  setup(props, {}) {
    const network = reactive(useNetwork())
    const {state} = useStore()
    const articles = computed(() => {
      // @ts-ignore
      return state.article.articles
    })
    onMounted(() => {

    })
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
