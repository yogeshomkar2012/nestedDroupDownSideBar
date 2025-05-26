import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import DashBoard from "../pages/DashBoard";
import { PATHS } from "./paths";
import ProductList from "../pages/product/ProductListPage";
import ProductCreatePage from "../pages/product/ProductCreatePage";
import CategoryListPage from "../pages/product/CategoryListPage";
import CategoryCreatePage from "../pages/product/CategoryCreatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ index: true, element: <DashBoard /> },],
  },
]);
export default router;
