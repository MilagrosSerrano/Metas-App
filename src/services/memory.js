import { createContext, useReducer } from "react";

export const Contexto = createContext(null);

const listaMock = [{
    id: '1',
    icon: '🏃🏽‍♂️',
    freq: 'dia',
    cant: 2,
    description: 'Correr 10 kilómetros.',
    completed: 20,
    goal: 365,
    deadLine: '2024-12-31'
},
{
    id: '2',
    icon: '🍽️',
    freq: 'dia',
    cant: 4,
    description: 'Hacer todas las comidas diarias.',
    completed: 0,
    goal: 365,
    deadLine: '2024-12-31'
},
{
    id: '3',
    icon: '📚',
    freq: 'mes',
    cant: 1,
    description: 'Leer libros.',
    completed: 1,
    goal: 12,
    deadLine: '2024-12-31'
},
{
    id: '4',
    icon: '✈️',
    freq: 'año',
    cant: 1,
    description: 'Tomar unas vacaciones.',
    completed: 0,
    goal: 1,
    deadLine: '2024-12-31'
}
];

const initialState= {
    orden: [],
    objetos: {}
}

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
        return nuevoEstado;
        }
      case 'create': {
        const id = Math.random();
        const nuevoEstado = {
          orden: [...estado.orden, id],
          objetos: {
            ...estado.objetos, [id]: accion.meta
          }
        };
        return nuevoEstado;

        }
    }
};

const metas = (reductor(initialState, { type: 'add', meta: listaMock }));

function Memory({ children }) {
    const [state, dispatch] = useReducer(reductor, metas);
    return (
        <Contexto.Provider value={[state, dispatch]}>
            {children}
        </Contexto.Provider>
    );
}

export default Memory;