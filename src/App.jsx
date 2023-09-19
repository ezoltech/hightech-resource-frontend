// import { Outlet } from "react-router-dom"
import { NavBar } from "./Components/NavBar";
import { Overview } from "./Components/Overview";
import Signup from "./Components/Signup";
import { TopMenu } from "./Components/TopMenu";

function App() {
  return (
    <div className="app">
      {/* <NavBar /> */}
      {/* <Outlet /> */}
      <Signup />
      {/* <Overview /> */}
    </div>
  );
}

export default App;
