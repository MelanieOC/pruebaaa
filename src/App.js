import React from 'react';
import './App.css';
import Contact from './Contact';
import Skills from './Skills.js';
import Portfolio from './Portfolio';
import Presentacion from './Presentacion';
import Navbar from './Navbar';
import Trabajo from './Trabajo';
import MediaQuery from 'react-responsive';

const Example = () => (
  <div>
    <div>Device Test!</div>
    <MediaQuery query="(min-device-width: 1224px)">
      <div>You are a desktop or laptop</div>
      <MediaQuery query="(min-device-width: 1824px)">
        <div>You also have a huge screen</div>
      </MediaQuery>
      <MediaQuery query="(max-width: 1224px)">
        <div>You are sized like a tablet or mobile phone though</div>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <div>You are a tablet or mobile phone</div>
    </MediaQuery>
    <MediaQuery query="(orientation: portrait)">
      <div>You are portrait</div>
    </MediaQuery>
    <MediaQuery query="(orientation: landscape)">
      <div>You are landscape</div>
    </MediaQuery>
    <MediaQuery query="(min-resolution: 2dppx)">
      <div>You are retina</div>
    </MediaQuery>
  </div>
);

const Angle = ({ direccion }) => {
  const mesures = { top_left: '0, 200 0, 0 200, 0', bottom_left: '200, 200 0, 200 0, 0', bottom_right: '200, 0 200, 200 0, 200', top_right: '0, 0 200, 0 200, 200'}
  return (
    <div className={'angle_' + direccion}>
      <svg viewBox='0 0 200 200' preserveAspectRatio='none'>
        <polygon points={mesures[direccion]}></polygon>
      </svg>
    </div>
  );
}
//<Navbar2 page={altura} />
const App = () => {
  const altura = window.screen.height - 290;
  return (
    <div>
      <MediaQuery query="(min-device-width: 1224px)">
        <Navbar page={altura} />
        <MediaQuery query="(min-device-width: 1824px)">
          <Navbar page={altura} />
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query="(orientation: portrait)">
        <Navbar page={altura} />
      </MediaQuery>
      <section className='outer-container' id='intro' >
        <div className='color-wrapper'>
          <div className='inner-container' style={{ height: altura }} ref={(div) => { this.div = div }}>
            <div className='name reverso'>
              <h1>MELANIE </h1>
              <h1 style={{fontSize:'2em'}}>OCHARAN</h1>
              <p>Front-end Developer Jr.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='outer-container' id='portfolio'>
        <Angle direccion='top_right' />
        <div className='inner-container'>
          <Presentacion />
        </div>
        <Angle direccion='bottom_right' />
      </section>
      <section className='outer-container' id='about'>
        <div className='color-wrapper'>
          <div className='inner-container'>
            <Trabajo />
          </div>
          <Angle direccion='bottom_left' />
        </div>
      </section>
      <section className='outer-container' id='stats'>
        <div className='inner-container'>
          <Skills />
        </div>
        <Angle direccion='bottom_right' />
      </section>
      <section className='outer-container' id='twitter'>
        <div className='inner-container'>
          <Portfolio />
        </div>
      </section>
      <section id='contact'>
        <Angle direccion='top_left' />
        <div className='inner-container'>
          <Contact />
        </div>
      </section>
    </div>
  );
}



export default App;
