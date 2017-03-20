import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ResponseBody from './ResponseBody';
import ResponseHeaders from './ResponseHeaders';
import ResponseUrl from './ResponseUrl';
import ResponseMethod from './ResponseMethod';
import ResponseError from './ResponseError';

class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {response} = this.props;
        console.log(`i'm the props`, response);
        if (response === undefined) {
            return (
                <div></div>
            )
        }
        if (response.status === 404) {
            return (
                <div className="col s6">
                    <div className="result-container" style={style.containerStyle}>
                        <ul className="collapsible" data-collapsible="expandable">
                            <ResponseError/>
                        </ul>
                    </div>
                </div>
            )
        }
        if (response.status === 200) {

            return (
                <div className="col s6">
                    <div className="result-container" style={style.containerStyle}>
                        <ul className="collapsible" data-collapsible="expandable">
                            <ResponseUrl/>
                            <ResponseMethod/>
                            <ResponseHeaders/>
                            <ResponseBody/>
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

const style = {
    containerStyle: {
        backgroundColor: 'white',
        marginTop: '5%'
    }
}

function mapStateToProps({response}) {
    return {response: response.response}
}

// function mapDispatchToProps() {
//     return bindActionCreators() {
//
//     }
// }

export default connect(mapStateToProps)(Result)
