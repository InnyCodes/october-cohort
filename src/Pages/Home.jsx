import { useState } from "react"
import Button from "../components/Button"
import { Card } from "../components/Card"
import appStyle from "../App.module.css"


export const Home = () => {
    const [count, setCount] = useState(0)

    let counter = 0

    const handleIncrement = () => {
        setCount(count + 1)
        // counter++
        console.log(count);
    }

    const cardObj = {
        img: "https://sqi.edu.ng/wp-content/uploads/2023/01/software-engineering-630x330-1.webp",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequuntur optio nostrum quaerat fugit maiores officia quasi cum, enim, totam debitis soluta voluptas et distinctio possimus cumque, sapiente atque explicabo!",
        buttonContent: "Read more"
    }





    const name = "Ayo"
    const age = 56;

    const [user, setUser] = useState({
        name: "Bolu",
        age: 18,
        active: true
    })
    const [users, setUsers] = useState([{
        name: "Bolu",
        age: 19,
        active: true
    },
    {
        name: "Ayo",
        age: 15,
        active: false
    },
    {
        name: "Kike",
        age: 24,
        active: true
    },
    {
        name: "John",
        age: 18,
        active: true
    }])

    return (
        <div > <p>Use state {count}</p>
            <p>Counter: {counter}</p>
            <button onClick={handleIncrement}>increment</button>
            <button>Decrement</button>
            <div>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <p>{user.active ? "active" : "Not Active"}</p>
                <p></p>
            </div>

            <p>Name: {name}</p>
            <p>Age: {age}</p>

            <h1 className={appStyle.header}>Hello world</h1>
            <p className={appStyle.para}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quisquam dignissimos vitae voluptate recusandae optio magnam, beatae obcaecati, molestiae voluptates at accusamus sint quis consequuntur quasi placeat itaque assumenda autem.</p>

            <Button text="Log in" bg='green' color='purple' />
            <Card obj={cardObj} />

            {
                users.map((u, i) => (
                    <ul key={i}>
                        <li>{u.name}</li>
                        <li>{u.age}</li>
                        <li>{u.active ? "active" : "not Active"}</li>
                    </ul>
                ))
            }

            <Button text={"Submit"} />
        </div>
    )
}
