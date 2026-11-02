import './BarraProgresso.css';


function BarraProgresso({ valor, rotulo }) {
  return (
    <div className="barra">
      <div className="barra__topo">
        <span>{rotulo}</span>
        <strong>{valor}%</strong>
      </div>

      <div
        className="barra__trilho"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={valor}
        aria-label={rotulo}
      >
        {}
        <div
          className={valor === 100 ? 'barra__preenchimento completo' : 'barra__preenchimento'}
          style={{ width: `${valor}%` }}
        />
      </div>
    </div>
  );
}

export default BarraProgresso;
