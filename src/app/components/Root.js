import React from 'react'
import { Provider } from 'react-redux'

import getRoutes from '../routes'
import store from '../store'

const Routes = getRoutes(store)

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)