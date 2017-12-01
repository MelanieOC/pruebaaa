import React from 'react';
import proyectos from './Proyectos.js';
import { Row, Col, Grid, Image } from 'react-bootstrap';
import './Portfolio.css';

const Cuadro = ({ proyecto }) => {
    return (
        <Col lg={6} md={6} xs={12} sm={6} className="grid">
            <figure>
                <Image src={proyecto.img} alt={proyecto.name} responsive />
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
        </Col>
    );
}
const Portfolio = () => {
    return (
        <Grid>
            <h1>Proyectos</h1>
            <Row className="text-center">
                {proyectos.map((a, i) => <Cuadro proyecto={a} key={i} />)}
            </Row>
        </Grid>
    );
}

export default Portfolio;