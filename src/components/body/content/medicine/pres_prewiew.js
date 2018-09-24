import React, { Component } from 'react';

class PresPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <img className="img-thumbnail img-responsive" src={this.props.preview} alt="No image" />
                </div>
            </div>
        );
    }
}

export default PresPreview;