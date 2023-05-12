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
      <v-autocomplete
        hide-details="auto"
        v-model="value"
        :items="skills"
        dense
        filled
        label="Filled"
      ></v-autocomplete>
      <v-btn
        class="mx-2"
        fab
        __dark
        small
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
    },

    removeItem(index) {
      this.activeValues.splice(index, 1);
      // arr.splice(1, 1);
    },
  },
};
</script>

<style lang="scss" __scoped></style>
