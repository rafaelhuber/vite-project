import { useState, useEffect } from "react";
import Alert from "../components/Alert";
import TicketTable from "../components/TicketTable";
import { getTicketsWithStatus, saveTickets } from "../services/storage";
import Title from "../components/Title";

function Orders() {
  const [messageKey, setMessageKey] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [tickets, setTickets] = useState(getTicketsWithStatus());

  const onStatus = [
    { id: 1, status: "Aguardando", classStatus: "bg-gray-300" },
    { id: 2, status: "Em Produção", classStatus: "bg-blue-200" },
    { id: 3, status: "Concluido", classStatus: "bg-green-200" },
  ];

  const onClickStatus = (id, newStatus) => {
    const updated = tickets.map((ticket) =>
      ticket.id === id ? { ...ticket, isStatus: newStatus } : ticket
    );
    setTickets(updated);
  };

  const deleteSolicitation = (id) => {
    const updatedTickets = tickets.filter((v) => v.id !== id);
    setTickets(updatedTickets);
    setMessageKey((prev) => prev + 1);
    setShowMessage(true);
  };

  useEffect(() => {
    saveTickets(tickets);
  }, [tickets]);

  return (
    <div className="flex justify-center">
      <div className="p-6 space-y-4">
        {showMessage && (
          <Alert
            key={messageKey}
            onClose={() => setShowMessage(false)}
            className={"red"}
          >
            O Pedido foi removido com sucesso.
          </Alert>
        )}

        <Title>Lista de Pedidos</Title>

        <TicketTable
          tickets={tickets}
          onStatusChange={onClickStatus}
          onDelete={deleteSolicitation}
          onStatus={onStatus}
        />
      </div>
    </div>
  );
}

export default Orders;
