<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>This is an about page</h1>
      </v-col>
      <v-col cols="12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quasi
          ullam odit perspiciatis soluta culpa maxime nam laborum dolores.
          Excepturi reprehenderit odit, et voluptas officia placeat velit
          nesciunt aperiam beatae!
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class About extends Vue {}
</script>
