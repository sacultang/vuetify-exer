<template>
  <v-container fluid>
      <v-card class="yellow pa-3">
          <v-row no-gutters>
              row
              <v-col cols="auto">
                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
              <v-col>
                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
              <v-col>
                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
          </v-row>
          <v-row>
              row
              <v-col>
                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
              <v-col>

                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
              <v-col>

                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
          </v-row>
      </v-card>

      <v-card class="yellow pa-3">
          <v-row no-gutters>
              row
              <v-col>
                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
              <v-col>
                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
              <v-col>
                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
          </v-row>
          <v-row :style="{height:'220px'}"
            align="end"
          >
              row
              <v-col align-self="start">
                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
              <v-col align-self="center">

                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
              <v-col>

                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
          </v-row>
          <v-row>
              row
              <v-col>
                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
              <v-col>

                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
              <v-col>

                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
          </v-row>
          <v-row justify="center">
              row
              <v-col cols="auto">
                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
              <v-col cols="auto">

                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
              <v-col cols="auto">

                  <v-card class="pa-3 outlined">col</v-card>
              </v-col>
          </v-row>
          <p :style="{color:active}" :class="aaa">adf</p>
      </v-card>

  </v-container>
</template>
<script>
export default {
  data () {
    return {
      active: 'red',
      aaa: 'aaa'

    }
  }
}
</script>
<style scoped>
 .aaa {
    font-size: 130px ;
 }
</style>
