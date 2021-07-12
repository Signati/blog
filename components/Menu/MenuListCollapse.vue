<template>
  <v-list-group
    active-class="active"
    prepend-icon="mdi-account-circle"
  >
    <template v-slot:activator>
      <v-list-item-title class="ml-0 pl-0">
        {{ route.name }}
      </v-list-item-title>
    </template>
    <template v-for="(childone, k) in route.children">


      <MenuList v-if="childone.children.length === 0"
                :secondchild="true"
                :route="childone"
      ></MenuList>

      <MenuListGroup v-else :route="childone"></MenuListGroup>
    </template>

  </v-list-group>
</template>

<script lang="ts">
import {defineComponent} from "@nuxtjs/composition-api";
import MenuList from "~/components/Menu/MenuList.vue";
import MenuListGroup from "~/components/Menu/MenuListGroup.vue";

export default defineComponent({
  name: 'MenuListCollapse',
  props: {
    route: {
      required: true
    }
  },
  components: {
    MenuList,
    MenuListGroup
  },
  setup() {
    return {}
  }
})

</script>

<style scoped>

</style>
