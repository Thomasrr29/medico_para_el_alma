import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FooterComponent from "./components/ui/FooterComponent"
import ProcessPage from "./pages/Process"
import HomePage from "./pages/Home"
import HeaderComponent from "./components/ui/HeaderComponent"
import Community from "./pages/Community"

function App() {

  return (
    <>
      <Router>
      <HeaderComponent/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/proceso" element={<ProcessPage/>}/>
          <Route path="/comunidad" element={<Community/>}/>
        </Routes>
      <FooterComponent/>
      </Router>
    </>
  )
}

export default App
