import React, { Component } from 'react';

class FromAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <form>
                <div className="form-group row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 text-left">
                                <label className=" col-form-label">Name</label>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12 text-left">
                            <label className=" col-form-label">A.M.H.B. Athapaththu</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 text-left">
                                <label className=" col-form-label">Contact No</label>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12 text-left">
                                <label className=" col-form-label">0769 065 565</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 text-left">
                                <label className=" col-form-label">Address</label>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12 text-left">
                                <label className=" col-form-label">New Kandy Road, Malabe</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 text-left">
                                <label for="accnotes" className=" col-form-label">Additional Notes</label>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
                                <textarea type="text" className="form-control" id="accnotes" placeholder="Additional Notes" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default FromAccount;