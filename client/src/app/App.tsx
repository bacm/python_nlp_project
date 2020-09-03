import Categorizer from './components/Categorizer'
import Welcome from './components/Welcome'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import '../style/styles.scss'
import {Provider} from 'react-redux'
import store from './Store'

ReactDOM.render(
    <Provider store={store}>
      <Welcome/>
      <Categorizer />
    </Provider>,
    document.getElementById('root')
  );