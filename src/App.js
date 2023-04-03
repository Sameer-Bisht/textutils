import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import Alert from "./Components/Alert";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212630";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
    {/* <Router> */}

      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
              <div className="container">
      <TextForm
              heading="Enter your text to analyse  "
              showAlert={showAlert}
              mode={mode}
            />
        {/* <Routes> */}
        {/* <Route exact path='/' element={<TextForm
              heading="Enter your text to analyse  "
              showAlert={showAlert}
              mode={mode}
            />} /> */}
          {/* <Route exact  path='/about' element={<About/>} /> */}
        {/* </Routes> */}
        <Alert alert={alert} />
      </div>
        {/* </Router> */}
    </>
  );
}

export default App;
