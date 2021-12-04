const root = document.getElementById("root");

function App() {
  const [minutes, setminutes] = React.useState(0);
  const onChange = (event) => {
      setminutes(event.target.value);
  }
  return(
  <div>
    <h1>Super Converter</h1>
    <label htmlfor="minutes">Minutes</label>
    <input id="minutes" placeholder="Minutes" type="number" onChange={onChange}></input>
    <label htmlfor="hours">Hours</label>
    <input id="hours" placeholder="Hours" type="number" value={Math.floor(minutes / 60)}></input>
  </div>
  )
}

ReactDOM.render(<App/>, root);