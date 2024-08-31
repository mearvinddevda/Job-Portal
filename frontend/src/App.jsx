import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signin from "./components/Auth/Signin";
import Home from "./components/Home";
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
    path: "/logout",
    element: <logout />,
  },
  {
    path: "/signin",
    element: <Signin />,
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
