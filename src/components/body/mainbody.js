import React, { Component } from 'react';
import Medicine from './content/medicine/medicine';
import Echanneling from './content/echanneling/echanneling';
import Registration from './content/registration/registration';
import RefundRequest from './content/refund/refundrequest';
import TeleDoctor from './content/teledoctor/teledoctor';
import Home from './content/home/home';

class MainBody extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loadedContent : "home"
         }
    }


    setMainBodyContent(cont){
        this.setState({loadedContent : cont});
    }

    render() { 
        let loadcontent;

        if(this.state.loadedContent==="med"){
            loadcontent = (
                <Medicine/>
            );
        }
        else if(this.state.loadedContent==="ech"){
            loadcontent = (
                <Echanneling/>
            );
        }
        else if(this.state.loadedContent==="reg"){
            loadcontent = (
                <Registration/>
            );
        }
        else if(this.state.loadedContent==="tele"){
            loadcontent = (
                <TeleDoctor/>
            );
        }
        else if(this.state.loadedContent==="refund"){
            loadcontent = (
                <RefundRequest/>
            );
        }
        else if(this.state.loadedContent==="home"){
            loadcontent = (
                <Home/>
            );
        }

        return ( 
            <div>
                {loadcontent}
            </div> 
        );
    }
}
 
export default MainBody;