import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addHeader } from '../../../actions/index';

class HeaderInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: '',
            value: ''
        };
    }
    onInputKey(event) {
        this.setState({ key: event.target.value });
    }
    onInputValue(event) {
        this.setState({ value: event.target.value });
    }
    onHeaderSubmit(event) {
        event.preventDefault();
        const { key, value } = this.state;
        if (key.length === 0 || value.length === 0) {
            alert('you forgot some text man');
            return;
        }
        const data = [key, value];
        this.props.dispatch(addHeader(data));
        this.setState({ key: '', value: '' });
    }
    render() {
        return (
            <div className="row">
                <form onSubmit={this.onHeaderSubmit.bind(this)}>
                    <div className="input-field col s4">
                        <input
                            id="headerKey" type="text"
                            value={this.state.key}
                            onChange={this.onInputKey.bind(this)}
                        />
                        <label htmlFor="headerKey">Header Key</label>
                    </div>
                    <div className="input-field col s4">
                        <input
                            id="headerValue" type="text"
                            value={this.state.value}
                            onChange={this.onInputValue.bind(this)}
                        />
                        <label htmlFor="headerValue">Header Value</label>
                    </div>
                    <div className="col s4">
                        <button type="submit">Add Header</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(HeaderInput);
