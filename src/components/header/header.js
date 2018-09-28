import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.setLoginButtonValue = this.setLoginButtonValue.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            loginbtnvalue : "Login"
        }
    }

    setLoginButtonValue(status){
        this.setState({loginbtnvalue: status});
    }

    login(){
        alert('Registration Succesfull !');
        this.setLoginButtonValue("Logout");
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
                            <button className="btn btnlogin btn-outline-success text-white my-2 my-sm-0" data-toggle="modal" data-target="#loginModal" type="button">{this.state.loginbtnvalue}</button>
                        </form>
                    </div>
                </nav>
                <br/>
                <br/>
                <br/>
                <div class="modal fade" id="loginModal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div className="modal-header bg-danger text-white">
                    <h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-user-plus"></i>Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <form >
                    <div class="form-group row col-md-12 col-sm-11 col-lg-10">
                    <input type="email" className="form-control" id="email" placeholder="Email" required></input>
                </div>
                <div class="form-group row col-md-12 col-sm-11 col-lg-10">
                    <input type="password" id="defaultFormRegisterPasswrdEx" placeholder="Password" className="form-control w-100" required   />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-danger" data-dismiss="modal" onClick={this.login}>Login</button>
                </div>
                </form>
                </div>


                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Header;