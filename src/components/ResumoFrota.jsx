import './ResumoFrota.css';

function ResumoFrota({ frota }) {
  const disponiveis = frota.filter((g) => g.status === 'disponivel').length;
  const emAtendimento = frota.filter((g) => g.status === 'atendimento').length;
  const emManutencao = frota.filter((g) => g.status === 'manutencao').length;

  return (
    <section className="resumo" aria-label="Resumo da frota">
      <div className="resumo__item resumo__item--disponivel">
        <strong>{disponiveis}</strong>
        <span>Disponíveis</span>
      </div>
      <div className="resumo__item resumo__item--atendimento">
        <strong>{emAtendimento}</strong>
        <span>Em atendimento</span>
      </div>
      <div className="resumo__item resumo__item--manutencao">
        <strong>{emManutencao}</strong>
        <span>Manutenção</span>
      </div>
    </section>
  );
}

export default ResumoFrota;
