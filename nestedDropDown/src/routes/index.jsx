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
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: PATHS.productManagement.product.list,
        element: <ProductList />,
      },
      {
        path: PATHS.productManagement.product.create,
        element: <ProductCreatePage />,
      },
      {
        path: PATHS.productManagement.category.list,
        element: <CategoryListPage />,
      },
      {
        path: PATHS.productManagement.category.create,
        element: <CategoryCreatePage />,
      },
    ],
  },
]);
export default router;
