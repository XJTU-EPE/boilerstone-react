import React from 'react';

export default class CardGroup extends React.Component {
    render() {
        return (
            <div className="card-group-container">
                <div className="card-group-name">{this.props.name}</div>
            </div>
        );
    }
}
