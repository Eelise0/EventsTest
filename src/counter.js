
import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.action(this.props.name);
    }


    render() {
        return (
            <button
                className= 'btn btn-info'
                onClick= {this.handleClick}>

                {/* // onClick={() => this.setState(state => ({count: state.count + 1}))}> */}

                {this.props.name} {this.props.count}
            </button>
        );
    }
}