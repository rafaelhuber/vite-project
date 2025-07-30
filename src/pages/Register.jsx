import { useState, useEffect } from "react";
import { v4 } from "uuid";

import Bread from "../components/Bread";
import Meat from "../components/Meat";
import OptionsAdd from "../components/OptionsAdd";
import Alert from "../components/Alert";

function Register() {
  const [addBread, setaddBread] = useState([]);
  const [addMeat, setaddMeat] = useState([]);
  const [optionsAddResult, setoptionsAddResult] = useState([]);
  const [name, setname] = useState("");
  const [resetTrigger, setResetTrigger] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const [tickets, setTickets] = useState(
    JSON.parse(localStorage.getItem("tickets")) || []
  );

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  function enviar() {
    onAddticketsubmit(addBread, addMeat, optionsAddResult, name);
    setname("");
    setaddBread("");
    setaddMeat([]);
    setoptionsAddResult([]);
    setResetTrigger((prev) => prev + 1);
    setShowMessage(true);
  }

  function onAddticketsubmit(addBread, addMeat, optionsAddResult, name) {
    const newTicket = {
      id: v4(),
      addBread,
      addMeat,
      optionsAddResult,
      name,
      isStatus: "Aguardando",
    };
    setTickets([...tickets, newTicket]);
  }

  return (
    <div className="flex justify-center">
      {showMessage && (
        <Alert
          key={resetTrigger}
          onClose={() => setShowMessage(false)}
          className={"blue"}
        >
          Pedido Cadastrado com sucesso
        </Alert>
      )}
      <div className="relative top-[-100px] w-[600px] p-6 space-y-4 bg-white rounded-2xl">
        <p className="px-4 py-2 text-4xl font-bold text-amber-500 text-center underline underline-offset-8">
          Cadastre o Pedido
        </p>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nome do cliente:{" "}
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Digite o nome do cliente"
          value={name}
          onChange={(event) => setname(event.target.value)}
        />

        <Bread submitItem={setaddBread} reset={resetTrigger} />
        <Meat submitItem={setaddMeat} reset={resetTrigger} />
        <OptionsAdd submitItem={setoptionsAddResult} reset={resetTrigger} />

        <button
          className="bg-transparent hover:bg-amber-500 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded w-full"
          onClick={enviar}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Register;
