import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Appp from "../Appp";
import Logout from "./Logout";
import { Failure } from "./Failure";
import { Success } from "./Success";
import Ticket from "./Ticket";
import BookingForm from "./Form";

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
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/failure",
      element: <Failure />,
    },
    {
      path: "/ticket",
      element: <Ticket />,
    },
    {
      path: "/booking",
      element: <BookingForm />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
