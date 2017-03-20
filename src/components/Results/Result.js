import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ResponseBody from './ResponseBody';
import ResponseHeaders from './ResponseHeaders';

class Result extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col s6">
                <div className="result-container" style={style.containerStyle}>
                    <ul className="collapsible" data-collapsible="expandable">
                            <ResponseHeaders/>
                            <ResponseBody/>
                        <li>
                            <div className="collapsible-header">
                                <i className="material-icons">whatshot</i>Third</div>
                            <div className="collapsible-body">
                                <span>Lorem ipsum dolor sit amet.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const style = {
    containerStyle: {
        backgroundColor: 'white',
        marginTop: '5%',
    }
}

function mapStateToProps({response}) {
    return {response}
}

// function mapDispatchToProps() {
//     return bindActionCreators() {
//
//     }
// }

export default connect(mapStateToProps)(Result)
