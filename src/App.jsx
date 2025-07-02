import RootLayout from "./layouts/RootLayout";
import Services from "./ui/Services";

function App() {
  return (
    <RootLayout>
      <main>
        {/* <h1>DEVHUB</h1>
        <p>Sections go here...</p> */}
        <Services />
      </main>
    </RootLayout>
  );
}

export default App;
