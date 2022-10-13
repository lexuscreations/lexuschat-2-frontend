import { Routes as RoutesContainer, Route } from "react-router-dom";

import MainController from "./controller/MainController";
import NotFound from "../../pages/notFound/NotFound";

const Routes = () => {
  return (
    <section>
      <RoutesContainer>
        <Route path="/" element={<MainController />} exact />
        <Route path="*" element={<NotFound />} />
      </RoutesContainer>
    </section>
  );
};

export default Routes;
