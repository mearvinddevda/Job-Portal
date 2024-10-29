import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signin from "./components/Auth/Signin";
import Home from "./components/Home";
import Jobs from "./components/jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/companies";
import CompanyCreate from "./components/admin/CompanyCreate";
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
		element: <Jobs />,
	},
	{
		path: "/description/:id",
		element: <JobDescription />,
	},
	{
		path: "/browse",
		element: <Browse />,
	},
	{
		path: "/profile",
		element: <Profile />,
	},
	{
		path: "/admin/companies",
		element: <Companies />,
	},
	{
		path: "/admin/companies/create",
		element: <CompanyCreate />,
	},
]);
function App() {
	return (
		<>
			<RouterProvider router={appRouter} />
		</>
	);
}

export default App;
