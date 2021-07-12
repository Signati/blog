<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      color="#F5F5FA"
      fixed
    >
      <Menu/>
    </v-navigation-drawer>
    <Toolbar v-model="drawer" :hidden-menu="true"></Toolbar>
    <v-navigation-drawer
      v-model="drawerRight"
      right
      clipped
      app
      fixed
    >

    </v-navigation-drawer>

    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  ref,
  useRoute,
  useRouter,
  useStore
} from "@nuxtjs/composition-api";
import Toolbar from "~/components/core/toolbars/toolbar.vue";
import {mdiGithub} from '@mdi/js';
import {RoutePath} from "~/common/types/RoutePath";
import {isMobile, isTablet} from 'mobile-device-detect';
import Menu from "~/components/Menu/Menu.vue";

export default defineComponent({
  components: {
    Toolbar,
    Menu
  },
  setup() {
    const drawerRight = ref(true)
    const drawer = ref(true)
    const fixed = ref(false)
    const {getters, state, commit} = useStore()
    const menuRoutesRight = computed(() => {
      return getters['menu/routes']
    })
    const miniVariant = ref<RoutePath[]>([])
    const router = useRouter()
    const route = useRoute()
    onMounted(async () => {
    })

    onBeforeMount(() => {
      if (isMobile || isTablet) {
        drawer.value = false;
        drawerRight.value = false
      }
    })
    return {
      drawer,
      drawerRight,
      fixed,
      miniVariant,
      mdiGithub,
      menuRoutesRight,

    }
  }
})
</script>
<style>
html {
  font-family: "DM Sans";
}

</style>
