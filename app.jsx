var element = <h1>Hello World </h1>;

var elementWithOutJSX = React.createElement(
        'h1',
        null,
        'Hello World!'
    );

ReactDOM.render(
  elementWithOutJSX,
  document.getElementById("root")
);