import { useState } from "react";

import Bread from "../components/Bread";
import Meat from "../components/Meat";
import OptionsAdd from "../components/OptionsAdd";

import ButtonEnviar from "../components/ButtonEnviar";

function Register() {
  const [addBread, setaddBread] = useState([]);
  const [addMeat, setaddMeat] = useState([]);
  const [optionsAddResult, setoptionsAddResult] = useState([]);
  const [name, setname] = useState("");
  const [resetTrigger, setResetTrigger] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="relative top-[-100px] w-[600px] p-6 space-y-4 bg-white rounded-2xl">
        <p className="px-4 py-2 text-4xl font-bold text-amber-500 text-center underline underline-offset-8">
          Cadastre o Pedido
        </p>

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
