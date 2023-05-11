<template>
  <div class="generator__part part">
    <div class="part__title">Part 1 Должность</div>
    <div class="part__preview">
      <div class="part__preview-inner">
        <!-- <v-text-field label="label" name="name" textarea>
          v-text-field
        </v-text-field> -->

        <!-- <v-textarea
          filled
          name="input-7-4"
          label="Filled textarea"
          __value="template"
          __:value="template"
          v-model="templateText"
        ></v-textarea> -->
        <!-- <p>
          {{ templateText }}
        </p> -->
        <!-- <p>
          {{ template }}
        </p> -->
        <p v-html="template"></p>
      </div>
    </div>
    <div class="part__controls">
      <div class="part__controls-item control">
        <div class="control__title">Опыт в направлениях:</div>
        <div class="control__field">
          <!-- <v-radio-group v-model="rankActive">
            <v-radio
              :label="rank.title"
              :value="rank.name"
              v-for="rank in ranks"
              :key="rank"
            >
            </v-radio>
          </v-radio-group> -->

          <v-checkbox
            hide-details="auto"
            :label="area.title"
            :value="area.name"
            v-model="areasActive"
            v-for="(area, key) in areas"
            :key="key"
          ></v-checkbox>
        </div>
      </div>

      <div class="part__controls-item control">
        <div class="control__title">Типы в Направлениях:</div>
        <div class="control__field">
          <!-- <v-item-group>
            <v-checkbox
              label="label"
              v-model="value"
              value="value"
              hide-details="auto"
              >удаленно</v-checkbox
            > -->

          <!-- <v-checkbox
            :label="format.title"
            :value="format.title"
            hide-details="auto"
            v-model="formatActive"
            v-for="format in formats"
            :key="format.name"
          ></v-checkbox> -->

          <!-- <v-checkbox
            hide-details="auto"
            :label="format.title"
            :value="format.name"
            v-model="formatActive"
            v-for="(format, key) in formats"
            :key="key"
          ></v-checkbox> -->

          <!-- <v-tabs>
            <v-tab>Item One</v-tab>
            <v-tab>Item Two</v-tab>
            <v-tab>Item Three</v-tab>
          </v-tabs> -->

          <v-tabs
            v-model="tabActive"
            color="primary"
            __dark
            __slider-color="primary"
          >
            <v-tab v-for="area in areasActive" :key="areas[area].name">
              {{ areas[area].title }}
              <!-- TODO: вписать сюда компонент выводящий список product_types или просто впихнуть сюда вывод product_types)  -->
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tabActive">
            <v-tab-item v-for="area in areasActive" :key="areas[area].name">
              {{ areas[area].title }}

              <!-- <ul>
                <li v-for="item in areas[area].product_types" :key="item">
                  {{ item }}
                </li>
              </ul> -->

              <v-checkbox
                hide-details="auto"
                :label="item"
                :value="item"
                v-model="productTypesActive[area]"
                v-for="item in areas[area].product_types"
                :key="item"
              ></v-checkbox>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",

  data() {
    return {
      areasActive: [],
      //   rankActive: "frontend",
      htmlAreaTypesActive: [],
      javascriptAreaTypesActive: [],
      tabActive: null,

      productTypesActive: {
        html: [],
        javascript: [],
      },
    };
  },

  computed: {
    areas() {
      return this.$store.state.settings.areas; //
    },

    areasTemplate() {
      //   return this.ranks[this.rankActive].title;
      //   return this.renderAreasTemplate(this.areasActive);
      return this.renderAreasTemplate();
    },

    htmlAreaTypes() {
      return this.areas.html.product_types;
    },
    javascriptAreaTypes() {
      return this.areas.javascript.product_types;
    },

    template() {
      let template = "";

      if (this.areasActive.includes("html")) {
        template += this.renderAreasTemplate();
      }
      // Да, вот здесь можно подключить что-то динамически

      if (this.areasActive.includes("javascript")) {
        template += this.renderAreasJavascriptTemplate();
      }
      // ...

      return template;
    },
  },

  methods: {
    // renderAreasTemplate(areasArr) {
    //   let template = areasArr.reduce((accumulator, currentValue, index) => {
    //     // let text = currentValue.title; // -
    //     let text = this.formats[currentValue].title;
    //     return index == 0
    //       ? `${accumulator} ${text}`
    //       : `${accumulator}, ${text}`;
    //   }, "");
    //   return template;
    // },

    renderAreasTemplate() {
      //   let htmlTemplate = `Имею большой опыт в верстке html/css, (сайты, лендинги, интерфейсы, emails, spa),`;
      let htmlTemplate = `Имею большой опыт в верстке html/css, (
         ${this.productTypesActive.html.join(", ")}

      ),`;

      return htmlTemplate;
    },

    renderAreasJavascriptTemplate() {
      let javascriptTemplate = ` <br>а также знания и навыки в Javascript-разработке (
         ${this.productTypesActive.javascript.join(", ")}
      )`;
      return javascriptTemplate;
    },
  },
};
</script>

<style lang="scss" scoped></style>
