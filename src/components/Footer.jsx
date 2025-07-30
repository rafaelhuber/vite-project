import gitHub from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <footer className="bg-amber-500 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Nome ou Marca */}
        <div className="text-sm font-semibold">
          © {new Date().getFullYear()} Rafael Huber. Todos os direitos
          reservados.
        </div>

        {/* Ícones de redes sociais */}
        <div className="flex gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={linkedin} // ou use um ícone externo
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={gitHub} alt="GitHub" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
