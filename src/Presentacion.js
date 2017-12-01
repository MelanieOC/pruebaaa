import React from 'react';
import foto from './img/IMG_4168.JPG';
import './Presentacion.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const Presentacion = () => {
    return (
        <div align='center'>
            <h1>¡Hola!</h1>
            <div className='description'>
                <Row className="text-center">
                    <Col lg={8} md={8} xs={12} sm={6}>
                        <p>Soy una persona que le gusta el aprendizaje continuo y  enfrentar  nuevos desafíos. Entré al mundo de la programación ya que cada día hay algo nuevo que aprender.
Creo en el empoderamiento de la mujer y la gran oportunidad que tiene en el mundo de la tecnología. Mi aspiración profesional </p>

                    </Col>
                    <Col lg={4} md={4} xs={12} sm={6}>
                        <Image src={foto} responsive style={{ transform: 'rotate(5deg)' }} />
                    </Col>
                </Row>

            </div>
        </div>

    )
}

export default Presentacion;