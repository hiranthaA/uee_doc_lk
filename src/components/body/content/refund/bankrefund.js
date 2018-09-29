import React, { Component } from 'react';

class BankRefund extends Component {
    constructor(props) {
        super(props);
        this.handleBankSelect = this.handleBankSelect.bind(this);
        this.validate=this.validate.bind(this);
        this.state = {
            selectedBank:"1"
        }
    }
    validate(){
        var validated = false;
        if(this.refValidate() & this.holdValidate() & this.accValidate() & this.bankValidate()){
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
    holdValidate(){
        var holder = document.getElementById("holderName").value;
        if(holder===""){
            return false;
        }
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(holder)){
            return false;
        } else {
            
            return true;
        }
    }
    componentDidMount(e){
        this.progress();
    }
    accValidate(){
        var accNo = document.getElementById("accNO").value;
        if(accNo===""){
            return false;
        }
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(accNo)){
            return false;
        } else {

            return !/\D/.test(accNo);
            
        }

    }
    bankValidate(){
        var bank = document.getElementById("bankSelect").value;
        if(bank===""){
            return false;
        }
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(bank)){
            return false;
        } else {
            return true;
        }
    }


    handleBankSelect(e){
        console.log("Bank "+e.target.value +" :Selected");
        this.setState({selectedBank: e.target.value});
        if(e.target.value==="1"){
            document.getElementById("bankName").value="Bank Of Ceylon";
        }else if(e.target.value==="2"){
            document.getElementById("bankName").value="Commercial Bank";
        }else if(e.target.value==="3"){
            document.getElementById("bankName").value="Nations Trust Bank";
        }else if(e.target.value==="4"){
            document.getElementById("bankName").value="National Savings Bank";
        }
    }
    progress() {
        var elem = document.getElementById("refundProgressBar"); 
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
    progressError() {
        var elem = document.getElementById("refundProgressBar"); 
        var width = 10;
        var id = setInterval(frame, 1);
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
            <div className="card h-100 border-danger">
                {/*Top Header*/}
                <div className="row rowClassRefund typeHeaderRefund card-header bg-danger text-white">
                
                    <div className="col-12">
                        <h2>Bank Refund</h2>
                    </div>
                </div>
                <br/>
                {/*Content Form*/}
                <div className="card-body">
                    <div className="row rowClassRefund">
                        <div className="col-4">
                            <label for="refID" className="labelClassRefund">REFERENCE NO<font color="red">*</font></label>
                        </div>
                        <div className="col-8">
                            <input class="form_input_refund" type="text" id="refID" placeholder="Reference No-Required"></input>
                        </div>
                    </div>
                    <hr/>
                    <div className="row rowClassRefund">
                        <div className="col-4">
                            <label for="holderName" className="labelClassRefund">BANK ACCOUNT HOLDER NAME<font color="red">*</font></label>
                        </div>
                        <div className="col-8">
                            <input class="form_input_refund" type="text" id="holderName" placeholder="Bank Account Holder Name-Required"></input>
                        </div>
                    </div>
                    <hr/>
                    <div className="row rowClassRefund">
                        <div className="col-4">
                            <label for="accNO" className="labelClassRefund">BANK ACCOUNT NO<font color="red">*</font></label>
                        </div>
                        <div className="col-8">
                            <input class="form_input_refund" type="text" id="accNO" placeholder="Bank Account No-Required"></input>
                        </div>
                    </div>
                    <hr/>
                    <div className="row rowClassRefund">
                        <div className="col-4">
                            <label for="bankName" className="labelClassRefund">BANK NAME<font color="red">*</font></label>
                        </div>
                        
                        <div className="col-8">
                    
                            <input class="form_input_refund" type="text" for="bankSelect" id="bankName" placeholder="Bank Name-Required"></input>
                            
                        </div>
                        <div class="clearfix visible-xs"></div>
                        <div class="clearfix visible-xs"></div>
                        <div className="col-6"></div>
                        <div className="col-6">
                            <select class="formBankOptionRefund" id="bankSelect" for="bankName" value={this.state.selectedBank} onChange={this.handleBankSelect}>
                                <option value="1">Bank Of Ceylon</option>
                                <option value="2">Commercial Bank</option>
                                <option value="3">Nations Trust Bank</option>
                                <option value="4">National Savings Bank</option>
                            </select>
                        </div>
                        
                    </div>
                    <hr/>
                    <div className="row rowClassRefund">
                        <div className="col-4">
                            <label for="refRem" className="labelClassRefund">REFUND REMARKS</label>
                        </div>
                        <div className="col-8">
                            <input class="form_input_refund" type="text" id="refRem" placeholder="Refund Remarks-Optional"></input>
                        </div>
                    </div>
                    <hr/>
                    

                    <button type="submit" className="btn btn-lg btn-primary btnRefund"  onClick={this.validate}>Submit</button>
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
                                <button type="button" class="btn btn-success btnRefund" data-dismiss="modal">Close</button>
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
                                <button type="button" class="btn btn-danger btnRefund" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}
 
export default BankRefund;