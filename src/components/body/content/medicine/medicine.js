import React, { Component } from 'react';
import FromOther from './fromother';
import FromAccount from './fromacc';
import PressPreview from './pres_prewiew';
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
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card h-100 border-danger bg-light mb-3 carddeliverydetails">
                                    <div class="card-header bg-danger text-white">Delivery Details</div>
                                    <div class="card-body">
                                        {/* radio starts*/}
                                        <div className="row">
                                            <div className="col-xl-12, col-lg-12 col-md-12 col-sm-12 col-6">
                                                <div className="row">
                                                    <div className="col-xl-6, col-lg-6 col-md-6 col-sm-6 col-12 text-left">
                                                        <div className="form-check-inline">
                                                            <label class="form-check-label">
                                                                <input type="radio" class="form-check-input" id="radioacc" name="optradio" onClick={this.loadDeliveryDetails} />From Account
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6, col-lg-6 col-md-6 col-sm-6 col-12 text-left">
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
                                        <br />
                                        {loaddeliverydetails}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-sm-12 col-12 col-xl-0 col-lg-0 col-md-0">
                                
                            </div> */}
                            {/* prescription card starts */}
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
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
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card border-danger bg-light mb-3 carddisclaimer">
                            <div className="card-header text-white bg-danger">Disclaimer</div>
                            <div className="card-body text-center">
                                <p>Kindly note that our orders are dispatched in schedules.</p>
                                <ul>
                                    <li>Orders placed before&nbsp;1.00pm&nbsp;will be delivered on the same working day between&nbsp;3.00pm - 6.00pm.</li>
                                    <li>Orders placed after&nbsp;1.00pm&nbsp;will be delivered on the next working day between&nbsp;10.00am - 1.00pm.</li>
                                    <li>Delivery&nbsp;in 2 hours&nbsp;can be facilitated under our “Priority Service” *</li>
                                </ul>
                                <br/>
                                    <p>Your order will be acknowledged by our agents&nbsp;within 15 minutes&nbsp;during our business hours.</p>
                                    <ul>
                                        <li>Monday&nbsp;-&nbsp;Saturday: 8.00am to 8.00pm</li>
                                        <li>Sunday : 9.00am to 5.00pm</li>
                                    </ul>
                                    <br/>
                                        <p>Delivery charges will be waived off for Dialog Doc990 customers for deliveries to Colombo &amp; Colombo Suburbs*.</p>
                                        <p>Delivery areas are Colombo 1-15 and Colombo Suburbs (Furthest cities being Wattala, Athurugiriya, Kottawa and Moratuwa).</p>
                                        <p>Compliance with regulatory guidelines for delivery of medication (NMRA – National Medicines Regulatory Authority).</p>
                                        <p>All products are sold under authorized retail price.</p>
                                        <p>I, hereby appoint HealthNetBuy as my authorized representative to deliver my medication.</p>
                                        <p><em>*Terms &amp; Conditions Apply</em></p>
                            </div>
                        </div>
                            </div>
                        </div>
                        {/* end of content */}



                    </div>
                    );
                }
            }
            
            
            
export default Medicine;