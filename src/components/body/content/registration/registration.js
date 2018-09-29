import React, { Component } from 'react';
import swal from 'sweetalert';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.setSelectedValue=this.setSelectedValue.bind(this);
        this.state = {
            selectedValue: 'yes',
        };
    }

    setSelectedValue(e){
        console.log(e.target.value);
        this.setState({selectedValue:e.target.value});
    }

    render() {

        let nicpassport;

        if(this.state.selectedValue==="yes"){
            nicpassport = (
                <div className="form-group">
                    <label id="label">NIC Number*</label>
                    <input type="text" className="form-control" id="nic" placeholder="E.g.123456789V" ></input>
                </div>
            );
        }
        else if(this.state.selectedValue==="no"){
            nicpassport = (
                <div className="form-group">
                    <label id="label">Passport Number*</label>
                    <input type="text" className="form-control" id="nic" placeholder="E.g.741258963" ></input>
                </div>
            );
        }

        return (
            <div className="content">
                <div className="content card text-left " >
                    <div className="card body">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="content card border-danger">

                                    <div className="card-header bg-danger text-white">
                                        <h4 className="heading "><i class="fas fa-user-plus"></i> Welcome, Please Sign Up</h4>
                                    </div>
                                    <div className="card-body">
                                       {/* <form>*/}
                                            <div className="row">
                                                <div className="offset-sm-1 col-sm-12 col-md-12 col-lg-5 ">

                                                    <div className="row">
                                                        <div className="col-sm-3 col-md-3 col-lg-4">
                                                            <div className="form-group">
                                                                <label id="label" >Title*</label>
                                                                <select class="form-control health-login-input health-common-select-menu ea-triggers-bound valid" required data-val="true" data-val-required="Select a title" id="TitleStatus" name="TitleStatus" tabindex="1"><option value="">Select</option>
                                                                    <option value="Mr.">Mr.</option>
                                                                    <option value="Mrs.">Mrs.</option>
                                                                    <option value="Miss.">Miss.</option>
                                                                    <option value="Rev.">Rev.</option>
                                                                    <option value="Ms.">Ms.</option>
                                                                    <option value="Dr.">Dr.</option>
                                                                    <option value="Prof.">Prof.</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-10 col-md-6 col-lg-8">
                                                            <div className="form-group">
                                                                <label id="label" >Full Name*</label>
                                                                <input type="text" className="form-control" id="fullName" placeholder="E.g.John" required></input>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-5 col-sm-6 col-lg-8">
                                                            <div className="form-group">
                                                                <label id="label">Are You Sri Lankan Citizen?*</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-3 col-lg-3">
                                                            <div className="form-group">
                                                                <select class="form-control health-login-input health-common-select-menu ea-triggers-bound valid" onChange={this.setSelectedValue} id="getSelected">
                                                                    <option id="value1" value="yes" selected="selected" onChange={this.state}>Yes</option>
                                                                    <option id="value2" value="no">No</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-9 col-sm-10 col-lg-12">
                                                            {nicpassport}
                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-9 col-sm-10 col-lg-12">
                                                            <div className="form-group">
                                                                <label id="label">Email Address*</label>
                                                                <input type="email" className="form-control" id="email1" placeholder="E.g.youremail@doc.lk" ></input>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-9 col-sm-10 col-lg-12">
                                                            <div className="form-group">
                                                                <label id="label">Mobile Phone Number*</label>
                                                                <input type="number" className="form-control" id="mobile" placeholder="E.g.0711111111" ></input>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>

                                                <div className="offset-sm-1 col-sm-11 col-md-9 col-lg-4">

                                                    <div class="form-group row" >
                                                        <div className="col-md-12 col-sm-11 col-lg-10">
                                                            <label className="grey-text">Password*</label>
                                                            <input type="password" id="pwd" placeholder="Type Here" className="form-control w-100"    />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <div className="col-md-12 col-sm-11 col-lg-10 ">
                                                            <label className="grey-text">Confirm Password*</label>
                                                            <input type="password" id="defaultFormRegisterPasswrdConEx" placeholder="Type Here" className="form-control w-100" /><br />
                                                        </div>
                                                    </div>

                                                    <div class="g-recaptcha offset-sm-0 col-md-5 col-sm-9 col-lg-8" data-sitekey="6LeDy3EUAAAAAIADiUc33szJpcPQ6aT1mj6le3QZ"></div>
                                                    <br/>
                                                    <p class="health-terms-condition offset-sm-0 col-lg-11 col-sm-12 col-md-12">By clicking "Register", I agree to the
                                                        <a href="/Content/TermsOfService" target="_blank">Terms of Service</a> /
                                                        <a href="/Content/PrivacyPolicy" target="_blank"> Privacy Policy</a>
                                                    </p>

                                                    <div class="form-group row">
                                                        <div class="offset-sm-0 col-sm-8 col-md-9 col-lg-11 pb-3 pt-2">
                                                            <button onClick={this.reg} class="btn btn-outline-primary btn-block" >Register</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        {/*</form>*/}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    reg(){
        var tit = document.getElementById('TitleStatus').value;
        var name = document.getElementById('fullName').value;
        var cpw = document.getElementById('defaultFormRegisterPasswrdConEx').value;
        var email = document.getElementById('email1').value;
        var mob = document.getElementById('mobile').value;
        var pw = document.getElementById('pwd').value;
        if(tit!="" && name!="" && cpw!="" && mob!="" && pw!="" && email!=""){
            swal({
                title: "Congrats!",
                text: "Your Account is created",
                icon: "success",
                confirmButtonText: "ok"
            });
            document.getElementById('fullName').value="";
            document.getElementById('defaultFormRegisterPasswrdConEx').value="";
            document.getElementById('email1').value="";
            document.getElementById('mobile').value="";
            document.getElementById('pwd').value="";

        }else {
            swal({
                title: "All Fields Required!",
                icon: "error",
                type: "warning",
            });

        }
    }
}
 
export default Registration;