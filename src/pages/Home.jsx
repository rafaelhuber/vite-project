// components/Layout.jsx
import hambuGG from "../assets/hamburguer_gigante.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    requestAnimationFrame(() => {
      navigate("/register");
    });
  };

  return (
    <div>
      <section className="relative w-full h-screen bg-white">
        {/* Conteúdo principal */}
        <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 gap-8">
          {/* Texto */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Monte o seu hambúrguer como quiser!
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Cansado de pedir sempre a mesma coisa? Aqui, você escolhe cada
              ingrediente do seu lanche, do jeitinho que gosta.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Imagina a melhor carne, o pão que você adora e os complementos dos
              seus sonhos... tudo isso feito por você!
            </p>
            <p className="text-gray-800 font-semibold mt-6">
              <samp>Combine.</samp> <samp>Saboreie. </samp>
              <samp>Seja o chef do seu próprio burger!</samp>
            </p>
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold mb-6">
                Monte o seu hambúrguer como quiser!
              </h2>
              <button
                onClick={handleNavigate}
                className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-300"
              >
                Monte o Seu Burger
              </button>
            </div>
          </div>

          {/* Imagem do hambúrguer gigante */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={hambuGG}
              alt="Hambúrguer gigante"
              className="max-w-md w-full drop-shadow-2xl rounded-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
