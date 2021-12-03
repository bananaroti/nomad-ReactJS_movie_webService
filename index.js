const root = document.getElementById("root");

let counter = 0;

function countUp() {
  counter = counter + 1;
  Render();
}
function Render() {
  ReactDOM.render(<Container/>,root);
}

// const Title = () => {
//   <h3>Total Clicks : {counter}</h3>
// }

// const Button = ()=> (
//   <button onClick={countUp}>Click me!</button>
// )

// const Container = ()=> (
//   <div>
//     <Title/>
//     <Button/>
//   </div>
// )

const Container = ()=> (
  <div>
    <h3>Total clicks : {counter}</h3>
    <button onClick={countUp}>Click me!</button>
  </div>
)

ReactDOM.render(<Container/>, root);
