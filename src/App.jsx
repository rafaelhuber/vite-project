import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Solicitation from "./pages/Solicitation";

function App() {
  return (
    <Router>
      <Routes>
        {/* The Layout component is the parent route */}
        <Route path="/" element={<Layout />}>
          {/* Child routes are rendered within the Outlet of the Layout */}
          <Route index element={<Home />} /> {/* Default child route for "/" */}
          <Route path="register" element={<Register />} />
          <Route path="solicitation" element={<Solicitation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
