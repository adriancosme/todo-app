<template>
  <ContentTodo />
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContentTodo from "@/components/todo/contentTodo.vue";
@Component({
  name: "Todo",
  components: {
    ContentTodo,
  },
})
export default class Todo extends Vue {}
</script>
<style lang="scss">
</style>