<template>
  <v-treeview :items="routesPath"
              selection-type="independent"
              dense
              color="black"
              style="font-size: 15px;"
              return-object.id
              open-on-click
  >
    <template v-slot:label="{ item }">
      <v-btn v-if="item.icon && false" icon color="primary">
        <v-icon v-text="`${item.icon }`"></v-icon>
      </v-btn>
      <NuxtLink style="text-decoration: none" :to="item.url">
        {{ item.name }}
      </NuxtLink>
      <!--<a :href="`#${item.url }`">

      </a>-->
    </template>
  </v-treeview>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, useStore} from '@nuxtjs/composition-api'
import {menu} from "~/common/util/menu";
import {RoutePath} from "~/common/types/RoutePath";
import MenuListCollapse from "~/components/Menu/MenuListCollapse.vue";
import MenuList from "~/components/Menu/MenuList.vue";


export default defineComponent({
  name: 'Menu',
  components: {
    MenuList,
    MenuListCollapse
  },
  setup(props, {}) {
    const {getters} = useStore()
    const menuRoutesRight = computed(() => {
      return getters['menu/routes']
    })
    const routesPath = ref<RoutePath[]>(menu)
    return {
      routesPath
    }
  }
})
</script>

<style lang="scss">
::v-deep .v-treeview-node__level {
  width: 13px !important;
}

.v-treeview-node__level {
  width: 13px !important;
}

::v-deep .v-treeview--dense .v-treeview-node__root {
  min-height: 32px;
}

.v-treeview--dense .v-treeview-node__root {
  min-height: 32px;
}
</style>
