import ContactUs from "./ui/contact";
import RootLayout from "./layouts/RootLayout";
import Hero from "./ui/Hero";
import Services from "./ui/Services";
import Project from "./ui/project";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import About from "./ui/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Hero />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
