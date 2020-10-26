import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            square: Array(9).fill(null),
        };
        //test
    }
    render() {
        return (
            <button className="square" onClick={() => {
                { this.props.value }
            }}>
            </button>
        )
    }
}