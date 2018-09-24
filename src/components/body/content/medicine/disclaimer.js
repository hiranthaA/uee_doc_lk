import React, { Component } from 'react';

class Disclaimer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0">

                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="card border-danger bg-light mb-3 carddisclaimer">
                        <div className="card-header text-white bg-danger">Disclaimer</div>
                        <div className="card-body text-center">
                            <p className="text-left">Kindly note that our orders are dispatched in schedules.</p>
                            <ul>
                                <li className="text-left">Orders placed before&nbsp;1.00pm&nbsp;will be delivered on the same working day between&nbsp;3.00pm - 6.00pm.</li>
                                <li className="text-left">Orders placed after&nbsp;1.00pm&nbsp;will be delivered on the next working day between&nbsp;10.00am - 1.00pm.</li>
                                <li className="text-left">Delivery&nbsp;in 2 hours&nbsp;can be facilitated under our “Priority Service” *</li>
                            </ul>
                            <br/>
                            <p className="text-left">Your order will be acknowledged by our agents&nbsp;within 15 minutes&nbsp;during our business hours.</p>
                            <ul>
                                <li className="text-left">Monday&nbsp;-&nbsp;Saturday: 8.00am to 8.00pm</li>
                                <li className="text-left">Sunday : 9.00am to 5.00pm</li>
                            </ul>
                            <br/>
                            <p className="text-left">Delivery charges will be waived off for Dialog Doc990 customers for deliveries to Colombo &amp; Colombo Suburbs*.</p>
                            <p className="text-left">Delivery areas are Colombo 1-15 and Colombo Suburbs (Furthest cities being Wattala, Athurugiriya, Kottawa and Moratuwa).</p>
                            <p className="text-left">Compliance with regulatory guidelines for delivery of medication (NMRA – National Medicines Regulatory Authority).</p>
                            <p className="text-left">All products are sold under authorized retail price.</p>
                            <p className="text-left">I, hereby appoint HealthNetBuy as my authorized representative to deliver my medication.</p>
                            <p><em>*Terms &amp; Conditions Apply</em></p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0">

                </div>
            </div>
        );
    }
}
 
export default Disclaimer;