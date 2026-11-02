import './App.css';
import { FROTA } from './data/frota';

function App() {
  return (
    <div className="app">
      <header className="topo">
        <h1>GuinchoTrack</h1>
        <p>Monitoramento da frota de guinchos</p>
      </header>
 
      <main className="conteudo">
        <h2>Frota ({FROTA.length} guinchos)</h2>
 
        <ul className="lista-frota">
          {FROTA.map((guincho) => (
            <li key={guincho.id}>
              <strong>{guincho.codigo}</strong> · {guincho.placa} · {guincho.motorista} · {guincho.status}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
export default App;