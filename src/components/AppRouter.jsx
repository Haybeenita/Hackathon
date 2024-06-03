import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Todo from "./Todo";
import Todoform from "./Todoform";

const router = createBrowserRouter([
  { path: "/ebere", Components: Todoform },
  { path: "/haybee", Component: Todo },
  { path: "/", Component: Todoform },
]);

export const RouterProviderApp = () => {
  return <RouterProvider router={router} />;
};
