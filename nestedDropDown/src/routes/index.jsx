import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HomeLayout from "../layouts/HomeLayout";
import ProductListPage from "../pages/product/ProductListPage";
import CreateCategoryPage from "../pages/category/CreateCategoryPage";
import CategoryListPage from "../pages/category/CategoryListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/admin/products",
        element: <ProductListPage />,
      },
      {
        path: "/admin/products/create",
        element: <CreateCategoryPage />,
      },
      {
        path: "/admin/categories",
        element: <CategoryListPage />,
      },
      {
        path: "/admin/categories/create",
        element: <CreateCategoryPage />,
      },
    ],
  },
]);
export default router;
