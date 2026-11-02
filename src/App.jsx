import './App.css';
import { FROTA } from './data/frota';
import GuinchoCard from './components/GuinchoCard';


function App() {

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
        <h2>Frota ({FROTA.length} guinchos)</h2>

        <div className="grade-frota">
          {FROTA.map((guincho) => (
            <GuinchoCard
              key={guincho.id}
              guincho={guincho}
              onDespachar={handleDespachar}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
export default App;