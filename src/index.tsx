import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';
import {StoreProvider} from "./app/store/store-provider.tsx";

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <StoreProvider>
      <StrictMode>
      <Header />
      <Main />
      <Footer />
      </StrictMode>,
    </StoreProvider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document.",
  )
}


