import React, { Component } from 'react';
import FromOther from './fromother';
import FromAccount from './fromacc';
import PressPreview from './pres_prewiew';
import Disclaimer from './disclaimer';
import './medicine.css';

class Medicine extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.loadDeliveryDetails = this.loadDeliveryDetails.bind(this);
        this.state = {
            file: null,
            deleverydetailtype: "frmacc"
        }
    }

    handleChange(event) {
        this.setState({ file: URL.createObjectURL(event.target.files[0]) });
    }

    loadDeliveryDetails(e) {
        console.log("this is load delivery" + e.target.id);
        if (e.target.id === "radioacc") {
            this.setState({ deleverydetailtype: "frmacc" });
        }
        else if (e.target.id === "radioother") {
            this.setState({ deleverydetailtype: "frmother" });
        }
    }

    render() {

        let loaddeliverydetails;
        let prescription_preview;

        if (this.state.deleverydetailtype === "frmother") {
            loaddeliverydetails = (
                <FromOther />
            );
        }
        else if (this.state.deleverydetailtype === "frmacc") {
            loaddeliverydetails = (
                <FromAccount />
            );
        }

        if(this.state.file===null){
            prescription_preview = null;
        }
        else{
            prescription_preview = (
                < PressPreview preview={this.state.file}/>
            )
        }

        return (
            <div>
                {/* top logo */}
                <div className="row">
                    <div className="col-md-12">
                        <div >
                            <img class="img-thumbnail" src="healthnetbuy.png" height="55" width="300" alt="Card image cap" />
                        </div>
                    </div>
                </div>
                <br />
                {/*top heading area*/}
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h2>Get your medication delivered</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <p>Simply upload a photo of your prescription and fill up your details to place your order.</p>
                    </div>
                </div>
                <br />
                {/* content */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {/* delivery details card start*/}
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 carddeliverydetailsparent">
                                <div className="card h-100 border-danger bg-light mb-3 carddeliverydetails">
                                    <div class="card-header bg-danger text-white">Delivery Details</div>
                                    <div class="card-body">
                                        {/* radio starts*/}
                                        <div className="row">
                                            <div className="col-xl-12, col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="row">
                                                    <div className="col-xl-4, col-lg-4 col-md-4 col-sm-4 col-7 text-left">
                                                        <div className="form-check-inline">
                                                            <label class="form-check-label active">
                                                                <input type="radio" class="form-check-input " id="radioacc" name="optradio" onClick={this.loadDeliveryDetails} />From Account
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-8, col-lg-8 col-md-8 col-sm-8 col-5 text-left">
                                                        <div className="form-check-inline">
                                                            <label class="form-check-label">
                                                                <input type="radio" class="form-check-input" id="radioother" name="optradio" onClick={this.loadDeliveryDetails} />Other
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* radio ends*/}
                                        <hr/>
                                        {loaddeliverydetails}
                                    </div>
                                </div>
                            </div>
                            {/* prescription card starts */}
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 cardprescriptiondetailsparent">
                                <div class="card h-100 border-danger bg-light mb-3 cardprescriptiondetails">
                                    <div class="card-header bg-danger text-white">Prescription Details</div>
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-xl-12, col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <input type="file" class="form-control-file border" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                <br />
                                                <div>
                                                    {prescription_preview}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                {/* Submit button starts */}
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <button type="button" className="btn btnsubmit btn-success">Submit</button>
                    </div>
                </div>
                <br />
                {/* disclaimer starts */}
                <Disclaimer/>
                {/* end of content */}
            </div>
        );
    }
}
            
            
            
export default Medicine;