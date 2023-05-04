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
              <div class="generator__part part">
                <div class="part__title">Part 1 Должность</div>
                <div class="part__preview">
                  <div class="part__preview-inner">
                    <v-text-field label="label" name="name" textarea>
                      v-text-field
                    </v-text-field>

                    <!-- <v-text-field label="label" name="name" textarea
                  >http://localhost:8080/</v-text-field
                > -->
                    <v-textarea
                      filled
                      name="input-7-4"
                      label="Filled textarea"
                      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                    ></v-textarea>
                  </div>
                </div>
                <div class="part__controls">
                  <div class="part__controls-item control">
                    <div class="control__title">Должность:</div>
                    <div class="control__field">
                      <v-radio-group v-model="value">
                        <v-radio label="label" value="value">Frontend</v-radio>

                        <v-radio label="label" value="CSS">HTML</v-radio>
                      </v-radio-group>
                    </div>
                  </div>

                  <div class="part__controls-item control">
                    <div class="control__title">Формат работы::</div>
                    <div class="control__field">
                      <v-item-group>
                        <v-checkbox
                          label="label"
                          v-model="value"
                          value="value"
                          hide-details="auto"
                          >удаленно</v-checkbox
                        >
                        <v-checkbox
                          label="label"
                          v-model="value"
                          value="value"
                          hide-details="auto"
                          >гибридно или как-то еще проверяем длинну</v-checkbox
                        >
                        <v-checkbox
                          label="label"
                          v-model="value"
                          value="value"
                          hide-details="auto"
                          >офис</v-checkbox
                        >
                      </v-item-group>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col lg="3">Part</v-col>
            <v-col lg="3">Part</v-col>
            <v-col lg="3">Part</v-col>
          </v-row>
        </div>
      </v-col>
    </div>

    <div class="generator"></div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss" scoped></style>
