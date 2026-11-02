import './App.css';
import { FROTA, DESTINOS, AJUDA } from './data/frota';
import GuinchoCard from './components/GuinchoCard';
import MenuSuspenso from './components/MenuSuspenso';
import Paginacao from './components/Paginacao';
import Abas from './components/Abas';
import BarraProgresso from './components/BarraProgresso';
import { useState, useEffect } from 'react';
import { useToast } from './context/ToastContext';
import Acordeao from './components/Acordeao';
import ResumoFrota from './components/ResumoFrota';




const OPCOES_STATUS = [
  { valor: 'todos',       texto: 'Todos' },
  { valor: 'disponivel',  texto: 'Disponível' },
  { valor: 'atendimento', texto: 'Em atendimento' },
  { valor: 'manutencao',  texto: 'Manutenção' },
];

const ITENS_POR_PAGINA = 4;

function App() {
  //  estados do app 
  const [frota, setFrota] = useState(FROTA);
  const [chamados, setChamados] = useState([]);
  const [filtro, setFiltro] = useState('todos');
  const [pagina, setPagina] = useState(1);
  const { mostrarToast } = useToast();


  //  Progresso automático dos chamados 
  useEffect(() => {
    // a cada 1 segundo, aumenta 10% em cada chamado que ainda não chegou
    const intervalo = setInterval(() => {
      setChamados((listaAtual) =>
        listaAtual.map((chamado) => {
          if (chamado.progresso < 100) {
            return { ...chamado, progresso: chamado.progresso + 10 };
          }
          return chamado;
        })
      );
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  //  Filtro 
  let guinchosFiltrados = frota;
  if (filtro !== 'todos') {
    guinchosFiltrados = frota.filter((guincho) => guincho.status === filtro);
  }

  //  Paginação 
  const totalPaginas = Math.ceil(guinchosFiltrados.length / ITENS_POR_PAGINA);
  const inicio = (pagina - 1) * ITENS_POR_PAGINA;
  const fim = pagina * ITENS_POR_PAGINA;
  const guinchosDaPagina = guinchosFiltrados.slice(inicio, fim);

  //  Funções 
  function handleFiltro(novoFiltro) {
    setFiltro(novoFiltro);
    setPagina(1);
  }

  // Muda o status de UM guincho, mantendo os outros iguais
  function mudarStatus(idGuincho, novoStatus) {
    setFrota(
      frota.map((guincho) => {
        if (guincho.id === idGuincho) {
          return { ...guincho, status: novoStatus };
        }
        return guincho;
      })
    );
  }

  function handleDespachar(guincho) {

    if (guincho.status === 'manutencao') {
      mostrarToast(`${guincho.codigo} está em manutenção e não pode ser despachado.`, 'erro');
      return;
    }
    if (guincho.status === 'atendimento') {
      mostrarToast(`${guincho.codigo} já está em um atendimento.`, 'info');
      return;
    }

    const destino = DESTINOS[Math.floor(Math.random() * DESTINOS.length)];

    const novoChamado = {
      id: Date.now(),
      guinchoId: guincho.id,
      codigo: guincho.codigo,
      motorista: guincho.motorista,
      destino: destino,
      progresso: 0,
    };

    setChamados([...chamados, novoChamado]);
    mudarStatus(guincho.id, 'atendimento');
    mostrarToast(`${guincho.codigo} despachado para ${destino}.`, 'sucesso');
  }

  function handleFinalizar(chamado) {
    setChamados(chamados.filter((c) => c.id !== chamado.id));
    mudarStatus(chamado.guinchoId, 'disponivel');
    mostrarToast(`Atendimento do ${chamado.codigo} finalizado. Guincho disponível!`, 'sucesso');

  }

  //  Conteúdo de cada aba 
  const conteudoFrota = (
    <>
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
    </>
  );

  const conteudoChamados = (
    <div>
      <h2>Chamados em andamento ({chamados.length})</h2>

      {chamados.length === 0 && (
        <p className="vazio">Nenhum chamado no momento. Despache um guincho na aba Frota.</p>
      )}

      <div className="lista-chamados">
        {chamados.map((chamado) => (
          <article key={chamado.id} className="chamado">
            <h3>{chamado.codigo} · {chamado.motorista}</h3>
            <p className="chamado__destino">📍 {chamado.destino}</p>

            <BarraProgresso
              valor={chamado.progresso}
              rotulo={chamado.progresso < 100 ? 'A caminho do cliente' : 'Chegou ao local'}
            />

            {chamado.progresso === 100 && (
              <button
                type="button"
                className="botao"
                onClick={() => handleFinalizar(chamado)}
              >
                Finalizar atendimento
              </button>
            )}
          </article>
        ))}
      </div>
    </div>
  );

   const conteudoAjuda = (
    <div>
      <h2>Perguntas frequentes</h2>
      <Acordeao itens={AJUDA} />
    </div>
  );

  const abas = [
    { titulo: 'Frota',    conteudo: conteudoFrota },
    { titulo: 'Chamados', conteudo: conteudoChamados },
    { titulo: 'Ajuda/FAQ',    conteudo: conteudoAjuda },
  ];

  return (
    <div className="app">
      <header className="topo">
        <h1>GuinchoTrack</h1>
        <p>Monitoramento da frota de guinchos</p>
      </header>

      <main className="conteudo">
        <ResumoFrota frota={frota} />
        <Abas abas={abas} />
      </main>

       <footer className="rodape">
        <p>GuinchoTrack  Atividade React </p>
      </footer>
    </div>
  );
}

export default App;
