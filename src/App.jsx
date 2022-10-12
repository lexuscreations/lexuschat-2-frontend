import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import config from "./config/app.config";
import Body from "./components/body/Body";

const App = () => {
  useEffect(() => {
    let i = 0;
    const setIntervalTitle = setInterval(() => {
      document.title = config.REACT_APP_TITLE[i++].fullName;
      if (i >= config.REACT_APP_TITLE.length) i = 0;
    }, 2000);
    return () => clearInterval(setIntervalTitle);
  }, []);

  return (
    <Router>
      <div className="App">
        <Body />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
};

export default App;
