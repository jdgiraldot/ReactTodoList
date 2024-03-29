import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoProvider } from './context/useTodoContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
)
