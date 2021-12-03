const root = document.getElementById("root");

function App() {

  const [counter, setCounter] = React.useState(0);
  const countUp = () => {
    setCounter(counter + 1);
  }

  return(
  <div>
    <h3>Total clicks : {counter}</h3>
    <button onClick={countUp}>Click me!</button>
  </div>
  )
}

ReactDOM.render(<App/>, root);