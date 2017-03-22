import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUrl } from '../../actions/index';

class Url extends Component {
    onInputChange(event) {
        this.props.dispatch(addUrl(event.target.value));
    }
    render() {
        return (
            <div className="row">
            <div className="input-field col s12">
                <input
                    id="url" type="url"
                    onChange={this.onInputChange.bind(this)}
                    value={this.props.url}
                />
                <label htmlFor="url">Url</label>
            </div>
            </div>
        );
    }
}

function mapStateToProps({ url }) {
    return { url };
}

export default connect(mapStateToProps)(Url);
