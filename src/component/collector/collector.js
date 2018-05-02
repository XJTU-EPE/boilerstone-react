import React from 'react';
import axios from 'axios';
import Card from '../card/card';
import CardGroup from '../card-group/card-group';
import testImg from '../../image/card/1.png';

import './collector.css';

export default class Collector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardList: [],
            cardGroupList: [],
        };
    }
    render () {
        const cardShown = this.state.cardList.map((item, index) => (
            <div key={index} className="collector-card-container"><Card mana={item.mana} attack={item.attack} hp={item.hp} img={testImg} name={item.name} radio={1} /></div>
        ));

        const cardGroupShown = this.state.cardGroupList.map((item, index) => (
            <div key={index} className="collector-cardgroup-item-container" onClick={this.chooseCardgroup.bind(this, item.name)} ><CardGroup name={item.name} /></div>
        ));
        return (
            <div className="collector">
                <div className="collector-library-container">
                    {cardShown}
                </div>
                <div className="collector-cardgroup-container" >
                    {cardGroupShown}
                </div>
            </div>
        );
    }

    chooseCardgroup(name, e) {
        console.log(name)
        console.log(e);
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
