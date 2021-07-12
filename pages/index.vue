<template>
  <v-row>
    <ul id="todo-list">
      <li class="one">Hello World</li>
      <li class="two">Hello World</li>
    </ul>
  </v-row>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
// import Markup from "~/components/Markup.vue";
import {defineComponent, onMounted, ref} from "@nuxtjs/composition-api";
import {useNetwork} from '@vueuse/core'
import {reactive} from "@vue/composition-api";


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
  setup(props, ctx) {
    const network = reactive(useNetwork())


    onMounted(() => {

    })
    return {
      network
    }
  }
})
</script>
