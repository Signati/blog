<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
    color="white"
    outlined
    style="left: 0px !important; right: 0px !important; border-bottom-color: rgba(0,0,0,.12)!important;"
    elevation="0"
  >
    <v-app-bar-nav-icon v-if="hide" class="d-lg-none d-xl-flex" @click.stop="drawerTouch"/>
    <v-img
      class="shrink"
      width="50"
      height="50"
      src="/logo.png"
    />
    <v-toolbar-title class="ml-3" v-text="title"/>
    <v-spacer/>
    <v-btn to="/" text>
      home
    </v-btn>
    <v-btn to="/blog" text>
      articulos
    </v-btn>
    <v-btn to="/" text>
      linux
    </v-btn>
    <v-btn to="/me" text>
      Programacion
    </v-btn>
    <v-btn to="/windows" text>
      Windows
    </v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import {computed, defineComponent, reactive, ref, watch} from '@vue/composition-api';
import {mdiGithub, mdiMenu, mdiLanguagePhp, mdiNodejs, mdiLanguagePython} from '@mdi/js';
import Search from "~/components/Search.vue";

interface PropsToolbar {
  value: boolean;
  hiddenMenu: boolean;
}

// @ts-ignore
import * as Cookies from 'js-cookie'
import {useLocalStorage} from "@vueuse/core";
import {useTheme} from "~/common/composables/useTheme";
import {useRoute, useRouter} from "@nuxtjs/composition-api";

const ToolbarBlog = defineComponent<PropsToolbar>({
  components: {
    Search
  },
  props: {
    value: {
      type: Boolean,
      required: false, // Accepts null and undefined as well
    },
    hiddenMenu: {
      required: false,
      default: false
    }
  },
  setup(props: { value: boolean, hiddenMenu: boolean }, {emit, root}) {
    const title = 'Signati'
    const clipped = ref(false)
    const open = computed(() => {
      return props.value;
    });

    const {programming, setProgramming} = useTheme()

    const hide = computed(() => {
      return props.hiddenMenu;
    });
    const route = useRoute()
    const router = useRouter()
    const drawerTouch = () => {
      console.log('value ' + props.value);
      console.log('value emit' + !props.value);
      emit('input', !open.value);
    };

    return {
      drawerTouch,
      clipped,
      mdiGithub,
      mdiMenu,
      open,
      title,
      hide,
      programming
    };
  },
});
export default ToolbarBlog;
</script>
