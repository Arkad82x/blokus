import Lobby from './scenes/Lobby'
import GameBrowser from './scenes/GameBrowser'
import Rules from './scenes/Rules'
import About from './scenes/About'

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
