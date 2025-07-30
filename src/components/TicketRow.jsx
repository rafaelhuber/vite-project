function TicketRow({ item, onStatusChange, onDelete, onStatus }) {
  const classOnStatus = (status) => {
    const found = onStatus.find((t) => t.status === status);
    return found ? found.classStatus : "";
  };

  return (
    <tr className={`gap-2 ${classOnStatus(item.isStatus)}`}>
      <td className="border border-gray-300 p-2">{item.name}</td>
      <td className="border border-gray-300 p-2">{item.addBread}</td>
      <td className="border border-gray-300 p-2">{item.addMeat}</td>
      <td className="border border-gray-300 p-2">
        <ul className="list-disc pl-5">
          {item.optionsAddResult.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </td>

      <td className="border border-gray-300 p-2">
        {typeof onStatusChange === "function" ? (
          <select
            value={item.isStatus || ""}
            onChange={(e) => onStatusChange(item.id, e.target.value)}
            className="border border-gray-300 p-1"
          >
            {onStatus.map((statusItem) => (
              <option key={statusItem.id} value={statusItem.status}>
                {statusItem.status}
              </option>
            ))}
          </select>
        ) : (
          item.isStatus
        )}
      </td>

      {typeof onDelete === "function" ? (
        <td className="border border-gray-300 p-2">
          <button
            onClick={() => onDelete(item.id)}
            className="bg-red-400 rounded-md p-1 text-white"
          >
            Excluir
          </button>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
}

export default TicketRow;
