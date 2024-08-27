import Home from "../pages/home";
import Shop from "../pages/shop";
import AboutUs from "../pages/about-us";
import ContactUs from "../pages/contact-us";
import Basket from "../pages/basket";
import Login from "../pages/log-in";
import { ROUTES } from "../utils/constant";
import SingleProduct from "../pages/single-product";

export const routes = [
  {
    component: Home,
    path: ROUTES.home,
  },

  {
    component: Shop,
    path: ROUTES.shop,
  },
  {
    component: SingleProduct,
    path: ROUTES.singleProduct,
  },
  {
    component: AboutUs,
    path: ROUTES.aboutUs,
  },
  {
    component: ContactUs,
    path: ROUTES.contactUs,
  },
  {
    component: Basket,
    path: ROUTES.basket,
  },
  {
    component: Login,
    path: ROUTES.login,
  },
];
