import React, { Component } from 'react';
import './echanneling.css';

class Echanneling extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="card">
                <div class="card-header text-left">
                    <h5><b>E-Channeling</b></h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <div class="row">
                                <div class="col-sm-6 col-md-6 text-left">
                                    <label className="e-fonts" for="exampleInputEmail1">Doctor Name</label>
                                    <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Dcotor Name" />
                                </div>
                                <div class="col-sm-6 col-md-6 text-left">
                                    <label className="e-fonts" for="inputState">Specialization</label>
                                    <select id="inputState" class="form-control form-control-sm">
                                        <option selected>Choose...</option>
                                        <option>Adult Cardiothoracic Anesthesiology</option>
                                        <option>Anesthesiology</option>
                                        <option>Adult Reconstructive Orthopaedics</option>
                                        <option>Orthopaedic Surgery</option>
                                        <option>Advanced Heart Failure</option>
                                        <option>Transplant Cardiology Internal Medicine</option>
                                        <option>Allergy & Immunology</option>
                                        <option>Transplant Cardiology Internal Medicine</option>
                                        <option>Allergy & Immunology</option>
                                        <option>Biochemical Genetics</option>
                                        <option>Blood Banking - Transfusion Medicine</option>
                                        <option>Cardiothoracic Radiology</option>
                                        <option>Radiology-Diagnostic</option>
                                        <option>Cardiovascular Disease Internal Medicine</option>
                                        <option>Chemical Pathology Pathology-Anatomic & Clinical</option>
                                        <option>Child & Adolescent Psychiatry Psychiatry</option>
                                        <option>Child Abuse Pediatrics Pediatrics</option>
                                        <option>Child Neurology Neurology</option>
                                        <option>Clinical & Laboratory Immunology Allergy & Immunology</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-md-6 text-left">
                                    <label className="e-fonts" for="inputState">Hospital/Channeling Center</label>
                                    <select id="inputState" class="form-control form-control-sm">
                                        <option selected>Choose...</option>
                                        <option>Oral, Maxillofacial and Dental Clinic/ Channeling Center</option>
                                        <option>Suwasetha Channel Center</option>
                                        <option>Nawinna Channeling Centre</option>
                                        <option>Nawaloka Medical Centre</option>
                                        <option>Nawaloka Hospitals PLC</option>
                                        <option>Co-Op Channel centre</option>
                                        <option>Asiri Surgical Hospital</option>
                                        <option>Golden Key Eye & ENT Hospital</option>
                                        <option>Ceymed Healthcare Services</option>
                                        <option>Asiri Central Hospital</option>
                                        <option>Moratuwa Medical Centre (Pvt) Ltd.</option>
                                    </select>
                                </div>
                                <div class="col-sm-6 col-md-6 text-left">
                                    <label className="e-fonts" for="exampleInputEmail1">Prefered District</label>
                                    <select id="inputState" class="form-control form-control-sm">
                                        <option selected>Choose...</option>
                                        <option>Colombo</option>
                                        <option>Kandy</option>
                                        <option>Galle</option>
                                        <option>Ampara</option>
                                        <option>Anuradhapura</option>
                                        <option>Badulla</option>
                                        <option>Batticaloa</option>
                                        <option>Gampaha</option>
                                        <option>Hambantota</option>
                                        <option>Jaffna</option>
                                        <option>Kalutara</option>
                                        <option>Kegalle</option>
                                        <option>Kilinochchi</option>
                                        <option>Kurunegala</option>
                                        <option>Mannar</option>
                                        <option>Matale</option>
                                        <option>Matara</option>
                                        <option>Moneragala</option>
                                        <option>Mullativu</option>
                                        <option>Nuwara Eliya</option>
                                        <option>Polonnaruwa</option>
                                        <option>Puttalam</option>
                                        <option>Ratnapura</option>
                                        <option>Trincomalee</option>
                                        <option>Vavuniya</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-2 col-md-2 text-left">
                                    <label className="e-fonts" for="inputState">Date</label>
                                    <input type="date" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="col-sm-2 col-md-2 text-left">
                                    <label className="e-fonts" for="inputState">From Time</label>
                                    <input type="number" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="col-sm-2 col-md-2 text-left">
                                    <label className="e-fonts" for="inputState">To Time</label>
                                    <input type="number" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="col-sm-3 col-md-3">
                                    <button type="button" class="btn btn-sm btn-success btn-block search-btn-padding"><i class="fas fa-search"></i> Search</button>
                                </div>
                            </div>


                            <div class="row p-2">
                                <div class="col-4">
                                    <div class="mt-3 city-wise text-left">
                                        <h6 class="p-2 m-2 ">
                                            <b>City wise availability</b>
                                        </h6>
                                        <ul class="list-group p-2">
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Nugegoda
                                             <span class="badge badge-primary badge-pill">14</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Colombo
                                            <span class="badge badge-primary badge-pill">9</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Dehiwala
                                            <span class="badge badge-primary badge-pill">8</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Piliyandala
                                            <span class="badge badge-primary badge-pill">13</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Kottawa
                                            <span class="badge badge-primary badge-pill">10</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="mt-3 city-wise">
                                        <div class="row p-2">
                                            <div class="col-5 m-2 text-right">
                                                <h6><b>Search Results</b></h6>
                                            </div>
                                            <div class="col-5 text-left">
                                                <select id="inputState" class="form-control form-control-sm">
                                                    <option selected>Sort Results..</option>
                                                    <option>By Doctor Name</option>
                                                    <option>Channeling Center</option>
                                                    <option>Specialization</option>
                                                    <option>Available Date</option>
                                                    <option>User Ratings</option>
                                                    <option>District</option>
                                                </select>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="row text-center">
                                            <div class="col-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-3">
                                                                <img className="img-thumbnail img-responsive" src="./icon-doctor.png" alt="No image" />
                                                            </div>
                                                            <div className="col-9 text-left">
                                                                <h5>Dr. SAMAN KULARATHNE</h5>
                                                                <p className="mb-0">Chest Specialist</p>
                                                                <p className="mb-0">General Hospital Kurunegala</p>
                                                                <div className="big-star p-2">
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star unchecked"></span>
                                                                </div>
                                                                <button type="button" class="btn btn-block btn-danger" data-toggle="modal" data-target="#exampleModalCenter"><i class="far fa-check-circle"></i> Channel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row text-center">
                                            <div class="col-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-3">
                                                                <img className="img-thumbnail img-responsive" src="./icon-doctor.png" alt="No image" />
                                                            </div>
                                                            <div className="col-9 text-left">
                                                                <h5>Dr. SAMAN WEERAWARDHANE</h5>
                                                                <p className="mb-0">Psychiatrist</p>
                                                                <p className="mb-0">General Hospital Negombo</p>
                                                                <div className="big-star p-2">
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star unchecked"></span>
                                                                </div>
                                                                <button type="button" class="btn btn-block btn-danger" data-toggle="modal" data-target="#exampleModalCenter"><i class="far fa-check-circle"></i> Channel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row text-center">
                                            <div class="col-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-3">
                                                                <img className="img-thumbnail img-responsive" src="./icon-doctor.png" alt="No image" />
                                                            </div>
                                                            <div className="col-9 text-left">
                                                                <h5>Dr (Mrs.) SAMANTHI PARANAVITHANE</h5>
                                                                <p className="mb-0">Dermatologist</p>
                                                                <p className="mb-0">General Hospital Anuradhapura</p>
                                                                <div className="big-star p-2">
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star unchecked"></span>
                                                                </div>
                                                                <button type="button" class="btn btn-block btn-danger" data-toggle="modal" data-target="#exampleModalCenter"><i class="far fa-check-circle"></i> Channel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted">
                </div>

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Payments</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="card bg-light">
                                    <div className="row">
                                        <div className="col-12">
                                            <ul class="list-group">
                                                <label className="text-left p-2"><b>Select Your Payment Method</b></label>
                                                <li class="list-group-item d-flex justify-content-between align-items-left">
                                                    <div class="custom-control custom-checkbox mr-sm-2">
                                                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing"/>
                                                    <label class="custom-control-label" for="customControlAutosizing"><i class="fab fa-cc-mastercard fa-3x"></i></label>
                                                     </div>
                                                </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    <div class="custom-control custom-checkbox mr-sm-2">
                                                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing1"/>
                                                    <label class="custom-control-label" for="customControlAutosizing1"><i class="fab fa-cc-visa fa-3x"></i></label>
                                                     </div>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    <div class="custom-control custom-checkbox mr-sm-2">
                                                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing2"/>
                                                    <label class="custom-control-label" for="customControlAutosizing2"> <i class="fab fa-cc-discover fa-3x"></i></label>
                                                     </div>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    <div class="custom-control custom-checkbox mr-sm-2">
                                                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing3"/>
                                                    <label class="custom-control-label" for="customControlAutosizing3"> <i class="fab fa-cc-paypal fa-3x"></i></label>
                                                     </div>
                                                    </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-dismiss="modal">Proceed</button>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
                );
            }
        }
        
export default Echanneling;
