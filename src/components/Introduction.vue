<template>
  <div class="generator__part part">
    <div class="part__title">Part 1 Должность</div>
    <div class="part__preview">
      <div class="part__preview-inner">
        <!-- <v-text-field label="label" name="name" textarea>
          {{ template }}
        </v-text-field> -->

        <!-- <v-textarea
          filled
          name="input-7-4"
          height="160"
          label="Filled textarea"
          __value="template"
          __:value="template"
          v-model="template"
        ></v-textarea> -->

        <v-textarea
          filled
          name="input-7-4"
          height="160"
          label="Filled textarea"
          v-model="templateByManualy"
        ></v-textarea>
        <!-- <p v-html="template"></p> -->
      </div>
    </div>
    <div class="part__controls">
      <div class="part__controls-item control">
        <div class="control__title">Должность:</div>
        <div class="control__field">
          <v-radio-group v-model="rankActive">
            <v-radio
              :label="rank.title"
              :value="rank.name"
              v-for="rank in ranks"
              :key="rank"
            >
            </v-radio>
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
            > -->

          <!-- <v-checkbox
            :label="format.title"
            :value="format.title"
            hide-details="auto"
            v-model="formatActive"
            v-for="format in formats"
            :key="format.name"
          ></v-checkbox> -->

          <v-checkbox
            hide-details="auto"
            :label="format.title"
            :value="format.name"
            v-model="formatActive"
            v-for="(format, key) in formats"
            :key="key"
          ></v-checkbox>
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
      rankActive: "frontend",
      formatActive: [],
      //   templateByManualy: "",
      templateByManualy: this.template,
    };
  },

  computed: {
    ranks() {
      return this.$store.state.settings.ranks; //
    },

    rankTemplate() {
      return this.ranks[this.rankActive].title;
    },

    formats() {
      return this.$store.state.settings.formats; //
    },

    formatTemplate() {
      //   return "";
      return this.renderFormatTemplate(this.formatActive);
      //   return this.formats[this.formatActive].title;
    },

    template() {
      return `Здравствуйте. \nИнтересует работа в вашей компании ( ${this.formatTemplate} ), \nна должности ${this.rankTemplate}.`;
    },
  },

  mounted() {
    this.templateByManualy = this.template;
  },

  watch: {
    template(newValue) {
      this.templateByManualy = newValue;
      //   this.stor
      //   this.$store.dispatch("updateTemplate", {
      //     key: "introduction",
      //     value: newValue,
      //   });
    },

    templateByManualy(newValue) {
      this.$store.dispatch("updateTemplate", {
        key: "introduction",
        value: newValue,
      });
    },
  },

  methods: {
    renderFormatTemplate(formatArr) {
      let template = formatArr.reduce((accumulator, currentValue, index) => {
        // let text = currentValue.title; // -
        let text = this.formats[currentValue].title;
        return index == 0
          ? `${accumulator} ${text}`
          : `${accumulator}, ${text}`;
      }, "");

      return template;
    },
  },
};
</script>

<style lang="scss" scoped></style>
