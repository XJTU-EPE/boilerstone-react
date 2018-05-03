import React from 'react';
import axios from 'axios';
import Card from '../card/card';
import CardGroup from '../card-group/card-group';
import CardGroupCard from '../card-group-card/card-group-card';
import testImg from '../../image/card/1.png';

import './collector.css';

export default class Collector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardList: [],
            cardGroupList: [],
            cardsInGroup: [],
        };
    }
    render () {
        const cardShown = this.state.cardList.map((item, index) => (
            <div key={index} className="collector-card-container" onClick={this.chooseCard.bind(this, item)}>
                <Card mana={item.mana} attack={item.attack} hp={item.hp} img={testImg} name={item.name} radio={1} />
            </div>
        ));

        const cardGroupShown = this.state.cardGroupList.map((item, index) => (
            <div key={index} className="collector-cardgroup-item-container" onClick={this.chooseCardgroup.bind(this, item.id)} >
                <CardGroup name={item.name} />
            </div>
        ));

        const cardInGroupShown = this.state.cardsInGroup.map((item, index) => (
            <div key={index} className="collector-cardgroup-item-container" onClick={this.removeCard.bind(this, item)} >
                <CardGroupCard name={item.name} mana={item.mana} qty={item.qty} />
            </div>
        ));
        return (
            <div className="collector">
                <div className="collector-library-container">
                    {cardShown}
                </div>
                <div className="collector-cardgroup-container" >
                    {cardGroupShown}
                </div>
                <div className="collector-cardgroup-container">
                    {cardInGroupShown}
                </div>
            </div>
        );
    }

    // click the cards in library, add it to the opened cardgroup
    // wien it is in cardgroup, add the qty
    // else add new
    chooseCard(card, e) {
        const this_card = this.state.cardsInGroup.find(item => item.id === card.id);
        if (this_card) {
            this.setState((preState, props) => ({
                cardsInGroup: this.state.cardsInGroup.map(item => item.id === card.id ? Object.assign({}, item, {qty: item.qty + 1}) : item)
            }))
        } else {
            this.setState({
                cardsInGroup: [...this.state.cardsInGroup, {id: card.id, name: card.name, mana: card.mana, qty: 1}]
            })
        }
    }

    // click the card in cardgroup, remove it from the cardgroup
    // when the card count is larger then 1, just substract
    // else remove the item
    removeCard(card, e) {
        if (card.qty > 1) {
            this.setState({
                cardsInGroup: this.state.cardsInGroup.map(item => item.id === card.id ? Object.assign({}, item, {qty: item.qty - 1}) : item)
            })
        } else {
            // const oldCardsInGroup = [...this.state.cardsInGroup];
            // oldCardsInGroup.splice(oldCardsInGroup.findIndex(item => item.id === card.id), 1);
            this.setState({
                cardsInGroup: this.state.cardsInGroup.filter(item => item.id !== card.id)
            })
        }
    }

    chooseCardgroup(id, e) {
        axios.get('/api/cardgroup/card?group_id=' + id).then(res => {
            this.setState({
                cardsInGroup: res.data.data
            })
        })
    }
    componentDidMount() {
        // 获取所有卡片
        axios.get('/api/cards').then(res => {
            this.setState({
                cardList: res.data.data
            })
        }).catch()

        // 获取当前玩家所有卡组
        axios.get('/api/cardgroups').then(res => {
            this.setState({
                cardGroupList: res.data.data
            })
        })
    }
}
