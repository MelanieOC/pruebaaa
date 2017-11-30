import React, { Component } from 'react';
import './Navbar2.css';


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
                <div id="toggle" className={this.state.open ? this.state.change ? "pink on" : 'on' : this.state.change ? "pink" : ''} onClick={change}><span></span></div>
                <div id="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;