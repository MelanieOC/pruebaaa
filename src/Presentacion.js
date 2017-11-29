import React from 'react';
import foto from './img/IMG_4168.JPG';
import './Presentacion.css';

const Presentacion = () => {
    return (
        <div>
            <h1 className='text-center' style={{marginBottom:'50px'}}>Hola</h1>
            <div id='aboutme'>
                <span className='description'>
                    <p> Soy una persona que le gusta el aprendizaje continuo y  enfrentar  nuevos desafíos. Entré al mundo de la programación ya que cada día hay algo nuevo que aprender.  
                    Creo en el empoderamiento de la mujer y la gran oportunidad que tiene en el mundo de la tecnología. Mi aspiración profesional es llegar a ser Full Stack. </p>
                </span>
                <span className='foto'>
                    <img src={foto} className='img-responsive' />
                </span>
            </div>
        </div>
    )
}

export default Presentacion;