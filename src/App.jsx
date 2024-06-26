import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<Home />} />
			<Route path="/jobs" element={<Jobs />} />
			<Route path="/jobs" element={<Jobs />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
