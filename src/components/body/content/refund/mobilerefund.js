import React, { Component } from 'react';
import "./refundrequest.css";

class MobileRefund extends Component {
    constructor(props) {
        super(props);
        this.handleBankSelect = this.handleBankSelect.bind(this);
        this.validate = this.validate.bind(this);
        this.state = {
            clicked:"FALSE"
        }
    }
    validate(){
        var validated = false;
        if(this.refValidate() & this.mobileNumValidate()){
            validated =true;
        }
        if(validated!=true)
            window.$('#bankRefundFailed').modal('show');
        else
            window.$('#bankRefundSuccess').modal('show');
        return validated;
    }
    refValidate(){
        var refNo = document.getElementById("refID").value;
        if(refNo===""){
            return false;
        }
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(refNo)){
            return false;
        } else {
            return true;
        }
    }
    mobileNumValidate(){
        var mobileNum = document.getElementById("mobileNum").value;
        if(mobileNum===""){
            return false;
        }
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(mobileNum)){
            return false;
        } else {

            return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(mobileNum);
            
        }
    }

    popupShow() {
        var popup = document.getElementById("helpTip");
        popup.classList.toggle("show");
    }
    handleBankSelect(e){

        console.log("Bank "+e.target.value +" :Selected");
        this.setState({ clicked: e.target.value });
      
    }
    render() { 
        

        return ( 
            <div>
                {/*Top Header*/}
                <div className="row">
                    
                    <div className="col-xl-12">
                        <h2>Mobile Bill / Reload Refund</h2>
                    </div>
                </div>
                <br/>
                {/*Content Form*/}
                <div className="row">
                    <div className="col-4">
                        <label for="refID">REFERENCE NO<font color="red">*</font></label>
                    </div>
                    <div className="col-8">
                        <input class="form_input" type="text" id="refID" placeholder="Reference No-Required"></input>
                    </div>
                </div>
                <hr/>

                <div className="row">
                    <div className="col-4">
                        <label for="mobileNum">MOBILE NO / CDMA NO<font color="red">*</font></label>
                    </div>
                    <div className="col-8">
                        <div className="flexContainer">
                            <input class="inputField" type="text" id="mobileNum" placeholder="Mobile No/CDMA No-Required"></input>
                            <button className="roundBtn tooltip" onClick={this.popupShow} id="infoMob">?<span className="tooltiptext" id="helpTip"><p><font size="5px">This service is available for
                                                <hr/>
                                                <ul>Dialog Mobile/ Dialog CDMA</ul>
                                                <ul>Etisalat</ul>
                                                <ul>Airtel</ul>
                                                <ul>Hutch</ul>
                                                <ul>Mobitel</ul>
                                                <ul>Lankabell CDMA</ul></font></p>
                        </span></button> 
    
                        </div>
                        
                    </div>
                </div>
                <hr/>
                
                <div className="row">
                    <div className="col-4">
                        <label for="refRem">REFUND REMARKS</label>
                    </div>
                    <div className="col-8">
                        <input class="form_input" type="text" id="refRem" placeholder="Refund Remarks-Optional"></input>
                    </div>
                </div>
                
                <hr/>
                <br/><br/><br/><br/><br/><br/>
                
                <button type="submit" className="btn btn-lg btn-primary" onClick={this.validate}>Submit</button>


                {/* Submit Success Dialog */}
                <div className="modal fade" id="bankRefundSuccess" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <div className="modal fade" id="bankRefundFailed" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
 
export default MobileRefund;