import { useDispatch } from "react-redux";
import logo from '../../utils/logo.svg';
import './style.css';

import { useHistory } from "react-router-dom";

import { counterChangePlus, counterChangeLess, counterChangeReset } from "../../redux/ducks/counter";

function Home() {
    const history = useHistory();
    const dispatch = useDispatch();

    const plusCounter = () => {
        dispatch(counterChangePlus())
    }

    const lessCounter = () => {
        dispatch(counterChangeLess())
    }

    const resetCounter = () => {
        dispatch(counterChangeReset())
    }

    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo-spin-redirect" alt="logo"/>
                <p>
                    Aprendendo como encher o vitor de porrada
                </p>
                <button className="button" onClick={() => history.push('/')}>Página Anterior</button>
                
                <button className="button" onClick={plusCounter}>Aumentar contador</button>
                <button className="button" onClick={lessCounter}>Diminuir contador</button>
                <button className="button" onClick={resetCounter}>Resetar contador</button>
            </header>
        </div>
    )
}

export default Home;