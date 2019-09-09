import Home from './components/Home'
import Lobby from './game/Lobby'
import JoinGame from './game/Join'

export default [
  {
    label: "Home",
    path: "/home",
    component: Home,
    inMenu: true
  },
  {
    label: "New Game",
    path: "/lobby",
    inMenu: true,
    component: Lobby,
    resolve: () => "foobarProps"
  },
  {
    label: "Join Game",
    path: "/join",
    inMenu: true,
    component: JoinGame
  }
]
