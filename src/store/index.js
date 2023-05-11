import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        settings: {
            // ranks: [
            //     {
            //         name: "frontend",
            //         title: "Frontend-разработчик",
            //     },
            //     {
            //         name: "html",
            //         title: "HTML-верстальщик",
            //     },
            // ],
            ranks: {
                frontend: {
                    name: "frontend",
                    title: "Frontend-разработчик",
                },
                html: {
                    name: "html",
                    title: "HTML-верстальщик",
                },
            },

            // formats: [
            //     {
            //         name: "remote",
            //         title: "удаленно",
            //     },
            //     {
            //         name: "hybrid",
            //         title: "гибридно",
            //     },
            //     {
            //         name: "office",
            //         title: "офис",
            //     },
            // ],

            formats: {
                remote: {
                    name: "remote",
                    title: "удаленно",
                },
                hybrid: {
                    name: "hybrid",
                    title: "гибридно",
                },
                office: {
                    name: "office",
                    title: "офис",
                },
            },

            areas: {
                html: {
                    name: "html",
                    title: "Верстка",
                    product_types: [
                        "сайты",
                        "лендинги",
                        "магазины",
                        "интерфейсы",
                        "emails",
                        "banners",
                        "spa",
                    ],
                },
                javascript: {
                    name: "javascript",
                    title: "Javascript",
                    __product_types: ["spa", "интерфейсы"],
                    product_types: ["ES6+", "jQuery", "Vue.js"],
                    __skills: ["Может быть нужны еще skills?", "ES6+", "Vue.js"],
                },
            },
        },
    },
    mutations: {},
    actions: {},
    modules: {},
});
