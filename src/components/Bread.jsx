import { useState } from "react";
import Select from "./Select";

function Bread(props) {
  const [roomId, setRoomId] = useState(""); // começa com valor vazio

  const typeBread = [
    { id: 1, type: "Italiano Branco" },
    { id: 2, type: "3 Queijos" },
    { id: 3, type: "Parmesão e Orégano" },
    { id: 4, type: "Integral" },
  ];

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Escolha o pão do seu Burger:
      </label>
      <Select
        value={roomId}
        checkMap={typeBread}
        submitItem={props.submitItem}
        resetSelect={props.reset}
        RoomId={setRoomId}
      />
    </div>
  );
}

export default Bread;
