<template>
  <v-list-item :to="item.to" link>
      <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'DefaultListitem',
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
