import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Other sections will be added here */}
      </main>

      <Footer />
    </>
  );
}

export default App;