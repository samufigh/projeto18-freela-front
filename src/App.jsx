import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/LoginPage/Login"
import SignUp from "./Pages/SignUpPage/SignUp"
import Home from "./Pages/HomePage/Home"
import InfoModel from "./Pages/InfoModel/InfoModel"
import MyPets from "./Pages/Mypets/MyPets"
import AddPets from "./Pages/AddPet/AddPet"
import MyProfile from "./Pages/MyProfile/MyProfile"
import UserProvider from "./contexts/UserContext"

function App() {
  return (
    <>
    <BrowserRouter>
      <UserProvider>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/pet/:id" element={<InfoModel/>}/>
            <Route path="/myPets" element={<MyPets/>}/>
            <Route path="/addPet" element={<AddPets/>}/>
            <Route path="/myProfile" element={<MyProfile/>}/>
          </Routes>
      </UserProvider>
    </BrowserRouter>
    </>
  )
}

export default App
