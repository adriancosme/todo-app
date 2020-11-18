<template>
  <v-app>
    <v-app-bar app dark color="blue-grey darken-4">
      <v-toolbar-title>ToDo App</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          text
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          :title="item.title"
          >{{ item.title }}</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="blue-grey darken-2">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app class="blue-grey darken-2">
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      items: [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
        { title: "ToDo", link: "/todo" },
      ],
    };
  },
});
</script>

<style lang="scss">
</style>
