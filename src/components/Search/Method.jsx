import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addMethod} from '../../actions/index';

class Method extends Component {
    constructor(props) {
        super(props);
    }
    onInputChange(event) {
        let {method} = this.props;
        let {addMethod} = this.props;
        addMethod(event.target.value)
    }
    render() {
        return (
            <div className="row">
            <div className="input-field col s5">
                <input id="method" type="text" onChange={this.onInputChange.bind(this)}
                    value={this.props.method} style={{textTransform: 'uppercase'}}
                />
                <label htmlFor="method">Method</label>
            </div>
        </div>
        )
    }
}

function mapStateToProps({ method }) {
    return { method }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addMethod: addMethod
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Method)
