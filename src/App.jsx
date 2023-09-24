import { Outlet } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Overview } from "./Components/Overview";
import Signup from "./Components/Signup";
import { TopMenu } from "./Components/TopMenu";
import Home from "./Pages/Home";
import { Footer } from "./Components/Footer";
import Explore from "./Pages/Explore";
import About from "./Pages/About";

function App() {
  return (
    <div className="app">
      <NavBar />
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;