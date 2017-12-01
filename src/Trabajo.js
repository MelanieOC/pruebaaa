import React, { Component } from 'react';
import './Trabajo.css';
import cinco from './img/5_mejores.png';
import unicornio from './img/unicornio.png';
import rocking from './img/ROCKING.png';
import squad from './img/mejor_squad.png';
import { Tooltip, OverlayTrigger, Row, Col } from 'react-bootstrap';

const Chart = ({ title, icon }) => {
    const tooltip = (
        <Tooltip >{title}</Tooltip>
    );
    return (
        <div className="rotater">
            <div className="btn btn-icon">
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <i class={"fa fa-" + icon} aria-hidden="true"></i>
                </OverlayTrigger>
            </div>
        </div>
    )
}
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    render() {
        const { lista } = this.props;
        const change = () => {
            this.setState({
                open: !this.state.open
            })
        }
        return (
            <div className={this.state.open ? "menu2 active" : "menu2"}>
                <div className="btn trigger" onClick={change}>
                    {
                        this.state.open ?
                            <span className="line">Click</span>
                            :
                            <section>
                                <svg className='pulse-svg' height='58px' version='1.1' viewBox='0 0 58 58' width='58px' xmlns='http://www.w3.org/2000/svg'>
                                    <circle className='circle first-circle' cx='29' cy='29' opacity='0' r='25'></circle>
                                    <circle className='circle second-circle' cx='29' cy='29' opacity='0' r='25'></circle>
                                    <circle className='circle third-circle' cx='29' cy='29' opacity='0' r='25'></circle>
                                    <g>
                                        <circle cx='29' cy='29' r='29'></circle>
                                    </g>
                                </svg>
                            </section>
                    }

                </div>
                <div className='icons'>
                    {lista.map((tarea, index) => <Chart title={tarea.name} icon={tarea.icon} key={index} />)}
                </div>
            </div>
        )
    }
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
        { name: 'Autodidacta', icon: 'search ' }]
    const reconocimientos = [
        { name: 'Top 5', img: cinco },
        { name: 'La más tech', img: unicornio },
        { name: 'Mejor squad', img: squad },
        { name: 'La rompes', img: rocking }
    ]
    /*<div class="grid wow zoomIn">
    <figure class="effect-bubba" data-toggle="modal" data-target="#larepublica">
        <img src="assets/img/proyectos/larepublica.png" alt="img01" />
        <figcaption>
            <h2>La<span>República</span></h2>
        </figcaption>
    </figure>
</div>*/
    return (
        <div id='trabajo'>
            <h1>Mi forma de trabajo</h1>
            <Row>
                {
                    lista.map((item, index) => {
                        return (
                            <Col lg={3} md={3} sm={4} xs={6} key={index}>
                                <div className='cajita'>
                                    <i class={"fa fa-" + item.icon} aria-hidden="true"></i>
                                    <h3>{item.name}</h3>
                                    <div className='caja_trans'>
                                        <span>{item.name}</span>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default Trabajo;