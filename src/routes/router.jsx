import { createBrowserRouter } from "react-router-dom";
import { Error, AppLayout } from "src/components";
import { CartItem, Home, Cart, Checkout, ItemDetails } from "src/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/item",
        element: <CartItem />,
        children: [
          {
            path: "/item/:itemId",
            element: <ItemDetails />,
          },
        ],
      },
    ],
  },
]);

export default router;
