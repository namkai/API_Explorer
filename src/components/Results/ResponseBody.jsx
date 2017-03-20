import React, {Component} from 'react';
import {connect} from 'react-redux';

import Textarea from 'react-textarea-autosize';

class ResponseBody extends Component {
    constructor(props) {
        super(props);
        this.renderSize = this.renderSize.bind(this);
    }
    renderSize() {
        console.log(`i was clicked!`);
        $(document).ready(function() {
            $('.collapsible').collapsible();
        });
    }
    render() {
        console.log(this.props.response, `i'm this.props.respnse on body`);
        let {data} = this.props.response;
        let jsonData = JSON.stringify(data.data, null, "\t")

        return (
                <li onClick={this.renderSize()}>
                    <div className="collapsible-header">
                        <i className="material-icons">filter_drama</i>Body</div>
                    <div className="collapsible-body">
                        <Textarea readOnly id="ResponseBody" className="materialize-textarea"
                            type="text" value={jsonData.toString()}/>
                    </div>
                </li>
        )
    }
}


function mapStateToProps({response}) {
    return {response: response.response}
}

export default connect(mapStateToProps)(ResponseBody);
