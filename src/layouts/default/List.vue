<template>
   <v-list dense nav>

       <template v-for="(item,index) in items">
          <default-list-group
            v-if="item.items"
            :key="`group-${index}`"
            :item="item"
          >
          </default-list-group>
           <DefaultListitem
            v-else
            :key="index"
            :item="item"
          />
       </template>

   </v-list>
</template>

<script>

import DefaultListitem from './ListItem.vue'
import DefaultListGroup from './ListGroup.vue'
export default {
  components: {
    DefaultListitem,
    DefaultListGroup
  },
  name: 'DefaultList',
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style>

</style>
