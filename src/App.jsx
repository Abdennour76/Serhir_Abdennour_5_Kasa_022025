import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Propriete from "./pages/Propriete";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/propriete/:id" element={<Propriete />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
