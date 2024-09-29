import React from 'react'
import ReactDOM from 'react-dom/client'
import { SocialIcon } from 'react-social-icons'
import App from './App.jsx'
import './index.css'
import {
  SkewContext,
  SkewProvider,
} from "./components/StoreContext/ContextProvider";

const Component = <SocialIcon url="https://twitter.com" />


ReactDOM.createRoot(document.getElementById('root')).render(
  Component &&
  <React.StrictMode>
    <SkewProvider>
      <App />
    </SkewProvider>
  </React.StrictMode>,
)
