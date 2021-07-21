<template>
  <div>
    <Jumbotron/>
    <v-container>
      <v-row>
        <v-col cols="2" md="2"/>
        <v-col cols="8" md="8">
          <nuxt-content :document="article"/>
        </v-col>
        <v-col cols="2" md="2"/>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "@nuxtjs/composition-api";
import {Ctx} from "~/common/types/NuxtCustom";
import Jumbotron from "~/components/core/Jumbotron.vue";

export default defineComponent({
  layout: "article",
  components: {
    Jumbotron,
  },
  async asyncData({$content, params, route}: Ctx) {
    console.log(route.fullPath)
    const article = await $content(route.fullPath).fetch()

    return {article}
  },
  setup(props, ctx) {

    onMounted(() => {

    })
    return {}
  }
})
</script>

<style scoped>

</style>
