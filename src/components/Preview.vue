<template>
  <div class="preview px-16 py-8">
    <div class="preview-inner">
      <div class="preview__content">
        <!-- TODO: -->
        <!-- Вероятно тэг per будет не нужен -->

        <!-- <v-text-field
            label="label"
            name="name"
            textarea
        ></v-text-field> -->

        <!-- <v-textarea
          name="input-7-1"
          label="Default style"
          :value="template"
          hint="Hint text"
        ></v-textarea> -->

        <!-- <div>
          {{ template }}
        </div> -->

        <!-- <div v-html="template"></div> -->

        <pre>{{ template }}</pre>

        <!-- <code> {{ template }}</code> -->

        <!-- <pre>
Здравствуйте.
Интересует работа в вашей компании (удаленно),
на позиции Frontend-разработчика.

Имею большой опыт в верстке html/css, (сайты, лендинги, интерфейсы, emails, spa), 
из плюсов имею опыт работы с  Vue.js, GSAP, и практику оптимизации сайтов. 

Ищу работу в удаленном формате и  команду в которой можно вырасти.
Мое портфолио:
http://malahov-web.com/portfolio/
                </pre
        > -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview",

  computed: {
    templateObj() {
      return this.$store.state.template;
    },

    template() {
      let templateObj = this.templateObj;
      let template = "";

      //   template = ;

      for (const key in templateObj) {
        if (!Object.hasOwnProperty.call(templateObj, key)) {
          continue;
        }
        const templatePart = templateObj[key];

        template += "\n\n" + templatePart;
      }

      return template.trim();
    },
  },
};
</script>

<style lang="scss" scoped></style>
