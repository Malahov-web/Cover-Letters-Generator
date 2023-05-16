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

        <div
          class="control__item"
          v-for="(additional, key) in additionals"
          :key="key"
        >
          <div class="control__field">
            <v-checkbox
              hide-details="auto"
              :label="additional.title"
              :value="additional.name"
              v-model="additionalsActive"
            ></v-checkbox>
          </div>

          <div class="control__content" v-if="isItemActive(key)">
            <Skills
              class="asd"
              :skills="skills"
              :skillsType="additional.name"
              v-on:change-active-skills="setSkillsActive"
            ></Skills>
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
      //   skillsActive: [],
      //   skillsActive: {},
      skillsActive: {
        experience: [],
        knowledge: [],
      },
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

    template() {
      let template = "";

      if (this.additionalsActive.includes("experience")) {
        template += this.renderExperienceTemplate();
      }

      if (this.additionalsActive.includes("knowledge")) {
        template += this.renderKnowledgeTemplate();
      }

      return template;
    },
  },

  methods: {
    isItemActive(key) {
      //   console.log("key");
      //   console.log(key);

      return this.additionalsActive.find((item) => {
        return item == key;
      });
    },

    renderExperienceTemplate() {
      let experienceTemplate = `Из плюсов имею опыт работы с 
         ${this.skillsActive.experience.join(", ")}.
      `;

      // ${this.productTypesActive.html.join(", ")}

      return experienceTemplate;
    },

    renderKnowledgeTemplate() {
      let knowledgeTemplate = `Знание и понимание 
       ${this.skillsActive.knowledge.join(", ")}.         

      `;

      // ${this.productTypesActive.html.join(", ")}

      return knowledgeTemplate;
    },

    setSkillsActive(skillsType, skillsArr) {
      //   this.skillsActive = skillsArr;
      // v w obj
      this.skillsActive[skillsType] = skillsArr;
    },
  },
};
</script>

<style lang="scss" scoped></style>
