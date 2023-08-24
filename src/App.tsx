import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import RegisterCompanyVi01 from "./pages/RegisterCompanyVi01";
import RegisterCompanyVi02 from "./pages/RegisterCompanyVi02";
import RegisterCompanyVi12 from "./pages/RegisterCompanyVi12";
import RegisterCompanyVi05 from "./pages/RegisterCompanyVi05";
import RegisterCompanyVi06 from "./pages/RegisterCompanyVi06";
import RegisterCompanyVi07 from "./pages/RegisterCompanyVi07";
import RegisterCompanyVi08 from "./pages/RegisterCompanyVi08";
import RegisterCompanyVi11 from "./pages/RegisterCompanyVi11";
import RegisterCompanyVi09 from "./pages/RegisterCompanyVi09";
import RegisterCompanyVi10 from "./pages/RegisterCompanyVi10";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/vi01",
    element: <RegisterCompanyVi01 />,
  },
  {
    path: "/vi02",
    element: <RegisterCompanyVi02 />,
  },
  {
    path: "/vi12",
    element: <RegisterCompanyVi12 />,
  },
  {
    path: "/vi05",
    element: <RegisterCompanyVi05 />,
  },
  {
    path: "/vi06",
    element: <RegisterCompanyVi06 />,
  },
  {
    path: "/vi07",
    element: <RegisterCompanyVi07 />,
  },
  {
    path: "/vi08",
    element: <RegisterCompanyVi08 />,
  },
  {
    path: "/vi11",
    element: <RegisterCompanyVi11 />,
  },
  {
    path: "/vi09",
    element: <RegisterCompanyVi09 />,
  },
  {
    path: "/vi10",
    element: <RegisterCompanyVi10 />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
