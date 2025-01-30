// import { useState } from 'react'
import { Route, Router, Routes } from "react-router-dom"
import Nav from "./components/Nav.jsx"
import './App.css'

function App() {


  return (
    <Router>

      <section>
        <h1>React applikationer och projekt</h1>
        <p>Nedan kan du se olika projekt/applikationer</p>
      </section>

      <Nav />

      <Routes> 
        <Route path="/" element={<App />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>

    </Router>
  )
}

export default App
