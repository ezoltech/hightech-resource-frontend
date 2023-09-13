
// import { Outlet } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import Signup from "./Components/Signup"
import Profile from "./Components/Profile"


function App() {

  return (
    <div className="app">
      {/* <NavBar /> */}
      {/* <Outlet /> */}
      <Signup />
      <Profile />
    </div>
  )
}

export default App
