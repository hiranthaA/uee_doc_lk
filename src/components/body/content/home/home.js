import React, { Component } from 'react';
import './home.css';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <div>
                <div className="row">
                    <div className="d-flex justify-content-center col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3>Channel Your Doctor</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card ChannelDocthumbnail border-warning mb-3 shadow-lg p-3 mb-5 bg-white rounded">
                            <div class="card-body  text-danger">
                                <input type="text" className="form-control" id="othername" placeholder="Doctor - Max 20 Characters" />
                                <br/>
                                <br/>
                                <button type="button" className="btn btnsubmit btn-danger" onClick={() => this.props.setMainBodyContent("ech")}><span class="glyphicon glyphicon-search"></span>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Services list thumbnails start */}
                <div className="row">
                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-0 col-0">

                    </div>
                    <div className="d-flex justify-content-center col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                        <div class="card thumbnail border-danger mb-3" onClick={() => this.props.setMainBodyContent("med")}>
                            <div class="card-body text-danger">
                                <img src="pills.png" width="60" height="60"  alt="" onClick={() => this.props.setMainBodyContent("med")}/>
                                <h5 class="card-title">Medicine</h5>
                                <p class="card-text">to Your Doorstep</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                        <div class="card thumbnail border-danger mb-3" onClick={() => this.props.setMainBodyContent("tele")}>
                            <div class="card-body text-danger">
                                <img src="telephone.png" width="60" height="60" alt="" onClick={() => this.props.setMainBodyContent("tele")}/>
                                <h5 class="card-title">Tele Doctor</h5>
                                <p class="card-text">Service</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                        <div class="card thumbnail border-danger mb-3">
                            <div class="card-body text-danger">
                                <img src="ambulance.png" width="70" height="60" alt="" />
                                <h5 class="card-title">Healthcare</h5>
                                <p class="card-text">to Your Doorstep</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                        <div class="card thumbnail border-danger mb-3">
                            <div class="card-body text-danger">
                                <img src="heartbeat.png" width="70" height="60" alt="" />
                                <h5 class="card-title">My Health</h5>
                                <p class="card-text">Records</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
                        <div class="card thumbnail border-danger mb-3">
                            <div class="card-body text-danger">
                                <img src="asiri-lab-reports.png" width="60" height="60" alt="" />
                                <h5 class="card-title">Lab Reports</h5>
                                <p class="card-text">at Your Doorstep</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-0 col-0">

                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
