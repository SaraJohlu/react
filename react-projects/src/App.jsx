import Nav from "./components/Nav.jsx";
import Counter from "./components/react-counter/Counter.jsx";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <section className="info-container">
        <h1>React</h1>
        <p>Nedan kan du se olika projekt/applikationer gjorda av mig under min utbildning till Frontend utvecklare</p>
      </section>

      <Nav />

      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
