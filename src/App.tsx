import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import BaseRouter from './router/BaseRouter'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BaseRouter></BaseRouter>
      </BrowserRouter>
    </div>
  )
}

export default App
