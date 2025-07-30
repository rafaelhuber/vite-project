// OptionsAdd.js
import { useState, useEffect } from "react";

function OptionsAdd(props) {
  const [roomId, setRoomId] = useState([]);

  useEffect(() => {
    if (roomId !== null) {
      props.submitItem(roomId);
    }
  }, [roomId]);

  useEffect(() => {
    setRoomId([]);
  }, [props.reset]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setRoomId([...roomId, value]);
    } else {
      setRoomId(roomId.filter((v) => v !== value));
    }
  };

  const burgerAddOns = [
    { id: 1, title: "Bacon" },
    { id: 2, title: "Cheddar" },
    { id: 3, title: "Salame" },
    { id: 4, title: "Tomate" },
    { id: 5, title: "Cebola roxa" },
    { id: 6, title: "Pepino" },
  ];

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Escolha os adicionais do seu Burger:
      </label>

      <div>
        {burgerAddOns.map((todo) => (
          <div key={todo.id}>
            <label className="block text-gray-700 text-ml mb-2">
              <input
                className="mx-2"
                type="checkbox"
                value={todo.title}
                checked={roomId.includes(todo.title)}
                onChange={handleChange}
              />
              {todo.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OptionsAdd;
