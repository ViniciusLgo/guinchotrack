export const FROTA = [
  { id: 1,  codigo: 'G-01', placa: 'ABC-1D23', motorista: 'Carlos Souza',   status: 'disponivel',  local: 'Camaçari - Centro' },
  { id: 2,  codigo: 'G-02', placa: 'BRA-2E45', motorista: 'Ana Lima',       status: 'atendimento', local: 'BA-099, km 12' },
  { id: 3,  codigo: 'G-03', placa: 'QWE-3F67', motorista: 'João Pedro',     status: 'disponivel',  local: 'Lauro de Freitas' },
  { id: 4,  codigo: 'G-04', placa: 'RTY-4G89', motorista: 'Marcos Silva',   status: 'manutencao',  local: 'Oficina Central' },
  { id: 5,  codigo: 'G-05', placa: 'UIO-5H01', motorista: 'Fernanda Rocha', status: 'atendimento', local: 'Av. Paralela' },
  { id: 6,  codigo: 'G-06', placa: 'PAS-6J23', motorista: 'Rafael Costa',   status: 'disponivel',  local: 'Simões Filho' },
  { id: 7,  codigo: 'G-07', placa: 'DFG-7K45', motorista: 'Juliana Alves',  status: 'disponivel',  local: "Dias d'Ávila" },
  { id: 8,  codigo: 'G-08', placa: 'HJK-8L67', motorista: 'Bruno Santos',   status: 'atendimento', local: 'BR-324, km 5' },
  { id: 9,  codigo: 'G-09', placa: 'ZXC-9M89', motorista: 'Patrícia Melo',  status: 'manutencao',  local: 'Oficina Central' },
  { id: 10, codigo: 'G-10', placa: 'VBN-0N12', motorista: 'Lucas Ferreira', status: 'disponivel',  local: 'Salvador - Pituba' },
  { id: 11, codigo: 'G-11', placa: 'MLK-1P34', motorista: 'Rita Oliveira',  status: 'atendimento', local: 'Estrada do Coco' },
  { id: 12, codigo: 'G-12', placa: 'POI-2Q56', motorista: 'Diego Ramos',    status: 'disponivel',  local: 'Alagoinhas' },
];

export const STATUS = {
  disponivel:  'Disponível',
  atendimento: 'Em atendimento',
  manutencao:  'Manutenção',
};

export const DESTINOS = [
  'Av. Jorge Amado, 120 - Camaçari',
  'BA-093, km 8',
  'Shopping Paralela - Estacionamento',
  'Rua das Flores, 45 - Lauro de Freitas',
  'Posto Ipiranga - BR-324',
];

export const AJUDA = [
  {
    pergunta: 'Como despachar um guincho?',
    resposta: 'Na aba Frota, encontre um guincho com status "Disponível" e clique em "Despachar". Um chamado é criado automaticamente na aba Chamados.',
  },
  {
    pergunta: 'O que significa cada status?',
    resposta: 'Disponível: pronto para atender. Em atendimento: indo até o cliente ou atendendo. Manutenção: na oficina, não pode ser despachado.',
  },
  {
    pergunta: 'Como acompanho o atendimento?',
    resposta: 'Na aba Chamados, a barra de progresso mostra o trajeto do guincho até o cliente. Ao chegar em 100%, o guincho chegou ao local.',
  },
  {
    pergunta: 'Como finalizar um chamado?',
    resposta: 'Quando a barra chegar a 100%, clique em "Finalizar atendimento". O guincho volta automaticamente a ficar disponível.',
  },
  {
    pergunta: 'Posso filtrar os guinchos?',
    resposta: 'Sim. Use o menu "Status" na aba Frota para ver só os disponíveis, em atendimento ou em manutenção.',
  },
];