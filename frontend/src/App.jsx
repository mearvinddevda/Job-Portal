import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signin from "./components/Auth/Signin";
import Home from "./components/Home";
import Jobs from "./components/jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/jobs",
    element: <Jobs/>,
  },
  {
    path: "/browse",
    element: <Browse/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },

]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  );
}

export default App;
