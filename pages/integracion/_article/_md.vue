<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <nuxt-content :document="article"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "@nuxtjs/composition-api";
import {Ctx} from "~/common/types/NuxtCustom";

export default defineComponent({
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
