import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/faq";
import Contact from "./pages/help/contact";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
//Layout
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayouts";
import NotFound from "./pages/NotFound";
import Careers from "./pages/careers/Careers";
import CareersLayout from "./layout/CareersLayout";
import { careersLoader } from "./pages/careers/Careers";
import CareersError from "./pages/careers/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          element={<CareerDetails />}
          path=":id"
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
