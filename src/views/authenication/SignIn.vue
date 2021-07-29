<template>
  <v-container class="white fill-height " fluid >
    <v-row justify="center">
      <v-col cols="auto">

          <v-card width="458" >
            <v-card-text class="text-center px-12 py-16">
              <div class="text-h4 mb-10">로그인</div>
              <v-text-field label="E-mail" clearable prepend-inner-icon="mdi-email" ></v-text-field>
              <v-text-field type="password" label="Password" clearable prepend-inner-icon="mdi-lock"> </v-text-field>
              <v-btn block x-large class="red mt-8" dark rounded>로그인</v-btn>
            </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
