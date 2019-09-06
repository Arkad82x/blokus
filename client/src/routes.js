import Home from './components/Home'
import CreateGame from './game/Create'
import JoinGame from './game/Join'

export default [
  {
    label: "Home",
    path: "/home",
    component: Home,
    inMenu: true
  },
  {
    label: "Create Game",
    path: "/create",
    inMenu: true,
    component: CreateGame
  },
  {
    label: "Join Game",
    path: "/join",
    inMenu: true,
    component: JoinGame
  }
]
