import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBody } from '../../actions/index';

class Body extends Component {
    onInputChange(event) {
        this.props.dispatch(addBody(event.target.value));
    }
    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea
                                id="body" className="materialize-textarea"
                                type="text"
                                onChange={this.onInputChange.bind(this)}
                                value={this.props.body}
                            />
                            <label htmlFor="body">Body</label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ body }) {
    return { body };
}

export default connect(mapStateToProps)(Body);
