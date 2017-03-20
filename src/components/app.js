import React, {Component} from 'react';

import Nav from './Nav';
import Form from './Search/Form';
import Result from './Results/Result';

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="container">
                    <div className="row">
                        <Form/>
                        <Result/>
                    </div>
                </div>
            </div>
        );
    }
}
