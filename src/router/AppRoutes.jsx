import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../pages/Header";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Orders from "../pages/Orders";
import OrderQueue from "../pages/OrderQueue";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* The Layout component is the parent route */}
        <Route path="/" element={<Header />}>
          {/* Child routes are rendered within the Outlet of the Layout */}
          <Route index element={<Home />} /> {/* Default child route for "/" */}
          <Route path="register" element={<Register />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orderqueue" element={<OrderQueue />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
