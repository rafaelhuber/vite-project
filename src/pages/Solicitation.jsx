import { useState, useEffect } from "react";
import Alert from "../components/Alert";

function Solicitation() {
  const [tickets, settickets] = useState(() => {
    const data = JSON.parse(localStorage.getItem("tickets")) || [];
    return data.map((t) => ({ ...t, isStatus: t.isStatus || "" }));
  });
  const [messageKey, setMessageKey] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  const ClassNameTitle =
    "border bg-amber-300 border-gray-300 p-2 dark:border-gray-700";

  const onStatus = [
    { id: 1, status: "Aguardando", classStatus: "bg-gray-300" },
    { id: 2, status: "Em Produção", classStatus: "bg-blue-200" },
    { id: 3, status: "Concluido", classStatus: "bg-green-200" },
  ];

  function onClickStatus(id, newStatus) {
    const updatedtickets = tickets.map((ticket) =>
      ticket.id === id ? { ...ticket, isStatus: newStatus } : ticket
    );
    settickets(updatedtickets);
  }

  function deleteSolicitation(id) {
    settickets(tickets.filter((v) => v.id !== id));
    setMessageKey((prev) => prev + 1);
    setShowMessage(true);
  }

  function classOnStatus(item) {
    const status = onStatus.find((t) => t.status === item);
    return status ? status.classStatus : "";
  }

  return (
    <div className="flex justify-center">
      <div className=" p-6 space-y-4">
        {showMessage && (
          <Alert
            key={messageKey}
            onClose={() => setShowMessage(false)}
            className={"red"}
          >
            O Pedido foi removida com sucesso.
          </Alert>
        )}
        <p className="px-4 py-2 text-4xl font-bold text-amber-500 text-center underline underline-offset-8">
          Lista de Pedidos
        </p>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-fixed border-separate border border-gray-400 border-spacing-2">
            <thead>
              <tr>
                <th className={ClassNameTitle}>Nome</th>
                <th className={ClassNameTitle}>Tipo do pão</th>
                <th className={ClassNameTitle}>Tipo da Carme</th>
                <th className={ClassNameTitle}>Adicionais</th>
                <th className={ClassNameTitle}>Situação</th>
                <th className={ClassNameTitle}>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((item, index) => (
                <tr
                  className={`gap-2 ${classOnStatus(item.isStatus)}`}
                  key={item.id || index}
                >
                  <td className={`border border-gray-300 p-2`}>{item.name}</td>
                  <td className={`border border-gray-300 p-2`}>
                    {item.addBread}
                  </td>
                  <td className={`border border-gray-300 p-2`}>
                    {item.addMeat}
                  </td>
                  <td className="border border-gray-300 p-2">
                    <ul className="list-disc pl-5">
                      {item.optionsAddResult.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                  </td>
                  <td className={`border border-gray-300 p-2`}>
                    <select
                      value={item.isStatus || ""}
                      onChange={(e) => onClickStatus(item.id, e.target.value)}
                    >
                      {onStatus.map((statusItem) => (
                        <option key={statusItem.id} value={statusItem.status}>
                          {statusItem.status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className={`border border-gray-300 p-2`}>
                    <button
                      onClick={() => deleteSolicitation(item.id)}
                      className="bg-red-400 rounded-md p-1 text-white"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Solicitation;
