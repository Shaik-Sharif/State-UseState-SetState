// This is for the useState
// import React,{useState} from "react";
// function App(){
//   let [counter,updateCounter] = useState(0)
//   return(
//     <>
//     <h1>Counter Value : {counter}</h1>
//     <button onClick={()=> {
//       updateCounter(++counter)
//     }}>Change</button>
//     </>
//   )
// }
// ====================
// import React from "react";
// class App extends React.Component {
//   state = {
//     counter: 0,
//   };
//   counter;
//   render() {
//     return (
//       <>
//         <h1>Counter Value: {this.state.counter}</h1>
//         <button
//           onClick={() => {
//             this.setState(
//               {counter: 7}
//             )
//           }}
//         >
       
//           Change
//         </button>
//       </>
//     );
//   }
// }
// export default App;
import React from "react";

class App extends React.Component{
    state = {
        product : "Real me 8 Pro",
        price: 20000
    }

    constructor(){
      super()
      this.updatePrice  = this.updatePrice.bind(this)
    }

    render(){
      return (
        <>
            <h1> product: {this.state.product}</h1>
            <h1> product: {this.state.price}</h1>

            <input id="price" type="number"/>
            
            <button onClick={() =>{
              let p = document.getElementById('price').value;

              console.log(p)
              // this.state.price = p
              // console.log(this.state)

              this.setState({
                price:p
              })
              console.log(this.state)
            }}>Update</button>
        </>
      )
    }
    updatePrice(){
      let p = document.getElementById('price').value
      console.learn(p)
      this.setState({
        price : p 
      },() => {
        console.log(this.state)
      })
    } 
  }

export default App