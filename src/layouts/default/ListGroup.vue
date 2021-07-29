<template>
  <v-list-group
    :prepend-icon="item.icon"
  >
    <template v-slot:activator>
        <v-list-item-content>
            <v-list-item-title>
                {{item.title}}
            </v-list-item-title>
        </v-list-item-content>
    </template>

    <template v-for="(child,index) in item.items" >
        <DefaultListitem
        :key="`child-${index}`"
        :item="child"
    />
    </template>

  </v-list-group>
</template>

<script>
import DefaultListitem from './ListItem.vue'
export default {
  components: {
    DefaultListitem
  },
  name: 'DefaultListGroup',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>

</style>
