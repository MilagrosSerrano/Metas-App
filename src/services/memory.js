import { createContext, useReducer } from "react";

export const Contexto = createContext(null);

const memory = localStorage.getItem('goals');

const initialState = memory
  ? JSON.parse(memory)
  : {
    orden: [],
    objetos: {}
  };

function reductor(estado, accion) {
    switch (accion.type) {
      case 'add': {
        const metas = accion.meta;
        const nuevoEstado = {
          orden: metas.map((meta) => meta.id),
          objetos: metas.reduce(
            (objeto, meta) => ({ ...objeto, [meta.id]: meta }),
            {}
          ),
        };
        localStorage.setItem('goals', JSON.stringify(nuevoEstado));
        return nuevoEstado;
      }
      case 'create': {
        const id = estado.orden.length+1;
        const nuevoEstado = {
          orden: [...estado.orden, JSON.stringify(id)],
          objetos: {
            ...estado.objetos, [id]: {...accion.meta , id: JSON.stringify(id)}
          }
        };
        localStorage.setItem('goals', JSON.stringify(nuevoEstado));
        return nuevoEstado;

      }
      case 'update': {
        const id = accion.meta.id;
        estado.objetos[id] = {
          ...estado.objetos[id],
          ...accion.meta
        };
        const nuevoEstado = {...estado};
        localStorage.setItem('goals', JSON.stringify(nuevoEstado));
        return nuevoEstado;

      }
      case 'deleted': {
        const id = accion.id;
        const newStates = {...estado.objetos};
        delete newStates[id];
        const newOrden = estado.orden.filter((item) => ((item) !== (id)));
        const nuevoEstado = {
          orden: newOrden,
          objetos: newStates,
        };
        localStorage.setItem('goals', JSON.stringify(nuevoEstado));
        return nuevoEstado;
      }
    }
};


function Memory({ children }) {
    const [state, dispatch] = useReducer(reductor, initialState);
    return (
        <Contexto.Provider value={[state, dispatch]}>
            {children}
        </Contexto.Provider>
    );
}

export default Memory;