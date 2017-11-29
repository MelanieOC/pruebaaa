import React from 'react';
import proyectos from './Proyectos.js';
import './Portfolio.css';

const Cuadro = ({ proyecto }) => {
    return (
        <div className="grid col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <figure>
                <img className='img-responsive' src={proyecto.img} alt={proyecto.name} />
                <figcaption>
                    <span>
                        {proyecto.tool.map(a => <i className={a}></i>)}
                    </span>
                    <span className='buttons'>
                        <a href={proyecto.code} target="_new33">Github</a>
                        <a href={proyecto.demo} target="_new3">Demo</a>
                    </span>
                </figcaption>
            </figure>
        </div>
    );
}
const Portfolio = () => {
    return (
        <div className="container-fluid">
            <h1>Proyectos</h1>
            <div className="row text-center">
                {proyectos.map((a, i) => <Cuadro proyecto={a} key={i} />)}
            </div>
        </div>
    );
}

export default Portfolio;