<template>
    <v-list-item active-class="light"
                 :to="routeurl"
                 dense
                 nuxt
                 style="min-height: 32px; !important;max-height: 32px !important; margin-bottom: 4px;"
                 :class="secondchild ? 'ml-3':''"
    >
      <div v-if="update" class="v-avatar flex-0-1-auto ml-n2"
           style="height:5px;min-width:5px;width:5px;background-color:#00C58E;border-color:#00C58E; margin-right: 3px !important;"
      ></div>
      <v-list-item-icon class="m-0 mt-0 pt-1 mr-2">
        <v-icon :color="route.color?route.color:''">{{ route.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ route.name }}</v-list-item-title>
    </v-list-item>
</template>

<script lang="ts">
import { computed, defineComponent, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    route: {
      type: Object,
      required: true,
    },
    update: {
      type: Boolean,
      required: false,
    },
    secondchild: {
      type: Boolean,
      required: false,
    }
  },
  name: 'MenuList',
  setup (props, {}) {
    return {

    }
  }
})
</script>

<style scoped>
.active {
  background-color: #f6f9fc !important;
  border-color: #f6f9fc !important;
}

.v-list-item.v-list-item.v-list-item--default {
  min-height: 32px;
}
</style>
