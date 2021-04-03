import React, { Component } from 'react';


class MyChild extends Component {

    constructor(props) {
        super(props);

        this.state = {
            myName : this.props.name
        }
    }


    render() {

        const handleClick = () => {
            this.setState({
                myName : 'kienz'
            })
        }

        return (
            <div onClick={() => handleClick()}>
                {this.state.myName}
            </div>
        );
    }
}


export default MyChild;