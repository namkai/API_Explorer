import React, {Component} from 'react';
import {connect} from 'react-redux';




class ResponseUrl extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(`ResponseUrlList`, this.props);
        let {response} = this.props;
        if(response === undefined) {
            return (
                <div></div>
            )
        }
        let jsonData = JSON.stringify(response.headers, null, "\t")
        return (
                <li>
                    <div className="collapsible-header">
                        <i className="material-icons">filter_drama</i>Headers</div>
                    <div className="collapsible-body">
                        <textarea readonly id="ResponseUrl" className="materialize-textarea"
                            type="text" value={jsonData}/>
                    </div>
                </li>
        )
    }
}


function mapStateToProps({response}) {
    return {response: response.response}
}

export default connect(mapStateToProps)(ResponseUrl);
