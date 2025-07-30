import { Disclosure } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Menus(props) {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Fila de Pedidos", href: "/orderqueue" },
    { name: "Fazer o Pedidos", href: "/register" },
    { name: "Controle do Pedido", href: "/orders" },
  ];
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-amber-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/" onClick={() => props.linkMenu("/")}>
                <img
                  alt="Your Company"
                  src="..\public\hamburger_4639032.png"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const isCurrent = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => props.linkMenu(item.href)}
                      aria-current={isCurrent ? "page" : undefined}
                      className={classNames(
                        isCurrent
                          ? "bg-gray-900 text-white"
                          : "text-gray-900 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
