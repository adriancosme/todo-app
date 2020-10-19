<template>
  <div class="home">
    <ContentHome />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContentHome from "@/components/home/contentHome.vue";

@Component({
  name: "Home",
  components: {
    ContentHome,
  },
})
export default class Home extends Vue {}
</script>
