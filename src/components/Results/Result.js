import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResponseBody from './Response/ResponseBody';
import ResponseHeaders from './Response/ResponseHeaders';
import ResponseUrl from './Response/ResponseUrl';
import ResponseMethod from './Response/ResponseMethod';
import ResponseError from './Response/ResponseError';

class Result extends Component {
    render() {
        const { response } = this.props;
        if (response === undefined) {
            return (
                <div />
            );
        }
        if (response.status === 404) {
            return (
                <div className="col s6">
                    <div className="result-container" style={style.containerStyle}>
                        <ul className="collapsible" data-collapsible="expandable">
                            <ResponseError />
                        </ul>
                    </div>
                </div>
            );
        }
        if (response.status === 200) {
            return (
                <div className="col s6">
                    <div className="result-container" style={style.containerStyle}>
                        <ul className="collapsible" data-collapsible="expandable">
                            <ResponseUrl />
                            <ResponseMethod />
                            <ResponseHeaders />
                            <ResponseBody />
                        </ul>
                    </div>
                </div>
            );
        }
    }
}

const style = {
    containerStyle: {
        backgroundColor: 'white',
        marginTop: '5%'
    }
};

function mapStateToProps({ response }) {
    return { response: response.response };
}

export default connect(mapStateToProps)(Result);
