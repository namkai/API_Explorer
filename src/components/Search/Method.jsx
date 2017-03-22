import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMethod } from '../../actions/index';

class Method extends Component {
    onInputChange(event) {
        this.props.dispatch(addMethod(event.target.value));
    }
    render() {
        return (
            <div className="row">
            <div className="input-field col s5">
                <input
                    id="method" type="text"
                    onChange={this.onInputChange.bind(this)}
                    value={this.props.method}
                    style={{ textTransform: 'uppercase' }}
                />
                <label htmlFor="method">Method</label>
            </div>
        </div>
        );
    }
}

function mapStateToProps({ method }) {
    return { method };
}


export default connect(mapStateToProps)(Method);
