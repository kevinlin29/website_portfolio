import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages";
import project1 from "./components/pages/projectOne";
import {ContactUs} from "./components/homepage/contact";
import * as PropTypes from "prop-types";


function PDFJSBackend(props) {
    return null;
}

PDFJSBackend.propTypes = {children: PropTypes.node};

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={Home()}/>
          <Route path="/project1" element={project1()}/>
          <Route path="/project2"  />
          <Route path="/project3" element={project1()}/>
          <Route path="/contact" element={ContactUs()}/>
      </Routes>

    </Router>
  );
}

export default App;
