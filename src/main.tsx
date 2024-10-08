import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store, persistor } from './features/store/store.ts'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { PersistGate } from 'redux-persist/integration/react'

// Disable react dev tools in production
if (process.env.NODE_ENV === 'production'){
  disableReactDevTools()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
