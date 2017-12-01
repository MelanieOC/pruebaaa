import React from 'react';
import foto from './img/IMG_4168.JPG';
import './Presentacion.css';

const Presentacion = () => {
    return (
        <div id='probando_ando' align='center'>
            <h1 className='text-center' style={{ marginBottom: '100px' }}>¡Hola!</h1>
            <div className='persona' style={{marginBottom: '250px'}}>
                <div className='hexagon_g' align='center'>
                    <div className='hexagon'>
                        <p>Artifice Studios is a boutique web design studio in Santa Clarita, CA. We help clients tell their story and connect with their consumers by combining design, technology, and a splash of ingenuity. We are passionate about brand development and the desire to make the web look a tiny bit better.</p>
                    </div>
                </div>
                <div className='hexagon_g' align='center' style={{position:'relative', bottom:'-150px'}}>
                    <div className='hexagon'>
                        <p>Artifice Studios is a boutique web design studio in Santa Clarita, CA. We help clients tell their story and connect with their consumers by combining design, technology, and a splash of ingenuity. We are passionate about brand development and the desire to make the web look a tiny bit better.</p>
                    </div>
                </div>
                <div className='hexagon_g' align='center'>
                    <div className='hexagon'>
                        <p>Artifice Studios is a boutique web design studio in Santa Clarita, CA. We help clients tell their story and connect with their consumers by combining design, technology, and a splash of ingenuity. We are passionate about brand development and the desire to make the web look a tiny bit better.</p>
                    </div>
                </div>
            </div>
            <div className='persona'>
                <div className='hexagon_g' align='center'>
                    <div className='hexagon'>
                        <p>Artifice Studios is a boutique web design studio in Santa Clarita, CA. We help clients tell their story and connect with their consumers by combining design, technology, and a splash of ingenuity. We are passionate about brand development and the desire to make the web look a tiny bit better.</p>
                    </div>
                </div>
                <div style={{width:'150px'}}></div>
                <div className='hexagon_g' align='center'>
                    <div className='hexagon'>
                        <p>Artifice Studios is a boutique web design studio in Santa Clarita, CA. We help clients tell their story and connect with their consumers by combining design, technology, and a splash of ingenuity. We are passionate about brand development and the desire to make the web look a tiny bit better.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentacion;