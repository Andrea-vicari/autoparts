import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import store from './redux/store.jsx'
import { Provider } from 'react-redux'
import { AuthContextProvider } from './context/AuthContext.jsx';


// Components CSS

import '../src/Components/styles/cta-small-style.css'
import '../src/Components/styles/projects-modal-style.css'
import '../src/Components/styles/projects-link-style.css'
import '../src/Components/styles/contact-style.css'
import '../src/Components/styles/footer-style.css'
import '../src/Components/styles/services-style.css'
import '../src/Components/styles/cta-style.css'
import '../src/Components/styles/features-style.css'
import '../src/Components/styles/team-style.css'
import '../src/Components/styles/banner-intro-style.css'
import '../src/Components/styles/divider-style.css'
import '../src/Components/styles/faq-style.css'
import '../src/Components/styles/single-post-style.css'
import '../src/Components/styles/single-project-style.css'
import '../src/Components/styles/dashboard-style.css'
import '../src/Components/styles/prodotti-style.css'
import '../src/Components/styles/login-style.css'

// Main CSS Sass
import './sass/index.scss';



ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

      <AuthContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthContextProvider>

    </BrowserRouter>

  ,
)