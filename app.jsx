//*

function HelloWorld() {
  return <h1>Hello World!</h1>
}

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById("root")
);

//*/


/*

function HelloWorld(props) {
  return <h1>Message: {props.message}</h1>
}

ReactDOM.render(
  <HelloWorld message="Hello World!"/>,
  document.getElementById("root")
)

*/


/**

function HelloWorld(props) {
  return <h1>Value: {props.numberArray[props.index]} </h1>
}

ReactDOM.render(
  <HelloWorld index = "3" numberArray={[1,2,3,4,5]}/>,
  document.getElementById("root")
)

//**/