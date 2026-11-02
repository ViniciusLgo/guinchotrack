import './Paginacao.css';

function Paginacao({ totalPaginas, paginaAtual, onMudarPagina }) {
  const numeros = [];
  for (let i = 1; i <= totalPaginas; i++) {
    numeros.push(i);
  }

  return (
    <nav className="paginacao" aria-label="Paginação da frota">
      <button
        type="button"
        className="paginacao__botao"
        onClick={() => onMudarPagina(paginaAtual - 1)}
        disabled={paginaAtual === 1}
      >
        ‹ Anterior
      </button>

      {numeros.map((numero) => (
        <button
          key={numero}
          type="button"
          className={numero === paginaAtual ? 'paginacao__botao ativo' : 'paginacao__botao'}
          onClick={() => onMudarPagina(numero)}
          aria-current={numero === paginaAtual ? 'page' : undefined}
        >
          {numero}
        </button>
      ))}

      <button
        type="button"
        className="paginacao__botao"
        onClick={() => onMudarPagina(paginaAtual + 1)}
        disabled={paginaAtual === totalPaginas}
      >
        Próxima ›
      </button>
    </nav>
  );
}

export default Paginacao;
