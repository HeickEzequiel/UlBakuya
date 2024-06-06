import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/main.css'
import { HashRouter } from 'react-router-dom'
import { ReactQueryDevtools} from "@tanstack/react-query-devtools"
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './queryClient.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </HashRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
