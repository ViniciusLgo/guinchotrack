import { useState } from 'react';
import './Acordeao.css';


function Acordeao({ itens }) {
  const [aberto, setAberto] = useState(null);

  function alternar(indice) {
    if (aberto === indice) {
      setAberto(null);    
    } else {
      setAberto(indice);
    }
  }

  return (
    <div className="acordeao">
      {itens.map((item, indice) => {
        const estaAberto = aberto === indice;

        return (
          <div
            key={item.pergunta}
            className={estaAberto ? 'acordeao__item aberto' : 'acordeao__item'}
          >
            <h3 className="acordeao__titulo">
              <button
                type="button"
                className="acordeao__botao"
                onClick={() => alternar(indice)}
                aria-expanded={estaAberto}
                aria-controls={`resposta-${indice}`}
              >
                <span>{item.pergunta}</span>
                <span className="acordeao__seta">▾</span>
              </button>
            </h3>

            <div id={`resposta-${indice}`} className="acordeao__painel">
              <div className="acordeao__conteudo">
                <p>{item.resposta}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Acordeao;
