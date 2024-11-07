import { Route, Routes } from "react-router-dom";

import NotFound from "../pages/not-found";
import Home from "../pages/Home";
import { ROUTES } from "../utils/constants";

const Router = () => {
  return (
    <Routes>
      <Route index path={ROUTES.home} element={<Home/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
