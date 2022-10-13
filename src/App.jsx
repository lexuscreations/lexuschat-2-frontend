import React, { useEffect, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";

import config from "./config/app.config";
import Loader from "./components/utils/loader/Loader";

const Routes = React.lazy(() => import("./components/body/Routes"));

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
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <div className="App">
            <Routes />
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
        </Suspense>
      </Router>
    </>
  );
};

export default App;
