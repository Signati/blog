<template>
  <v-app dark>
    <Toolbar v-model="drawer" :hidden-menu="true"></Toolbar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="2" md="2" lg="2">
          </v-col>
          <v-col cols="12" sm="12" md="8" lg="8">
            <nuxt/>
          </v-col>
          <v-col cols="12" sm="2" md="2" lg="2">
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
        width="100%"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Signati</strong>
        </v-card-text>
      </v-card>
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
  name: "article",
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

    const icons = [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ]
    onBeforeMount(() => {
      if (isMobile || isTablet) {
        drawer.value = false;
        drawerRight.value = false
      }
    })
    return {
      drawer,
      icons,
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
