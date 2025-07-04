import ContactUs from "./ui/contact";
import RootLayout from "./layouts/RootLayout";
import Hero from "./ui/Hero";
import Service from "./ui/Services";
import Project from "./ui/project";
import Services from "./ui/Services";

function App() {
  return (
    <RootLayout>
      <main>
        {/* <h1>DEVHUB</h1>
        <p>Sections go here...</p> */}
        <Hero />
        <Service />
        <Project />
        <ContactUs />
        <Services />
      </main>
    </RootLayout>
  );
}

export default App;
