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
import CompanySetUp from "./components/admin/CompanySetUp";
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from "./components/admin/PostJob";
import Applicants from "./components/admin/Applicants";

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
	{
		path: "/admin/companies/:id",
		element: <CompanySetUp />,
	},
	{
		path: "/admin/jobs",
		element: <AdminJobs />,
	},
	{
		path: "/admin/jobs/create",
		element: <PostJob />,
	},
	{
		path: "/admin/jobs/:id/applicants",
		element: <Applicants />,
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
