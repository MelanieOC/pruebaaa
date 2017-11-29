import React from 'react';
import './Trabajo.css';

const Chart = ({ title, icon }) => {
    return (
        <div className="rotater">
            <div className="btn btn-icon">
                <i class={"fa fa-" + icon} aria-hidden="true"></i>
            </div>
        </div>
    )
}

const Trabajo = () => {
    const lista = [
        { name: 'Excelencia', icon: 'graduation-cap' },
        { name: 'Trabajo en equipo', icon: 'users' },
        { name: 'Escabilidad', icon: 'line-chart' },
        { name: 'Innovación', icon: 'lightbulb-o' },
        { name: 'Creatividad', icon: 'paint-brush' },
        { name: 'Diseño web', icon: 'laptop' },
        { name: 'Diseño Responsive', icon: 'tablet' },
        { name: 'Búsqueda de información', icon: 'search ' }]
    return (
        <div id='trabajo'>
            <h2>Mi forma de trabajo</h2>
            <div className="menu2 active">
                <div className="btn trigger">
                    <span className="line"></span>
                </div>
                <div className='icons'>
                    {lista.map((tarea, index) => <Chart title={tarea.name} icon={tarea.icon} key={index} />)}
                </div>
            </div>
        </div>
    )
}

export default Trabajo;