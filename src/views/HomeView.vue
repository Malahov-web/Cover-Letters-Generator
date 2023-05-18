<template>
  <div>
    <!-- HomeView -->

    <v-row>
      <v-col lg="8" offset-lg="2" class="mt-12 mb-8">
        <div class="site-title-outer __mt-6 __mb-6">
          <div class="site-title text-center">Generate your Cover Letter</div>
        </div>
      </v-col>
    </v-row>

    <v-row __no-gutters>
      <v-col lg="8" offset-lg="2" class="preview-outer">
        <Preview class="asd"></Preview>
      </v-col>
    </v-row>

    <div class="v-row">
      <v-col lg="12">
        <div class="generator">
          <v-row>
            <v-col lg="3">
              <Introduction class="asd"> </Introduction>
            </v-col>
            <v-col lg="3">
              <Experience class="asd"> </Experience>
            </v-col>
            <v-col lg="3">
              <Additional class="asd"> </Additional>
            </v-col>
            <v-col lg="3">
              <Wishes class="asd"> </Wishes>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </div>

    <!-- <div class="generator"></div> -->
  </div>
</template>

<script>
import Introduction from "@/components/Introduction.vue";
import Experience from "@/components/Experience.vue";
import Additional from "@/components/Additional.vue";
import Wishes from "@/components/Wishes.vue";
import Preview from "@/components/Preview.vue";

export default {
  name: "HomeView",

  components: {
    Introduction,
    Experience,
    Additional,
    Wishes,
    Preview,
  },
};
</script>

<style lang="scss" scoped></style>
