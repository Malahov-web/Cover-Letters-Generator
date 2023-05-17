<template>
  <div class="generator__part part">
    <div class="part__title">Part 4 Пожелания</div>
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
export default {
  name: "Wishes", //  wishes

  data() {
    return {
      wishesActive: [],
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
      return ` ${this.wishesTemplate}  
      `;
    },
  },

  methods: {
    renderWishesTemplate(formatArr) {
      let template = formatArr.reduce((accumulator, currentValue, index) => {
        // let text = currentValue.title; // -
        let text = this.wishes[currentValue].title;
        return index == 0
          ? `${accumulator} ${text}`
          : `${accumulator} <br> ${text}`;
      }, "");

      return template;
    },
  },
};
</script>

<style lang="scss" scoped></style>
