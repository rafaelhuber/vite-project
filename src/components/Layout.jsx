// components/Layout.jsx
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Menus from "./Menus";
import banner from "../assets/banner.jpg";
import Footer from "./Footer";

function Layout() {
  const [linkMenu, setLinkMenu] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (linkMenu) {
      navigate(linkMenu);
      setLinkMenu("");
    }
  }, [linkMenu, navigate]);

  return (
    <div>
      <Menus linkMenu={setLinkMenu} />
      <hr />

      <div className="w-full h-auto flex justify-center static">
        <p className="m-1 absolute left-0 top-1/2 -translate-y-1/2 text-black px-4 py-2 text-4xl font-bold bg-amber-500 shadow-lg shadow-indigo-500/50 rounded-md">
          Hambúrgueria do Galactus
        </p>
        <p className="m-1 absolute right-1 top-1/2 -translate-y-1/2 text-black px-4 py-2 text-4xl font-bold bg-amber-500 shadow-lg shadow-indigo-500/50 rounded-md">
          Melhor Hambúrguer da cidade
        </p>
        <img
          src={banner}
          alt="Banner-Hambúrguer"
          className="w-full h-140 object-cover object-bottom-center"
        />
      </div>
      {/* The Outlet renders the matching child route component */}
      <Outlet />
      <hr />
      <Footer />
    </div>
  );
}

export default Layout;
