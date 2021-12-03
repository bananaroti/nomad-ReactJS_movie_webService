const root = document.getElementById("root");

const x = [1, 2, 3];
const [a, b, c] = x;
console.log(a);

function App() {
  // const data = React.useState(counter);
  // console.log(data);
  return(
  <div>
    <h3>Total clicks : 0</h3>
    <button>Click me!</button>
  </div>
  )
}

ReactDOM.render(<App/>, root);
