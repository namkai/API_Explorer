import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getResponseData, reformatHeader, resetResponseData} from '../../actions/index';

import Headers from './Header/Headers';
import Url from './Url';
import Method from './Method';
import Body from './Body';

class Form extends Component {
    constructor(props) {
        super(props);
    }
    formatData(data) {
        let {headers} = data;
        let objHeaders = {};
            headers.forEach((ele) => {
                objHeaders[ele[0]] = ele[1]
            })
            this.props.dispatch(reformatHeader(objHeaders))
            return objHeaders
        }

    async sendData() {
        await this.formatData(this.props.data)
        // await this.props.dispatch(resetResponseData())
        this.props.dispatch(getResponseData(this.props.data));

    }
    render() {
        return (
            <div className="col s6">
                <div className="form-container" style={style.containerStyle}>
                    <div className="row">
                        <Url/>
                        <Method/>
                        <Headers/>
                        <Body/>
                        <div className="row">
                            <button onClick={this.sendData.bind(this)} className="btn waves-effect waves-light" type="submit" name="action" style={style.buttonStyle}>Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
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
}
function mapStateToProps({data}) {
    return {data}
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         getResponseData: getResponseData
//     }, dispatch)
// }

export default connect(mapStateToProps)(Form)
