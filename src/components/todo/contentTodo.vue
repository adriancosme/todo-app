<template>
  <v-container>
    <h1>TODO</h1>
    <div v-for="item in data" :key="item">{{ item }}</div>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DataService from "../../services/dataService";
@Component
export default class ContentTodo extends Vue {
  private data: any[] = [];
  getTodos() {
    DataService.getAll()
      .then((response) => {
        this.data = response.data;
        console.log(this.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  mounted() {
    this.getTodos();
  }
}
</script>
<style lang="scss">
</style>