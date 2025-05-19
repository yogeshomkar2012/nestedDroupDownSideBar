import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HomeLayout from "../layouts/HomeLayout";
import ProductListPage from "../pages/product/ProductListPage";
import CreateCategoryPage from "../pages/category/CreateCategoryPage";
import CategoryListPage from "../pages/category/CategoryListPage";
import UsersListPage from "../pages/user/usersListPage";
import UserCreatePage from "../pages/user/userCreatePage";

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
        path: "/admin/product/create",
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
      // users
      {
        path: "/admin/users",
        element:<UsersListPage/>
      }, {
        path: "/admin/user/create",
        element:<UserCreatePage/>
      }
     
    ],
  },
]);
export default router;
