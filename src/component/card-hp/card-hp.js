import React from 'react';
import './card-hp.css';
export default class CardHp extends React.Component {
    render () {
        return (
            <div className="hp-container">{this.props.val}</div>
        );
    }
}
