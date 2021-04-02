import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends Component {
    // constructor(props) {
    //     super(props);

    // }

    whoIsThis = () => {
        console.dir(this)
    }

    render() {
        return (
            <div onClick={this.whoIsThis}>
                Hello World
            </div>
        );
    }
}


export default HelloWorld;