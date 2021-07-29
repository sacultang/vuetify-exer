<template>
    <v-container>
        <v-row>

            <v-col
                v-for="count in 12"
                :key="count"
                cols="12"
                class="red"
                sm="6"
                md="4"
                lg="3"
            >

                <v-card class="pa-3 outlined" > col</v-card>
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
