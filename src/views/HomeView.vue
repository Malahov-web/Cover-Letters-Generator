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
        <div class="preview px-16 py-8">
          <div class="preview-inner">
            <div class="preview__content">
              <!-- TODO: -->
              <!-- Вероятно тэг per будет не нужен -->

              <pre>
Здравствуйте.
Интересует работа в вашей компании (удаленно),
на позиции Frontend-разработчика.

Имею большой опыт в верстке html/css, (сайты, лендинги, интерфейсы, emails, spa), 
из плюсов имею опыт работы с  Vue.js, GSAP, и практику оптимизации сайтов. 

Ищу работу в удаленном формате и  команду в которой можно вырасти.
Мое портфолио:
http://malahov-web.com/portfolio/
                </pre
              >
            </div>
          </div>
        </div>
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
            <v-col lg="3">Part</v-col>
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

export default {
  name: "HomeView",

  components: {
    Introduction,
    Experience,
    Additional,
  },
};
</script>

<style lang="scss" scoped></style>
