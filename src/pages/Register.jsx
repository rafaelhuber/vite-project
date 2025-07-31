import { useState } from "react";

import Bread from "../components/Bread";
import Meat from "../components/Meat";
import OptionsAdd from "../components/OptionsAdd";

import ButtonEnviar from "../components/ButtonEnviar";
import Title from "../components/Title";

function Register() {
  const [addBread, setaddBread] = useState([]);
  const [addMeat, setaddMeat] = useState([]);
  const [optionsAddResult, setoptionsAddResult] = useState([]);
  const [name, setname] = useState("");
  const [resetTrigger, setResetTrigger] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="relative top-[-100px] w-[600px] p-6 space-y-4 bg-white rounded-2xl">
        <Title>Cadastre o Pedido</Title>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nome do cliente:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Digite o nome do cliente"
          value={name}
          onChange={(event) => setname(event.target.value)}
        />

        <Bread submitItem={setaddBread} reset={resetTrigger} />
        <Meat submitItem={setaddMeat} reset={resetTrigger} />
        <OptionsAdd submitItem={setoptionsAddResult} reset={resetTrigger} />

        <ButtonEnviar
          addBread={addBread}
          setaddBread={setaddBread}
          addMeat={addMeat}
          setaddMeat={setaddMeat}
          optionsAddResult={optionsAddResult}
          setoptionsAddResult={setoptionsAddResult}
          name={name}
          setname={setname}
          resetTrigger={resetTrigger}
          setResetTrigger={setResetTrigger}
        />
      </div>
    </div>
  );
}

export default Register;
