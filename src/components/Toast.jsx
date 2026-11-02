import './Toast.css';

const ICONES = { sucesso: 'V', erro: 'X', info: 'i' };
const TITULOS = { sucesso: 'Sucesso', erro: 'Erro', info: 'Aviso' };

function Toast({ mensagem, tipo, onFechar }) {
  return (
    <div className={`toast toast--${tipo}`} role="status">
      <span className="toast__icone">{ICONES[tipo]}</span>

      <div className="toast__texto">
        <strong>{TITULOS[tipo]}</strong>
        <p>{mensagem}</p>
      </div>

      <button
        type="button"
        className="toast__fechar"
        onClick={onFechar}
        aria-label="Fechar notificação"
      >
        ×
      </button>
    </div>
  );
}

export default Toast;
