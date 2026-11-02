import { useState, useEffect, useRef } from 'react';
import './MenuSuspenso.css';

function MenuSuspenso({ rotulo, opcoes, valorSelecionado, onSelecionar }) {
  const [aberto, setAberto] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function cliqueFora(evento) {
      if (menuRef.current && !menuRef.current.contains(evento.target)) {
        setAberto(false);
      }
    }

    function teclaEsc(evento) {
      if (evento.key === 'Escape') {
        setAberto(false);
      }
    }

    document.addEventListener('mousedown', cliqueFora);
    document.addEventListener('keydown', teclaEsc);

    return () => {
      document.removeEventListener('mousedown', cliqueFora);
      document.removeEventListener('keydown', teclaEsc);
    };
  }, []);

  const opcaoAtual = opcoes.find((opcao) => opcao.valor === valorSelecionado);

  function escolher(opcao) {
    onSelecionar(opcao.valor);
    setAberto(false);
  }

  return (
    <div className="menu" ref={menuRef}>
      <button
        type="button"
        className="menu__botao"
        onClick={() => setAberto(!aberto)}
        aria-expanded={aberto}
      >
        {rotulo}: <strong>{opcaoAtual.texto}</strong> ▾
      </button>

      {}
      {aberto && (
        <ul className="menu__lista">
          {opcoes.map((opcao) => (
            <li key={opcao.valor}>
              <button
                type="button"
                className="menu__opcao"
                onClick={() => escolher(opcao)}
              >
                {opcao.texto}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MenuSuspenso;
