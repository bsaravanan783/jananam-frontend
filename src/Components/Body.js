import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Appp from "../Appp";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/jananam",
      element: <Appp />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
