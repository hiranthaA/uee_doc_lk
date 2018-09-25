import React, { Component } from 'react';
import "./refundrequest.css";

class MobileRefund extends Component {
    constructor(props) {
        super(props);
        this.handleBankSelect = this.handleBankSelect.bind(this);
        this.state = {
            clicked:"FALSE"
        }
    }
    popupShow() {
        var popup = document.getElementById("myPopup");
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
                            <button className="roundBtn popup" onClick={this.popupShow} id="infoMob"><img  className="roundIcon" for="infoMob" src="info.png" alt="Info Circle"  ></img><span className="popuptext" id="myPopup"><p><font size="5px">This service is available for
                                                <ul>Dialog Mobile/ Dialog CDMA</ul>
                                                <ul>Etisalat</ul>
                                                <ul>Airtel</ul>
                                                <ul>Hutch</ul>
                                                <ul>Mobitel</ul>
                                                <ul>Lankabell CDMA</ul></font></p>
                        </span></button> 
                            
  

                            {/* <div class="tooltip">
                                <span class="tooltiptext">Tooltip text</span>
                            </div> */}
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
                
                <button type="submit" className="btn btn-lg btn-primary">Submit</button>
            </div>
        );
    }
}
 
export default MobileRefund;