import { useState, useEffect } from "react";
import { v4 } from "uuid";
import Alert from "../components/Alert";

import { getTickets, saveTickets } from "../services/storage";

function ButtonEnviar({
  addBread,
  setaddBread,
  addMeat,
  setaddMeat,
  optionsAddResult,
  setoptionsAddResult,
  name,
  setname,
  resetTrigger,
  setResetTrigger,
}) {
  const [showMessage, setShowMessage] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertMessageColor, setAlertMessageColor] = useState("");
  const [cleanInput, setCleanInput] = useState(0);

  const [tickets, setTickets] = useState(getTickets());

  useEffect(() => {
    saveTickets(tickets);
  }, [tickets]);

  useEffect(() => {
    if (addBread.length === 0 || addMeat.length === 0 || name === "") {
      setname("");
      setaddBread([]);
      setaddMeat([]);
      setoptionsAddResult([]);
      setResetTrigger((prev) => prev + 1);
    }
  }, [cleanInput]);

  function enviar() {
    onAddTicketSubmit(addBread, addMeat, optionsAddResult, name);
    setCleanInput(cleanInput + 1);
    setname("");
  }

  function onAddTicketSubmit(addBread, addMeat, optionsAddResult, name) {
    if (name.trim() === "") {
      setAlertMessage("O Nome deve ser preenchido!");
      setShowMessage(true);
      setResetTrigger((prev) => prev + 1);
      setAlertMessageColor("red");
      setCleanInput(cleanInput + 1);
      return;
    }

    if (addBread.length === 0) {
      setAlertMessage("Escolha um tipo de pão, por favor!");
      setShowMessage(true);
      setResetTrigger((prev) => prev + 1);
      setAlertMessageColor("red");
      setCleanInput(cleanInput + 1);
      return;
    }

    if (addMeat.length === 0) {
      setAlertMessage("Escolha um tipo de carne, por favor!");
      setShowMessage(true);
      setResetTrigger((prev) => prev + 1);
      setAlertMessageColor("red");
      setCleanInput(cleanInput + 1);
      return;
    }

    const newTicket = {
      id: v4(),
      addBread,
      addMeat,
      optionsAddResult,
      name,
      isStatus: "Aguardando",
    };

    setTickets([...tickets, newTicket]);
    setShowMessage(true);
    setResetTrigger((prev) => prev + 1);
    setAlertMessage("Pedido Cadastrado com sucesso!");
    setAlertMessageColor("blue");
    setCleanInput(cleanInput + 1);
  }

  return (
    <div>
      {showMessage && (
        <Alert
          key={resetTrigger}
          onClose={() => setShowMessage(false)}
          className={alertMessageColor}
        >
          {alertMessage}
        </Alert>
      )}
      <button
        className="bg-transparent hover:bg-amber-500 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded w-full"
        onClick={enviar}
      >
        Enviar
      </button>
    </div>
  );
}

export default ButtonEnviar;
