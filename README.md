# GuinchoTrack
 
Painel de monitoramento de uma frota de guinchos, feito em React para a Atividade React (Prof. Elton Figueiredo).
 
## Como rodar
 
```bash
npm install
npm start
```
 
## Componentes da atividade
 
| Componente | Onde está |
|---|---|
| Menu Suspenso | Filtro de status na aba Frota (`MenuSuspenso.jsx`) |
| Paginação | Lista da frota, 4 por página (`Paginacao.jsx`) |
| Abas | Frota / Chamados / Ajuda (`Abas.jsx`) |
| Barra de Progresso | Trajeto do guincho na aba Chamados (`BarraProgresso.jsx`) |
| Notificação Toast | Despacho, erro e finalização (`Toast.jsx`) |
| Acordeão | Perguntas frequentes na aba Ajuda (`Acordeao.jsx`) |
 
**Desafio extra:** notificações globais com Context API (`context/ToastContext.jsx`).
 
## Conceitos aplicados
 
- Componentes funcionais e props (`GuinchoCard`, `Paginacao`)
- State com `useState` (filtro, página, frota, chamados)
- `useEffect` com limpeza (intervalo dos chamados, ouvintes do menu)
- `useRef` (detectar clique fora do menu)
- Eventos (`onClick`, teclado)
- Responsividade mobile first (1, 2 e 4 colunas)