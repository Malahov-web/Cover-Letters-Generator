<template>
  <div class="generator__part part">
    <div class="part__title">Part 1 Должность</div>

    <PartPreview
      class="asd"
      :template="template"
      :part="this.$options._componentTag"
    ></PartPreview>

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
import PartPreview from "@/components/PartPreview.vue";

export default {
  name: "Introduction",
  components: {
    PartPreview,
  },

  data() {
    return {
      rankActive: "frontend",
      formatActive: [],
      //   templateByManualy: "",
      //   templateByManualy: this.template,
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

    console.log("this:");
    console.log(this); // +
    // console.log(this.options.name); // -
    // console.log(this.$options._componentTag); // +
  },

  watch: {
    template(newValue) {
      //   this.templateByManualy = newValue;
      //   this.stor
      this.$store.dispatch("updateTemplate", {
        // key: "introduction",
        key: this.$options._componentTag,
        value: newValue,
      });
    },

    // templateByManualy(newValue) {
    //   this.$store.dispatch("updateTemplate", {
    //     key: "introduction",
    //     value: newValue,
    //   });
    // },
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
