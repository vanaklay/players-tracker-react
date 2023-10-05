import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import PageNotFound from "../pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
  },
]);
