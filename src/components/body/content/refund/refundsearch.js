import React, { Component } from 'react';

class RefundSearch extends Component {
    constructor(props) {
        super(props);
        this.handleBankSelect = this.handleBankSelect.bind(this);
        this.state = {
            clicked:"FALSE"
        }
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
                        <label for="nicorpass">NIC/Passport<font color="red">*</font></label>
                    </div>
                    <div className="col-8">
                        <input class="form_input" type="text" id="nicorpass" placeholder="NIC/Passport-Required"></input>
                    </div>
                </div>
                
                <hr/>
                <br/><br/><br/><br/><br/><br/>
                
                <button className="btn btn-lg btn-warning">Search</button>
            </div>
        );
    }
}
 
export default RefundSearch;