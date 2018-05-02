import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import './index.css';
import Collector from './component/collector/collector';


const collector = () => (
    <Collector />
);
// const card2 = () => (
//     <Card mana={2} attack={3} hp={3} img={testImg} name={'light of speed'} radio={1} />
// );

ReactDOM.render((
    <BrowserRouter>
        <div>
            {/* <div>
                <ul>
                    <Link to="/">123</Link>
                    <Link to="/2">123</Link>
                </ul>
            </div> */}
            <Switch>
                <Route exact path='/' component={collector} />
                {/* <Route exact path='/2' component={card2} /> */}
            </Switch>
        </div>
    </BrowserRouter>
), document.getElementById('root'));

