// import { Outlet } from "react-router-dom"
import Login from "./Components/Login";
import { NavBar } from "./Components/NavBar";
import { Overview } from "./Components/Overview";
import Signup from "./Components/Signup";
import { TopMenu } from "./Components/TopMenu";

function App() {
  return (
    <div className="app">
      {/* <NavBar /> */}
      {/* <Outlet /> */}
    <Signup/>
      <Login />

      {/* <Overview /> */}
    </div>
  );
}

export default App;
