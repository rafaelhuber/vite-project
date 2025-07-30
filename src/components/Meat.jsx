import { useState } from "react";
import Select from "./Select";

function Meat(props) {
  const [roomId, setRoomId] = useState("");

  const typeFood = [
    { id: 1, type: "Maminha" },
    { id: 2, type: "Alcatra" },
    { id: 3, type: "Picanha" },
    { id: 4, type: "Veggie burger" },
  ];

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Escolha a carne do seu Burger:
      </label>
      <Select
        value={roomId}
        checkMap={typeFood}
        submitItem={props.submitItem}
        resetSelect={props.reset}
        RoomId={setRoomId}
      />
    </div>
  );
}

export default Meat;
