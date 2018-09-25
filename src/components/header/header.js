import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-danger">
                    <a class="navbar-brand" href="#">
                        <img src="doclogo.png" width="30" height="30" alt="" />
                    </a>
                    <a class="navbar-brand" href="#" onClick={()=> this.props.setBodyContent("home")}>Doc.lk</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#" onClick={()=> this.props.setBodyContent("home")}>Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={()=> this.props.setBodyContent("ech")}>e-Channeling</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={()=> this.props.setBodyContent("tele")}>Tele Doctor</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={()=> this.props.setBodyContent("med")}>Medicine</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={()=> this.props.setBodyContent("refund")}>Refund Request</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <button className="btn btnreg btn-outline-dark text-white my-2 my-sm-0" type="button" onClick={()=> this.props.setBodyContent("reg")}>Registration</button>
                            <button className="btn btnlogin btn-outline-dark text-white my-2 my-sm-0" type="button">Login</button>
                        </form>
                    </div>
                </nav>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Header;