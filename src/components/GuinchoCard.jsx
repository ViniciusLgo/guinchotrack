import './GuinchoCard.css';
import { STATUS } from '../data/frota';

function GuinchoCard({ guincho, onDespachar }) {
  const disponivel = guincho.status === 'disponivel';
 
  return (
    <article className="guincho-card">
      <div className="guincho-card__topo">
        <h3>{guincho.codigo}</h3>
        <span className={`status status--${guincho.status}`}>
          {STATUS[guincho.status]}
        </span>
      </div>
 
      <dl className="guincho-card__dados">
        <div><dt>Placa</dt><dd>{guincho.placa}</dd></div>
        <div><dt>Motorista</dt><dd>{guincho.motorista}</dd></div>
        <div><dt>Local</dt><dd>{guincho.local}</dd></div>
      </dl>
 
      <button
        type="button"
        className="botao"
        onClick={() => onDespachar(guincho)}
        disabled={!disponivel}
      >
        {disponivel ? 'Despachar' : 'Indisponível'}
      </button>
    </article>
  );
}
 
export default GuinchoCard;