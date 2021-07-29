<template>
  <v-fade-transition mode="out-in">
    <router-view></router-view>
  </v-fade-transition>
</template>

<script>
import '@/sass/overrides.sass'
export default {
  name: 'App'

}
</script>
