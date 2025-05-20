import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FooterComponent from "./components/FooterComponent"
import ProcessPage from "./pages/Process"
import HomePage from "./pages/Home"
import ContactPage from "./pages/Contact"
import HeaderComponent from "./components/HeaderComponent"

function App() {

  return (
    <>
      <Router>
      <HeaderComponent/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/process" element={<ProcessPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      <FooterComponent/>
      </Router>
    </>
  )
}

export default App
