import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import ContactUs from "./ContactUs"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  )
}

export default App