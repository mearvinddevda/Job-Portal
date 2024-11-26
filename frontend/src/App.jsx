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
import ProtectedRoute from "./components/admin/ProtectedRoute";

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
		element: <ProtectedRoute><Companies /></ProtectedRoute>,
	},
	{
		path: "/admin/companies/create",
		element:<ProtectedRoute><CompanyCreate /></ProtectedRoute> ,
	},
	{
		path: "/admin/companies/:id",
		element:<ProtectedRoute> <CompanySetUp /></ProtectedRoute>,
	},
	{
		path: "/admin/jobs",
		element:<ProtectedRoute> <AdminJobs /></ProtectedRoute>,
	},
	{
		path: "/admin/jobs/create",
		element:<ProtectedRoute><PostJob />,</ProtectedRoute> 
	},
	{
		path: "/admin/jobs/:id/applicants",
		element: <ProtectedRoute><Applicants /></ProtectedRoute>,
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
