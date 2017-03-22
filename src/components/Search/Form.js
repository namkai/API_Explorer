import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
        getResponseData,
        reformatHeader,
        reformatBody,
        addMethod
} from '../../actions/index';

import Headers from './Header/Headers';
import Url from './Url';
import Method from './Method';
import Body from './Body';

class Form extends Component {

    formatData(data) {
        let { headers, body, method } = data;
        if (body.length > 0) {
            body = body.replace(/'/g, '"');
            const formattedBody = JSON.parse(body);
            this.props.dispatch(reformatBody(formattedBody));
        }
        const objHeaders = {};
        headers.forEach((ele) => {
            objHeaders[ele[0]] = ele[1];
        });
        method = method.toLowerCase();
        this.props.dispatch(addMethod(method));
        this.props.dispatch(reformatHeader(objHeaders));
        return objHeaders;
    }
    async sendData() {
        await this.formatData(this.props.data);
        this.props.dispatch(getResponseData(this.props.data));
    }
    render() {
        return (
            <div className="col s6">
                <div className="form-container" style={style.containerStyle}>
                    <div className="row">
                        <Url />
                        <Method />
                        <Headers />
                        <Body />
                        <div className="row">
                            <button
                                    onClick={this.sendData.bind(this)}
                                    className="btn waves-effect waves-light"
                                    type="submit" name="action"
                                    style={style.buttonStyle}
                            >Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    containerStyle: {
        backgroundColor: 'white',
        marginTop: '5%',
        paddingLeft: '40px',
        paddingRight: '40px'
    },
    buttonStyle: {
        float: 'right'
    }
};
function mapStateToProps({ data }) {
    return { data };
}

export default connect(mapStateToProps)(Form);
