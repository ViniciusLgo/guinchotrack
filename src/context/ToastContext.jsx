import { createContext, useContext, useState } from 'react';
import Toast from '../components/Toast';

const ToastContext = createContext();

let proximoId = 1;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function removerToast(id) {
    setToasts((listaAtual) => listaAtual.filter((t) => t.id !== id));
  }

  function mostrarToast(mensagem, tipo = 'info') {
    const id = proximoId;
    proximoId = proximoId + 1;

    setToasts((listaAtual) => [...listaAtual, { id, mensagem, tipo }]);

    setTimeout(() => removerToast(id), 4000);
  }

  return (
    <ToastContext.Provider value={{ mostrarToast }}>
      {children}

      {}
      <div className="toasts" aria-live="polite">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            mensagem={t.mensagem}
            tipo={t.tipo}
            onFechar={() => removerToast(t.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
