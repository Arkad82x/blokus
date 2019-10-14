//import Lobby from './scenes/Lobby'
import Chat from './components/Chat'
import GameBrowser from './scenes/GameBrowser'
import Rules from './scenes/Rules'
import About from './scenes/About'
import Home from './scenes/Home/Home'

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    label: "Create Game",
    path: "/lobby",
    component: Chat,
    inMenu: true
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

