import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import PageNotFound from "../pages/PageNotFound";
import AddPlayerPage from "../pages/AddPlayerPage";
import DownloadPage from "../pages/DownloadPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
  },
  {
    path: "add",
    element: <AddPlayerPage />,
  },
  {
    path: "download",
    element: <DownloadPage />,
  },
]);
