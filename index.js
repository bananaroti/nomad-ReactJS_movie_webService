const root = document.getElementById("root");
const Title = ()=> (
  <h3 id="title" onMouseEnter={() => console.log("onMoused!")}>
    Hello, i'm title!
  </h3>
);
const Button = ()=> (
  <button
    id="button"
    style={{ backgroundColor: "tomato" }}
    onClick={() => console.log("btnClick!")}
  >
    Click me!
  </button>
);

const Container = ()=> (
  <div>
    <Title/>
    <Button/>
  </div>
)
ReactDOM.render(<Container/>, root);
