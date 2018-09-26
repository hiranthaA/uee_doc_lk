import React, { Component } from 'react';

import BankRefund from './bankrefund';
import MobileRefund from './mobilerefund';
import RefundSearch from './refundsearch';
import './refundrequest.css';

class RefundRequest extends Component {
    constructor(props) {
        super(props);
        this.loadRefundOptions = this.loadRefundOptions.bind(this);
        this.handleFormSelect = this.handleFormSelect.bind(this);
        this.popupShow = this.popupShow.bind(this);
        this.state = {  
            refundOption: "bank"

        }
    }

    loadRefundOptions(e){

        console.log("Loaded form:"+e.target.name);
        if(e.target.id==="bnkBtn"||e.target.value===1)
            this.setState({ refundOption:  "bank" });
        else if(e.target.id==="mblBtn"||e.target.value===2)
            this.setState({ refundOption:  "mobile"  });
        else
            this.setState({ refundOption:  "search"   });
    }


    popupShow(){
        var popup = document.getElementById("infoPopup");
        popup.classList.toggle("show");
    }
    handleFormSelect(e){
        this.setState({refundOption: e.target.value});
    }
    render() { 
        let formoption;
        if(this.state.refundOption==="bank"){
            formoption= ( <BankRefund/> );
        }else if(this.state.refundOption==="mobile"){
            formoption= (<MobileRefund/>);
        }else if(this.state.refundOption==="search"){
            formoption=(<RefundSearch/>);
        }
        return ( 
            <div>
                {/*Top Header*/}
                <div className="row">
                
                    <div className="col head">
                        <h2><font size="100%">Refund Request</font></h2>
                    </div>
                </div>
                <br/>
                {/*Button Content*/}
                <div className="row">
                    <div className="col">
                    {/* Desktop Form Options */}
                        <div class="form_option" >
                            <div className="row">
                                <div className="col">
                                            <button type="button" className="btn btn-block headBtn" id="bnkBtn" name="Bank Refund" onClick={this.loadRefundOptions}>Bank Refund</button>
                                </div>
                                <br/><br/>  
                                <div className="col">
                                            <button type="button" className="btn btn-block headBtn" id="mblBtn" name="Mobile Refund" onClick={this.loadRefundOptions}>Mobile Bill/Reload Refund</button>
                                </div>
                                <br/><br/>     
                                <div className="col">
                                            <button type="button" className="btn btn-block headBtn" id="srchBtn" name="Refund Search" onClick={this.loadRefundOptions}>Refund Search</button>                        
                                        
                                </div>
                            </div>
                        </div>
                        {/*Mobile Form Options*/}
                        <div class="form_option_mobile">
                            <select value={this.state.formoption} onChange={this.handleFormSelect}>
                                <option value="bank" >Bank Refund</option>
                                <option value="mobile" >Mobile Bill/Reload Refund</option>
                                <option value="search" >Refund Search</option>
                            </select>
                        
                        </div>

                    </div>
                </div>
               <hr/>
               {formoption}
               <div className="row">
               <div className="col-9"></div>
                <div className="col-1"  onClick={this.popupShow}>
                        <div class="popup">
                                        <img src="./info.png" width="50px" height='50px'></img>
                                        <span className="popuptext" id="infoPopup"><p>
                                        "Your refund will be arranged to the same payment mode used for making the appointment" 
                                <hr/>Example - Mobile bill/Reload refund will be arranged for Add to bill transactions and bank deposits for card payment transactions.
                                            </p></span>
                        </div>
                </div> 
                
                </div>
            </div>
            
        );
    }
   
}
 
export default RefundRequest;