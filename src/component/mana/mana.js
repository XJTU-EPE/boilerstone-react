import React from 'react';
import './mana.css';

export default class Mana extends React.Component {
    render () {
        return (
            <div className="mana-container">{this.props.val}</div>
        );
    }
}
