import { useState, useEffect } from "react";
import TicketTable from "../components/TicketTable";
import { getTicketsWithStatus } from "../services/storage";

function OrderQueue() {
  const [tickets, setTickets] = useState(getTicketsWithStatus());

  const onClickStatus = 0;
  const deleteSolicitation = 0;
  const onStatus = [
    { id: 1, status: "Aguardando", classStatus: "bg-gray-300" },
    { id: 2, status: "Em Produção", classStatus: "bg-blue-200" },
    { id: 3, status: "Concluido", classStatus: "bg-green-200" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setTickets(getTicketsWithStatus());
    }, 1000);
  });

  return (
    <div className="flex justify-center">
      <div className="p-6 space-y-4">
        <p className="px-4 py-2 text-4xl font-bold text-amber-500 text-center underline underline-offset-8">
          Lista de Pedidos
        </p>

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

export default OrderQueue;
