import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';
import { store } from './app/store'
import { Provider } from 'react-redux'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <Provider store={store}>
      <StrictMode>
      <Header />
      <Main />
      <Footer />
      </StrictMode>,
    </Provider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document.",
  )
}


