import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addUrl} from '../../actions/index';

class Url extends Component {
    constructor(props) {
        super(props);
    }
    onInputChange(event) {
        let {url} = this.props;
        let {addUrl} = this.props;

        addUrl(event.target.value)
    }
    render() {
        return (
            <div className="row">
            <div className="input-field col s12">
                <input id="url" type="url" onChange={this.onInputChange.bind(this)}
                    value={this.props.url}
                />
                <label htmlFor="url">Url</label>
            </div>
            </div>
        )
    }
}

function mapStateToProps({url}) {
    return {url}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addUrl: addUrl
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Url)
