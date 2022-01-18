import React from 'react'
import { useSelector } from 'react-redux';

import './style.css';

import logo from '../../utils/logo.svg';

function App() {

    const { ChangeCounter } = useSelector(state => state)

    return(
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="logo" />
                <p>
                    React Learning Start
                </p>
            </div>
            <div className="counter">
                <p>Contador: {ChangeCounter.counter}</p>
            </div>
        </header>
    )

}

export default App;
