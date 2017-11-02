import world from './Engine/world.js'
import electron from 'electron'
import { displaysListUpdate } from './store/displays/actions'
let store

const BrowserWindow = electron.remote.BrowserWindow

const url = process.env.NODE_ENV !== 'development'
 ? 'output.html' : 'http://0.0.0.0:8080/output.html'

const updateDisplays = () => {
  store.dispatch(displaysListUpdate(electron.screen.getAllDisplays()))
}

export const initiateScreens = (injectedStore) => {
  store = injectedStore
  updateDisplays()
}

electron.screen.on('display-added', updateDisplays)
electron.screen.on('display-removed', updateDisplays)
electron.screen.on('display-metrics-changed', updateDisplays)

export const sendOutput = (index) => {
  const display = electron.screen.getAllDisplays()[index]

  let modal = window.open('', 'modal', `left=${display.bounds.x},top=${display.bounds.y}`)

  console.log(modal)
  modal.document.write('<h1>Hello</h1>')

  // nw.Window.open(url, {}, (outputWin) => {
  //
  //   outputWin.moveTo(x, y)
  //   outputWin.maximize()
  //   outputWin.enterFullscreen()
  //
  //   outputWin.on('loaded', function () {
  //       // Don't do anything until fullscreen animation is definitely over
  //     setTimeout(() => {
  //       world.setOutput(outputWin.window.document.querySelector('#output'))
  //     }, 3000)
  //   })
  // })
}
