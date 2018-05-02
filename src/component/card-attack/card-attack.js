import React from 'react';
import './card-attack.css';
export default class CardAttack extends React.Component {
    render() {
        return (
            <div className="attack-container">{this.props.val}</div>
        );
    }
}