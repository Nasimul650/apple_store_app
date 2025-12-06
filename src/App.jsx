import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      {/* <ProductViewer /> */}
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </>
  );
}

export default App;
