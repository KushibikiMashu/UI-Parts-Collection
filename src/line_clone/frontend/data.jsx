const reactLogo = require('../image/react-logo.svg')
const vueLogo = require('../image/vue-logo.png')
const angularLogo = require('../image/angular-logo.svg')

export const roomItems = [
  {
    id: 1,
    roomName: "React.js",
    description: "React & StorybookでLINEのUIを模写する",
    time: "午前 11:18",
    newPostCount: "3",
    img: reactLogo
  },
  {
    id: 2,
    roomName: "Vue.js",
    description: " Vue.jsのルームです",
    time: "午前 7:08",
    newPostCount: "1",
    img: vueLogo
  },
  {
    id: 3,
    roomName: "AngularJS",
    description: " AngularJSのルームです",
    time: "昨日",
    newPostCount: "0",
    img: angularLogo
  }
]

export const messageItems = [
  {
    id: 1,
    userName: "React Lover",
    body: "I love React, Redux, Redux-Router, Next.js.",
    time: "午前 12:00",
    image: reactLogo,
  },
  {
    id: 2,
    userName: "Vue.js Lover",
    body: "I love Vue, Vuex, Vue-Router, Nuxt.js.",
    time: "午後 13:00",
    image: vueLogo,
  },
  {
    id: 3,
    userName: "AngularJS Lover",
    body: "I love AngularJS.",
    time: "午後 14:00",
    image: angularLogo,
  },
  {
    id: 4,
    userName: "self",
    body: "Creating clone app of LINE.",
    time: "午後 15:00",
    image: null,
  },
]