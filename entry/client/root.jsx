import ReactDOM from 'react-dom'
import React from 'react'

import { createHistory } from 'history'
import { Provider } from 'react-redux'
import { syncReduxAndRouter } from 'redux-simple-router'
import { Router } from 'react-router'

// import redux elements
import DevTools from './redux/DevTools'
import store from './redux/store'

import rootRoute from './routes'

// bind redux and router with history
const history = createHistory()
syncReduxAndRouter(history, store)

let showDevTools
if (process.env.NODE_ENV !== 'production' && !process.env.IS_MIRROR) {
  // DEV: expose store as a global var
  window.store = store
  showDevTools = <DevTools />
} else {
  showDevTools = ''
}

class Root extends React.Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={rootRoute} />
          { showDevTools }
        </div>
      </Provider>
      )
  }
}

Meteor.startup(function () {
  let rootElement = document.createElement('div')
  rootElement.id = 'app'
  document.body.appendChild(rootElement)

  ReactDOM.render(<Root store={store} />, rootElement)
})
