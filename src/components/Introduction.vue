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
        <div class="control__title">Должность:</div>
        <div class="control__field">
          <v-radio-group v-model="value">
            <!-- <v-radio label="Frontend-разработчик" value="frontend"
              >Frontend-разработчик</v-radio
            >

            <v-radio label="HTML-верстальщик" value="html"
              >HTML-верстальщик</v-radio
            > -->
          </v-radio-group>

          <v-radio-group v-model="rankActive">
            <v-radio
              :label="rank"
              :value="rank"
              __value="rank"
              v-for="rank in ranks"
              :key="rank"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>

      <div class="part__controls-item control">
        <div class="control__title">Формат работы::</div>
        <div class="control__field">
          <!-- <v-item-group>
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
          </v-item-group> -->

          <!-- <v-item-group> -->
          <v-checkbox
            :label="format.title"
            :value="format.title"
            hide-details="auto"
            v-model="formatActive"
            v-for="format in formats"
            :key="format.name"
          ></v-checkbox>

          <!-- </v-item-group> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",

  data() {
    return {
      templateText:
        "Здравствуйте. Интересует работа в вашей компании (удаленно), на позиции Frontend-разработчика.",

      TEMPranks: [
        {
          name: "frontend",
          title: "Frontend-разработчик",
        },
        {
          name: "html",
          title: "HTML-верстальщик",
        },
      ],

      ranks: ["Frontend-разработчик", "HTML-верстальщик"],

      // rankActive: this.ranks[0], // -
      //   rankActive: this.this.ranks[0], // -
      //   rankActive: this["ranks"][0], //-
      //   rankActive: "ranks"[0], //-
      //   rankActive: "ranks[0]" // -,
      // rankActive: "", // +
      rankActive: "Frontend-разработчик",

      formats: [
        {
          name: "remote",
          title: "удаленно",
        },
        {
          name: "hybrid",
          title: "гибридно",
        },
        {
          name: "office",
          title: "офис",
        },
      ],

      formatActive: [],
    };
  },

  computed: {
    template() {
      //   return `Здравствуйте. Интересует работа в вашей компании ( ${this.formatActive} ), на должности ${this.rankActive}.`;
      //
      return `Здравствуйте. <br> Интересует работа в вашей компании (  ${this.renderFormatTemplate(
        this.formatActive
      )} ), на должности ${this.rankActive}.`;
      //  this.data

      //   return "Здравствуйте. \n Интересует работа в вашей компании ";
      //   return "Здравствуйте. <br> Интересует работа в вашей компании ";
    },
  },

  methods: {
    renderFormatTemplate(formatArr) {
      // let template = formatArr.reduce((previousValue, currentValue) => {
      //     return currentValue
      // });

      let template = formatArr.reduce(
        // (accumulator, currentValue, index, array) => {
        (accumulator, currentValue, index) => {
          // (accumulator, currentValue, array) => {
          // (accumulator, currentValue) => {
          //   return accumulator + currentValue;
          //   return `${accumulator} ${currentValue},`;
          //   return `${accumulator} ${currentValue},`;
          return index == 0
            ? `${accumulator} ${currentValue}`
            : `${accumulator}, ${currentValue}`;
        },
        ""
        // array[0] // -
      );

      return template;
    },
  },
};
</script>

<style lang="scss" scoped></style>
