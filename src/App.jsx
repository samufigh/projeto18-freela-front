import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/LoginPage/Login"
import SignUp from "./Pages/SignUpPage/SignUp"
import Home from "./Pages/HomePage/Home"
import InfoModel from "./Pages/InfoModel/InfoModel"
import MyPets from "./Pages/Mypets/MyPets"
import AddPets from "./Pages/AddPet/AddPet"
import MyProfile from "./Pages/MyProfile/MyProfile"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/pet" element={<InfoModel/>}/>
        <Route path="/myPets" element={<MyPets/>}/>
        <Route path="/addPet" element={<AddPets/>}/>
        <Route path="/myProfile" element={<MyProfile/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
