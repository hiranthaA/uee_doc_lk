import React, { Component } from 'react';

class RefundSearch extends Component {
    constructor(props) {
        super(props);
        this.handleBankSelect = this.handleBankSelect.bind(this);
        this.validate = this.validate.bind(this);
        this.selectRadio = this.selectRadio.bind(this);
        this.state = {
            clicked:"FALSE",
            selectedOption:"nic"
        }
    }
    handleBankSelect(e){

        console.log("Bank "+e.target.value +" :Selected");
        this.setState({ clicked: e.target.value });
      
    }
    validate(){
        var validated = false;
        if(this.refValidate() & this.NICpassportValidate()){
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
    componentDidMount(e){
        this.progress();
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
        var elem = document.getElementById("myBar"); 
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
    selectRadio(e){
        console.log(e.target.id);
        if(e.target.id==="nicRadio"){
            this.setState({selectedOption:"nic"})
        }
        else if(e.target.id==="passportRadio"){
            this.setState({selectedOption:"passport"})
        }
        
    }
    NICpassportValidate(){
        var nicorpass = document.getElementById("nicorpass").value;
        if(nicorpass===""){
            return false;
        }
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(nicorpass)){
            return false;
        } else {
            if(this.state.selectedOption==="nic")
                return /^[0-9]{9}[XxVv]{1}$/.test(nicorpass);
            else
                return /[a-zA-Z]{2}[0-9]{7}/.test(nicorpass);
            
        }
    }
    render() { 
        

        return ( 
            <div className="card h-100 border-danger">
                {/*Top Header*/}
                <div className="row rowClassRefund typeHeaderRefund card-header bg-danger text-white">
                
                    <div className="col-12">
                        <h2>Refund Search</h2>
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
                            <div className="row rowClassRefund">
                                
                                    <label for="nicorpass" className="labelClassRefund">NIC/Passport<font color="red">*</font></label>
                                
                            </div>
                        </div>
                        <div className="col-8">
                            <div class="row rowClassRefund">
                                <div className="col-sm-3">
                                    <div class="row rowClassRefund">
                
                                        <div className="col-xs-5 col-sm-5">                                        
                                                <label for="nicRadio" className="radioTextRefund" className="labelClassRefund"><input type="radio" id="nicRadio"  name="optradio" checked={this.state.selectedOption === 'nic'} onChange={this.selectRadio}></input>NIC</label>
                                        </div>
                                        <div className="col-xs-7 col-sm-7">                                    
                                            <label for="passportRadio" className="radioTextRefund" className="labelClassRefund"><input type="radio" id="passportRadio"  name="optradio" checked={this.state.selectedOption === 'passport'} onChange={this.selectRadio}></input>PASSPORT</label>                                    
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                
                                    <input class="form_input_refund fixRefund" type="text" id="nicorpass" placeholder="NIC/Passport-Required"></input>
                                    </div>
                                </div>
                            <div/>
                        </div>
                    </div>
                    
                    <hr/>

                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <button className="btn btn-lg btn-warning btnRefund" onClick={this.validate}> Search</button>
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
 
export default RefundSearch;