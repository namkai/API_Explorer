import React, { Component } from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';

class ResponseBody extends Component {

    componentWillMount() {
        $(document).ready(() => {
            $('.collapsible').collapsible();
        });
    }
    render() {
        const { data } = this.props.response;
        const jsonData = JSON.stringify(data.data, null, '\t');

        return (
                <li>
                    <div className="collapsible-header">
                        <i className="fa fa-grav" aria-hidden="true" />Body</div>
                    <div className="collapsible-body">
                        <Textarea
                            readOnly id="ResponseBody"
                            className="materialize-textarea"
                            type="text" value={jsonData.toString()}
                        />
                    </div>
                </li>
        );
    }
}


function mapStateToProps({ response }) {
    return { response: response.response };
}

export default connect(mapStateToProps)(ResponseBody);
