import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import DashBoard from "../pages/DashBoard";
import { PATHS } from "./paths";
import ProductListPage from "../pages/product/ProductListPage";
import ProductCreatePage from "../pages/product/ProductCreatePage";
import CategoryListPage from "../pages/product/CategoryListPage";
import CategoryCreatePage from "../pages/product/CategoryCreatePage";
import UserListPage from "../pages/user/UserListPage";
import UserCreatePage from "../pages/user/UserCreatePage";
import { ROUTE_PATHS } from "../constants/path_constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <DashBoard /> },
      { path: ROUTE_PATHS.productList, element: <ProductListPage /> },
      { path: ROUTE_PATHS.productCreate, element: <ProductCreatePage /> },
      { path: ROUTE_PATHS.categoryList, element: <CategoryListPage /> },
      { path: ROUTE_PATHS.categoryCreate, element: <CategoryCreatePage /> },
      { path: ROUTE_PATHS.userList, element: <UserListPage /> },
      { path: ROUTE_PATHS.userCreate, element: <UserCreatePage /> },
    ],
  },
]);
export default router;
