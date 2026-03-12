import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Tributary from "./pages/products/Tributary";
import Lando from "./pages/products/Lando";
import Allowly from "./pages/products/Allowly";
import Solcraft from "./pages/products/Solcraft";
import Chaoscraft from "./pages/products/Chaoscraft";
import Contribute from "./pages/products/Contribute";
import Polycode from "./pages/products/Polycode";

export default function App() {
  return (
    <div className="min-h-screen bg-background antialiased font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/products/tributary" element={<Tributary />} />
        <Route path="/products/lando" element={<Lando />} />
        <Route path="/products/allowly" element={<Allowly />} />
        <Route path="/products/solcraft" element={<Solcraft />} />
        <Route path="/products/chaoscraft" element={<Chaoscraft />} />
        <Route path="/products/contribute" element={<Contribute />} />
        <Route path="/products/polycode" element={<Polycode />} />
      </Routes>
      <Footer />
    </div>
  );
}
