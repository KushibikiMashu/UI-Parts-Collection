import {roomItem, messageItem} from './Types'
import reactLogo from './image/react-logo.svg'
import vueLogo from './image/vue-logo.png'
import angularLogo from './image/angular-logo.svg'

export const roomItems: Array<roomItem> = [
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
]

export const messageItems: Array<messageItem> = [
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
]