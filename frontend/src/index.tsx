import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

// ** Redux Imports
import { Provider } from 'react-redux'
import store from './redux/store'

// ** Core styles
import './@core/scss/core.scss'
import "./assets/scss/style.scss"

// ** i18n
import './configs/i18n'
import { Spinner } from 'reactstrap'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
      <Suspense fallback={<Spinner/>}>
        <App />
      </Suspense>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
