import { useEffect } from "react";
function Select({ value, checkMap, submitItem, resetSelect, RoomId }) {
  useEffect(() => {
    if (value !== "") {
      submitItem(value);
    }
  });
  useEffect(() => {
    RoomId("");
  }, [resetSelect]);

  function onClick(e) {
    RoomId(e.target.value);
  }

  return (
    <div>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={onClick}
      >
        <option value="" disabled hidden>
          Selecione...
        </option>
        {checkMap.map((item) => (
          <option key={item.id} value={item.type}>
            {item.type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
