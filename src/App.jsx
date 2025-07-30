import Header from "./components/Header";
// import Greeting from "./components/Greeting";
// import About from "./components/About";
// import ProjectsSlider from "./components/ProjectsSlider";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import { ToastContainer } from "react-toastify";
import Projects from "./pages/Projects";
import ScrollToAnchor from "./utils/ScrollToAnchor";
import RootLayout from "./layout/RootLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    ),
    { basename: import.meta.env.BASE_URL }
  );

  return (
    <div>
      {/* <ScrollToAnchor /> */}
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer /> */}
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
