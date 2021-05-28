import React from 'react'
import ReactDOM from 'react-dom'
import { MicroAppStateActions, LoadableApp } from 'qiankun'
import { AppProps } from 'single-spa'
import { singleton } from './singleton'
import './public-path'
import App from './App'

interface ContainerProps {
  container?: HTMLElement
}
interface LifeCycleProps
  extends ContainerProps,
    AppProps,
    MicroAppStateActions {}

function render(props: ContainerProps) {
  const { container = document } = props
  ReactDOM.render(<App />, container.querySelector('.mf-passport-container'))
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export const bootstrap = async function bootstrap() {
  console.log('react app bootstraped')
}

export async function mount(props: LifeCycleProps) {
  singleton.setGlobalState = props.setGlobalState
  singleton.onGlobalStateChange = props.onGlobalStateChange
  props.onGlobalStateChange((state, prev) => {
    console.log(state, prev)
  })
  // props.setGlobalState({
  //   visibleSiderBar: false,
  //   visibleHeader: false
  // })
  render(props)
}

export async function unmount(props: LifeCycleProps) {
  const { container = document } = props
  // props.setGlobalState({
  //   visibleSiderBar: true,
  //   visibleHeader: true
  // })
  ReactDOM.unmountComponentAtNode(
    container.querySelector('.mf-passport-container') as HTMLElement
  )
}
