<template>
<v-app>
    <DefaultBar @drawer="drawer = !drawer"/>
    <DefaultDrawer v-model="drawer"/>
    <DefaultView/>

  </v-app>
</template>

<script>
import DefaultBar from './AppBar.vue'
import DefaultDrawer from './Drawer.vue'
import DefaultView from './View.vue'
export default {
  components: {
    DefaultBar,
    DefaultDrawer,
    DefaultView
  },
  name: 'DefaultLayout',
  data () {
    return {
      drawer: false
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
