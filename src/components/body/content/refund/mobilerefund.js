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
    /**
     * Input validator
     */
    validate(){
        var validated = false;
        if(this.refValidate() & this.mobileNumValidate()){
            validated =true;
        }
        if(validated!=true){
            window.$('#bankRefundFailed').modal('show');
            this.progressError();
        }
        else{
            window.$('#bankRefundSuccess').modal('show');
            this.progress();
        }
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
    /**
     * Show popup
     */
    popupShow() {
        var popup = document.getElementById("helpTip");
        popup.classList.toggle("show");
    }
    handleBankSelect(e){

        console.log("Bank "+e.target.value +" :Selected");
        this.setState({ clicked: e.target.value });
      
    }
    componentDidMount(e){
        this.progress();
    }
    /**
     * Success progress bar
     */
    progress() {
        var elem = document.getElementById("myBar"); 
        var width = 10;
        var id = setInterval(frame, 1);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++; 
                elem.style.width = width + '%'; 
                elem.style.backgroundColor="green";
                elem.innerHTML = width * 1 + '%';
            }
        }
    }
    /**
     * Error progress bar
     */
    progressError() {
        var elem = document.getElementById("myBar"); 
        var width = 10;
        var id = setInterval(frame, 0.5);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++; 
                elem.style.width = width + '%'; 
                elem.style.backgroundColor="red";
                elem.innerHTML = width * 1 + '%';
            }
        }
    }
    render() { 
        

        return ( 
            <div className="card h-100 border-danger" >
                {/*Top Header*/}
                <div className="row typeHeader card-header bg-danger text-white rowRefundRequest" >
                    
                    <div className="col-sm-12">
                        <h2>Mobile Bill / Reload Refund</h2>
                    </div>
                </div>
                <br/>
                {/*Content Form*/}
                <div className="card-body">
                    <div className="row rowRefundRequest">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <label for="refID" className="labelRefund">REFERENCE NO<font color="red">*</font></label>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                            <input class="form_input" type="text" id="refID" placeholder="Reference No-Required"></input>
                        </div>
                    </div>
                    <hr/>

                    <div className="row rowRefundRequest" >
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <label for="mobileNum" className="labelRefund">MOBILE NO / CDMA NO<font color="red">*</font></label>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                            <div className="flexContainerRefund">
                                <input class="inputFlexRefund" type="text" id="mobileNum" placeholder="Mobile No/CDMA No-Required"></input>
                                <button className="roundBtnRefund tooltip" onClick={this.popupShow} id="infoMob">?<span className="tooltiptext" id="helpTip"><p><font size="5px">This service is available for
                                                    <hr/><small>
                                                    <ul>
                                                    <li>Dialog Mobile/ Dialog CDMA</li>
                                                    <li>Etisalat</li>
                                                    <li>Airtel</li>
                                                    <li>Hutch</li>
                                                    <li>Mobitel</li>
                                                    <li>Lankabell CDMA</li>
                                                    
                                                    </ul></small></font></p>
                            </span></button> 
        
                            </div>
                            
                        </div>
                    </div>
                    <hr/>
                    
                    <div className="row rowRefundRequest">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <label for="refRem" className="labelRefund">REFUND REMARKS</label>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                            <input class="form_input" type="text" id="refRem" placeholder="Refund Remarks-Optional"></input>
                        </div>
                    </div>
                    
                    <hr/>
                    <br/><br/><br/><br/><br/><br/>
                    <button type="submit" className="btn btn-lg btn-primary refundRequestButtons" onClick={this.validate}>Submit</button>
                </div>

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