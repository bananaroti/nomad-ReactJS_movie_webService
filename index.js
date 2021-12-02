const root = document.getElementById("root");
const title = (
  <h3 id="title" onMouseEnter={() => console.log("onMoused!")}>
    Hello, i'm title!
  </h3>
);
// const h3 = React.createElement("h3", {id:"title", onMouseEnter:() => console.log("mouse Enter!")}, "Hello, I'm a span!");

// const btn = React.createElement("button", {onClick:() => console.log("Clicked!")}, "Click me!");
const button = (
  <button
    id="button"
    style={{ backgroundColor: "tomato" }}
    onClick={() => console.log("btnClick!")}
  >
    Click me!
  </button>
);
const container = React.createElement("div", null, [title, button]);
ReactDOM.render(container, root);
