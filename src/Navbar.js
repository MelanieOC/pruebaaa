import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            change: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (this.props.page - 100 < window.pageYOffset) {
                this.setState({
                    change: true
                })
            } else {
                this.setState({
                    change: false
                });
            }
        })
    }
    render() {
        const { page } = this.props;
        const change = () => {
            this.setState({
                open: !this.state.open
            })
        }
        return (
            <div className='nav2' >
                <nav className={this.state.open ? 'menu-opener active' : this.state.change ? "menu-opener pink" : 'menu-opener'} onClick={change}>
                    <div className={this.state.open ? 'menu-opener-inner active' : "menu-opener-inner"}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                </nav>
                <nav className={this.state.open ? 'menu active' : "menu"} >
                    <ul className="menu-inner">
                        <a href="#" className="menu-link">
                            <li>Conoceme</li>
                        </a>
                        <a href="#" className="menu-link">
                            <li>Mi trabajo</li>
                        </a>
                        <a href="#" className="menu-link">
                            <li>Skills</li>
                        </a>
                        <a href="#" className="menu-link">
                            <li>Proyectos</li>
                        </a>
                        <a href="#" className="menu-link">
                            <li>Contáctame</li>
                        </a>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;