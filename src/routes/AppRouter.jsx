import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// layouts
import WebsiteLayout from "../templates/websiteLayout/WebsiteLayout.jsx";
// pages
import Home from "../pages/Home";
import ForeignProducts from "../pages/ForeignProducts.js";
import LocalProducts from "../pages/LocalProducts.js";
import Login from "../pages/Login.js";
import Regester from "../pages/Regester.js";
import NotFound from "../pages/NotFound.js";
import ScrollToTopAfterChangePage from "../components/common/ScrollToTopAfterChangePage.jsx";
import AuthLayout from "../templates/authLayout/AuthLayout.jsx";
import ForgetPassword from "../pages/ForgetPassword.js";
import PasswordVerfication from "../pages/PasswordVerfication.js";
import NewPassword from "../pages/NewPassword.js";
import LocalProductDetails from "../pages/LocalProductDetails.js";
import ForeignProductDetails from "../pages/ForeignProductDetails.js";
import EditAccount from "../pages/EditAccount.js";
import Success from "../pages/Success.js";
import Privacy from "../pages/Privacy.js";
import AddProduct from "../pages/AddProduct.js";
import ProductTrial from "../pages/ProductTrial.js";
import AddProductOwner from "../pages/AddProductOwner.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },

      {
        path: "local-products",
        element: <LocalProducts />,
      },
      {
        path: "local/:id",
        element: <LocalProductDetails />,
      },
      {
        path: "foreign-products",
        element: <ForeignProducts />,
      },
      {
        path: "foreign/:id",
        element: <ForeignProductDetails />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "add-product/trial",
        element: <ProductTrial />,
      },
      {
        path: "add-product/owner",
        element: <AddProductOwner />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "regester",
        element: <Regester />,
      },
      {
        path: "foreget",
        element: <ForgetPassword />,
      },
      {
        path: "password-verfication",
        element: <PasswordVerfication />,
      },
      {
        path: "new-password",
        element: <NewPassword />,
      },
      {
        path: "edit-account",
        element: <EditAccount />,
      },
    ],
  },
  {
    path: "/profile",
    errorElement: <NotFound />,
    element: (
      <div className="w-screen h-screen bg-mainColor">
        <div className="container mx-auto p-8">
          <div className="w-full h-full flex items-center justify-center">
            <Outlet />
          </div>
        </div>
      </div>
    ),
    children: [
      {
        path: "edit-account",
        element: <EditAccount />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
