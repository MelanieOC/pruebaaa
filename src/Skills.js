import React from 'react';
import './Skills.css';
import './probando.css';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
//https://codepen.io/joshuarule/pen/bIkHL?page=5

const Porcent = ({ percent, icon, brand }) => {
    const tooltip = (
        <Tooltip >{'Dominado al ' + percent + '%'}</Tooltip>
    );
    return (
        <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div className={'upload-progress per' + percent} style={{ margin: '10px 0' }}>
                <span className='progress-val'>
                    <i className={brand ? "devicon-" + icon + "-wordmark" : "devicon-" + icon}></i>
                </span>
                <div className='pie'>
                    <div className='first'></div>
                    <div className='last'></div>
                </div>
            </div>
        </OverlayTrigger>

    )
}
const Skills = () => {
    return (
        <div className='skills' align='center'>
            <div>
                <h2>Tres poderosas herramientas</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <Porcent percent={70} icon={'css3-plain'} brand />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <Porcent percent={70} icon={'html5-plain'} brand />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <Porcent percent={75} icon={'javascript-plain'} />
                    </div>
                </div>
            </div>
            <div>
                <h2>Frameworks y librerías</h2>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <Porcent percent={80} icon={'jquery-plain'} brand />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <Porcent percent={80} icon={'bootstrap-plain'} brand />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <Porcent percent={70} icon={'react-original'} brand />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <Porcent percent={40} icon={'sass-original'} />
                    </div>
                </div>
            </div>
            <div>
                <h2>Herramientas de trabajo</h2>
                <div className="row tools">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <i className="devicon-git-plain-wordmark"></i>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <i className="devicon-slack-plain-wordmark"></i>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <i className="devicon-trello-plain-wordmark"></i>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <i className="devicon-nodejs-plain-wordmark"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;