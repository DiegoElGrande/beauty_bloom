import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { AuthProvider } from "./app/providers/auth-provider.tsx";
import { UserProvider } from "./app/providers/user-provider.tsx";

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
      <AuthProvider>
          <UserProvider>
    <Provider store={store}>
      <StrictMode>
      <Header />
      <Main />
      <Footer />
      </StrictMode>
    </Provider>
          </UserProvider>
      </AuthProvider>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document.",
  )
}


