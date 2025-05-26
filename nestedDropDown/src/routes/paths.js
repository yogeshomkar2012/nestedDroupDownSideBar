export const PATHS = {
  dashboard: "/admin/dashboard",
  sideNav: [
    {
      title: "Product Management",
      dropdownItems: [
        {
          title: "Product",
          dropDownItemLinks: [
            {
              title: "Products",
              linkTo: "/admin/products",
            },
            {
              title: "Product Create",
              linkTo: "/admin/product/create",
            },
          ],
        },
        {
          title: "Category",
          dropDownItemLinks: [
            {
              title: "Categories",
              linkTo: "/admin/categories",
            },
            {
              title: "Create Category",
              linkTo: "/admin/category/create",
            },
          ],
        },
      ],
    },
    {
      title: "User Management",
      dropdownItems: [
        {
          title: "Users",
          dropDownItemLinks: [
            {
              title: "User List",
              linkTo: "/admin/users",
            },
            {
              title: "Create User",
              linkTo: "/admin/user/create",
            },
          ],
        },
        {
          title: "Category",
          dropDownItemLinks: [
            {
              title: "Categories",
              linkTo: "/admin/categories",
            },
            {
              title: "Create Category",
              linkTo: "/admin/category/create",
            },
          ],
        },
      ],
    },
  ],
};