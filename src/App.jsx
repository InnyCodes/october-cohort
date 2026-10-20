
import Button from "./components/button"
// import Card from "./Card"
import appStyle from "./App.module.css"
import { useState } from "react";
import {Scard}  from "./Scard";

function App() {
  const [count, setCount] = useState(0)
  let counter = 0;
  function handleIncrement() {
    setCount(count + 1);
    // counter ++
    console.log(count);
  }

  function handleDecrement(params) {
    if (count > 0) {
      return setCount(count - 1)
    }
    // console.log(count);
  }

  const name = "Ayo";
  const age = 56;
  // const user = {
  //   name: "Bolu",
  //   age: 10,
  //   active: true
  // }

  const [user, setUser] = useState({
    name: "Bolu",
    age: 10,
    active: true
  }
  )

  const users = [
    {
      name: "Bolu",
      age: 10,
      active: true
    },
    {
      name: "Ayo",
      age: 18,
      active: false
    },
    {
      name: "Tayo",
      age: 67,
      active: true
    }, {
      name: "Isaac",
      age: 39,
      active: true
    }
  ]

  const cardObj = {
    img: "https://sqi.edu.ng/wp-content/uploads/2023/01/software-engineering-630x330-1.webp",
    header: "Software Engineering",
    span: "+ AI",
    paras: [
      "Software Engineering is one of the most in-demand jobs across the globe today.",
      "Software Engineers are also known as programmers, developers or coders.They are the ones behind all the apps and software you use today either on your ….",
    ],
    link: "",
  }

  return (
    <div>
      <Scard obj={cardObj}/>
      <p>Use State {count}</p>
      <p>COunter: {counter}</p>
      <Button text="Increment" click={handleIncrement} />
      <Button click={handleDecrement} text="Decrement" bg="black" color="white" />
      <div>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.age >= 18 ? "Adult" : "Underage"}</p>
        <p>{user.active ? "active" : "Not Active"}</p>
      </div>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Age: {age > 18 ? "Adult" : "Underage"}</p>
      <h1 className={appStyle.header} >Hello World!</h1>
      <p className={appStyle.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Adipisci distinctio nihil deserunt! Magni eaque architecto
        sequi fuga dolorum dolore facilis, ipsum fugiat temporibus vero sed,
        voluptatum corrupti eligendi voluptates iusto.</p>
      <div><Button text="Log in" bg="black" color="purple" /></div>
      {/* <Card /> */}

      {
        users.map((u, i) => (
          <ul key={i}>
            <li>{u.name}</li>
            <li>{u.age}</li>
            <li>{u.active ? "active" : "Not Active"}</li>
          </ul>
        ))
      }
    </div>
  )
}


export default App

// export const App = () => {

//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
//         Adipisci distinctio nihil deserunt! Magni eaque architecto 
//         sequi fuga dolorum dolore facilis, ipsum fugiat temporibus vero sed, 
//         voluptatum corrupti eligendi voluptates iusto.</p>
//     </div>
//   )
// }