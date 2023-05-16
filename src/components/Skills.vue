<template>
  <div class="skills">
    <div class="skills__list">
      <!-- <v-chip class="ma-2" small close> Closable </v-chip>
      <v-chip class="ma-2" small close> Closable 2 </v-chip> -->
      <v-chip
        class="ma-2"
        small
        close
        v-for="(item, index) in activeValues"
        :key="item"
        @click:close="removeItem(index)"
      >
        {{ item }}
      </v-chip>
    </div>
    <div class="skills__search">
      <v-combobox
        no-data-text="This is combobox"
        hide-details="auto"
        v-model="value"
        :items="skills"
        dense
        __filled
        label="Type and add"
      ></v-combobox>

      <!-- <v-autocomplete
        __keydown="addInputValue"
        __input="addInputValue"
        __change="addInputValue"
        clearable
        __no-filter="true"
        no-data-text="Type to add new skill"
        hide-details="auto"
        v-model="value"
        :items="skills"
        dense
        filled
        label="Filled"
      ></v-autocomplete> -->
      <v-btn
        class="mx-2"
        fab
        __dark
        x-small
        ___color="primary"
        @click="addItem()"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",

  props: {
    skills: {
      type: Array,
      default: () => {
        return [];
      },
    },
    skillsType: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      value: "", // текущий тест для autocomplete
      activeValues: [], // выбранные пункты
    };
  },

  methods: {
    addItem() {
      this.activeValues.push(this.value);
      this.value = "";

      //   this.$emit("change-active-skills", "experience", this.activeValues);  // +
      this.$emit("change-active-skills", this.skillsType, this.activeValues);
    },

    removeItem(index) {
      this.activeValues.splice(index, 1);
      // arr.splice(1, 1);

      this.$emit("change-active-skills", this.skillsType, this.activeValues);
    },

    // DEV TIPS:
    // Тут нюанс в том, что привязанное v-model переменная
    // изменяется, только когда будет выбран вариант из спика,
    // .т.е. это никакой не автокомплит, а просто select
    //
    // событие @input у него происходит как @change, когда мы выбираем из выпадающего списка
    // @change - Ведет себя так же
    // @keydown
    // addInputValue($event) {
    //   console.log("this.value:");
    //   console.log(this.value);
    //   console.log("event:");
    //   console.log($event);
    // },
  },
};
</script>

<style lang="scss" __scoped></style>
