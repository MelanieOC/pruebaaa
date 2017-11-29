import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="titleContact">Contáctame</div>
            <section className="container redes-sociales">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <a className="enlace" href="tel:987880986">
                            <i className="icon fa fa-phone-square"></i>
                            <div className="datos">+51 987880986</div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <a className="enlace" href="mailto:melanie.ocharan@gmail.com" >
                            <i className="icon fa fa-envelope-square"></i>
                            <div className="datos">melanie.ocharan@gmail.com</div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <a className="enlace" href="https://github.com/melanieoc"  target="_blank">
                            <i className="icon fa fa-git-square" ></i>
                            <div className="datos">MelanieOC</div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <a className="enlace" href="https://linkedin.com/in/melanie-ocharan"  target="_blank">
                            <i className="icon fa fa-linkedin-square" ></i>
                            <div className="datos">Melanie Ocharan</div>
                        </a>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default Contact;