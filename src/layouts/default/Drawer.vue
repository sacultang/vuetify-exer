<template>
  <v-navigation-drawer app  v-bind="$attrs">
      <DefaultDrawerHeader/>
      <v-divider></v-divider>
      <DefaultList :items="items"/>
    </v-navigation-drawer>
</template>

<script>
import DefaultDrawerHeader from './DrawerHead.vue'
import DefaultList from './List.vue'
export default {
  components: {
    DefaultDrawerHeader,
    DefaultList
  },
  name: 'DefaultDrawer',
  data () {
    return {

      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
        {
          title: 'Pages',
          icon: 'mdi-menu',
          items: [

            { title: 'LogIn', icon: 'mdi-image', to: '/signin' },
            { title: 'SignUp', icon: 'mdi-image', to: '/signup' },
            { title: 'ProductList', icon: 'mdi-image', to: '/productionlist' }
          ]
        },
        { title: 'Photos', icon: 'mdi-image', to: '/about' },
        { title: 'GridListPage', icon: 'mdi-image', to: '/gridlistpage' },
        { title: 'breakpoints', icon: 'mdi-image', to: '/breakpoints' },
        { title: 'Typography', icon: 'mdi-image', to: '/typography' },
        { title: 'buttons', icon: 'mdi-image', to: '/buttons' }

      ],
      right: null

    }
  }
}
</script>

<style>

</style>
