import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Main />
    <Footer />
  </StrictMode>,
)


