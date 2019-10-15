//import Lobby from './scenes/Lobby'
import GameBrowser from './scenes/GameBrowser'
import Rules from './scenes/Rules'
import About from './scenes/About'
import Home from './scenes/Home/Home'
import LobbySetup from './scenes/LobbySetup'
import Lobby from './scenes/Lobby'

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    label: "Create Game",
    path: "/lobby",
    exact: true,
    component: LobbySetup,
    inMenu: true
  },
  {
    path: "/lobby/:id",
    component: Lobby
  },
  {
    label: "Join Game",
    path: "/game_browser",
    component: GameBrowser,
    inMenu: true
  },
  {
    label: "Rules",
    path: "/rules",
    component: Rules,
    inMenu: true
  },
  {
    label: "About",
    path: "/about",
    component: About,
    inMenu: true
  }
]

export const menuRoutes = routes.filter(route => route.inMenu)
export default routes

