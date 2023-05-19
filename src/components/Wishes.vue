<template>
  <div class="generator__part part">
    <div class="part__title">Part 4 Пожелания</div>

    <PartPreview
      class="asd"
      :template="template"
      :part="this.$options._componentTag"
    ></PartPreview>

    <div class="part__controls">
      <div class="part__controls-item control">
        <div class="control__title">Пожелания:</div>
        <div class="control__field">
          <v-checkbox
            hide-details="auto"
            :label="wishe.title"
            :value="wishe.name"
            v-model="wishesActive"
            v-for="(wishe, key) in wishes"
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
  name: "Wishes", //  wishes

  components: {
    PartPreview,
  },

  data() {
    return {
      wishesActive: [],

      templateByManualy: this.template,
    };
  },

  computed: {
    wishes() {
      return this.$store.state.settings.wishes; //
    },

    wishesTemplate() {
      return this.renderWishesTemplate(this.wishesActive);
    },

    template() {
      return `${this.wishesTemplate}`;
    },
  },

  mounted() {
    this.templateByManualy = this.template;
  },

  watch: {
    template(newValue) {
      //   this.templateByManualy = newValue;
      //   this.stor
      this.$store.dispatch("updateTemplate", {
        key: this.$options._componentTag,
        value: newValue,
      });
    },
  },

  methods: {
    renderWishesTemplate(formatArr) {
      let template = formatArr.reduce((accumulator, currentValue, index) => {
        // let text = currentValue.title; // -
        let text = this.wishes[currentValue].title;
        return index == 0
          ? `${accumulator}${text}`
          : //   : `${accumulator} <br> ${text}`;
            `${accumulator}\n${text}`;
      }, "");

      return template;
    },
  },
};
</script>

<style lang="scss" scoped></style>
