import React from "react";
import NumberCounter from "./NumberCounter";


function App() {
  const [calc, setCalc] = React.useState('');
  const [result, setResult] = React.useState('');
  const operadores = ['/', '.', '+', '-', '*'];

  const calcular = value => 
  {
    if
    (
      operadores.includes(value) && calc === '' 
      || 
      operadores.includes(value) && operadores.includes(calc.slice(-1))
    )
    {
      return;
    }
    setCalc(calc + value);

    if (!operadores.includes(value))
    {
      setResult(eval(calc + value).toString())
    }
  }

  const definirCalculo = () =>
  {
    setCalc(eval(calc).toString())
  }

  const clear = () =>
  {
    setCalc('')
    setResult('')
  }

  const deleteLast = () =>
  {
    if (calc === '') {return}
    const value = calc.slice(0, -1)
    setCalc(value)
    setResult(value)
  }

  return (
    <div className="app">
      <div className="calculadora">

        <div className="display">
          {result ? <span>({result})</span> : ''}
          {calc || '0'}
        </div>

        <div className="operadores">
          <button onClick={({target}) => calcular(target.innerText)}>+</button>
          <button onClick={({target}) => calcular(target.innerText)}>-</button>
          <button onClick={({target}) => calcular(target.innerText)}>*</button>
          <button onClick={({target}) => calcular(target.innerText)}>/</button>
          <button onClick={clear}>AC</button>
          <button onClick={deleteLast}>&larr;</button>
        </div>

        <div className="numeros" onClick={({target}) => calcular(target.innerText)}>
          <NumberCounter />
          <button>0</button>
          <button>.</button>
        </div>
        <div className="numeros">
          <button onClick={definirCalculo}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
