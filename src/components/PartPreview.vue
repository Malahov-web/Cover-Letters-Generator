<template>
  <div class="part__preview">
    <div class="part__preview-inner">
      <!-- <v-text-field label="label" name="name" textarea>
          {{ template }}
        </v-text-field> -->

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
</template>
<script>
export default {
  name: "PartPreview ",

  props: {
    template: {
      type: String,
      default: "",
    },
    part: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      templateByManualy: "",
    };
  },

  mounted() {
    this.templateByManualy = this.template;
  },

  watch: {
    // Когда изменяется в родительском компоненте - мы обновляем принудительно здесь
    template(newValue) {
      this.templateByManualy = newValue;
    },
    // Когда изменяется переменная, которая в этом комп-те - мы обновляем в хранилище
    templateByManualy(newValue) {
      this.$store.dispatch("updateTemplate", {
        // key: "introduction",
        key: this.part.toLowerCase(),
        value: newValue,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
