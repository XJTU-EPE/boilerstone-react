import React from 'react';
import './card.css';
import Mana from './mana/mana';
import testImg from './image/card/1.png'

export default class Card extends React.Component {
    render () {
        return (
            <div className="card">
                <div className="mana"><Mana val={this.props.mana} /></div>
                <div className="attack">{this.props.attack}</div>
                <div className="hp">{this.props.hp}</div>
                <div className="card-bg-container">
                    <div className="card-bg-wrapper">
                       <img className="card-bg" src={testImg}></img>
                    </div>
                </div>
                <div className="card-effect-container">warhand: remove the card in logging</div>
            </div>
        );
    }
}