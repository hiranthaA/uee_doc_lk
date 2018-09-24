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
        this.validate=this.validate.bind(this);

        this.state = {
            file: null,
            deleverydetailtype: "frmacc",
            selectedOption : "radioacc",
            name : null,
            contact : null,
            address : null,
            note : null
        }
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        // this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
        console.log("error occured in this page");
      }

    handleChange(event) {
        try {
            this.setState({ file: URL.createObjectURL(event.target.files[0]) });
        } catch (error) {
            console.log("error");
        }
            
    }

    validateName() {
        var name = document.getElementById("othername").value;
        console.log(name);
        var nameok = true;
        if (name === null || name === "") {
            console.log("name false");
            nameok = false;
        }
        return nameok;
    }

    validateContact() {
        var contact = document.getElementById("othercontact").value;
        console.log(contact);
        var contactok = true;
        if (contact === null || contact === "" || contact.length != 10) {
            console.log("contact false");
            contactok = false;
        }
        return contactok;
    }

    validateAddress() {
        var address = document.getElementById("otheraddress").value;
        console.log(address);
        var addressok = true;
        if (address === null || address === "") {
            console.log("address false");
            addressok = false;
        }
        return addressok;
    }

    validatePrescription() {
        var prescription = document.getElementById("uploadpress").value;
        console.log(prescription);
        var pressfileok = true;
        if (prescription === null || prescription === "") {
            console.log("presscription false");
            pressfileok = false;
        }
        return pressfileok;
    }

    validate(){
        if(this.state.deleverydetailtype==="frmacc"){
            if(this.validatePrescription()){
                window.$('#dlgSubmitSucces').modal('show');
            }
            else{
                window.$('#dlgSubmitFailed').modal('show');
            }
        }
        else if(this.state.deleverydetailtype==="frmother"){
            if(this.validateName() & this.validateContact() & this.validateAddress() & this.validatePrescription()){
                window.$('#dlgSubmitSucces').modal('show');
            }
            else{
                window.$('#dlgSubmitFailed').modal('show');
            }
        }
        else{
            window.$('#dlgSubmitFailed').modal('show');
        }
    }

    loadDeliveryDetails(e) {
        console.log("this is load delivery" + e.target.id);
        if (e.target.id === "radioacc") {
            this.setState({ deleverydetailtype: "frmacc" });
            this.setState({ selectedOption : e.target.id});
        }
        else if (e.target.id === "radioother") {
            this.setState({ deleverydetailtype: "frmother" });
            this.setState({ selectedOption : e.target.id});
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

        if (this.state.file === null) {
            prescription_preview = null;
        }
        else {
            prescription_preview = (
                < PressPreview preview={this.state.file} />
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
                                                    <div className="radioAcc col-xl-4, col-lg-5 col-md-7 col-sm-7 col-7 text-left">
                                                        <div className="form-check-inline">
                                                            <label className="container form-check-label">
                                                                <input type="radio" class="form-check-input" id="radioacc" name="optradio" checked={this.state.selectedOption === 'radioacc'} onClick={this.loadDeliveryDetails} />From Account
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="radioOther col-xl-8, col-lg-7 col-md-5 col-sm-5 col-5 text-left">
                                                        <div className="form-check-inline">
                                                            <label className="container form-check-label">
                                                                <input type="radio" class="form-check-input" id="radioother" name="optradio" checked={this.state.selectedOption === 'radioother'} onClick={this.loadDeliveryDetails} />Other
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* radio ends*/}
                                        <hr />
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
                                                        <input type="file" class="form-control-file border" id="uploadpress" onChange={this.handleChange} />
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
                <br />
                {/* Submit button starts */}
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <button type="button" className="btn btnsubmit btn-success" onClick={this.validate}>Submit</button>
                    </div>
                </div>
                <br />
                {/* disclaimer starts */}
                <Disclaimer />
                {/* end of content */}

                {/* Submit Success Dialog */}
                <div className="modal fade" id="dlgSubmitSucces" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-success" id="exampleModalLabel">Success</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body text-success">
                                Successfully Submitted!
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Submit Fail Dialog */}
                <div className="modal fade" id="dlgSubmitFailed" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-danger" id="exampleModalLabel">Failed</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body text-danger">
                                Validation Failed!
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Medicine;