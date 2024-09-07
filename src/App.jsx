import { Fragment } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Alumni from "./Pages/Alumni/Alumni";
import Events from "./Pages/Events/Events";
import Gallery from "./Pages/Gallery/Gallery";
import Projects from "./Pages/Projects/Projects";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import Loader from './Components/Loader/loader';
import TeamPage from "./Pages/TeamPage/TeamPage";
import ScrollToTop from "./Hooks/Scroll";
import BootcampPage from "./Pages/Bootcamps/BootcampPage";

function App() {
  return (
    <Fragment>
      {/* <Loader /> */}
      <div>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/alumni" element={<Alumni />} />
            {/* <Route path="/bootcamps/web-development" element={<Bootcamps />} /> */}
            <Route path="/bootcamps/:bootcampName" element={<BootcampPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
