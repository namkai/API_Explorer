import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderItem from './HeaderItem';

class HeaderDisplay extends Component {
    
    renderHeaders() {
        const { headers } = this.props;
        let counter = 0;
        const result = headers.map((ele) => {
            counter++;
            return (<HeaderItem key={counter} headerKey={ele[0]} headerValue={ele[1]} />);
        });
        return result;
    }
    render() {
        if (this.props.headers.length === 0) {
            return (
                <table className="centered striped responsive">
                    <thead>
                        <tr>
                            <th data-field="id">Header Key</th>
                            <th data-field="name">Header Value</th>
                        </tr>
                    </thead>
                </table>
            );
        }
        return (
            <div className="row">
                <div className="col s12">
                <table className="centered striped responsive">
                    <thead>
                        <tr>
                            <th data-field="id">Header Key</th>
                            <th data-field="name">Header Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderHeaders()}
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { headers: state.data.headers };
}

export default connect(mapStateToProps)(HeaderDisplay);
