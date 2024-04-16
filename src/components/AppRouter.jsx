import {
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import Todo from "./Todo";
import Todoform from "./Todoform";

const router = createBrowserRouter([
  { path: "/", Components: Todo },
  { path: "/haybee", Component: Todo },
  { path: "/Ebere", Component: Todoform },
]);

export const RouterProviderApp = () => {
  return <RouterProvider router={router} />;
};
