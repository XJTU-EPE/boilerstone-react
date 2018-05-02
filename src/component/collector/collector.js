import React from 'react';
import axios from 'axios';
import Card from '../card/card';
import testImg from '../../image/card/1.png';

import './collector.css';

export default class Collector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardList: [],
        };
    }
    render () {
        const cardShown = this.state.cardList.map((item, index) => (
            <div className="collector-card-container"><Card key={index} mana={item.mana} attack={item.attack} hp={item.hp} img={testImg} name={item.name} radio={1} /></div>
        ));
        return (
            <div className="collector">
                {cardShown}
            </div>
        );
    }
    componentDidMount() {
        axios.get('/api/cards').then(res => {
            this.setState({
                cardList: res.data.data
            })
        }).catch()
    }
}
