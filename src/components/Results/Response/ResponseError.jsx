import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResponseError extends Component {
    componentWillMount() {
        $(document).ready(() => {
            $('.collapsible').collapsible();
        });
    }
    render() {
        const { data } = this.props.response;
        // let jsonData = JSON.stringify(response, null, "\t")

        return (
                <li>
                    <div className="collapsible-header">
                        <i className="fa fa-exclamation-circle" aria-hidden="true" />{data.message}</div>
                    <div className="collapsible-body">
                        <textarea
                            readOnly id="ResponseError"
                            className="materialize-textarea"
                            type="text" value={data.stack}
                        />
                    </div>
                </li>
        );
    }
}


function mapStateToProps({ response }) {
    return { response: response.response };
}

export default connect(mapStateToProps)(ResponseError);
