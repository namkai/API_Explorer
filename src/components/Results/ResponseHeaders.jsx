import React, {Component} from 'react';
import {connect} from 'react-redux';

import Textarea from 'react-textarea-autosize';

class ResponseHeaders extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        $(document).ready(function() {
            $('.collapsible').collapsible();
        });
    }
    render() {
        let {data} = this.props.response;
        let jsonData = JSON.stringify(data.headers, null, "\t")

        return (
            <li>
                <div className="collapsible-header">
                    <i className="fa fa-users" aria-hidden="true"></i>Headers</div>
                <div className="collapsible-body">
                    <Textarea readOnly id="ResponseHeaders" className="materialize-textarea" type="text" value={jsonData}/>
                </div>
            </li>
        )
    }
}

function mapStateToProps({response}) {
    return {response: response.response}
}

export default connect(mapStateToProps)(ResponseHeaders);
