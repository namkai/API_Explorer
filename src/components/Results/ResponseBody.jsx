import React, {Component} from 'react';
import {connect} from 'react-redux';




class ResponseBody extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(`ResponseBodyList`, this.props);
        let {response} = this.props;
        if(response === undefined) {
            return (
                <div></div>
            )
        }
        let jsonData = JSON.stringify(response.data, null, "\t")
        return (
                <li>
                    <div className="collapsible-header">
                        <i className="material-icons">filter_drama</i>Body</div>
                    <div className="collapsible-body">
                        <textarea id="ResponseBody" className="materialize-textarea"
                            type="text" value={jsonData}/>
                    </div>
                </li>
        )
    }
}


function mapStateToProps({response}) {
    return {response: response.response}
}

export default connect(mapStateToProps)(ResponseBody);
