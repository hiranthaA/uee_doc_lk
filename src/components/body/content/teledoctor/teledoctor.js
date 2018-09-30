import React, { Component } from 'react';
import './teledoctor.css';

class TeleDoctor extends Component {
    constructor(props) {
        super(props);
        this.nicOrPassport = this.nicOrPassport.bind(this);
        this.state = {
            selectedOption : "radioLocal",
            time: {},
            seconds: 120
        }
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    nicOrPassport(e) {
        if (e.target.id === "radioLocal") {
            // this.setState({ deleverydetailtype: "frmacc" });
            this.setState({ selectedOption : e.target.id});
        }
        else if (e.target.id === "radioForeign") {
            // this.setState({ deleverydetailtype: "frmother" });
            this.setState({ selectedOption : e.target.id});
        }
    }

    validate(){
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var nicOrPp = document.getElementById("nicOrPp").value;
        var email = document.getElementById("email").value;
        if(name.length==0 || phone.length==0 || (nicOrPp.length==0 ) || email.length==0){
            alert("All fieslds are requied")
        }else{
            if (phone.length!=10){
                alert("Invalid phone number")
            } else if (nicOrPp.length!=8 && nicOrPp.length!=10){
                alert("Invalid nic/passport number")
            } else {
                alert("Details registered successfully");
                document.getElementById("myForm").reset();
            }
        }
    }

    secondsToTime(secs){
        console.log("secondsToTime(secs)");
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        if(minutes<10){
            minutes = "0"+minutes;
        }
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        if(seconds<10){
            seconds = "0"+seconds;
        }

        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
    
      componentDidMount() {
        console.log("componentDidMount()");
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.startTimer();
      }
    
      startTimer() {
        console.log("startTimer()");

        if (this.timer == 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
    
      countDown() {
        console.log("countDown()");

        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
          clearInterval(this.timer);
          window.location.reload();
        }
      }


    render() {
        let nicOrPp = (
            <div className="form-group myfg row no-side-margin" id="nicDiv">
            <div className="col-12">
                <div className="row no-side-margin">
                    <div className="col-3 text-left">
                        <label for="nic" className=" col-form-label">NIC</label>
                    </div>
                    <div className="col-9">
                        <input type="text" className="form-control" id="nicOrPp" placeholder="123456789V" onChange={this.setContact}/>
                    </div>
                </div>
            </div>
        </div>
        );
        if (this.state.selectedOption === "radioForeign") {
            nicOrPp = (
                <div className="form-group myfg row no-side-margin" id="ppDiv">
                <div className="col-12">
                    <div className="row no-side-margin">
                        <div className="col-3 text-left">
                            <label for="passport" className=" col-form-label">Passport</label>
                        </div>
                        <div className="col-9">
                            <input type="number" className="form-control" id="nicOrPp" placeholder="12345678" onChange={this.setAddress}/>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
        return (
            <div>
                <div class="row no-side-margin">
                    <div className="col-md-4">
                    <div className="border border-dark height-285">
                        <div class="row no-side-margin justify-content-around" >
                            <div className="col-md-auto
                             col-sm-auto col-auto no-side-padding">
                                <div className="float-right">
                                    <img src="icon-doctor.png" height="150px" width="110px" alt="Doctor" />
                                </div>
                            </div>
                            <div className="col-md-auto col-sm-auto col-auto center-content no-padding">
                                <div className="text-center">
                                    <div className="res-dr-name-small text-left">
                                        <h4 className="text-danger">Dr. C.A. Mendis</h4>
                                        <h6>Reg. No. 25351</h6>
                                        <h5>Eye Surgeon</h5>
                                        <div className="big-star">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star unchecked"></span>
                                        </div>
                                    </div>
                                    <div className="res-dr-reg-big">
                                        <h5>Reg. No.</h5>
                                        <h3>25351</h3>
                                        <div className="big-star">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star unchecked"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row no-side-margin res-dr-name-big">
                            <div className="col-md-12 text-danger text-left">
                                <h3>Dr. C.A. Mendis</h3>
                                <h5>Eye Surgeon</h5>
                                <h6>Special Notes: </h6>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-8 cratings height-285">
                        <div className="border border-dark height-285">
                            <div class="row no-side-margin">
                                <div className="col-md-12 text-left padding-2-p">
                                    <h4>Reviews:</h4>
                                </div>
                            </div>
                            <div class="row no-side-margin">
                                <div className="col-md-6 text-left border padding-2-p">
                                    <h5>Saman</h5>
                                    <div className="small-star">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star unchecked"></span>
                                        <span class="fa fa-star unchecked"></span>
                                    </div>
                                    <h6>Friendly doctor</h6>
                                </div>
                                <div className="col-md-6 text-left border padding-2-p">
                                    <h5>Kamal</h5>
                                    <div className="small-star">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                    </div>
                                    <h6>Excelent Service. Diagnosis was 100% acccurate</h6>
                                </div>
                            </div>
                            <div class="row no-side-margin">
                                <div className="col-md-6 text-left border padding-2-p">
                                    <h5>Nuwan</h5>
                                    <div className="small-star">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star unchecked"></span>
                                    </div>
                                    <h6>Very friendly service.<br /> Nice</h6>
                                </div>
                                <div className="col-md-6 text-left border padding-2-p">
                                    <h5>Nimal</h5>
                                    <div className="small-star">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star unchecked"></span>
                                        <span class="fa fa-star unchecked"></span>
                                    </div>
                                    <h6>Good Service</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row no-side-margin">
                <div className="col-12">
                <div className="border border-dark text-center marging-padding-top">

                    <h5>Complete within:</h5>
                    
                    <div class="progress complete-within-container container no-side-padding">
                        <h5 className="remaining-time" id="remaining-time">{this.state.time.m}:{this.state.time.s}</h5>
                        <div class="progress-bar bg-danger complete-within align-self-center">
                            {/* <h5 className="remaining-time" id="remaining-time">03:45</h5> */}
                        </div>
                    </div>
                </div>
                </div>
                </div>

                <div class="row no-side-margin">
                <div className="col-12">
                <div className="border border-dark text-center marging-padding-top">

                <form id="myForm" class="top-padding-10">

                <div className="form-group myfg row no-side-margin">
                    <div className="col-12">
                        <div className="row no-side-margin">
                            <div className="col-3 text-left">
                                <label for="name" className=" col-form-label">Name</label>
                            </div>
                            <div className="col-9">
                                <input type="text" className="form-control" id="name" placeholder="John Doe" onChange={this.setContact}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group myfg row no-side-margin">
                    <div className="col-12">
                        <div className="row no-side-margin">
                            <div className="col-3 text-left">
                                <label for="phone" className=" col-form-label">Phone</label>
                            </div>
                            <div className="col-9">
                                <input type="number" className="form-control" id="phone" placeholder="0123456789" onChange={this.setContact}/>
                            </div>
                        </div>
                    </div>
                </div>                

                <div className="form-group myfg row no-side-margin">
                    <div className="col-12">
                        <div className="row no-side-margin">
                            <div className="col-3 text-left">
                                <label className=" col-form-label">Nationality</label>
                            </div>

                            <div className="col-1 text-left">

                            </div>

                            <div className="col-3 text-left">
                                <div className="">
                                    <label className="col-form-label" for="radioLocal">
                                        <input type="radio" class="form-check-input" id="radioLocal" name="optradio" checked={this.state.selectedOption === 'radioLocal'} onClick={this.nicOrPassport} />Local
                                    </label>
                                </div>
                            </div>
                            <div className="col-3 text-left">
                                <div className="">
                                    <label className="col-form-label" for="radioForeign">
                                        <input type="radio" class="form-check-input" id="radioForeign" name="optradio" checked={this.state.selectedOption === 'radioForeign'} onClick={this.nicOrPassport} />Foreign
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {nicOrPp}
                <div className="form-group myfg row no-side-margin">
                    <div className="col-12">
                        <div className="row no-side-margin">
                            <div className="col-3 text-left">
                                <label for="email" className=" col-form-label">Email</label>
                            </div>
                            <div className="col-9">
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" onChange={this.setNote}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row no-side-margin">
                    <div className="col-12">
                        <button type="button" className="btn btnsubmit btn-danger" onClick={this.validate}>Continue</button>
                    </div>
                </div>

            </form>

                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default TeleDoctor;
