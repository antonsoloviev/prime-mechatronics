import Home from "./pages/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import { ToastContainer } from "react-toastify";
import Projects from "./pages/Projects";
import RootLayout from "./layout/RootLayout";
import ProjectDetails from "./components/ProjectDetails";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/projects">
          <Route index element={<Projects />} />
          <Route path=":id" element={<ProjectDetails />} />
        </Route>
      </Route>
    ),
    { basename: import.meta.env.BASE_URL }
  );

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
