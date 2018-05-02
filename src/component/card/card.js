import React from 'react';
import './card.css';
import Mana from '../mana/mana';
import CardAttack from '../card-attack/card-attack';
import CardHp from '../card-hp/card-hp';

export default class Card extends React.Component {
    render () {
        return (
            <div className="card">
                <div className="mana"><Mana val={this.props.mana} /></div>
                <div className="attack"><CardAttack val={this.props.attack} /></div>
                <div className="hp"><CardHp val={this.props.hp} /></div>
                <div className="card-bg-container">
                    <div className="card-bg-wrapper">
                       <img alt="404" className="card-bg" src={this.props.img}></img>
                    </div>
                </div>
                <div className="card-effect-container">warhand: remove the card in lo</div>
            </div>
        );
    }
}