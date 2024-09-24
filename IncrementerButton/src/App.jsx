import { useState } from 'react'
import { Button } from './components/button'
import { Counter } from './components/counter'
import { Reset } from './components/reset'
import './App.css'

function App() {
    const [counter, setCounter] = useState(0);

    function incrementar() {
        setCounter(counter + 1);
    }

    function decrementar() {
        setCounter(counter - 1);
    }

    function resetCounter() {
        setCounter(0);
    }

    return (
        <>
            <div className='conteudo'>
                <header>
                    <div className="titulo">
                        <h1>Counter App</h1>
                        <h3>React Project</h3>
                    </div>
                </header>
                <section>
                    <div className='coisas'>
                        <h2>Cliques:</h2>
                        <div className='contador'>
                            <Counter counter={counter} />
                        </div>
                        <div className='buttons'>
                            <Button onclick={decrementar} text='-'></Button>
                            <Button onclick={incrementar} text='+'></Button>
                            <Reset onclick={resetCounter} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default App
