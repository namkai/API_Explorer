import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addBody} from '../../actions/index';

class Body extends Component {
    constructor(props) {
        super(props);
    }
    onInputChange(event) {
        let {body} = this.props;
        let {addBody} = this.props;
        addBody(event.target.value)
    }
    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="body" className="materialize-textarea" type="text" onChange={this.onInputChange.bind(this)} value={this.props.body}/>
                            <label htmlFor="body">Body</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps({body}) {
    return {body}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addBody: addBody
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
