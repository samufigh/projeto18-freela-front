import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/LoginPage/Login"
import SignUp from "./Pages/SignUpPage/SignUp"
import Home from "./Pages/HomePage/Home"
import InfoModel from "./Pages/InfoModel/InfoModel"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/pet" element={<InfoModel/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
