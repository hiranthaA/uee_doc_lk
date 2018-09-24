import React, { Component } from 'react';

class Disclaimer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card border-danger bg-light mb-3 carddisclaimer">
                        <div className="card-header text-white bg-danger">Disclaimer</div>
                        <div className="card-body text-center">
                            <p>Kindly note that our orders are dispatched in schedules.</p>
                            <ul>
                                <li>Orders placed before&nbsp;1.00pm&nbsp;will be delivered on the same working day between&nbsp;3.00pm - 6.00pm.</li>
                                <li>Orders placed after&nbsp;1.00pm&nbsp;will be delivered on the next working day between&nbsp;10.00am - 1.00pm.</li>
                                <li>Delivery&nbsp;in 2 hours&nbsp;can be facilitated under our “Priority Service” *</li>
                            </ul>
                            <br/>
                            <p>Your order will be acknowledged by our agents&nbsp;within 15 minutes&nbsp;during our business hours.</p>
                            <ul>
                                <li>Monday&nbsp;-&nbsp;Saturday: 8.00am to 8.00pm</li>
                                <li>Sunday : 9.00am to 5.00pm</li>
                            </ul>
                            <br/>
                            <p>Delivery charges will be waived off for Dialog Doc990 customers for deliveries to Colombo &amp; Colombo Suburbs*.</p>
                            <p>Delivery areas are Colombo 1-15 and Colombo Suburbs (Furthest cities being Wattala, Athurugiriya, Kottawa and Moratuwa).</p>
                            <p>Compliance with regulatory guidelines for delivery of medication (NMRA – National Medicines Regulatory Authority).</p>
                            <p>All products are sold under authorized retail price.</p>
                            <p>I, hereby appoint HealthNetBuy as my authorized representative to deliver my medication.</p>
                            <p><em>*Terms &amp; Conditions Apply</em></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Disclaimer;