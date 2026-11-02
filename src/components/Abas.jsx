import { useState } from 'react';
import './Abas.css';


function Abas({ abas }) {
  // guarda o ÍNDICE da aba ativa 0 = (1) primeira
  const [abaAtiva, setAbaAtiva] = useState(0);

  return (
    <div className="abas">
      {}
      <div className="abas__lista" role="tablist">
        {abas.map((aba, indice) => (
          <button
            key={aba.titulo}
            type="button"
            role="tab"
            aria-selected={indice === abaAtiva}
            className={indice === abaAtiva ? 'abas__titulo ativa' : 'abas__titulo'}
            onClick={() => setAbaAtiva(indice)}
          >
            {aba.titulo}
          </button>
        ))}
      </div>

      {}
      <div className="abas__painel" role="tabpanel">
        {abas[abaAtiva].conteudo}
      </div>
    </div>
  );
}

export default Abas;
