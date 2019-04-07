"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reactLogo = require("./image/react-logo.svg");
var vueLogo = require("./image/vue-logo.png");
var angularLogo = require("./image/angular-logo.svg");
exports.roomItems = [
    {
        roomName: "React.js",
        description: "React & StorybookでLINEのUIを模写する",
        time: "午前 11:18",
        newPostCount: "4",
        img: reactLogo
    },
    {
        roomName: "Vue.js",
        description: " Vue.jsのルームです",
        time: "午前 7:08",
        newPostCount: "1",
        img: vueLogo
    },
    {
        roomName: "AngularJS",
        description: " AngularJSのルームです",
        time: "昨日",
        newPostCount: "0",
        img: angularLogo
    }
];
exports.messageItems = [
    {
        userName: "React Lover",
        body: "I love React, Redux, Redux-Router, Next.js.",
        time: "12:00",
        image: reactLogo,
    },
    {
        userName: "Vue.js Lover",
        body: "I love Vue, Vuex, Vue-Router, Nuxt.js.",
        time: "13:00",
        image: vueLogo,
    },
    {
        userName: "AngularJS Lover",
        body: "I love AngularJS.",
        time: "14:00",
        image: angularLogo,
    },
];
