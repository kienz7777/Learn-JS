import React, { Component } from 'react';

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