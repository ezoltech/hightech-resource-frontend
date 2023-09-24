
// import { Outlet } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import Signup from "./Components/Signup"
import Profile from "./Components/Profile"
import SideBar from "./Components/SideBar"
// import Upload from "./Components/Upload"

function App() {

  return (
    <div className="app">
      {/* <NavBar /> */}
      {/* <Outlet /> */}
      <Signup />
      <Profile />
      <SideBar />
      {/* <Upload /> */}
    </div>
  )
}

export default App
