import Lobby from './components/Lobby'
import GameBrowser from './components/GameBrowser'
import Rules from './components/Rules'
import About from './components/About'

export default [
  {
    label: "Create Game",
    path: "/lobby",
    component: Lobby,
  },
  {
    label: "Join Game",
    path: "/game_browser",
    component: GameBrowser
  },
  {
    label: "Rules",
    path: "/rules",
    component: Rules
  },
  {
    label: "About",
    path: "/about",
    component: About
  }
]
