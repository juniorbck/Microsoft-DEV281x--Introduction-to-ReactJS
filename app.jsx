var str = "World!"

var item = {
  name: "Cheese",
  price: 5
}

var element = <h1> Hello {str}</h1>

//var element = <h1> Hello {item.name} : ${item.price} </h1>

//var element = <div>The Area is: {calculateArea(2,4)}</div>

function calculateArea(x, y) {
  return x * y
}


var element = <button className ="deleteButton"> Delete </button>;

var product = {name:"apple",stock:0}

var element = <img src ={product.name}></img>

//Do not do this
//var element = <img src ="{product.imageURL}"></img>


var element = (
  <div>
        <div>Hello World</div>
        <div>Hello World</div>
    </div>

)

ReactDOM.render(
  element,
  document.getElementById("root")
);
