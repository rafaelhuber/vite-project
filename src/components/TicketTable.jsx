import TicketRow from "./TicketRow";

function TicketTable({ tickets, onStatusChange, onDelete, onStatus }) {
  const ClassNameTitle =
    "border bg-amber-300 border-gray-300 p-2 dark:border-gray-700";

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full table-fixed border-separate border border-gray-400 border-spacing-2">
        <thead>
          <tr>
            <th className={ClassNameTitle}>Nome</th>
            <th className={ClassNameTitle}>Tipo do pão</th>
            <th className={ClassNameTitle}>Tipo da Carne</th>
            <th className={ClassNameTitle}>Adicionais</th>
            <th className={ClassNameTitle}>Situação</th>
            {typeof onStatusChange === "function" ? (
              <th className={ClassNameTitle}>Excluir</th>
            ) : (
              ""
            )}
          </tr>
        </thead>
        <tbody>
          {tickets.map((item, index) => (
            <TicketRow
              key={item.id || index}
              item={item}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
              onStatus={onStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketTable;
