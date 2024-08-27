import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import NotFound from "../pages/not-found";

const Router = () => {
    return (
        <Routes>
            {routes.map(({ path, component: Component }) => {
                return <Route key={path} path={path} element={<Component />} />;
            })}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;