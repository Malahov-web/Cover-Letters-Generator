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

            additionals: {
                experience: {
                    name: "experience",
                    title: "Опыт работы с",
                },
                knowledge: {
                    name: "knowledge",
                    title: "Знание и понимание",
                },
                // __skills: {},
            },
            skills: {
                __tip: "Здесь хранится список различных скилов для автодополнения",
                list: [
                    "Figma",
                    "Photoshop",
                    "UI/UX",
                    "веб-дизайн",
                    "Vue.js",
                    "React.js",
                    "PHP",
                    "Yii",
                    "WordPress",
                    "emails",
                    "методология БЭМ",
                    "компонентный подход",
                    "SEO-оптимизация",
                    "Accesability",
                    "Микроразметка",
                    "Browserstack",
                    "asd",
                ],
            },

            wishes: {
                company: {
                    name: "company",
                    title: "Хочу работать в прогрессивной компании без бюрократии.",
                },
                team: {
                    name: "team",
                    title: "Ищу команду в которой можно вырасти.",
                },

                values: {
                    name: "values",
                    title: "Разделяю такие ценности как свобода, результат, качество.",
                },
                interaction: {
                    name: "interaction",
                    title:
                        "Желаю Общаться с интересными людьми (учиться у них и делится своим)",
                },

                test: {
                    name: "test",
                    title: "Готов выполнить тестовое задание.",
                },
                potrfolio: {
                    name: "potrfolio",
                    title:
                        "Мое портфолио <br> <a href='http://malahov-web.com/portfolio/'>malahov-web.com/portfolio/</a>",
                },
            },
        },
    },
    mutations: {},
    actions: {},
    modules: {},
});
