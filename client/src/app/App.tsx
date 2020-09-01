import Categorizer from './components/Categorizer'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import '../style/styles.scss'
import {Provider} from 'react-redux'
import store from './Store'

ReactDOM.render(
    <Provider store={store}>
      <Categorizer />
    </Provider>,
    document.getElementById('root')
  );