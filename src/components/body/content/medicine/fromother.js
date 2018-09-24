import React, { Component } from 'react';

class FromOther extends Component {
    constructor(props) {
        super(props);
        this.setAddress = this.setAddress.bind(this);
        this.setContact = this.setContact.bind(this);
        this.setName = this.setName.bind(this);
        this.setNote = this.setNote.bind(this);
        this.state = {
            name : null,
            contact : null,
            address : null,
            note : null
        }
    }

    setName(e){
        this.setState({name : e.target.value});
    }

    setContact(e){
        this.setState({contact : e.target.value});
    }

    setAddress(e){
        this.setState({address : e.target.value});
    }

    setNote(e){
        this.setState({note : e.target.value});
    }

    render() {
        return (
            <form>
                <div className="form-group row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 text-left">
                                <label for="othername" className=" col-form-label">Name</label>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
                                <input type="text" className="form-control" id="othername" placeholder="Name" onChange={this.setName}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 text-left">
                                <label for="othercontact" className=" col-form-label">Contact No</label>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
                                <input type="number" className="form-control" id="othercontact" placeholder="Contact Number" onChange={this.setContact}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 text-left">
                                <label for="otheraddress" className=" col-form-label">Address</label>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
                                <input type="text" className="form-control" id="otheraddress" placeholder="Address" onChange={this.setAddress}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 text-left">
                                <label for="othernotes" className=" col-form-label">Additional Notes</label>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
                                <textarea type="text" className="form-control" id="othernotes" placeholder="Additional Notes" onChange={this.setNote}/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default FromOther;