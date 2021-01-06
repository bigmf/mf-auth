import React from 'react'
import ReactDOM from 'react-dom'
import { MicroAppStateActions, LoadableApp } from 'qiankun'
import { AppProps } from 'single-spa'
import App from './App'

interface LifeCycleProps extends AppProps, MicroAppStateActions {
  container: HTMLElement
}

function render(container = document.querySelector('.mf-auth-container')) {
  ReactDOM.render(<App />, container)
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export const bootstrap = async function bootstrap() {
  console.log('react app bootstraped')
}

export async function mount(props: LifeCycleProps) {
  props.onGlobalStateChange((state, prev) => {
    console.log(state, prev)
  })
  props.setGlobalState({
    visibleSiderBar: false,
    visibleHeader: false
  })
  render(props.container.querySelector('.mf-auth-container') as HTMLElement)
}

export async function unmount(props: LifeCycleProps) {
  props.setGlobalState({
    visibleSiderBar: true,
    visibleHeader: true
  })
  ReactDOM.unmountComponentAtNode(
    props.container
      ? (props.container.querySelector('.mf-auth-container') as HTMLElement)
      : (document.querySelector('.mf-auth-container') as HTMLElement)
  )
}
