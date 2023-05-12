<template>
  <div class="generator__part part">
    <div class="part__title">Part 1 Плюсы</div>
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
        <div class="control__title">Плюсы:</div>
        <!-- <div class="control__field">
          <v-checkbox
            hide-details="auto"
            :label="format.title"
            :value="format.name"
            v-model="formatActive"
            v-for="(format, key) in additionals"
            :key="key"
          ></v-checkbox>
        </div> -->
        <div v-for="(additional, key) in additionals" :key="key">
          <div class="control__field">
            <v-checkbox
              hide-details="auto"
              :label="additional.title"
              :value="additional.name"
              v-model="additionalsActive"
            ></v-checkbox>
          </div>

          <div class="control__content">
            <Skills class="asd" :skills="skills"></Skills>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skills from "@/components/Skills.vue";

export default {
  name: "Additional",

  components: {
    Skills,
  },

  data() {
    return {
      additionalsActive: [],
    };
  },

  computed: {
    additionals() {
      return this.$store.state.settings.additionals; //
    },
    skills() {
      let skills = this.$store.state.settings.skills; //
      return skills.list;
    },
  },
};
</script>

<style lang="scss" scoped></style>
