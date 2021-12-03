const root = document.getElementById("root");

function App() {
  return(
  <div>
    <h1>Super Converter</h1>
    <label for="minutes">Minutes</label>
    <input id="minutes" placeholder="Minutes" type="number"></input>
    <label for="hours">Hours</label>
    <input id="hours" placeholder="Hours" type="number"></input>
  </div>
  )
}

ReactDOM.render(<App/>, root);