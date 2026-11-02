import { useState } from 'react';
import './App.css';
import { FROTA } from './data/frota';
import GuinchoCard from './components/GuinchoCard';
import MenuSuspenso from './components/MenuSuspenso';
import Paginacao from './components/Paginacao';

// opções do filtro
const OPCOES_STATUS = [
  { valor: 'todos',       texto: 'Todos' },
  { valor: 'disponivel',  texto: 'Disponível' },
  { valor: 'atendimento', texto: 'Em atendimento' },
  { valor: 'manutencao',  texto: 'Manutenção' },
];

const ITENS_POR_PAGINA = 4;

function App() {
  // state do filtro:fica no App porque é ele que filtra a lista
  const [filtro, setFiltro] = useState('todos');
  const [pagina, setPagina] = useState(1);

  // Se o filtro for "todos", mostra tudo. Se não, só os do status escolhido.
  let guinchosFiltrados = FROTA;
  if (filtro !== 'todos') {
    guinchosFiltrados = FROTA.filter((guincho) => guincho.status === filtro);
  }

  const totalPaginas = Math.ceil(guinchosFiltrados.length / ITENS_POR_PAGINA);

  const inicio = (pagina - 1) * ITENS_POR_PAGINA;
  const fim = pagina * ITENS_POR_PAGINA;
  const guinchosDaPagina = guinchosFiltrados.slice(inicio, fim);

  function handleFiltro(novoFiltro) {
    setFiltro(novoFiltro);
    setPagina(1);
  }

  function handleDespachar(guincho) {
    alert(`Despachando ${guincho.codigo} — motorista ${guincho.motorista}`);
  }

  return (
    <div className="app">
      <header className="topo">
        <h1>GuinchoTrack</h1>
        <p>Monitoramento da frota de guinchos</p>
      </header>

      <main className="conteudo">
        <div className="barra-frota">
          <h2>Frota ({guinchosFiltrados.length} guinchos)</h2>
          <MenuSuspenso
            rotulo="Status"
            opcoes={OPCOES_STATUS}
            valorSelecionado={filtro}
            onSelecionar={handleFiltro}
          />
        </div>

        <div className="grade-frota">
          {guinchosDaPagina.map((guincho) => (
            <GuinchoCard
              key={guincho.id}
              guincho={guincho}
              onDespachar={handleDespachar}
            />
          ))}
        </div>

        <Paginacao
          totalPaginas={totalPaginas}
          paginaAtual={pagina}
          onMudarPagina={setPagina}
        />
      </main>
    </div>
  );
}

export default App;
