``
<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Cover Letters Generator</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container grid-list-xs>
        <v-row :align="align" no-gutters __style="height: 150px">
          <!-- <v-col lg="8" offset-lg="2"> -->
          <!-- Search placeholder  -->
          <!-- </v-col> -->
          <!-- <v-col lg="4">
            <ViewControls class="asd"></ViewControls>
          </v-col> -->
        </v-row>
      </v-container>

      <v-container grid-list-xs>
        <v-col lg="12">
          <!-- <ViewControls class="asd"></ViewControls> -->
        </v-col>
        <!-- <Day class="asd"></Day> -->
        <!-- <HelloWorld class="asd"></HelloWorld> -->
        <HomeView class="asd"></HomeView>
        <!-- <hello-world /> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import HomeView from "./views/HomeView";

export default {
  name: "App",

  components: {
    // HelloWorld,
    HomeView,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" __scoped>
// @import url();
// @import "../assets/styles/styles"; // main styles
// src\assets\styles\styles.scss
// src\assets\styles\style.scss

// C:\HTML 2\Cover Letters Generator\Cover-Letters-Generator\src\assets\styles\styles.scss
// @import "../assets/styles/styles"; // -
// @import "../assets/styles/styles.scss"; // -
// @import "../assets/styles/style"; // -
// @import "/assets/styles/style"; // + конечно, это скопировано из проекта, где App был внутри какой-то папки
@import "assets/styles/style"; // + также, только без слэша
</style>
