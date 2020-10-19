<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <img alt="Vue logo" src="@/assets/logo.png" />
      </v-col>
      <v-col cols="auto">
        <h1>VueJs Home page TODO App</h1>
      </v-col>
      <v-col lg="12">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
          molestiae impedit eum qui cumque alias accusamus libero repellat aut,
          corporis suscipit. Distinctio a corporis ipsa aliquid quam repellat
          consequatur delectus?
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ContentHome extends Vue {}
</script>
<style lang="scss">
</style>