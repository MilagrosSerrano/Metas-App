import Goal from './goal';
import Emoji from '../shared/emoji';


const listaMock = [{
    id: '1',
    icon: <Emoji symbol='🏃🏽‍♂️'></Emoji>,
    freq: 'dia',
    cant: 2,
    description: 'Correr 10 kilómetros.',
    completed: 20,
    goal: 365,
    deadLine: '2024-12-31'
},
{
    id: '2',
    icon: <Emoji symbol='🍽️'></Emoji>,
    freq: 'dia',
    cant: 4,
    description: 'Hacer todas las comidas diarias.',
    completed: 0,
    goal: 365,
    deadLine: '2024-12-31'
},
{
    id: '3',
    icon: <Emoji symbol='📚'></Emoji>,
    freq: 'mes',
    cant: 1,
    description: 'Leer libros.',
    completed: 1,
    goal: 12,
    deadLine: '2024-12-31'
},
{
    id: '4',
    icon: <Emoji symbol='✈️'></Emoji>,
    freq: 'año',
    cant: 1,
    description: 'Tomar unas vacaciones.',
    completed: 0,
    goal: 1,
    deadLine: '2024-12-31'
}
];
 
function List(){
    return(
        listaMock.map(meta => <Goal {...meta} key={meta.id}></Goal>)
    )
}

export default List;