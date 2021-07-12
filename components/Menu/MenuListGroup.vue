<template>
  <v-list-group
    no-action
    sub-group
  >
    <template v-slot:activator>
      <v-list-item-title class="ml-0 pl-0">
        {{ route.name }}
      </v-list-item-title>
    </template>
    <template v-for="(childone, k) in route.children" >


      <MenuList v-if="childone.children.length === 0"
                :secondchild="true"
                :item="childone"
      ></MenuList>

      <MenuListCollapse v-else :route="childone" ></MenuListCollapse>
    </template>

  </v-list-group>
</template>

<script lang="ts">
import {defineComponent} from "@nuxtjs/composition-api";
import MenuList from "~/components/Menu/MenuList.vue";

export default defineComponent({
  name: 'MenuListGroup',
  props: {
    route: {
      required: true
    }
  },
  components: {
    MenuList
  },
  setup() {
    return {}
  }
})

</script>

<style scoped>

</style>
