import { ROUTE_PATHS } from "../constants/path_constants";

export const PATHS = {
  // dashboard: "/admin/dashboard",
  sideNav: [
    {
      title: "Product Management",
      dropdownItems: [
        {
          title: "Product",
          dropDownItemLinks: [
            {
              title: "Products List",
              linkTo: ROUTE_PATHS.productList,
            },
            {
              title: "Product Create",
              linkTo: ROUTE_PATHS.productCreate,
            },
          ],
        },
        {
          title: "Category",
          dropDownItemLinks: [
            {
              title: "Categories",
              linkTo: ROUTE_PATHS.categoryList,
            },
            {
              title: "Create Category",
              linkTo: ROUTE_PATHS.categoryCreate,
            },
          ],
        },
      ],
    },
    {
      title: "User Management",
      dropdownItems: [
        {
          title: "User",
          dropDownItemLinks: [
            {
              title: "User List",
              linkTo: ROUTE_PATHS.userList,
            },
            {
              title: "Create User",
              linkTo: ROUTE_PATHS.userCreate,
            },
          ],
        },
      ],
    },
  ],
};
