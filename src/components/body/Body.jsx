import { Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import NotFound from "../../pages/notFound/NotFound";

const Body = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default Body;
